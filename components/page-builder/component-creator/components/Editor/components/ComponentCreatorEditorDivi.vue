<template>
  <div
    class="relative"
    :class="schema.class"
    :style="schema.style"
    :slot="schema.slot"
  >
    {{ mainIndex }} - {{ schema.id }}
    <div
      class="absolute inset-x-0 flex items-center w-3/4 mx-auto -mt-1 rounded-lg rounded-t-none md:w-2/5"
    >
      <ComponentsCreatorEditorButtons
        :schema="schema"
        :index="index"
        :mainIndex="mainIndex"
      />
    </div>
    <ComponentCreatorEditor
      v-for="(field, ind) in schema.children"
      :key="ind"
      :schema="field"
      :mainIndex="mainIndex"
    ></ComponentCreatorEditor>
  </div>
</template>

<script>
export default {
  name: 'DIV',
  props: ['schema', 'index', 'mainIndex'],
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
    add_quick() {
      $nuxt.$emit('add_comp_quick', this.schema.place)
    },
  },
}
</script>
