<template>
  <div class="grid grid-flow-col auto-cols-max">
    <vs-button
      icon-pack="feather"
      icon="icon-edit-2"
      size="small"
      @click="edit()"
      >Edit</vs-button
    >
    <vs-button
      icon-pack="feather"
      size="small"
      color="success"
      icon="icon-plus-circle"
      @click="add()"
      >Add</vs-button
    >

    <vs-button icon-pack="feather" size="small" color="danger" icon="icon-trash"
      >Delete</vs-button
    >
  </div>
</template>

<script>
export default {
  name: 'ComponentsCreatorEditorButtons',
  props: ['schema'],

  methods: {
    add() {
      $nuxt.$emit('add_comp', this.schema.place)
    },
    edit() {
      $nuxt.$emit('edit_comp', this.schema)
    },
    delete() {
      $nuxt.$emit('delete_comp', this.schema.place)
    },
  },
}
</script>

<style></style>
