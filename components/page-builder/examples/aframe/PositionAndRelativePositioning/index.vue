<template>
  <a-scene>
    <!-- Box 16:9 Panel | Parent Entity -->
    <a-box color="#689F38" width="8" height="4.5" depth="0.2" position="0 3 -7">
      <!-- Circle | Child Entity -->
      <a-circle color="#333333" side="double" position="2 0 0.11"> </a-circle>
    </a-box>

    <!-- Yellow Circle -->
    <a-circle color="#FFC107" side="double" position="-2 3 -6.89"> </a-circle>

    <!-- Cylinder -->
    <a-cylinder
      color="#616161"
      height="2"
      radius="2"
      segments-radial="6"
      open-ended="true"
      side="double"
    >
    </a-cylinder>
  </a-scene>
</template>

<script>
if (process.client) {
  //   require('../js/sphereexpand.js')
}

export default {
  name: 'position-and-relative-position',
 
}
</script>

<style></style>