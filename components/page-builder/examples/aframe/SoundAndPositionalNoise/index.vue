<template>
  <!-- ******** NOTHING HAS CHANGED WITH v1.0.4 ******** -->
  <!-- NOTE: Playing sound on iOS — in any browser — requires a physical user interaction. -->
  <!-- More info here: https://aframe.io/docs/1.0.0/components/sound.html -->
  <!-- Also, on Desktop devices, autoplay works in Firefox and doesn't work in Chrome (line 74) -->
  <a-scene>
    <!-- Asset Management System -->
    <!-- DOWNLOAD, PRELOAD YOUR AUDIO FILES, AND UPDATE THEIR FILE NAMES IN THIS DOC -->
    <a-assets>
      <img id="ground" src="/L25-ASSETs/floor-1024.jpg" />
      <audio
        id="YOUR-SONG-1"
         preload="auto"
        crossorigin="anonymous"
        src="https://cdn.glitch.com/96ab1f6e-16b9-43c1-9df3-fbe9b24a7490%2FLeft%20and%20Leaving.mp3?1549919550870"
      ></audio>
      <audio
        id="YOUR-SONG-2"
         preload="auto"
        crossorigin="anonymous"
        src="https://cdn.glitch.com/96ab1f6e-16b9-43c1-9df3-fbe9b24a7490%2FLeft%20and%20Leaving.mp3?1549919550870"
      ></audio>
      <img id="YOUR-360PANORAMA" src="/L25-ASSETs/your-360panorama.jpg" />
      <audio
        id="YOUR-AMBIENCE-SOUND"
         preload="auto"
        crossorigin="anonymous"
        src="https://cdn.glitch.com/96ab1f6e-16b9-43c1-9df3-fbe9b24a7490%2FLeft%20and%20Leaving.mp3?1549919550870"
      >
        " >
      </audio>
    </a-assets>

    <!-- Camera -->
    <a-entity position="0 0 7">
      <a-camera>
        <a-cursor></a-cursor>
      </a-camera>
    </a-entity>

    <!-- Ground -->
    <a-plane src="#ground" scale="40 40 1" repeat="2 2" rotation="-90 0 0">
    </a-plane>

    <!-- Blue Cylinder -->
    <a-cylinder
      color="#0088FF"
      height="5"
      position="-2 2.5 0"
      sound="src: #YOUR-SONG-1;
        				   on: click;
        				   volume: 1;
        				   refDistance: 4;
        				   rolloffFactor: 4"
    >
      <a-entity
        sound="src: #YOUR-SONG-1; autoplay: false"
        position="1.396 1.525 0"
      >
      </a-entity>
    </a-cylinder>

    <!-- Yellow Box with Play and Stop Controls -->
    <a-box
      id="yellow"
      color="#FFAA00"
      position="1.5 0.5 0.5"
      sound="src: #YOUR-SONG-2"
    >
      -->
      <!-- Play -->
      <a-sphere
        color="#00AA00"
        radius="0.25"
        position="-0.5 1 0"
        play
      ></a-sphere>
      <!-- Stop -->
      <a-sphere
        color="#AA0000"
        radius="0.25"
        position="0.5 1 0"
        stop
      ></a-sphere>
    </a-box>

    <!-- 360° Panorama -->
    <a-sky
      src="#YOUR-360PANORAMA"
      sound="src: #YOUR-AMBIENCE-SOUND; autoplay: true; loop: true; positional: false"
    >
    </a-sky>
  </a-scene>
</template>

<script>
if (process.client) {
  require('./index.js')
}

export default {
  name: 'sound-and-positional-noise'
}
</script>

<style></style>
