/**
 * Cursor Teleport component for A-Frame.
 */
// let context = context

AFRAME.registerComponent('cursor-teleport', {
  schema: {
    cameraHead: { type: 'string', default: '' },
    cameraRig: { type: 'string', default: '' },
    collisionEntities: { type: 'string', default: '' },
    ignoreEntities: { type: 'string', default: '' },
    landingMaxAngle: { default: '45', min: 0, max: 360 },
    landingNormal: { type: 'vec3', default: '0 1 0' }
  },
  init: function() {
    self = this

    // console.log('contthiext', this)

    // console.log('context', context)

    // console.log('context 2', this.context)
    // console.log('window 2', window)
    // console.log('window 2', window.$nuxt.context.isMobile)
    // console.log('Android 2', window.$nuxt.context.isAndroid)
    self.android = window.$nuxt.context.isAndroid
    self.isMobile = window.$nuxt.context.isMobile

    // platform detect
    self.mobile = AFRAME.utils.device.isMobile()
    console.log('mobile', this.mobile)

    // main app
    self.scene = this.el.sceneEl
    self.canvas = self.scene.renderer.domElement

    // camera
    document
      .querySelector(this.data.cameraHead)
      .object3D.traverse(function(child) {
        if (child instanceof THREE.Camera) {
          self.cam = child
        }
      })

    self.camPos = new THREE.Vector3()
    self.camRig = document.querySelector(this.data.cameraRig).object3D
    self.camPos = self.camRig.position

    //collision
    self.rayCaster = new THREE.Raycaster()
    self.referenceNormal = new THREE.Vector3()
    self.rayCastObjects = []

    // Update collision normal
    self.referenceNormal.copy(this.data.landingNormal)

    // teleport indicator
    var geo = new THREE.RingGeometry(0.25, 0.3, 32, 1)
    geo.rotateX(-Math.PI / 2)
    geo.translate(0, 0.02, 0)
    var mat = new THREE.MeshBasicMaterial()
    self.teleportIndicator = new THREE.Mesh(geo, mat)
    self.scene.object3D.add(self.teleportIndicator)

    // transition
    self.transitioning = false
    self.transitionProgress = 0
    self.transitionSpeed = 0.01
    self.transitionCamPosStart = new THREE.Vector3()
    self.transitionCamPosEnd = new THREE.Vector3()

    self.updateRaycastObjects = function() {
      // updates the array of meshes we will need to raycast to

      // clear the array of any existing meshes
      self.rayCastObjects = []

      if (this.data.collisionEntities != '') {
        // traverse collision entities and add their meshes to the rayCastEntities array.
        var collisionEntities = self.scene.querySelectorAll(
          this.data.collisionEntities
        )

        collisionEntities.forEach(e => {
          e.object3D.traverse(function(child) {
            if (child instanceof THREE.Mesh) {
              // mark this mesh as a collision object
              child.userData.collision = true
              self.rayCastObjects.push(child)
            }
          })
        })
      } else {
        // if no collision entities are specified, create a default ground plane collision.
        var geo = new THREE.PlaneGeometry(50, 50, 1)
        geo.rotateX(-Math.PI / 2)
        var mat = new THREE.MeshNormalMaterial()
        var collisionMesh = new THREE.Mesh(geo, mat)
        // mark this mesh as a collision object
        collisionMesh.userData.collision = true
        self.rayCastObjects.push(collisionMesh)
      }

      // We may need some entities to be seen by the raycaster even though they are not teleportable.
      // This prevents the user from unnesserily teleporting when clicking things like buttons or UI.

      if (this.data.ignoreEntities != '') {
        var ignoreEntities = self.scene.querySelectorAll(
          this.data.ignoreEntities
        )
        ignoreEntities.forEach(e => {
          e.object3D.traverse(function(child) {
            if (child instanceof THREE.Mesh) {
              self.rayCastObjects.push(child)
            }
          })
        })
      }
    }

    function getMouseState(canvas, e) {
      var rect = canvas.getBoundingClientRect()
      if (e.clientX != null) {
        return {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        }
      } else if (e.touches[0] != null) {
        return {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top
        }
      }
    }

    self.getTeleportPosition = function(mouse_x, mouse_y) {
      if (self.rayCastObjects.length != 0) {
        if (self.hasOwnProperty('cam') && self.hasOwnProperty('canvas')) {
          var cam = self.cam
          var rect = self.canvas.getBoundingClientRect()
          var mouse = new THREE.Vector2()

          mouse.x = (mouse_x / (rect.right - rect.left)) * 2 - 1
          mouse.y = -(mouse_y / (rect.bottom - rect.top)) * 2 + 1

          self.rayCaster.setFromCamera(mouse, cam)
          var intersects = self.rayCaster.intersectObjects(self.rayCastObjects)

          if (
            intersects.length != 0 &&
            self.isValidNormalsAngle(intersects[0].face.normal)
          ) {
            if (intersects[0].object.userData.collision == true) {
              return intersects[0].point
            }
            return false
          } else {
            return false
          }
        } else {
          return false
        }
      } else {
        return false
      }
    }

    self.isValidNormalsAngle = function(collisionNormal) {
      var angleNormals = self.referenceNormal.angleTo(collisionNormal)
      return THREE.Math.RAD2DEG * angleNormals <= this.data.landingMaxAngle
    }

    self.transition = function(destPos) {
      // window.alert(`transition ${self.isMobile} ${self.android} ${destPos.x}`)
      self.transitionProgress = 0

      self.transitionCamPosEnd.x = destPos.x
      self.transitionCamPosEnd.y = destPos.y
      self.transitionCamPosEnd.z = destPos.z

      self.transitionCamPosStart.x = self.camPos.x
      self.transitionCamPosStart.y = self.camPos.y
      self.transitionCamPosStart.z = self.camPos.z

      self.transitioning = true

      let cornerCouchSet = document.getElementById('cornerCouchSet')
      let poufSet = document.getElementById('poufSet')
      let armChairSet = document.getElementById('armChairSet')

      cornerCouchSet.setAttribute('position', '0 100 -0.5')
      poufSet.setAttribute('position', '0 100 -0.5')
      armChairSet.setAttribute('position', '0 100 -0.5')
    }

    function mouseMove(e) {
      e.preventDefault()
      var mouseState = getMouseState(self.canvas, e)

      self.mouseX = mouseState.x
      self.mouseY = mouseState.y
    }

    function mouseDown(e) {
      e.preventDefault()
      self.updateRaycastObjects()

      var mouseState = getMouseState(self.canvas, e)
      self.mouseX = mouseState.x
      self.mouseY = mouseState.y

      self.mouseXOrig = mouseState.x
      self.mouseYOrig = mouseState.y
    }

    function mouseUp(e) {
      if (self.mouseX == self.mouseXOrig && self.mouseY == self.mouseYOrig) {
        var pos = self.getTeleportPosition(self.mouseX, self.mouseY)
        if (pos) {
          self.teleportIndicator.position.x = pos.x
          self.teleportIndicator.position.y = pos.y
          self.teleportIndicator.position.z = pos.z
          self.transition(pos)
        }
      }
    }

    self.updateRaycastObjects()

    // event listeners
    document.addEventListener('mousedown', mouseDown, false)
    document.addEventListener('mousemove', mouseMove, false)
    document.addEventListener('mouseup', mouseUp, false)
    document.addEventListener('touchstart', mouseDown, false)
    document.addEventListener('touchmove', mouseMove, false)
    document.addEventListener('touchend', mouseUp, false)
    document.addEventListener('touchleave', mouseUp, false)
    document.addEventListener('touchcancel', mouseUp, false)

    // helper functions
    self.easeInOutQuad = function(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
    }
  },
  tick: function() {
    if (!self.transitioning) {
      var pos = self.getTeleportPosition(self.mouseX, self.mouseY)
      if (pos) {
        self.teleportIndicator.position.x = pos.x
        self.teleportIndicator.position.y = pos.y
        self.teleportIndicator.position.z = pos.z
      }
    }

    // if (!self.transitioning && !self.mobile) {
    //   var pos = self.getTeleportPosition(self.mouseX, self.mouseY)
    //   if (!self.mobile && pos) {
    //     self.teleportIndicator.position.x = pos.x
    //     self.teleportIndicator.position.y = pos.y
    //     self.teleportIndicator.position.z = pos.z
    //   }
    // }
    if (self.transitioning) {
      self.transitionProgress += self.transitionSpeed

      // set camera position
      self.camPos.x =
        self.transitionCamPosStart.x +
        (self.transitionCamPosEnd.x - self.transitionCamPosStart.x) *
          self.easeInOutQuad(self.transitionProgress)
      self.camPos.y =
        self.transitionCamPosStart.y +
        (self.transitionCamPosEnd.y - self.transitionCamPosStart.y) *
          self.easeInOutQuad(self.transitionProgress)
      self.camPos.z =
        self.transitionCamPosStart.z +
        (self.transitionCamPosEnd.z - self.transitionCamPosStart.z) *
          self.easeInOutQuad(self.transitionProgress)

      if (self.transitionProgress >= 1) {
        self.transitioning = false
      }
    }
  }
})
