<template>
  <a-scene cursor="rayOrigin: mouse" raycaster="objects: .clickable">
    <!-- <a-scene> -->
    <a-assets>
      <img
        id="woodfloor"
        src="https://cdn.glitch.com/c388f728-37b7-4af9-af03-1ee7430663e7%2F4727356277_66fb5f938f_o.jpg?1544178281422"
      />

      <img
        id="wall"
        src="https://cdn.glitch.com/f2ee9d74-9726-4bed-9c30-2d49d6391dee%2F4340689010_68c3b1bbb7_o%20(2).jpg?1547154870021"
      />

      <img
        id="skysky"
        src="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2Fseaisland.jpg?v=1604306439573"
      />
    </a-assets>
    <!-- player -->
    <a-entity
      id="cameraRig"
      position="0 1 0"
      cursor-teleport="cameraRig: #cameraRig; cameraHead: #head; collisionEntities: .collision; ignoreEntities: .clickable"
    >
      <a-entity
        id="head"
        position="0 3.8 0"
        camera
        look-controls="reverseMouseDrag: true"
        wasd-controls
      >
      </a-entity>
      <a-entity
        laser-controls="hand: left"
        raycaster="objects: .clickable; far: 100"
        line="color: red; opacity: 0.75"
        teleport-controls="
            collisionEntities: .collision;
            cameraRig: #cameraRig;
            teleportOrigin: #head;
            button: thumbstick;
            curveShootingSpeed: 8"
      ></a-entity>
      <a-entity
        laser-controls="hand: right"
        raycaster="objects: .clickable"
        line="color: red; opacity: 0.75"
        teleport-controls="
            collisionEntities: .collision;
            cameraRig: #cameraRig;
            teleportOrigin: #head;
            button: thumbstick;
            curveShootingSpeed: 8"
      ></a-entity>
    </a-entity>

    <a-sky id="sky" src="#skysky"></a-sky>

    <!-- <a-plane
      position="0 5 -15"
      width="30"
      height="10"
      src="#wall"
      material="side: double"
      repeat="2 1"
    ></a-plane>

    <a-plane
      position="-2.5 5 15"
      rotation="0 180 0"
      width="25"
      height="10"
      src="#wall"
      material="side: double"
      repeat="2 1"
    ></a-plane>
    <a-plane
      position="-15 5 0"
      rotation="0 90 0"
      width="30"
      height="10"
      src="#wall"
      shadow
      repeat="2 1"
      material="side: double"
    ></a-plane>
    <a-plane
      position="15 5 0"
      rotation="0 -90 0"
      width="30"
      height="10"
      src="#wall"
      material="side: double"
      repeat="2 1"
    ></a-plane> -->

    <!-- <a-plane
      id="ceiling"
      position="0 10 0"
      scale="1 1 1"
      width="30"
      height="30"
      rotation="90 0 0"
      material="metalness:1; roughness:0; transparent: true; opacity: .9; shader: standard; 
           color: #faaf52; side:double;"
    ></a-plane> -->
    <!--Riva Table -->
    <!-- <a-entity
      position="-6 0.2 -6"
      event-set__enter="_event: mouseenter; _target: #rivaTableSet; visible: true"
      event-set__leave="_event: mouseleave; _target: #rivaTableSet; visible: false"
    >
      <a-entity
        id="rivaTable"
        gltf-model="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2Friva_table.glb?v=1606288891359"
        position="1 0 0"
        scale="0.005 0.005 0.005"
        class="clickable"
      >
      </a-entity>
      <a-entity id="rivaTableSet" visible="false" look-at="[camera]">
        <a-sphere
          position="-1.8 2.5 0"
          radius=".3"
          src="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2Fbeige_leather_6_height.png?v=1606244489220"
          class="clickable pouf"
          switch-texture
        ></a-sphere>
        <a-sphere
          position="-1.2 2.5 0"
          radius=".3"
          src="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2FFabricLinen001_NRM_6K.jpg?v=1606244483213"
          class="clickable pouf"
          switch-texture
        ></a-sphere>
        <a-sphere
          position="-0.6 2.5 0"
          radius=".3"
          src="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2FFabricDenim002_COL_VAR3_6K.jpg?v=1606244494286"
          class="clickable pouf"
          switch-texture
        ></a-sphere>
        <a-sphere
          position="0 2.5 0"
          radius=".3"
          src="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2FFabricLinen001_COL_VAR3_6K.jpg?v=1606244494657"
          switch-texture
          class="clickable pouf"
        ></a-sphere>
        <a-sphere
          position="0.6 2.5 0"
          radius=".3"
          switch-texture
          src="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2Fbeige_leather_6_diffuse2.jpg?v=1606244496755"
          class="clickable pouf"
        ></a-sphere>
        <a-sphere
          position="1.2 2.5 0"
          radius=".3"
          switch-texture
          src="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2FFabricLinen001_DISP_6K.jpg?v=1606244487377"
          class="clickable pouf"
        ></a-sphere>
        <a-sphere
          position="1.8 2.5 0"
          radius=".3"
          switch-texture
          src="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2FFabricDenim002_NRM_6K.jpg?v=1606244487597"
          class="clickable pouf"
        ></a-sphere>
      </a-entity>
    </a-entity> -->

    <a-entity
      id="house"
      gltf-model="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2Fhouse.glb?v=1607337554450"
      position="0 0.3 0"
      scale="0.1 0.1 0.1"
      shadow="receive: false"
    >
      <a-entity
        id="rug"
        gltf-model="https://cdn.glitch.com/163fbd9f-ed1c-4912-9b3c-c1bcff04a3f3%2Frug.glb?v=1607328274475"
        position="7.92362 2.26962 107.94908"
        scale="0.5 0.5 0.5"
        rotation="0 90 0"
        shadow="receive: false"
      >
      </a-entity>
    </a-entity>
    <!-- <a-entity
      id="house"
      gltf-model="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2Fhouse.glb?v=1607337554450"
      position="0 0.3 0"
      scale="0.05 0.05 0.05"
      shadow="receive: false"
    >
      <a-entity
        id="rug"
        gltf-model="https://cdn.glitch.com/163fbd9f-ed1c-4912-9b3c-c1bcff04a3f3%2Frug.glb?v=1607328274475"
        position="0 0.3 0"
        scale="0.05 0.05 0.05"
        shadow="receive: false"
      >
      </a-entity>
    </a-entity> -->

    <!-- <a-entity
      light="type:directional; castShadow:true;"
      position="1 1 1"
    ></a-entity> -->
    <!-- POUF -->
    <a-entity
      id="pouf-select"
      position="7.9 0.524 26.37"
      rotation="0 0 0"
      event-set__enter="_event: mouseenter; _target: #poufSet; visible: true"
      event-set__leave="_event: mouseleave; _target: #poufSet; visible: false"
    >
      <a-entity
        id="pouf"
        gltf-model="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2FsinglePouf.glb?v=1606245193748"
        position="1 0 0"
        scale="0.007 0.007 0.007"
        class="clickable"
        load-texture
        shadow="receive: false"
      >
      </a-entity>

      <a-entity
        id="poufSet"
        visible="false"
        look-at="[camera]"
        position="0 0.8 0"
      >
        <a-sphere
          position="-2.1 2.5 0"
          radius=".3"
          src="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2Fbeige_leather_6_height.png?v=1606244489220"
          class="clickable pouf"
          switch-texture
        ></a-sphere>
        <a-sphere
          position="-1.4 2.5 0"
          radius=".3"
          src="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2FFabricLinen001_NRM_6K.jpg?v=1606244483213"
          class="clickable pouf"
          switch-texture
        ></a-sphere>
        <a-sphere
          position="-0.7 2.5 0"
          radius=".3"
          src="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2FFabricDenim002_COL_VAR3_6K.jpg?v=1606244494286"
          class="clickable pouf"
          switch-texture
        ></a-sphere>
        <a-sphere
          position="0 2.5 0"
          radius=".3"
          src="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2FFabricLinen001_COL_VAR3_6K.jpg?v=1606244494657"
          switch-texture
          class="clickable pouf"
        ></a-sphere>
        <a-sphere
          position="0.7 2.5 0"
          radius=".3"
          switch-texture
          src="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2Fbeige_leather_6_diffuse2.jpg?v=1606244496755"
          class="clickable pouf"
        ></a-sphere>
        <a-sphere
          position="1.4 2.5 0"
          radius=".3"
          switch-texture
          src="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2FFabricLinen001_DISP_6K.jpg?v=1606244487377"
          class="clickable pouf"
        ></a-sphere>
        <a-sphere
          position="2.1 2.5 0"
          radius=".3"
          switch-texture
          src="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2FFabricDenim002_NRM_6K.jpg?v=1606244487597"
          class="clickable pouf"
        ></a-sphere>
      </a-entity>
    </a-entity>

    <!-- POUF -->
    <a-entity
      id="two-coach"
      position="4.987 0.596 9.601"
      rotation="0 270 0"
      scale="0.8 0.8 0.8"
      event-set__enter="_event: mouseenter; _target: #poufSet2; visible: true"
      event-set__leave="_event: mouseleave; _target: #poufSet2; visible: false"
    >
      <a-entity
        id="pouf2"
        gltf-model="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2Fcomfy_red_white_armchair.glb?v=1607342086754"
        position="1 0 0"
        scale="0.05 0.05 0.05"
        class="clickable"
        load-texture
        shadow="receive: false"
      >
      </a-entity>

      <a-entity
        id="poufSet2"
        visible="false"
        look-at="[camera]"
        position="0 2 0"
      >
        <a-sphere
          position="-2.1 2.5 0"
          radius=".3"
          src="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2Fdcmap_naughtOne_portion_armchair_2_arms_4.jpg?v=1607340497236"
          class="clickable pouf2"
          switch-texture
        ></a-sphere>
        <a-sphere
          position="-1.4 2.5 0"
          radius=".3"
          src="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2Fdcmap_naughtOne_portion_armchair_2_arms_1.jpg?v=1607340501215"
          class="clickable pouf2"
          switch-texture
        ></a-sphere>
        <a-sphere
          position="-0.7 2.5 0"
          radius=".3"
          src="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2Fdcmap_naughtOne_portion_armchair_2_arms_3.jpg?v=1607340502604"
          class="clickable pouf2"
          switch-texture
        ></a-sphere>
        <a-sphere
          position="0 2.5 0"
          radius=".3"
          src="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2Fdcmap_naughtOne_portion_armchair_2_arms_5.jpg?v=1607340502693"
          switch-texture
          class="clickable pouf2"
        ></a-sphere>
        <a-sphere
          position="0.7 2.5 0"
          radius=".3"
          switch-texture
          src="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2Fdcmap_naughtOne_portion_armchair_2_arms_2.jpg?v=1607340506849"
          class="clickable pouf2"
        ></a-sphere>
        <a-sphere
          position="1.4 2.5 0"
          radius=".3"
          switch-texture
          src="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2FFabricLinen001_DISP_6K.jpg?v=1606244487377"
          class="clickable pouf2"
        ></a-sphere>
        <a-sphere
          position="2.1 2.5 0"
          radius=".3"
          switch-texture
          src="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2FLEATHER_1.png?v=1607341449930"
          class="clickable pouf2"
        ></a-sphere>
      </a-entity>
    </a-entity>

    <!-- POUF -->
    <a-entity
      id="couch-corner"
      position="-7 0.46 -5.8"
      rotation="0 90 0"
      scale="0.8 0.8 0.8"
      event-set__enter="_event: mouseenter; _target: #poufSet3; visible: true"
      event-set__leave="_event: mouseleave; _target: #poufSet3; visible: false"
    >
      <a-entity
        id="pouf3"
        gltf-model="https://cdn.glitch.com/163fbd9f-ed1c-4912-9b3c-c1bcff04a3f3%2Fcorner-coach.glb?v=1607329750003"
        position="-14.6 0 6"
        scale="0.05 0.05 0.05"
        class="clickable"
        load-texture
        shadow="receive: false"
      >
      </a-entity>

      <a-entity
        id="poufSet3"
        visible="false"
        look-at="[camera]"
        position="0 2 0"
      >
        <a-sphere
          position="-2.1 2.5 0"
          radius=".3"
          src="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2Fbeige_leather_6_height.png?v=1606244489220"
          class="clickable pouf3"
          switch-texture
        ></a-sphere>
        <a-sphere
          position="-1.4 2.5 0"
          radius=".3"
          src="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2FFabricLinen001_NRM_6K.jpg?v=1606244483213"
          class="clickable pouf3"
          switch-texture
        ></a-sphere>
        <a-sphere
          position="-0.7 2.5 0"
          radius=".3"
          src="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2FFabricDenim002_COL_VAR3_6K.jpg?v=1606244494286"
          class="clickable pouf3"
          switch-texture
        ></a-sphere>
        <a-sphere
          position="0 2.5 0"
          radius=".3"
          src="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2FFabricLinen001_COL_VAR3_6K.jpg?v=1606244494657"
          switch-texture
          class="clickable pouf3"
        ></a-sphere>
        <a-sphere
          position="0.7 2.5 0"
          radius=".3"
          switch-texture
          src="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2Fbeige_leather_6_diffuse2.jpg?v=1606244496755"
          class="clickable pouf3"
        ></a-sphere>
        <a-sphere
          position="1.4 2.5 0"
          radius=".3"
          switch-texture
          src="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2FFabricLinen001_DISP_6K.jpg?v=1606244487377"
          class="clickable pouf3"
        ></a-sphere>
        <a-sphere
          position="2.1 2.5 0"
          radius=".3"
          switch-texture
          src="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2FFabricDenim002_NRM_6K.jpg?v=1606244487597"
          class="clickable pouf3"
        ></a-sphere>
      </a-entity>
    </a-entity>

    <a-entity
      geometry="width: 10; height: 0.11"
      position="0.1 -1 0.1"
      cursor-teleport
      visible=""
      class="clickable collision"
      scale="3.67 0.1 20.1"
      id="collision-world"
      src="#woodfloor"
      repeat="4 4"
    ></a-entity>

    <a-plane
      id="floor"
      rotation="-90 90 0"
      width="30"
      height="30"
      src="#woodfloor"
      repeat="4 4"
    ></a-plane>
  </a-scene>
</template>

<script>
// require('@/js/aframe/teleport.js')
// require('@/js/aframe/loadTexture.js')
export default {
  name: 'ShowRoom',
}
</script>
