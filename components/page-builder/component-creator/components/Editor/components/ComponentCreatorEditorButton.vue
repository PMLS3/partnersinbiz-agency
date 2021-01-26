<template>
  <button
    @click="open_pop = !open_pop"
    :class="schema.class"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    {{ schema.innerText }}

    <ComponentsCreatorEditorButtons
      :schema="schema"
      :index="index"
      :mainIndex="mainIndex"
      v-if="hover"
    />
  </button>
</template>

<script>
export default {
  name: 'buttons',
  props: ['schema', 'index', 'mainIndex'],

  components: {
    ComponentCreatorEditor: () =>
      import(
        '@/components/page-builder/component-creator/ComponentCreatorEditor.vue'
      ),
  },
  data() {
    return {
      open_pop: false,
      hover: false,
    }
  },
}
</script>
