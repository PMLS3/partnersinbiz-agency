<template>
  <div
    class="relative"
    :class="schema.class"
    :style="schema.style"
    :slot="schema.slot"
  >
    <div
      class="absolute inset-x-0 flex items-center w-3/4 mx-auto -mt-1 rounded-lg rounded-t-none md:w-2/5"
    >
      <vs-button
        icon-pack="feather"
        radius
        icon="icon-edit-2"
        size="small"
        @click="edit()"
      ></vs-button>
      <vs-button
        icon-pack="feather"
        size="small"
        color="success"
        radius
        icon="icon-plus-circle"
        @click="add()"
      ></vs-button>

      <vs-button
        icon-pack="feather"
        size="small"
        color="danger"
        radius
        icon="icon-trash"
      ></vs-button>
    </div>
    <ComponentCreatorEditor
      v-for="(field, ind) in schema.children"
      :key="ind"
      :schema="field"
    ></ComponentCreatorEditor>
  </div>
</template>

<script>
export default {
  name: 'DIV',
  props: ['schema'],
  components: {
    ComponentCreatorEditor: () =>
      import(
        '@/components/page-builder/component-creator/ComponentCreatorEditor.vue'
      ),
  },
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
