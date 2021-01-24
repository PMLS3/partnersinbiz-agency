<template>
  <div class="w-screen h-full">
    <!-- <div style="width: 100%" v-for="(schema, index) in list" :key="index"> -->
    <!-- {{ schema }} -->
    <ComponentCreatorEditor
      v-for="(field, ind) in list"
      :key="ind"
      :schema="field"
    />
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    viewtype: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style></style>
