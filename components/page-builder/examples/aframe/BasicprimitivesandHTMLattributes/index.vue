<template>
  <a-scene>
    <!-- Box -->
    <a-box color="#689F38" width="7" height="2.5" depth="0.5"> </a-box>

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
  name: 'basic-primitives-and-html-attributes'
}
</script>

<style></style>
