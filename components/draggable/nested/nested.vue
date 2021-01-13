<template>
  <draggable class="dragArea" :list="children" :group="{ name: 'g1' }">
    <li v-for="el in children" :key="el.title">
      <p>{{ el.title }}</p>
      <nested-draggable :children="el.children" />
    </li>
  </draggable>
</template>
<script>
export default {
  props: {
    children: {
      required: true,
      type: Array,
    },
  },
  components: {
    draggable: () => (process.client ? import('vuedraggable') : null),
  },
  name: 'nested-draggable',
}
</script>
<style scoped>
.dragArea {
  min-height: 50px;
  outline: 1px dashed;
}
</style>
