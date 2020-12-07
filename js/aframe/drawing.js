AFRAME.registerComponent('drawing', {
  init: function () {
    let item = this.el
    var sceneEl = document.querySelector('a-scene')
    self.canvas = sceneEl.renderer.domElement

    self.rayCaster = new THREE.Raycaster()
    self.referenceNormal = new THREE.Vector3()
    self.rayCastObjects = []

    let store = window.$nuxt.$store

    var drawItem = false

    function getTeleportPosition(mouse_x, mouse_y) {
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

    function getMouseState(canvas, e) {
      var rect = canvas.getBoundingClientRect()
      if (e.clientX != null) {
        return {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        }
      } else if (e.touches[0] != null) {
        return {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
        }
      }
    }

    function mouseDown(e) {
      head.setAttribute('look-controls', 'false')
      drawItem = true
    }

    function mouseMove(e) {
      e.preventDefault()

      if (drawItem) {
        var mouseState = getMouseState(self.canvas, e)

        self.mouseX = mouseState.x
        self.mouseY = mouseState.y

        var pos = getTeleportPosition(self.mouseX, self.mouseY)

        let x = pos.x
        let y = pos.y
        let z = pos.z

        let payload = { x: x, y: y, z: z }
        store.commit('aframe/DRAWING_DOTS', payload)
        var newSphereCall = document.createElement('a-entity')
        newSphereCall.setAttribute('geometry', 'primitive', 'sphere')
        newSphereCall.setAttribute('class', 'clickable call')
        newSphereCall.setAttribute('geometry', 'radius', '0.05')
        newSphereCall.setAttribute('position', { x: x, y: y, z: z })
        sceneEl.appendChild(newSphereCall)
      }
    }

    function mouseUp() {
      head.setAttribute('look-controls', 'true')

      drawItem = false
    }

    item.addEventListener('mousedown', mouseDown, false)
    document.addEventListener('mousemove', mouseMove, false)
    item.addEventListener('mouseup', mouseUp, false)
    item.addEventListener('touchstart', mouseDown, false)
    document.addEventListener('touchmove', mouseMove, false)
    item.addEventListener('touchend', mouseUp, false)
    item.addEventListener('touchleave', mouseUp, false)
    item.addEventListener('touchcancel', mouseUp, false)
  },
})
