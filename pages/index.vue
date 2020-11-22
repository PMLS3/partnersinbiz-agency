<template>
  <section class="section">
    <div class="hero is-fullheight">
      <div id="three-element" ref="threeElement" />
      <button @click="startScene">Start</button>
    </div>
  </section>
</template>

<script>
import * as THREE from 'three'
import TrackballControls from 'three-trackballcontrols'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default {
  layout: 'fullPage',
  components: {},
  data() {
    return {
      scene: undefined,
      camera: undefined,
      renderer: undefined,
      particleCount: 500,
      particles: undefined,
      particleSystem: undefined,
      started: false,
      trackballControls: undefined,
      clock: undefined,
      move: false,
      mouse: null
    }
  },
  mounted() {
    this.mouse = new THREE.Vector2()
    this.setupCameraSceneRenderer()
    this.addLight()
    this.positionCamera()
    this.setupClock()
    this.setupTrackballControls()
    this.bindWindowEvents()
    this.$refs.threeElement.appendChild(this.renderer.domElement)
    this.startScene()
  },
  methods: {
    /* THREE scene setup functions */
    setupCameraSceneRenderer() {
      // set up scene, camera, renderer, and axes
      this.scene = new THREE.Scene()
      this.camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        0.1,
        100
      )
      this.renderer = new THREE.WebGLRenderer({ antialias: true })
      this.renderer.setClearColor(new THREE.Color(0x000000))
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      this.renderer.shadowMap.enabled = true
      this.renderer.shadowMapSoft = true
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    },
    addLight() {
      // add spotlight and ambient light
      const spotLight = new THREE.DirectionalLight(0xffffff)
      spotLight.position.set(-30, 40, -10)
      spotLight.shadow.mapSize = new THREE.Vector2(2048, 2048)
      spotLight.castShadow = true
      this.scene.add(spotLight)
      const ambientLight = new THREE.AmbientLight(0x3c3c3c)
      this.scene.add(ambientLight)
    },
    positionCamera() {
      // position the camera for the scene
      this.camera.position.set(-20, 40, 30)
      this.camera.lookAt(this.scene.position)
    },
    setupClock() {
      this.clock = new THREE.Clock()
    },
    setupTrackballControls() {
      this.trackballControls = new TrackballControls(
        this.camera,
        this.renderer.domElement
      )
      this.trackballControls.rotateSpeed = 1.7

      const controls = new OrbitControls(this.camera, this.renderer.domElement)
      controls.target.set(0, 5, 0)
      controls.update()
    },
    /* Load GLTFLoader */
    createdGLTF() {
      let vm = this

      //       let mixer = THREE.AnimationMixer
      // let modelReady = false;
      // let animationActions = THREE.AnimationAction
      // let activeAction = THREE.AnimationAction
      // let lastAction = THREE.AnimationAction
      const gltfLoader = new GLTFLoader()
      gltfLoader.load(
        'https://cdn.glitch.com/7520b016-05b9-4546-90da-4f270e933ccd%2FClinic.glb?v=1605239343980',
        gltf => {
          const root = gltf.scene
          vm.scene.add(root)
        }
      )
    },
    /* textures, geometries, meshes */
    createBoundingWall() {
      const wallLeft = new THREE.BoxGeometry(70, 2, 2)
      const wallRight = new THREE.BoxGeometry(70, 2, 2)
      const wallTop = new THREE.BoxGeometry(2, 2, 50)
      const wallBottom = new THREE.BoxGeometry(2, 2, 50)
      const wallMaterial = new THREE.MeshPhongMaterial({
        color: 0xa0522d
      })
      const wallLeftMesh = new THREE.Mesh(wallLeft, wallMaterial)
      const wallRightMesh = new THREE.Mesh(wallRight, wallMaterial)
      const wallTopMesh = new THREE.Mesh(wallTop, wallMaterial)
      const wallBottomMesh = new THREE.Mesh(wallBottom, wallMaterial)
      wallLeftMesh.position.set(15, 1, -25)
      wallRightMesh.position.set(15, 1, 25)
      wallTopMesh.position.set(-19, 1, 0)
      wallBottomMesh.position.set(49, 1, 0)
      this.scene.add(wallLeftMesh)
      this.scene.add(wallRightMesh)
      this.scene.add(wallTopMesh)
      this.scene.add(wallBottomMesh)
    },
    createGroundPlane() {
      const planeGeometry = new THREE.PlaneGeometry(70, 50)
      const planeMaterial = new THREE.MeshPhongMaterial({
        color: 0x9acd32
      })
      const plane = new THREE.Mesh(planeGeometry, planeMaterial)
      plane.receiveShadow = true
      plane.rotation.x = -0.5 * Math.PI
      plane.position.x = 15
      plane.position.y = 0
      plane.position.z = 0
      this.scene.add(plane)
    },
    createHouse() {
      const roof = new THREE.ConeGeometry(5, 4)
      const base = new THREE.CylinderGeometry(5, 5, 6)
      const roofMaterial = new THREE.MeshPhongMaterial({
        color: 0x8b7213
      })
      const baseMaterial = new THREE.MeshPhongMaterial({
        color: 0xffe4c4
      })
      const roofMesh = new THREE.Mesh(roof, roofMaterial)
      const baseMesh = new THREE.Mesh(base, baseMaterial)
      roofMesh.position.set(25, 8, 0)
      baseMesh.position.set(25, 3, 0)
      roofMesh.receiveShadow = true
      baseMesh.receiveShadow = true
      roofMesh.castShadow = true
      baseMesh.castShadow = true
      this.scene.add(roofMesh)
      this.scene.add(baseMesh)
    },
    createTree() {
      const trunk = new THREE.BoxGeometry(1, 8, 1)
      const leaves = new THREE.SphereGeometry(4)
      const trunkMaterial = new THREE.MeshPhongMaterial({
        color: 0x8b4513
      })
      const leavesMaterial = new THREE.MeshPhongMaterial({
        color: 0x00ff00
      })
      const trunkMesh = new THREE.Mesh(trunk, trunkMaterial)
      const leavesMesh = new THREE.Mesh(leaves, leavesMaterial)
      trunkMesh.position.set(-10, 4, 0)
      leavesMesh.position.set(-10, 12, 0)
      trunkMesh.castShadow = true
      trunkMesh.receiveShadow = true
      leavesMesh.castShadow = true
      leavesMesh.receiveShadow = true
      leavesMesh.name = 'Leaves'
      this.scene.add(trunkMesh)
      this.scene.add(leavesMesh)

      var object = this.scene.getObjectByName('Leaves')
      console.log('object: ', object)
      object.addEventListener('click', () => console.log('leaves click'))

      console.log('object: ', object)
    },
    /* start and render functions */
    startScene() {
      if (this.started) return
      this.createdGLTF()
      // this.createBoundingWall()
      // this.createGroundPlane()
      // this.createHouse()
      this.createTree()
      this.renderScene()
      this.started = !this.started
    },
    renderScene() {
      this.trackballControls.update(this.clock.getDelta())
      this.renderer.render(this.scene, this.camera)
      window.RAF = requestAnimationFrame(this.renderScene)
    },
    /* events */
    bindWindowEvents() {
      // window resize
      window.addEventListener('resize', this.handleWindowResize)
      // rotation keys
      window.addEventListener('keypress', this.changeCameraPosition)
      // rotation keys
      document.addEventListener('mousemove', this.onDocumentMouseMove, false)
      document.addEventListener('mousedown', this.onDocumentMouseDown, false)
      document.addEventListener('mouseup', this.onDocumentMouseUp, false)
    },
    onDocumentMouseDown(event) {
      event.preventDefault()
      console.log('mousedown', event)
      //   mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      //   mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
    },

    onDocumentMouseMove(event) {
      event.preventDefault()
      console.log('mouse move', event)
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

      // this.camera.position.x = this.mouse.x
      // this.camera.position.y = this.mouse.y
      //   theta =
      //     -((event.clientX - onMouseDownPosition.x) * 0.5) + onMouseDownTheta
      //   phi = (event.clientY - onMouseDownPosition.y) * 0.5 + onMouseDownPhi

      //   phi = Math.min(180, Math.max(0, phi))

      //   camera.position.x =
      //     radious *
      //     Math.sin((theta * Math.PI) / 360) *
      //     Math.cos((phi * Math.PI) / 360)
      //   camera.position.y = radious * Math.sin((phi * Math.PI) / 360)
      //   camera.position.z =
      //     radious *
      //     Math.cos((theta * Math.PI) / 360) *
      //     Math.cos((phi * Math.PI) / 360)
      //   camera.updateMatrix()

      //   mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      //   mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
    },

    onDocumentMouseUp(event) {
      event.preventDefault()
      console.log('mouse up', this.move)
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
      this.move = true
      console.log('mouse up 2', this.move)
      this.camera.position.x = this.mouse.x
      this.camera.position.y = this.mouse.y
      console.log('mouse event', this.mouse)
    },
    handleWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
    },
    changeCameraPosition(e) {
      console.log('scene', this.scene)
      const theta = 0.2 //the speed of rotation
      const x = this.camera.position.x
      const y = this.camera.position.y
      const z = this.camera.position.z
      e.preventDefault()
      switch (e.key) {
        case 'a': // left
          this.camera.position.x = x * Math.cos(theta) + z * Math.sin(theta)
          this.camera.position.z = z * Math.cos(theta) - x * Math.sin(theta)
          break
        case 'w': // up
          this.camera.position.y = y * Math.cos(theta) - z * Math.sin(theta)
          this.camera.position.z = z * Math.cos(theta) + y * Math.sin(theta)
          break
        case 's': // down
          this.camera.position.y = y * Math.cos(theta) + z * Math.sin(theta)
          this.camera.position.z = z * Math.cos(theta) - y * Math.sin(theta)
          break
        case 'd': // right
          this.camera.position.x = x * Math.cos(theta) - z * Math.sin(theta)
          this.camera.position.z = z * Math.cos(theta) + x * Math.sin(theta)
          break
        default:
          break
      }
      this.camera.lookAt(this.scene.position)
    },
    onLeavesClick() {
      alert('leaves')
    },
    changeCameraPositionClick(e) {
      console.log('scene', this.scene)

      const theta = 0.2 //the speed of rotation
      const x = this.camera.position.x
      const y = this.camera.position.y
      const z = this.camera.position.z
      e.preventDefault()

      // this.camera.position.x = e.x
      // this.camera.position.z = e.y
      // switch (e.key) {
      //   case 'a': // left
      //     this.camera.position.x = x * Math.cos(theta) + z * Math.sin(theta)
      //     this.camera.position.z = z * Math.cos(theta) - x * Math.sin(theta)
      //     break
      //   case 'w': // up
      //     this.camera.position.y = y * Math.cos(theta) - z * Math.sin(theta)
      //     this.camera.position.z = z * Math.cos(theta) + y * Math.sin(theta)
      //     break
      //   case 's': // down
      //     this.camera.position.y = y * Math.cos(theta) + z * Math.sin(theta)
      //     this.camera.position.z = z * Math.cos(theta) - y * Math.sin(theta)
      //     break
      //   case 'd': // right
      //     this.camera.position.x = x * Math.cos(theta) - z * Math.sin(theta)
      //     this.camera.position.z = z * Math.cos(theta) + x * Math.sin(theta)
      //     break
      //   default:
      //     break
      // }
      this.camera.lookAt(this.scene.position)
    }
  }
}
</script>

<style scoped>
button {
  position: absolute;
  top: 10px;
  left: 0;
  right: 0;
  margin: auto;
  display: block;
  width: 80px;
  background: red;
  color: white;
  border-color: transparent;
  border-radius: 10px;
  outline: unset;
}
</style>
