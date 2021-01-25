<template>
  <div class="w-screen h-full">
    <ComponentCreatorEditor
      v-for="(field, ind) in list"
      :key="ind"
      :schema="field"
    />
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
