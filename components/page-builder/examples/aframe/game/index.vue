<template>
  <div>
    <a-scene
      light="defaultLightsEnabled: false"
      cursor="rayOrigin: mouse"
      effects=""
      bloom="strength: 0.2; radius:0.4; threshold: 0.45"
      fxaa
    >
      <a-assets>
        <a-mixin
          id="red-mixin"
          material="color:firebrick"
          light="color:red"
        ></a-mixin>
        <!-- firebrick <-> tomato -->
        <a-mixin
          id="green-mixin"
          material="color:green"
          light="color:green"
        ></a-mixin>
        <!-- green <-> lime -->
        <a-mixin
          id="yellow-mixin"
          material="color:olive"
          light="color:yellow"
        ></a-mixin>
        <!-- olive <-> yellow -->
        <a-mixin
          id="blue-mixin"
          material="color:navy"
          light="color:blue"
        ></a-mixin
        ><!-- navy <-> cyan -->
        <a-mixin
          id="pad"
          geometry="primitive: box; depth: 0.2; width: 2; height: 2"
          material="shader: flat;"
          light="type: point; intensity: 0;"
        >
        </a-mixin>
        <a-mixin
          id="button"
          geometry="primitive: plane; width: 3; height: 1"
          material="shader: flat;"
          text="align: center; width: 8; color: black;"
          event-set__enter="_event: mouseenter;scale: 1.1 1.1;"
          event-set__leave="_event: mouseleave;scale: 1 1;"
        >
        </a-mixin>
        <img
          id="tableTexture"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Checkerboard_pattern.svg/2000px-Checkerboard_pattern.svg.png"
        />
      </a-assets>

      <!-- General scene setting -->
      <a-sky color="black"></a-sky>
      <a-entity light="type: ambient; color: #BBB; intensity: 0.7"></a-entity>
      <a-plane
        src="#tableTexture"
        rotation="-90 0 0"
        width="15"
        height="15"
        position="0 0 -3"
      ></a-plane>
      <a-plane
        src="#tableTexture"
        rotation="0 0 0"
        width="15"
        height="15"
        position="0 7 -10"
      ></a-plane>

      <!-- This is where the four colors pad stands -->
      <a-plane
        color="black"
        id="padPlane"
        rotation="90 0 0"
        width="4"
        height="4"
        position="0 1 -7"
      >
        <a-entity
          geometry="primitive:box;depth: 0.2; width: 4.1; height: 4.1"
          material="shader: flat;color:black"
          position="0 0 0.2"
        ></a-entity>

        <a-entity
          colorpad
          mixin="red-mixin pad"
          id="red"
          position="1 -1 0"
        ></a-entity>
        <a-entity
          colorpad
          mixin="green-mixin pad"
          id="green"
          position="-1 -1 0"
        ></a-entity>
        <a-entity
          colorpad
          mixin="yellow-mixin pad"
          id="yellow"
          position="-1 1 0"
        ></a-entity>
        <a-entity
          colorpad
          mixin="blue-mixin pad"
          id="blue"
          position="1 1 0"
        ></a-entity>
      </a-plane>

      <!-- Buttons go there -->
      <a-plane
        color="black"
        id="btnPlane"
        rotation="0 0 0"
        width="9"
        height="4"
        position="0 4 -9.9"
      >
        <a-entity
          button
          mixin="button"
          id="btn-new"
          position="-1.8 1 0.3"
          text="value:New game"
        ></a-entity>
        <a-entity
          button
          mixin="button"
          id="btn-toggleStrict"
          position="1.8 1 0.3"
          text="value:Strict mode"
        ></a-entity>
        <a-entity
          button
          mixin="button"
          id="btn-toggleEffects"
          position="-1.8 -1 0.3"
          text="value:Post-processing"
        ></a-entity>
        <a-entity
          button
          mixin="button"
          id="btn-toggleSound"
          position="1.8 -1 0.3"
          text="value:Sound"
        ></a-entity>
      </a-plane>

      <!-- Finally, the score panel -->
      <a-plane
        color="black"
        id="scorePlane"
        rotation="33 0 0"
        width="1.4"
        height="1.4"
        position="0 6 -9"
        text="align: center; width: 20; color: red;value:00"
      >
        <a-entity
          geometry="primitive:box;depth: 0.2; width: 1.4; height: 1.4"
          material="shader: flat;color:black"
          position="0 0 -0.2"
        ></a-entity>
      </a-plane>

      <!-- Oh and this is the viewer initial position -->
      <a-entity position="0 0.5 -3">
        <a-camera></a-camera>
      </a-entity>
    </a-scene>
  </div>
</template>

<script>
if (process.client) {
  require('@/js/aframe/colorPad.js')
}
export default {}
</script>

<style></style>
