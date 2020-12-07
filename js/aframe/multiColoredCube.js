AFRAME.registerComponent('multicolored-cube', {
  dependencies: ['geometry'],
  init: function() {
    var mesh = this.el.getObject3D('mesh')
    var geom = mesh.geometry
    for (var i = 0; i < geom.faces.length; i++) {
      var face = geom.faces[i]
      face.color.setRGB(Math.random(), Math.random(), Math.random())
    }
    geom.colorsNeedUpdate = true
    mesh.material.vertexColors = THREE.FaceColors
  }
})
