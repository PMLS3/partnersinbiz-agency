<template>
  <a-scene>
    <!-- Asset Management System -->
    <!-- DOWNLOAD, PRELOAD YOUR 360° VIDEO, AND UPDATE ITS ID AND FILE NAME -->
    <a-assets>
      <img id="play" src="@/assets/images/elements/play.png" />
      <img id="pause" src="@/assets/images/elements/pause.png" />
      <video
        id="YOUR-360VIDEO-ID"
        src="@/assets/video/world.mp4"
        loop="true"
      ></video>
    </a-assets>

    <!-- Camera -->
    <a-camera>
      <a-cursor></a-cursor>
    </a-camera>

    <!-- 360° Video -->
    <!-- UPDATE YOUR 360° VIDEO'S ID -->
    <a-videosphere src="#YOUR-360VIDEO-ID" rotation="0 -80 0"></a-videosphere>

    <!-- Play-Pause -->
    <a-image
      id="videoControls"
      src="#play"
      position="0 1 -2"
      scale="0.2 0.2 1"
      play-pause
    >
    </a-image>
  </a-scene>
</template>

<script>
if (process.client) {
  require('@/js/aframe/playPause.js')
}

export default {
  name: 'video-360'
}
</script>

<style></style>
