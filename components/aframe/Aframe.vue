<template>
  <a-scene cursor="rayOrigin: mouse" raycaster="objects: .clickable" id="scene">
    <a-assets>
      <!-- <a-asset-item
        id="clinicAsset"
        src="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2FMaldive%20Island%20no%20ocean%20no%20tents%20no%20floor.glb?v=1604387757783"
      ></a-asset-item> -->

      <a-asset-item
        id="clinicAsset"
        src="https://cdn.glitch.com/7520b016-05b9-4546-90da-4f270e933ccd%2FClinic.glb?v=1605239343980"
      ></a-asset-item>
    </a-assets>
    <a-entity id="clinic" gltf-model="#clinicAsset" animation-mixer> </a-entity>
    <a-entity
      geometry="width: 10; height: 0.11"
      position="0.1 -4.78 0.1"
      teleport
      visible="false"
      class="clickable"
      material="color: #964B00"
      scale="3.67 0.1 20.1"
      id="collision-world"
    ></a-entity>

    <!-- <a-box
      color="#00AA00"
      position=" -10 1 3"
      class="clickable"
      blink-teleportation="pos: 2 0 4; hide: false"
    >
    </a-box> -->
    <a-sky color="#ECECEC"></a-sky>

    <a-entity
      id="camera"
      position="-11 1 9"
      camera
      look-controls
      wasd-controls
      animation="property: position; to: -11 1 9; dur: 2000; easing: linear;"
    >
    </a-entity>
    <a-entity
      id="mouseCursor"
      class="controller"
      cursor="rayOrigin: mouse"
    ></a-entity>
  </a-scene>
</template>

<script>
if (process.client) {
  // require("./js/aframe-cursor-teleport-component.js");
  require("./components/teleport.js");
  require("./components/clickListener.js");
  require("./components/blinkTeleport.js");

  // require("./components/test.js");
  // require("./components/messageOpen.js");
  // require("./dist/aframe-super-keyboard.min.js");
}
export default {
  //   head: {
  //     script: [{ src: "https://aframe.io/releases/1.0.4/aframe.min.js" }]
  //   }

  methods: {
    printMousePos(event) {
      console.log(event);
    }
  }
};
</script>

<style></style>
