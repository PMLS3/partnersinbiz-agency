<template>
  <div
    class="relative border border-orange-500 border-dashed"
    :class="schema.class"
    :style="schema.style"
    :slot="schema.slot"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <ComponentsCreatorEditorButtons
      :schema="schema"
      :index="index"
      :mainIndex="mainIndex"
      class="absolute top-0"
      v-if="schema.place.length == 1 && hover"
    />

    <ComponentsCreatorEditorButtons
      :schema="schema"
      :index="index"
      :mainIndex="mainIndex"
      v-if="schema.place.length > 1 && hover"
      class="absolute top-0 right-0 mr-1"
    />
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
  data() {
    return {
      hover: false,
    }
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
