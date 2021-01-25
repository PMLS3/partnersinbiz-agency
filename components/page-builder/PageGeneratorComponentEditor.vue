<template>
  <div>
    <PageGeneratorComponentEditorClass :schema="edit_comp" />
  </div>
</template>

<script>
export default {
  props: {
    edit_comp: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style></style>
