AFRAME.registerComponent('camera-listener', {
  init: function () {
    this.position = { x: 0, y: 0, z: 0 }
    this.rotation = { x: 0, y: 0, z: 0 }
  },

  tick: function () {
    var cameraEl = document.getElementById('cameraRig')
    var headEl = document.getElementById('head')
    var pos = cameraEl.getAttribute('position')
    var rotation = headEl.getAttribute('rotation')

    let store = window.$nuxt.$store

    this.position = {
      x: pos.x,
      y: pos.y,
      z: pos.z,
    }
    this.rotation = rotation

    let payload = {
      position: this.position,
      rotation: this.rotation,
    }

    store.commit('aframe/MOVE_PLAYER', payload)
  },
})
