<template>
  <a-scene
    cursor="rayOrigin: mouse"
    raycaster="objects: .clickable"
    background="color: #1D1D1D"
  >
    <a-assets>
      <a-image
        id="test"
        src="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2Fdcmap_naughtOne_portion_armchair_2_arms_5.jpg?v=1607340502693"
      ></a-image>
      <img
        id="woodfloor"
        src="https://cdn.glitch.com/c388f728-37b7-4af9-af03-1ee7430663e7%2F4727356277_66fb5f938f_o.jpg?1544178281422"
      />

      <a-assets-item
        id="stairs"
        src="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2FSPIRAL_STAIRCASE.glb?v=1607368795180"
      ></a-assets-item>

      <img
        id="picasso"
        src="https://cdn.glitch.com/f2ee9d74-9726-4bed-9c30-2d49d6391dee%2FPablo_Picasso_-_Womanwith_a_Mandolin_-_Ermitage%20(1).jpg?1547166417213"
      />
    </a-assets>

    <a-entity
      id="cameraRig"
      position="0 10 10"
      movement-controls="fly: true; speed: 0.3"
      animation="property: position; to: 1 2.5 3; dur: 5000; easing: linear; loop: false"
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

    <a-entity id="house-shell" position="0 0 -5">
      <a-entity id="roof">
        <a-entity
          id="roof-top"
          geometry="primitive: box"
          material="color: #DDD8DD; side: double"
          rotation="90 0 0"
          position="1.77 6 0"
          scale="15.6 5 0.02"
          src="#test"
        ></a-entity>
      </a-entity>
      <a-entity id="entrance">
        <a-entity
          id="spiral-stair"
          gltf-model="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2Fstairsss.glb?v=1607370636147"
          position="2.548 1.213 0.92201"
          scale="1.7 1.7 1.2"
          shadow="receive: false"
          rotation="0 180 0"
        ></a-entity>
      </a-entity>
      <a-entity id="living-room">
        <a-entity
          id="entrance-light"
          gltf-model="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2FPENDENTE_2.glb?v=1607406777809"
          position="0.5 4.49229 0.811"
          scale="0.03 0.03 0.03"
          rotation=""
          shadow="receive: false"
        ></a-entity>
        <a-light
          type="point"
          position="0.5 1.78675 0.90777"
          light="color: #f2f2f2; angle: 20; intensity: 0.2; castShadow: true"
          visible=""
          rotation="-82.22861092599523 179.9998479605043 179.9998479605043"
          id="entrance-light-1"
        ></a-light>
        <a-entity
          id="multi-lights"
          gltf-model="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2FPENDENTE_3.glb?v=1607406777358"
          position="6.77329 2.96197 -0.82543"
          scale="0.1 0.1 0.1"
          shadow="receive: false"
          rotation="0 90 0"
        ></a-entity>
        <a-light
          type="point"
          position="6.77329 2.96197 -0.82543"
          light="color: #f2f2f2; angle: 20; intensity: 0.2; castShadow: true"
          visible=""
          rotation="-82.22861092599523 179.9998479605043 179.9998479605043"
          id="multi-light-1"
        ></a-light>

        <a-entity
          id="bonzai"
          gltf-model="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2FBONZAI.glb?v=1607407498792"
          position="-5.09686 3.12206 -2.49181"
          scale="0.02 0.02 0.02"
          shadow="receive: false"
          rotation="0 180 0"
        ></a-entity>

        <a-entity
          id="outdoor-plant"
          gltf-model="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2FPLANT_OUTDOORS.glb?v=1607407595229"
          position="8.55283 -0.02657 -1.18849"
          scale="0.005 0.005 0.005"
          shadow="receive: false"
          rotation="0 180 0"
        ></a-entity>

        <a-entity
          id="kitchen"
          gltf-model="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2FSIMPLE_KITCHEN.glb?v=1607408751429"
          position="5.16579 0.01941 6.97877"
          scale="0.8 0.9 0.8"
          shadow="receive: false"
          rotation="0 90 0"
        ></a-entity>

        <a-entity
          id="table-chairs"
          gltf-model="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2FEXTERNAL_TABLE_CHAIRS.glb?v=1607410976279"
          position="5.90179 0.01941 -0.29156"
          scale="0.4 0.3 0.3"
          shadow="receive: false"
          rotation="0 90 0"
        ></a-entity>

        <!-- Picaso Painting -->
        <a-entity
          id="picassodisplay"
          position="7.6201 2.71722 -2.2569"
          scale="0.6 0.6 0.6"
          class="homeworld"
          ><a-plane
            id="picassoframe"
            color="#191817"
            width="3"
            height="4"
            material=""
            geometry=""
          ></a-plane>
          <a-plane
            id="picassopainting"
            src="#picasso"
            position="0 0 0.1"
            width="2.5"
            height="3.5"
            material=""
            geometry=""
          ></a-plane
        ></a-entity>
      </a-entity>
      <a-entity id="left-breathing-space">
        <a-entity
          id="indoor-plant"
          gltf-model="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2FINDOOR_PLANT.glb?v=1607407582445"
          position="0.42876 0.03862 1.33137"
          scale="0.2 0.3 0.2"
          shadow="receive: false"
          rotation="0 180 0"
        ></a-entity>
      </a-entity>
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
      <a-entity id="upstairs">
        <a-entity
          id="round-light"
          gltf-model="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2FPENDENTE_1.glb?v=1607406784432"
          position="-2.12113 5.23457 0.3112"
          scale="0.02 0.02 0.02"
          rotation="0 90 0"
          shadow="receive: false"
        ></a-entity>
        <!-- <a-light
          type="ambient"
          position="-2.12113 5.23457 0.3112"
          light="color: #f2f2f2; angle: 20; intensity: 0.01; distance: 0.5"
          visible=""
          rotation="-82.22861092599523 179.9998479605043 179.9998479605043"
          id="round-light-1"
        ></a-light> -->
      </a-entity>
      <a-entity id="office">
        <a-entity
          id="round_table"
          gltf-model="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2FROUND_TABLE.glb?v=1607412303854"
          position="4.52562 3.11175 -0.29156"
          scale="0.1 0.1 0.1"
          shadow="receive: false"
          rotation="0 90 0"
        ></a-entity>
      </a-entity>
      <a-entity id="bathroom"> </a-entity>
      <a-entity id="hallway">
        <a-entity
          id="bathroom-door"
          gltf-model="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2FDOOR.glb?v=1607411293711"
          position="0.86234 3.13411 0.3112"
          scale="0.01 0.01 0.01"
          rotation=""
          shadow="receive: false"
        ></a-entity>

        <a-entity
          id="redcardinal_painting"
          gltf-model="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2FRED_CARDINAL_PAINTING.glb?v=1607411775556"
          position="1.42694 4.52306 0.00177"
          scale="0.03 0.03 0.03"
          rotation=""
          shadow="receive: false"
        ></a-entity>
        <a-entity id="hallway-lights" position="0.27 0 0">
          <a-entity
            id="hallway-light-1"
            gltf-model="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2FLIGHTS1.glb?v=1607406779528"
            position="0.5 5.534 0.811"
            scale="1 1 1"
            rotation=""
            shadow="receive: false"
          ></a-entity>
          <a-light
            type="point"
            position="0.5 5.534 0.811"
            light="color: #f2f2f2; angle: 20; intensity: 0.2; castShadow: true"
            visible=""
            rotation="-82.22861092599523 179.9998479605043 179.9998479605043"
            id="hallway-light-1-1"
          ></a-light>

          <a-entity
            id="hallway-light-2"
            gltf-model="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2FLIGHTS1.glb?v=1607406779528"
            position="1.05 5.534 0.811"
            scale="1 1 1"
            rotation=""
            shadow="receive: false"
          ></a-entity>
          <a-light
            type="point"
            position="1.05 5.534 0.811"
            light="color: #f2f2f2; angle: 20; intensity: 0.2; castShadow: true"
            visible=""
            rotation="-82.22861092599523 179.9998479605043 179.9998479605043"
            id="hallway-light-1-1"
          ></a-light>

          <a-entity
            id="hallway-light-3"
            gltf-model="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2FLIGHTS1.glb?v=1607406779528"
            position="1.505 5.534 0.811"
            scale="1 1 1"
            rotation=""
            shadow="receive: false"
          ></a-entity>
          <a-light
            type="point"
            position="1.505 5.534 0.811"
            light="color: #f2f2f2; angle: 20; intensity: 0.2; castShadow: true"
            visible=""
            rotation="-82.22861092599523 179.9998479605043 179.9998479605043"
            id="hallway-light-1-1"
          ></a-light>

          <a-entity
            id="hallway-light-4"
            gltf-model="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2FLIGHTS1.glb?v=1607406779528"
            position="2.1 5.534 0.811"
            scale="1 1 1"
            rotation=""
            shadow="receive: false"
          ></a-entity>
          <a-light
            type="point"
            position="2.1 5.534 0.811"
            light="color: #f2f2f2; angle: 20; intensity: 0.2; castShadow: true"
            visible=""
            rotation="-82.22861092599523 179.9998479605043 179.9998479605043"
            id="hallway-light-1-1"
          ></a-light>
        </a-entity>
      </a-entity>

      <a-entity id="bathroom-wall">
        <a-entity
          id="bathroom-wall-1"
          geometry="width: 2"
          material="color: #DDD8DD; side: double"
          src="#test"
          scale="2.0479 3 0.3"
          position="1.9832 1.5 0.72731"
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
        <a-entity
          id="walls-3"
          position="0 4.5 0"
          scale="5 3 3"
          rotation="0 90 0"
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
        <a-entity
          id="walls-4"
          position="3 4.5 0"
          rotation="0 90 0"
          scale="5 3 3"
        >
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

          <a-entity
            id="walls-5-4"
            geometry=""
            position="0.013 0 1.145"
            material="color: #636363; side: double; transparent: true; opacity: 0.9"
            src="#test"
            scale="1 1 0.02"
          ></a-entity>
        </a-entity>
        <a-entity
          id="walls-6"
          position="0 1.5 0"
          scale="5 3 3"
          rotation="0 90 0"
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
          class="collision"
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
          class="collision"
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
        switch-balls
        event-set__enter="_event: mouseenter; scale: 3.2 3.2 3.2"
        event-set__leave="_event: mouseleave; scale: 3 3 3"
      >
        <a-entity
          id="armChair"
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
        switch-balls
        event-set__enter="_event: mouseenter; scale: 3.2 3.2 3.2"
        event-set__leave="_event: mouseleave; scale: 3 3 3"
      >
        <a-entity
          id="armChair2"
          gltf-model="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2Fcomfy_red_white_armchair.glb?v=1607342086754"
          position="1 0 0.335"
          scale="0.05 0.05 0.05"
          class="clickable"
          load-texture
          shadow="receive: false"
        >
        </a-entity>
      </a-entity>

      <!-- POUF -->
      <a-entity
        id="couch-corner"
        position="-7 0.4 -5.8"
        rotation="0 90 0"
        scale="0.8 0.8 0.8"
        switch-balls
        event-set__enter="_event: mouseenter; scale: 0.83 0.83 0.83"
        event-set__leave="_event: mouseleave; scale: 0.8 0.8 0.8"
      >
        <a-entity
          id="cornerCouch"
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
        switch-balls
        event-set__enter="_event: mouseenter; scale: 0.3 0.3 0.3"
        event-set__leave="_event: mouseleave; scale: 0.25 0.25 0.25"
      >
        <a-entity
          id="pouf"
          gltf-model="https://cdn.glitch.com/f91edd71-1dfd-4c2f-9aa7-84cee63f2bc2%2FsinglePouf.glb?v=1606245193748"
          position="-2.81077 0 0.2659"
          scale="0.007 0.007 0.007"
          load-texture=""
          shadow="receive: false"
          class="clickable"
        ></a-entity>
      </a-entity>
      <a-entity
        geometry="width: 10; height: 0.11"
        position="5.0737 0 0"
        visible="false"
        rotation=""
        id="collision-world"
        class="collision"
        scale="1 1 4.5"
      ></a-entity>
      <a-entity
        geometry="width: 10; height: 0.11"
        position="2.92945 0.97124 1.69128"
        visible="false"
        rotation="0 0 23.713577224874513"
        id="collision-world2"
        scale="0.38 1 1"
        class="collision"
      ></a-entity>
      <a-entity
        geometry="width: 10; height: 0.11"
        position="3.05241 2.03712 1.02435"
        visible="false"
        rotation="0 0 -35.00944015587869"
        id="collision-world3"
        scale="0.34 1 1"
        class="collision"
      ></a-entity>
      <a-entity
        geometry="width: 10; height: 0.11"
        position="1.63429 3.12121 0.71134"
        visible="false"
        rotation=""
        id="collision-world4"
        class="collision"
        scale="0.84 1 1"
      ></a-entity>
      <a-entity
        geometry="width: 10; height: 0.11"
        position="1.63429 3.12121 0.71134"
        visible="false"
        rotation=""
        id="collision-world5"
        class="collision"
        scale="0.84 1 1"
      ></a-entity>
    </a-entity>
  </a-scene>
</template>

<script>
// require('@/js/aframe/teleport.js')
// require('@/js/aframe/loadTexture.js')
export default {}
</script>

<style></style>
