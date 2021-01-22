<template>
  <div>
    <!-- 
Library is up on github at https://github.com/Tino-F/aframe-fractal-component 

Follow @TesseraWorks on instagram and twitter to stay updated with more cool technology!
Or visit our website at https://tessera.works/
-->

    <a-scene>
      <a-sound id="audio" position="0 0 -10" autoplay="true"></a-sound>
      <a-entity
      class="a-canvas"
        position="0 0 -400"
        fractal="x: ( Math.cos(t * 0.01) * 2000 ) + Math.random() * 100; y: ( Math.sin(t * 0.01) * 2000 ) + Math.random() * 100; z: Math.random()*100; audioSource: #audio; colors: #4286f4, #cbff00, #b800c9, #00c9a4, #ff002e, #3aff00; scale: 0.1; fftSize: 512; pointSize: 4; points: 630;"
      >
        <a-animation
          attribute="rotation"
          dur="100000"
          easing="linear"
          from="0 0 0"
          to="0 360 360"
          repeat="indefinite"
        >
        </a-animation>
      </a-entity>

      <a-sky color="#000000"></a-sky>
    </a-scene>

    <h1 class="songtitle">Drag a song into the scene to play it!</h1>
  </div>
</template>

<script>
export default {
  name: 'sound-play',
  mounted() {
    if (process.client) {
      var canvas = document.querySelector('.a-canvas')

      canvas.addEventListener('dragover', function(e) {
        e.preventDefault()
      })

      canvas.addEventListener('drop', function(e) {
        console.log('File(s) dropped')

        e.preventDefault()

        if (e.dataTransfer.items) {
          if (e.dataTransfer.items[0].kind === 'file') {
            var file = e.dataTransfer.items[0].getAsFile()
            var blobURL = window.URL.createObjectURL(file)
            document.getElementById('audio').setAttribute('src', blobURL)
            document.querySelector('.songtitle').innerHTML = file.name
          }
        }
      })
    }
  }
}
</script>

<style>
.songtitle {
  position: fixed;
  top: 0;
  text-decoration: none;
  font-family: sans-serif;
  padding-left: 30px;
  color: white;
}
</style>
