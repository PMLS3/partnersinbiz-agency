<template>
  <div>
    <div v-for="(comp, index) in list" :key="index">
      <UiTreeMenu
        v-for="(field, ind) in comp"
        :key="ind"
        :schema="field"
        :mainIndex="index"
        :depth="0"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiTreeListPageBuilder',
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
