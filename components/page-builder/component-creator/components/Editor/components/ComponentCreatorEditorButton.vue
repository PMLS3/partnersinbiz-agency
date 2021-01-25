<template>
  <button @click="open_pop = !open_pop" :class="schema.class">
    {{ schema.innerText }}
    <vs-popup
      classContent="popup-example"
      :title="schema.title"
      :active.sync="open_pop"
    >
      <ComponentsCreatorEditorButtons :schema="schema" />
    </vs-popup>
  </button>
</template>

<script>
export default {
  name: 'buttons',
  props: ['schema'],
  components: {
    ComponentCreatorEditor: () =>
      import(
        '@/components/page-builder/component-creator/ComponentCreatorEditor.vue'
      ),
  },
  data() {
    return {
      open_pop: false,
    }
  },
}
</script>
