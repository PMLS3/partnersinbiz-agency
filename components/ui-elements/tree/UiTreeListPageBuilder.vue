<template>
  <div class="w-full h-full px-12">
    <div class="w-full" v-for="(comp, index) in list" :key="index">
      <UiTreeMenu
        v-for="(field, ind) in comp"
        :key="ind"
        :schema="field"
        :mainIndex="index"
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
