<template>
  <!-- ******** For the code below, NOTHING HAS CHANGED WITH v1.0.4 ******** -->
  <!-- ******** With A-Frame v1.0.4 you don't need to install the animation component anymore as it is part of the core library ******** -->
  <a-scene background="color: #FFFFFF">
    <!-- ASSET MANAGEMENT SYSTEM -->
    <a-assets>
      <img id="footsteps" src="@/assets/images/elements/footsteps.png" />
    </a-assets>

    <!-- RED BOX | BLINK-TELEPORTATION ENTITY -->
    <a-box
      color="#AA0000"
      position="-3 0.5 4"
      class="clickable"
      blink-teleportation="pos: -2 0 4"
    >
    </a-box>

    <!-- GREEN BOX | BLINK-TELEPORTATION ENTITY | WILL BE HIDDEN AFTER CLICK -->
    <a-box
      color="#00AA00"
      position="3 0.5 4"
      class="clickable"
      blink-teleportation="pos: 2 0 4; hide: true"
    >
    </a-box>

    <!-- YELLOW BOX -->
    <a-box color="#FFAA00" position="-3 0.5 -4"> </a-box>
    <!-- BLINK-TELEPORTATION ENTITY | WILL BE HIDDEN AFTER CLICK -->
    <a-image
      src="#footsteps"
      position="-3 2.5 -4"
      look-at="#camera"
      class="clickable"
      blink-teleportation="pos: -2 0 -4; hide: true"
    >
    </a-image>

    <!-- BLUE BOX -->
    <a-box color="#0077FF" position="3 0.5 -4"> </a-box>
    <!-- BLINK-TELEPORTATION ENTITY -->
    <a-image
      src="#footsteps"
      position="3 2.5 -4"
      look-at="#camera"
      class="clickable"
      blink-teleportation="pos: 2 0 -4"
    >
    </a-image>

    <!-- GROUND -->
    <a-plane color="#DDDDDD" shader="flat" rotation="-90 0 0" scale="16 16 1">
    </a-plane>

    <!-- ******************************************************************
		IMPORTANT: This code has to be placed at the bottom of the HTML markup
				   because of A-Frame's order-dependent rendering.
		******************************************************************* -->
    <!-- CAMERA RIG -->
    <a-entity id="cameraRig" position="0 0 12">
      <!-- CAMERA -->
      <a-camera id="camera" wasd-controls-enabled="false">
        <!-- SELECTIVE INTERSECTIONS -->
        <a-cursor raycaster="objects: .clickable"></a-cursor>
      </a-camera>
    </a-entity>
    <!-- ************************************************************** -->
  </a-scene>
</template>

<script>
if (process.client) {
  require('@/js/aframe/blinkTeleportation.js')
}
export default {
  name: 'blink-teleportation'
}
</script>

<style></style>
