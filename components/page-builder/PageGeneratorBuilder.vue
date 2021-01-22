<template>
  <div>
    <div class="grid grid-cols-3 gap-4">
      <!-- <ComponentsSelection /> -->
      <ExampleWireFrame />
      <div
        v-for="(schema, index) in grids"
        :key="index"
        class="col-span-2"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      grids: [],
    }
  },
}
</script>

<style></style>
