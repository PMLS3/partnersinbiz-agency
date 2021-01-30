<template>
  <vs-card class="min-h-screen">
    <vs-tabs alignment="fixed" position="top">
      <vs-tab label="Class" class="min-h-screen">
        <PageGeneratorComponentEditorClass :schema="edit_comp" />
      </vs-tab>
      <vs-tab label="Inline" class="min-h-screen">
        <PageGeneratorComponentEditorInline :schema="edit_comp" />
      </vs-tab>
      <vs-tab label="Style" class="min-h-screen">
        <PageGeneratorComponentEditorStyle :schema="edit_comp" />
      </vs-tab>
      <vs-tab label="Class" class="min-h-screen">
        <PageGeneratorComponentEditorContent :schema="edit_comp" />
      </vs-tab>
    </vs-tabs>
  </vs-card>
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
