<template>
  <a-scene cursor="rayOrigin: mouse" raycaster="objects: .clickable">
    <!-- <a-scene> -->
    <a-assets>
      <img
        id="sky"
        src="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2Fpark.jpeg?v=1604890277345"
      />
    </a-assets>

    <a-entity
      id="cameraRig"
      position="0 10 10"
      movement-controls="fly: true; speed: 0.3"
      animation="property: position; to: 1.3 0 8; dur: 5000; easing: linear; loop: false"
      cursor-teleport="cameraRig: #cameraRig; cameraHead: #head; collisionEntities: .collision; ignoreEntities: .clickable"
    >
      <a-entity
        id="head"
        position="0 1.6 0"
        camera
        look-controls="reverseMouseDrag: true"
      >
        <a-entity
          id="cornerCouchSet"
          visible=""
          look-at="[camera]"
          position="0 100 -0.5"
          scale="0.2 0.2 0.2"
        >
          <a-sphere
            position="-2.1 0 0"
            radius=".3"
            src="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2Ffabric_leather_02_diff_2k.jpg?v=1607419660884"
            class="clickable cornerCouch"
            switch-texture
            animation__rotate="property: rotation; dir: forward; dur: 2000;
                                 easing: easeInSine; loop: false; to: 0 90 0;
                                 startEvents:mouseenter"
          ></a-sphere>
          <a-sphere
            position="-1.4 0 0"
            radius=".3"
            src="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2Fleather_red_03_coll1_2k.jpg?v=1607419643535"
            class="clickable cornerCouch"
            switch-texture
          ></a-sphere>
          <a-sphere
            position="-0.7 0 0"
            radius=".3"
            src="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2Fbrown_leather_rough_2k.jpg?v=1607419606260"
            class="clickable cornerCouch"
            switch-texture
            animation__rotate="property: rotation; dir: forward; dur: 2000;
                                 easing: easeInSine; loop: false; to: 0 90 0;
                                 startEvents:mouseenter"
          ></a-sphere>
          <a-sphere
            position="0 0 0"
            radius=".3"
            src="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2FMaterial_3_baseColor.jpeg?v=1607419410585"
            switch-texture
            class="clickable cornerCouch"
            animation__rotate="property: rotation; dir: forward; dur: 2000;
                                 easing: easeInSine; loop: false; to: 0 90 0;
                                 startEvents:mouseenter"
          ></a-sphere>
          <a-sphere
            position="0.7 0 0"
            radius=".3"
            switch-texture
            src="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2Fbeige_leather_6_diffuse2.jpg?v=1606244496755"
            class="clickable cornerCouch"
            animation__rotate="property: rotation; dir: forward; dur: 2000;
                                 easing: easeInSine; loop: false; to: 0 90 0;
                                 startEvents:mouseenter"
          ></a-sphere>
          <a-sphere
            position="1.4 0 0"
            radius=".3"
            switch-texture
            src="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2FFabricLinen001_DISP_6K.jpg?v=1606244487377"
            class="clickable cornerCouch"
            animation__rotate="property: rotation; dir: forward; dur: 2000;
                                 easing: easeInSine; loop: false; to: 0 90 0;
                                 startEvents:mouseenter"
          ></a-sphere>
          <a-sphere
            position="2.1 0 0"
            radius=".3"
            switch-texture
            src="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2Ffabric_leather_02_disp_2k.png?v=1607419670930"
            class="clickable cornerCouch"
            animation__rotate="property: rotation; dir: forward; dur: 2000;
                                 easing: easeInSine; loop: false; to: 0 90 0;
                                 startEvents:mouseenter"
          ></a-sphere>
        </a-entity>

        <a-entity
          id="poufSet"
          visible=""
          look-at="[camera]"
          position="0 100 -0.5"
          scale="0.2 0.2 0.2"
        >
          <a-sphere
            position="-2.1 0 0"
            radius=".3"
            src="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2Fbeige_leather_6_height.png?v=1606244489220"
            class="clickable pouf"
            switch-texture
            animation__rotate="property: rotation; dir: forward; dur: 2000;
                                 easing: easeInSine; loop: false; to: 0 90 0;
                                 startEvents:mouseenter"
          ></a-sphere>
          <a-sphere
            position="-1.4 0 0"
            radius=".3"
            src="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2FFabricLinen001_NRM_6K.jpg?v=1606244483213"
            class="clickable pouf"
            switch-texture
            animation__rotate="property: rotation; dir: forward; dur: 2000;
                                 easing: easeInSine; loop: false; to: 0 90 0;
                                 startEvents:mouseenter"
          ></a-sphere>
          <a-sphere
            position="-0.7 0 0"
            radius=".3"
            src="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2FFabricDenim002_COL_VAR3_6K.jpg?v=1606244494286"
            class="clickable pouf"
            switch-texture
            animation__rotate="property: rotation; dir: forward; dur: 2000;
                                 easing: easeInSine; loop: false; to: 0 90 0;
                                 startEvents:mouseenter"
          ></a-sphere>
          <a-sphere
            position="0 0 0"
            radius=".3"
            src="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2FFabricLinen001_COL_VAR3_6K.jpg?v=1606244494657"
            switch-texture
            class="clickable pouf"
            animation__rotate="property: rotation; dir: forward; dur: 2000;
                                 easing: easeInSine; loop: false; to: 0 90 0;
                                 startEvents:mouseenter"
          ></a-sphere>
          <a-sphere
            position="0.7 0 0"
            radius=".3"
            switch-texture
            src="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2Fbeige_leather_6_diffuse2.jpg?v=1606244496755"
            class="clickable pouf"
            animation__rotate="property: rotation; dir: forward; dur: 2000;
                                 easing: easeInSine; loop: false; to: 0 90 0;
                                 startEvents:mouseenter"
          ></a-sphere>
          <a-sphere
            position="1.4 0 0"
            radius=".3"
            switch-texture
            src="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2FFabricLinen001_DISP_6K.jpg?v=1606244487377"
            class="clickable pouf"
            animation__rotate="property: rotation; dir: forward; dur: 2000;
                                 easing: easeInSine; loop: false; to: 0 90 0;
                                 startEvents:mouseenter"
          ></a-sphere>
          <a-sphere
            position="2.1 0 0"
            radius=".3"
            switch-texture
            src="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2FFabricDenim002_NRM_6K.jpg?v=1606244487597"
            class="clickable pouf"
            animation__rotate="property: rotation; dir: forward; dur: 2000;
                                 easing: easeInSine; loop: false; to: 0 90 0;
                                 startEvents:mouseenter"
          ></a-sphere>
        </a-entity>

        <a-entity
          id="armChairSet"
          visible=""
          look-at="[camera]"
          position="0 100 -0.5"
          scale="0.2 0.2 0.2"
        >
          <a-sphere
            position="-2.1 0 0"
            radius=".3"
            src="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2Fdcmap_naughtOne_portion_armchair_2_arms_4.jpg?v=1607340497236"
            class="clickable armChair"
            switch-texture
            animation__rotate="property: rotation; dir: forward; dur: 2000;
                                 easing: easeInSine; loop: false; to: 0 90 0;
                                 startEvents:mouseenter"
          ></a-sphere>
          <a-sphere
            position="-1.4 0 0"
            radius=".3"
            src="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2Fdcmap_naughtOne_portion_armchair_2_arms_1.jpg?v=1607340501215"
            class="clickable armChair"
            switch-texture
            animation__rotate="property: rotation; dir: forward; dur: 2000;
                                 easing: easeInSine; loop: false; to: 0 90 0;
                                 startEvents:mouseenter"
          ></a-sphere>
          <a-sphere
            position="-0.7 0 0"
            radius=".3"
            src="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2Fdcmap_naughtOne_portion_armchair_2_arms_3.jpg?v=1607340502604"
            class="clickable armChair"
            switch-texture
            animation__rotate="property: rotation; dir: forward; dur: 2000;
                                 easing: easeInSine; loop: false; to: 0 90 0;
                                 startEvents:mouseenter"
          ></a-sphere>
          <a-sphere
            position="0 0 0"
            radius=".3"
            src="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2Fdcmap_naughtOne_portion_armchair_2_arms_5.jpg?v=1607340502693"
            switch-texture
            class="clickable armChair"
            animation__rotate="property: rotation; dir: forward; dur: 2000;
                                 easing: easeInSine; loop: false; to: 0 90 0;
                                 startEvents:mouseenter"
          ></a-sphere>
          <a-sphere
            position="0.7 0 0"
            radius=".3"
            switch-texture
            src="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2Fdcmap_naughtOne_portion_armchair_2_arms_2.jpg?v=1607340506849"
            class="clickable armChair"
            animation__rotate="property: rotation; dir: forward; dur: 2000;
                                 easing: easeInSine; loop: false; to: 0 90 0;
                                 startEvents:mouseenter"
          ></a-sphere>
          <a-sphere
            position="1.4 0 0"
            radius=".3"
            switch-texture
            src="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2FFabricLinen001_DISP_6K.jpg?v=1606244487377"
            class="clickable armChair"
            animation__rotate="property: rotation; dir: forward; dur: 2000;
                                 easing: easeInSine; loop: false; to: 0 90 0;
                                 startEvents:mouseenter"
          ></a-sphere>
          <a-sphere
            position="2.1 0 0"
            radius=".3"
            switch-texture
            src="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2FLEATHER_1.png?v=1607341449930"
            class="clickable armChair"
            animation__rotate="property: rotation; dir: forward; dur: 2000;
                                 easing: easeInSine; loop: false; to: 0 90 0;
                                 startEvents:mouseenter"
          ></a-sphere>
        </a-entity>
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

    <a-sky
      src="#sky"
      geometry="radius: 200"
      id="skys"
      material="color: "
    ></a-sky>

    <a-entity id="house-shell" position="0 0 0">
      <a-entity
        id="house"
        gltf-model="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2Fapartment-no-coach.glb?v=1608007181539"
        position="1 0 -0.335"
        scale="1 1 1"
      >
      </a-entity>
      <!-- Furniture -->

      <!-- ARM CHAIR -->
      <a-entity
        id="arm-chair-1"
        position="3.145 0.087 6.878"
        rotation="0 180 0"
        scale="3 3 3"
        switch-balls
        event-set__enter="_event: mouseenter; scale: 3.2 3.2 3.2"
        event-set__leave="_event: mouseleave; scale: 3 3 3"
      >
        <a-entity
          id="armChair"
          gltf-model="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2Fcomfy_red_white_armchair.glb?v=1607342086754"
          position="0 0 0"
          scale="0.05 0.05 0.05"
          class="clickable"
          load-texture
          shadow="receive: false"
        >
        </a-entity>
      </a-entity>

      <!-- ARM CHAIR -->
      <a-entity
        id="arm-chair-2"
        position="3.711 0.1 5.765"
        rotation="0 -45 0"
        scale="3 3 3"
        switch-balls
        event-set__enter="_event: mouseenter; scale: 3.2 3.2 3.2"
        event-set__leave="_event: mouseleave; scale: 3 3 3"
      >
        <a-entity
          id="armChair2"
          gltf-model="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2Fcomfy_red_white_armchair.glb?v=1607342086754"
          position="0 0 0"
          scale="0.05 0.05 0.05"
          class="clickable"
          load-texture
          shadow="receive: false"
        >
        </a-entity>
      </a-entity>

      <!-- <a-light
        type="ambient"
        position="5.83 3.15 -7.28"
        light="color: #f2f2f2;  intensity: 0.01; distance: 0.5"
        visible=""
        rotation="-82.22861092599523 179.9998479605043 179.9998479605043"
        id="round-light-1"
      ></a-light> -->

      <!-- Corner couch -->
      <a-entity
        id="couch-corner"
        position="-2.08 0.051 4.888"
        rotation="0 180 0"
        scale="0.8 0.8 0.8"
        switch-balls
        event-set__enter="_event: mouseenter; scale: 0.83 0.83 0.83"
        event-set__leave="_event: mouseleave; scale: 0.8 0.8 0.8"
      >
        <a-entity
          id="cornerCouch"
          gltf-model="https://cdn.glitch.com/163fbd9f-ed1c-4912-9b3c-c1bcff04a3f3%2Fcorner-coach.glb?v=1607329750003"
          position="0 0 0"
          scale="0.012 0.012 0.012"
          class="clickable"
          load-texture
          shadow="receive: false"
        >
        </a-entity>
      </a-entity>

      <a-entity
        id="pouf-select"
        position="4.52 0.061 0.529"
        scale="0.25 0.25 0.25"
        rotation="0 90 0"
        switch-balls
        event-set__enter="_event: mouseenter; scale: 0.3 0.3 0.3"
        event-set__leave="_event: mouseleave; scale: 0.25 0.25 0.25"
      >
        <a-entity
          id="pouf"
          gltf-model="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2FsinglePouf.glb?v=1606245193748"
          position="0 0 0"
          scale="0.007 0.007 0.007"
          load-texture=""
          shadow="receive: false"
          class="clickable"
        ></a-entity>
      </a-entity>
      <a-entity
        geometry="width: 10; height: 0.11"
        position="0 0 3.9"
        visible="false"
        rotation=""
        id="collision-world"
        class=" collision"
        scale="0.777 1 6.24"
      ></a-entity>
      <a-entity
        geometry="width: 10; height: 0.11"
        position="0.01 0.09 9.8"
        visible="false"
        rotation=""
        id="collision-world2"
        scale="0.91 1 2.88"
        class=" collision"
      ></a-entity>

      <a-entity
        geometry="width: 10; height: 0.11"
        position="1.63429 3.12121 0.71134"
        visible="false"
        rotation=""
        id="collision-world5"
        class=" collision"
        scale="0.84 1 1"
      ></a-entity>
    </a-entity>
  </a-scene>
</template>

<script>
require('@/js/aframe/teleport.js')
require('@/js/aframe/loadTexture.js')
export default {}
</script>

<style></style>
