<template>
  <a-scene>
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
    </a-assets>
    <a-entity id="house-shell" position="0 0 -5">
      <a-entity id="roof">
        <a-entity
          id="roof-top"
          geometry="primitive: box"
          material="color: blue; side: double"
          rotation="90 0 0"
          position="1.77 6 0"
          scale="15.6 5 0.02"
          src="#test"
        ></a-entity>
      </a-entity>
      <a-entity id="left-breathing-space"> </a-entity>
      <a-entity id="bedroom"> </a-entity>
      <a-entity id="upstairs"> </a-entity>
      <a-entity id="office"> </a-entity>
      <a-entity id="bathroom"> </a-entity>

      <a-entity id="bathroom-wall">
        <a-entity
          id="bathroom-wall-1"
          geometry="width: 2"
          material="color: blue; side: double"
          src="#test"
          scale="1.5 3 0.3"
          position="1.5 1.5 0.3408"
        ></a-entity>
        <a-entity
          id="bathroom-wall-2"
          geometry="primitive: box"
          material="color: blue; side: double"
          src="#test"
          scale="3 3 0.3"
          rotation="0 90 0"
          position="3 1.5 -1"
        ></a-entity>
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
            material="color: #7a7a7a; side: double; transparent: true"
            src="#test"
            scale="1 1 0.025"
          ></a-entity>
          <a-entity
            id="walls-1-2"
            geometry="primitive: box"
            material="color: blue; side: double"
            src="#test"
            scale="0.05 1 0.025"
            position="-0.47 0 0"
          ></a-entity>
          <a-entity
            id="walls-1-3"
            geometry="primitive: box"
            material="color: blue; side: double"
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
            material="color: #707070; side: double; transparent: true"
            src="#test"
            scale="1 1 0.025"
          ></a-entity>
          <a-entity
            id="walls-2-2"
            geometry="primitive: box"
            material="color: blue; side: double"
            src="#test"
            scale="0.05 1 0.025"
            position="-0.47 0 0"
          ></a-entity>
          <a-entity
            id="walls-2-3"
            geometry="primitive: box"
            material="color: blue; side: double"
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
            material="color: blue; side: double"
            src="#test"
            scale="0.25 1 0.025"
            position="-0.376 0 0"
          ></a-entity>
          <a-entity
            id="walls-3-2"
            geometry="primitive: box"
            material="color: blue; side: double"
            src="#test"
            scale="0.5876 1 0.025"
            position="0.2 0 0"
          ></a-entity>
          <!-- <a-entity
            id="walls-3-3"
            geometry="primitive: box"
            material="color: blue; side: double"
            src="#test"
            scale="1 1 0.025"
          ></a-entity> -->
          <a-entity
            id="walls-3-4"
            geometry="width: 2"
            material="color: blue; side: double"
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
            material="color: blue; side: double"
            src="#test"
            scale="0.25 1 0.025"
            position="-0.376 0 0"
          ></a-entity>
          <a-entity
            id="walls-4-2"
            geometry="primitive: box"
            material="color: blue; side: double"
            src="#test"
            scale="0.5876 1 0.025"
            position="0.2 0 0"
          ></a-entity>
          <!-- <a-entity
            id="walls-4-3"
            geometry="primitive: box"
            material="color: blue; side: double"
            src="#test"
            scale="1 1 0.025"
          ></a-entity
        > -->
        </a-entity>
        <a-entity id="walls-5" position="6 3 0" rotation="0 90 0" scale="5 6 3">
          <a-entity
            id="walls-5-1"
            geometry="primitive: box"
            material="envMap: #buildingoutside; roughness: 0"
            scale="0.04 1 0.150"
            position="-0.47893 0 1.145"
          ></a-entity>
          <a-entity
            id="walls-5-2"
            geometry="primitive: box"
            material="envMap: #buildingoutside; roughness: 0"
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
        <a-entity
          id="walls-6"
          position="0 1.5 0"
          scale="5 3 3"
          rotation="0 90 0"
          ><a-entity
            id="walls-6-1"
            geometry="primitive: box"
            material="color: blue; side: double"
            src="#test"
            scale="1 1 0.025"
          ></a-entity
        ></a-entity>
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
            material="color: blue; side: double"
            src="#test"
            scale="0.63562 1 0.3"
            position="-0.185 0 0"
          ></a-entity>
          <a-entity
            id="top-floor-2"
            geometry="primitive: box"
            material="color: blue; side: double"
            src="#test"
            scale="0.247 1 0.3"
            position="0.377 0 0"
          ></a-entity>
          <a-entity
            id="top-floor-3"
            geometry="primitive: box"
            material="color: blue; side: double"
            src="#test"
            scale="1 0.701 0.3"
            position="0 -0.147 0"
          ></a-entity>
        </a-entity>
      </a-entity>
    </a-entity>
  </a-scene>
</template>

<script>
export default {}
</script>

<style></style>
