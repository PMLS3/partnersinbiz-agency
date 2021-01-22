<template>
  <a-scene entity-spawner>
    <!-- Camera Rig -->
    <a-entity position="0 0 8">
      <!-- Camera -->
      <a-camera id="cam" look-controls="pointerLockEnabled: true">
        <a-cursor></a-cursor>
      </a-camera>
    </a-entity>

    <!-- Ground -->
    <a-plane color="#484848" shader="flat" rotation="-90 0 0" scale="6 4 1">
    </a-plane>

    <!-- Cylinder -->
    <a-cylinder color="#FFAA00" radius="0.5" position="0 0.5 0"> </a-cylinder>
  </a-scene>
</template>

<script>
if (process.client) {
  require('@/js/aframe/entitySpawner.js')
}

export default {
  name: 'entity-spawner'
}
</script>

<style></style>
