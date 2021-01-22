<template>
  <div>
    <a-scene>
      <a-assets> </a-assets>
      <a-entity environment="preset: forest" class="video-holder">
        <a-entity
          camera="active: true"
          look-controls
          wasd-controls
          position="0 0 0"
          data-aframe-default-camera
        ></a-entity>
        <a-entity daydream-controls></a-entity>
      </a-entity>
      <a-box position="0 0 -2" color="#ff00ff"></a-box>
    </a-scene>
  </div>
</template>

<script>
export default {
  name: 'video-chat',

  mounted() {
    // var newVideo = document.createElement('a-video')
    // newVideo.setAttribute('height', '9')
    // newVideo.setAttribute('width', '16')
    // newVideo.setAttribute('position', '0 5 -15')
    console.log('ATTACH NOW')
    // var newParent = document.getElementsByClassName('video-holder')
    // newParent[0].appendChild(newVideo)

    // window.attachNow = function(stream) {
    //   var video = document.createElement('video')

    //   var assets = document.querySelector('a-assets')

    //   assets.addEventListener('loadeddata', () => {
    //     console.log('loaded asset data')
    //   })

    //   video.setAttribute('id', 'newStream')
    //   video.setAttribute('autoplay', true)
    //   video.setAttribute('src', '')
    //   assets.appendChild(video)

    //   video.addEventListener('loadeddata', () => {
    //     video.play()

    //     // Pointing this aframe entity to that video as its source
    //     newVideo.setAttribute('src', `#newStream`)
    //   })

    //   video.srcObject = stream
    // }
  }
}
</script>

<style></style>
