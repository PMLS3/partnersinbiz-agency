<template>
  <a-scene cursor="rayOrigin: mouse" raycaster="objects: .clickable">
    <a-assets>
      <a-image
        id="test"
        src="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2Fdcmap_naughtOne_portion_armchair_2_arms_5.jpg?v=1607340502693"
      ></a-image>
      <img
        id="woodfloor"
        src="https://cdn.glitch.com/c388f728-37b7-4af9-af03-1ee7430663e7%2F4727356277_66fb5f938f_o.jpg?1544178281422"
      />

      <a-cubemap id="buildingoutside">
        <img
          src="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2FBeach-Sand-1.jpg?v=1604070163344"
          id="right-cube"
        />
        <img
          src="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2FBeach-Sand-1.jpg?v=1604070163344"
          id="left-cube"
        />
        <img
          src="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2FBeach-Sand-1.jpg?v=1604070163344"
          id="top-cube"
        />
        <img
          src="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2FBeach-Sand-1.jpg?v=1604070163344"
          id="bottom-cube"
        />
        <img
          src="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2FBeach-Sand-1.jpg?v=1604070163344"
          id="front-cube"
        />
        <img
          src="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2FBeach-Sand-1.jpg?v=1604070163344"
          id="back-cube"
        />
      </a-cubemap>
      <a-assets-item
        id="stairs"
        src="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2FSPIRAL_STAIRCASE.glb?v=1607368795180"
      ></a-assets-item>
    </a-assets>

    <a-entity
      id="cameraRig"
      position="1.3 0 3"
      cursor-teleport="cameraRig: #cameraRig; cameraHead: #head; collisionEntities: .collision; ignoreEntities: .clickable"
    >
      <a-entity
        id="head"
        position="0 3.8 0"
        camera
        look-controls="reverseMouseDrag: true"
        wasd-controls
      >
        <a-entity
          id="poufSet3"
          visible="false"
          look-at="[camera]"
          position="0 -0.3 -0.5"
          scale="0.2 0.2 0.2"
        >
          <a-sphere
            position="-2.1 0 0"
            radius=".3"
            src="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2Fbeige_leather_6_height.png?v=1606244489220"
            class="clickable pouf3"
            switch-texture
            animation__rotate="property: rotation; dir: forward; dur: 2000;
                                 easing: easeInSine; loop: false; to: 0 90 0;
                                 startEvents:mouseenter"
          ></a-sphere>
          <a-sphere
            position="-1.4 0 0"
            radius=".3"
            src="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2FFabricLinen001_NRM_6K.jpg?v=1606244483213"
            class="clickable pouf3"
            switch-texture
          ></a-sphere>
          <a-sphere
            position="-0.7 0 0"
            radius=".3"
            src="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2FFabricDenim002_COL_VAR3_6K.jpg?v=1606244494286"
            class="clickable pouf3"
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
            class="clickable pouf3"
            animation__rotate="property: rotation; dir: forward; dur: 2000;
                                 easing: easeInSine; loop: false; to: 0 90 0;
                                 startEvents:mouseenter"
          ></a-sphere>
          <a-sphere
            position="0.7 0 0"
            radius=".3"
            switch-texture
            src="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2Fbeige_leather_6_diffuse2.jpg?v=1606244496755"
            class="clickable pouf3"
            animation__rotate="property: rotation; dir: forward; dur: 2000;
                                 easing: easeInSine; loop: false; to: 0 90 0;
                                 startEvents:mouseenter"
          ></a-sphere>
          <a-sphere
            position="1.4 0 0"
            radius=".3"
            switch-texture
            src="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2FFabricLinen001_DISP_6K.jpg?v=1606244487377"
            class="clickable pouf3"
            animation__rotate="property: rotation; dir: forward; dur: 2000;
                                 easing: easeInSine; loop: false; to: 0 90 0;
                                 startEvents:mouseenter"
          ></a-sphere>
          <a-sphere
            position="2.1 0 0"
            radius=".3"
            switch-texture
            src="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2FFabricDenim002_NRM_6K.jpg?v=1606244487597"
            class="clickable pouf3"
            animation__rotate="property: rotation; dir: forward; dur: 2000;
                                 easing: easeInSine; loop: false; to: 0 90 0;
                                 startEvents:mouseenter"
          ></a-sphere>
        </a-entity>

        <a-entity
          id="poufSet"
          visible="false"
          look-at="[camera]"
          position="0 -0.3 -0.5"
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
          id="poufSet2"
          visible="false"
          look-at="[camera]"
          position="0 -0.3 -0.5"
          scale="0.2 0.2 0.2"
        >
          <a-sphere
            position="-2.1 0 0"
            radius=".3"
            src="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2Fdcmap_naughtOne_portion_armchair_2_arms_4.jpg?v=1607340497236"
            class="clickable pouf2"
            switch-texture
            animation__rotate="property: rotation; dir: forward; dur: 2000;
                                 easing: easeInSine; loop: false; to: 0 90 0;
                                 startEvents:mouseenter"
          ></a-sphere>
          <a-sphere
            position="-1.4 0 0"
            radius=".3"
            src="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2Fdcmap_naughtOne_portion_armchair_2_arms_1.jpg?v=1607340501215"
            class="clickable pouf2"
            switch-texture
            animation__rotate="property: rotation; dir: forward; dur: 2000;
                                 easing: easeInSine; loop: false; to: 0 90 0;
                                 startEvents:mouseenter"
          ></a-sphere>
          <a-sphere
            position="-0.7 0 0"
            radius=".3"
            src="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2Fdcmap_naughtOne_portion_armchair_2_arms_3.jpg?v=1607340502604"
            class="clickable pouf2"
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
            class="clickable pouf2"
            animation__rotate="property: rotation; dir: forward; dur: 2000;
                                 easing: easeInSine; loop: false; to: 0 90 0;
                                 startEvents:mouseenter"
          ></a-sphere>
          <a-sphere
            position="0.7 0 0"
            radius=".3"
            switch-texture
            src="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2Fdcmap_naughtOne_portion_armchair_2_arms_2.jpg?v=1607340506849"
            class="clickable pouf2"
            animation__rotate="property: rotation; dir: forward; dur: 2000;
                                 easing: easeInSine; loop: false; to: 0 90 0;
                                 startEvents:mouseenter"
          ></a-sphere>
          <a-sphere
            position="1.4 0 0"
            radius=".3"
            switch-texture
            src="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2FFabricLinen001_DISP_6K.jpg?v=1606244487377"
            class="clickable pouf2"
            animation__rotate="property: rotation; dir: forward; dur: 2000;
                                 easing: easeInSine; loop: false; to: 0 90 0;
                                 startEvents:mouseenter"
          ></a-sphere>
          <a-sphere
            position="2.1 0 0"
            radius=".3"
            switch-texture
            src="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2FLEATHER_1.png?v=1607341449930"
            class="clickable pouf2"
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

    <a-entity id="house-shell" position="0 0 -5">
      <a-entity id="roof">
        <a-entity
          id="roof-top"
          geometry="primitive: box"
          material="color: #DDD8DD; side: double"
          rotation="90 0 0"
          position="1.77 6 5"
          scale="15.6 5 0.02"
          src="#test"
        ></a-entity>
      </a-entity>
      <a-entity id="entrance">
        <a-entity
          id="spiral-stair"
          gltf-model="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2Fstairsss.glb?v=1607370636147"
          position="2.548 1.213 5.413"
          scale="1.7 1.7 1.7"
          shadow="receive: false"
          rotation="0 180 0"
        ></a-entity>
      </a-entity>
    </a-entity>
    <a-entity id="left-breathing-space"> </a-entity>
    <a-entity id="bedroom">
      <a-entity
        id="rug"
        gltf-model="https://cdn.glitch.com/163fbd9f-ed1c-4912-9b3c-c1bcff04a3f3%2Frug.glb?v=1607328274475"
        position="-2.12113 3.167 0.3112"
        scale="0.015 0.018 0.01071"
        rotation="0 90 0"
        shadow="receive: false"
      ></a-entity>
    </a-entity>
    <a-entity id="upstairs"> </a-entity>
    <a-entity id="office"> </a-entity>
    <a-entity id="bathroom"> </a-entity>

    <a-entity id="bathroom-wall">
      <a-entity
        id="bathroom-wall-1"
        geometry="width: 2"
        material="color: #DDD8DD; side: double"
        src="#test"
        scale="1.5 3 0.3"
        position="1.5 1.5 0.3408"
      ></a-entity>
      <!-- <a-entity
        id="bathroom-wall-2"
        geometry="primitive: box"
        material="color: #DDD8DD; side: double"
        src="#test"
        scale="3 3 0.3"
        rotation="0 90 0"
        position="3 1.5 -1"
      ></a-entity> -->
    </a-entity>

    <a-entity id="walls">
      <a-entity
        id="walls-1"
        position="-6 4.5 0"
        scale="5 3 3"
        rotation="0 90 0"
      >
        <a-entity
          id="walls-1-1"
          geometry="primitive: box"
          material="color: #636363; side: double; transparent: true; opacity: 0.9"
          src="#test"
          scale="1 1 0.02"
        ></a-entity>
        <a-entity
          id="walls-1-2"
          geometry="primitive: box"
          material="color: #DDD8DD; side: double"
          src="#test"
          scale="0.05 1 0.025"
          position="-0.47 0 0"
        ></a-entity>
        <a-entity
          id="walls-1-3"
          geometry="primitive: box"
          material="color: #DDD8DD; side: double"
          src="#test"
          scale="0.05 1 0.025"
          position="0.4743 0 0"
        ></a-entity>
      </a-entity>

      <a-entity
        id="walls-2"
        position="-4 4.5 0"
        rotation="0 90 0"
        scale="5 3 3"
      >
        <a-entity
          id="walls-2-1"
          geometry="primitive: box"
          material="color: #636363; side: double; transparent: true; opacity: 0.9"
          src="#test"
          scale="1 1 0.02"
        ></a-entity>
        <a-entity
          id="walls-2-2"
          geometry="primitive: box"
          material="color: #DDD8DD; side: double"
          src="#test"
          scale="0.05 1 0.025"
          position="-0.47 0 0"
        ></a-entity>
        <a-entity
          id="walls-2-3"
          geometry="primitive: box"
          material="color: #DDD8DD; side: double"
          src="#test"
          scale="0.05 1 0.025"
          position="0.4743 0 0"
        ></a-entity>
      </a-entity>
      <a-entity id="walls-3" position="0 4.5 0" scale="5 3 3" rotation="0 90 0"
        ><a-entity
          id="walls-3-1"
          geometry="primitive: box"
          material="color: #AAAB9C; side: double"
          src="#test"
          scale="0.25 1 0.025"
          position="-0.376 0 0"
        ></a-entity>
        <a-entity
          id="walls-3-2"
          geometry="primitive: box"
          material="color: #AAAB9C; side: double"
          src="#test"
          scale="0.5876 1 0.025"
          position="0.2 0 0"
        ></a-entity>
        <!-- <a-entity
            id="walls-3-3"
            geometry="primitive: box"
            material="color: #DDD8DD; side: double"
            src="#test"
            scale="1 1 0.025"
          ></a-entity> -->
        <a-entity
          id="walls-3-4"
          geometry="width: 2"
          material="color: #AAAB9C; side: double"
          src="#test"
          scale="0.5 1 0.025"
          position="-0.06169 0 0.48511"
          rotation="0 90 0"
        ></a-entity>
      </a-entity>
      <a-entity id="walls-4" position="3 4.5 0" rotation="0 90 0" scale="5 3 3">
        <a-entity
          id="walls-4-1"
          geometry="primitive: box"
          material="color: #DDD8DD; side: double"
          src="#test"
          scale="0.25 1 0.025"
          position="-0.376 0 0"
        ></a-entity>
        <a-entity
          id="walls-4-2"
          geometry="primitive: box"
          material="color: #DDD8DD; side: double"
          src="#test"
          scale="0.5876 1 0.025"
          position="0.2 0 0"
        ></a-entity>
        <!-- <a-entity
            id="walls-4-3"
            geometry="primitive: box"
            material="color: #DDD8DD; side: double"
            src="#test"
            scale="1 1 0.025"
          ></a-entity
        > -->
      </a-entity>
      <a-entity id="walls-5" position="6 3 0" rotation="0 90 0" scale="5 6 3">
        <a-entity
          id="walls-5-1"
          geometry="primitive: box"
          material="src: https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2FBeach-Sand-1.jpg?v=1604070163344; "
          scale="0.04 1 0.150"
          position="-0.47893 0 1.145"
        ></a-entity>
        <a-entity
          id="walls-5-2"
          geometry="primitive: box"
          material="src: https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2FBeach-Sand-1.jpg?v=1604070163344; "
          scale="1 0.05 0.150"
          position="0 0 1.145"
        ></a-entity>
        <a-entity
          id="walls-5-3"
          geometry="primitive: box"
          material="src: https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2FBeach-Sand-1.jpg?v=1604070163344; "
          scale="0.04 1 0.150"
          position="0.48178 0 1.145"
        ></a-entity>
      </a-entity>
      <a-entity id="walls-6" position="0 1.5 0" scale="5 3 3" rotation="0 90 0"
        ><a-entity
          id="walls-6-1"
          geometry="primitive: box"
          material="color: #DDD8DD; side: double"
          src="#test"
          scale="1 1 0.025"
        ></a-entity
      ></a-entity>
    </a-entity>
    <a-entity id="walls-7">
      <a-entity
        id="walls-7-1"
        geometry="width: 2"
        material="color: #CDC2C0; side: double"
        scale="4.5 6 0.3"
        position="4.663 3 -2.442"
      ></a-entity>
      <a-entity
        id="walls-7-2"
        geometry="width: 2"
        material="color: #CDC2C0; side: double"
        scale="3 3 0.3"
        position="-2.88 4.5 -2.414"
      ></a-entity>

      <!-- <a-entity
        id="walls-7-3"
        geometry="width: 2"
        material="color: #CDC2C0; "
        scale="4.78 6 0.3"
        position="4.663 3 2.67"
      ></a-entity>
      <a-entity
        id="walls-7-4"
        geometry="width: 2"
        material="color: #CDC2C0; "
        scale="3 3 0.3"
        position="-2.88 4.5 2.67"
      ></a-entity> -->
    </a-entity>

    <a-entity id="floor">
      <a-entity
        id="bottom-floor"
        rotation="90 0 0"
        scale="6 5 1"
        position="3 0 0"
      >
        <a-entity
          id="bottom-floor-1"
          geometry="primitive: box"
          material=" src:#woodfloor; repeat:4 4"
          scale="1.58757 1 0.025"
          position="0.288 0 0"
        ></a-entity>
      </a-entity>
      <a-entity
        id="top-floor"
        rotation="90 0 0"
        scale="12 5 1"
        position="0 3 0"
      >
        <a-entity
          id="top-floor-1"
          geometry="primitive: box"
          material=" src:#woodfloor; repeat:4 4"
          scale="0.63562 1 0.3"
          position="-0.185 0 0"
        ></a-entity>
        <a-entity
          id="top-floor-2"
          geometry="primitive: box"
          material=" src:#woodfloor; repeat:8 8"
          scale="0.247 1 0.3"
          position="0.377 0 0"
        ></a-entity>
        <a-entity
          id="top-floor-3"
          geometry="primitive: box"
          material=" src:#woodfloor; repeat: 8 8;"
          scale="1 0.701 0.3"
          position="0 -0.147 0"
        ></a-entity>
      </a-entity>
    </a-entity>
    <!-- Furniture -->

    <!-- ARM CHAIR -->
    <a-entity
      id="arm-chair-1"
      position="2.38 3.17 1.115"
      rotation="0 45 0"
      scale="3 3 3"
      event-set__enter="_event: mouseenter; _target: #poufSet2; visible: true"
      event-set__leave="_event: mouseleave; _target: #poufSet2; visible: false"
    >
      <a-entity
        id="pouf2"
        gltf-model="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2Fcomfy_red_white_armchair.glb?v=1607342086754"
        position="1 0 -0.335"
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
      position="4 3.17 -4.274"
      rotation="0 -45 0"
      scale="3 3 3"
      event-set__enter="_event: mouseenter; _target: #poufSet2; visible: true"
      event-set__leave="_event: mouseleave; _target: #poufSet2; visible: false"
    >
      <a-entity
        id="pouf2"
        gltf-model="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2Fcomfy_red_white_armchair.glb?v=1607342086754"
        position="1 0 0.335"
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
        position="-6.34 3.387 5.6"
        scale="0.012 0.012 0.012"
        class="clickable"
        load-texture
        shadow="receive: false"
      >
      </a-entity>
    </a-entity>

    <a-entity
      id="pouf-select"
      position="8.4 0 -0.426"
      scale="0.25 0.25 0.25"
      rotation="0 90 0"
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
    </a-entity>
  </a-scene>
</template>

<script>
require('@/js/aframe/teleport.js')
require('@/js/aframe/loadTexture.js')
export default {}
</script>

<style></style>
