<template>
  <div>
    <div style="width: 100%" v-for="(schema, index) in list" :key="index">
      <ComponentCreatorEditor
        v-for="(field, ind) in schema"
        :key="ind"
        :schema="field"
      />
    </div>
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
