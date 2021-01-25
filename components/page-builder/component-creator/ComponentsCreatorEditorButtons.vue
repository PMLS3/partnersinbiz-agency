<template>
  <div class="grid grid-cols-4 gap-2">
    <vs-tooltip :text="`Edit ${schema.name}`">
      <vs-button
        icon-pack="feather"
        icon="icon-edit-2"
        size="small"
        @click="edit()"
      ></vs-button>
    </vs-tooltip>

    <vs-tooltip :text="`Add to ${schema.name}`">
      <vs-button
        icon-pack="feather"
        size="small"
        color="success"
        icon="icon-plus-circle"
        @click="add()"
      ></vs-button>
    </vs-tooltip>
    <vs-tooltip :text="`Quick Adds ${schema.name}`">
      <vs-button
        size="small"
        color="blue"
        icon="speed"
        @click="add_quick()"
      ></vs-button>
    </vs-tooltip>
    <vs-tooltip :text="`Delete ${schema.name}`">
      <vs-button
        icon-pack="feather"
        size="small"
        color="danger"
        icon="icon-trash"
        @click="deleteItem()"
      ></vs-button>
    </vs-tooltip>
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
    add_quick() {
      $nuxt.$emit('add_comp_quick', this.schema.place)
    },
    edit() {
      $nuxt.$emit('edit_comp', this.schema)
    },
    deleteItem() {
      setTimeout(() => {
        $nuxt.$emit('delete_comp', this.schema.place)
      }, 1000)
    },
  },
}
</script>

<style></style>
