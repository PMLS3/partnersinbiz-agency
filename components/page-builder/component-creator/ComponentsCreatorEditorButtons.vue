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
  props: ['schema', 'index', 'mainIndex'],
  data() {
    return {
      can_submit: true,
    }
  },
  methods: {
    add() {
      $nuxt.$emit('add_comp', this.schema.place, this.schema, this.mainIndex)
    },
    add_quick() {
      $nuxt.$emit(
        'add_comp_quick',
        this.schema.place,
        this.schema,
        this.mainIndex
      )
    },
    edit() {
      $nuxt.$emit('edit_comp', this.schema, this.mainIndex)
    },
    deleteItem() {
      console.log('here to delete item')

      let payload = {
        schema: this.schema,
        MainIndex: this.mainIndex,
      }
      setTimeout(() => {
        console.log('payload:', payload)
        this.$store.commit('page_builder/DELETE_COMPONENT', payload)
      }, 1000)

      // }
    },
  },
}
</script>

<style></style>
