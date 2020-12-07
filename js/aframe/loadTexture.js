AFRAME.registerComponent('load-texture', {
  init: function() {
    let item = this.el.id
    let link = ''
    if (item == 'pouf') {
      link =
        'https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2FFabricDenim002_COL_VAR3_6K.jpg?v=1606244494286'
    }

    // if (item == 'pouf2') {
    //   link =
    //     'https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2Fbeige_leather_6_height.png?v=1606244489220'
    // }

    // if (item == 'pouf3') {
    //   link =
    //     'https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2FFabricLinen001_DISP_6K.jpg?v=1606244487377'
    // }
    if (item == 'pouf') {
      var tex = new THREE.TextureLoader().load(link)
      tex.flipY = false // for glTF models.
      console.log('el 1', this.el)
      this.el.addEventListener('model-loaded', function(e) {
        console.log('e', e)
        e.detail.model.traverse(function(node) {
          if (node.isMesh) node.material.map = tex
        })
      })
    }
  }
})

AFRAME.registerComponent('switch-texture', {
  init: function() {
    let item = this.el
    let targetItem = ''
    let itemSrc = this.el.getAttribute('src')

    if (item.classList.contains('pouf')) {
      targetItem = document.getElementById('pouf')
    }

    if (item.classList.contains('pouf2')) {
      targetItem = document.getElementById('pouf2')
    }

    if (item.classList.contains('pouf3')) {
      targetItem = document.getElementById('pouf3')
    }

    function changeTexture(e) {
      var tex = new THREE.TextureLoader().load(itemSrc)
      tex.flipY = false // for glTF models.

      targetItem.object3D.traverse(function(node) {
        if (node.isMesh) node.material.map = tex
      })
    }

    this.el.addEventListener('click', changeTexture, false)
    this.el.addEventListener('touchstart', changeTexture, false)
  }
})
