<template>
  <div>
    <h1>Hello</h1>
     <a-scene keyboard-shortcuts="enterVR: false">
      <a-assets>
        <img id="homeThumbnail" src="./img/home_portal.png">
      </a-assets>
      <!-- environment -->
      <a-sky color="#ECECEC"></a-sky>
      <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
      <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
      <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
      <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>

      <a-link class="collidable" image="#homeThumbnail" border-color="#000" title-color="#000" visual-aspect-enabled="false" href="../index.html" rotation="0 -30 0" position="2 1.6 -1" title="Home"></a-link>

      <!-- keyboard -->
      <a-text id="input" font="dejavu" color="#000" value="Input value..." scale="0.5 0.5 0.5" position="-0.2 2 -1"></a-text>
      <a-entity
          id="keyboard"
          position="-0.2 1.6 -0.5"
          a-keyboard="baseTexture: base.jpg; keyTexture: key.jpeg;"
      >
      </a-entity>

      <!-- Mouse input -->
      <a-entity id="mouseCursor" raycaster="objects: .collidable" cursor="rayOrigin: mouse"></a-entity>
    </a-scene>
  </div>
</template>

<script>
if (process.client) {
  require('./aframe-keyboard.js')
}
export default {
  name: 'form-keyboard-custom',
  mounted() {
    var input = ''
      function updateInput(e) {
        var code = parseInt(e.detail.code)
        switch(code) {
        case 8:
          input = input.slice(0, -1)
          break
        case 6:
          alert('submitted')
          var keyboard = document.querySelector('#keyboard')
          document.querySelector('#input').setAttribute('value', input)
          document.querySelector('#input').setAttribute('color', 'blue')
          keyboard.parentNode.removeChild(keyboard)
          return
        default:
          input = input + e.detail.value
          break
        }
        document.querySelector('#input').setAttribute('value', input + '_')
      }
      document.addEventListener('a-keyboard-update', updateInput)
  }
}
</script>

<style>
body {
  font-size: 62.5%;
  overflow: hidden;
}
html,
body,
canvas {
  height: 100%;
  width: 100%;
  margin: 0;
}
</style>
