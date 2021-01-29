<template>
  <nav
    :class="schema.class"
    :style="schema.style"
    @click="open_pop = !open_pop"
  >
    {{ schema.innerText }}
    <vs-popup
      classContent="popup-example"
      :title="schema.title"
      :active.sync="open_pop"
    >
      <ComponentsCreatorEditorButtons
        :schema="schema"
        :index="index"
        :mainIndex="mainIndex"
      />
    </vs-popup>
    <ComponentCreatorEditor
      v-for="(field, ind) in schema.children"
      :key="ind"
      :schema="field"
    />
  </nav>
</template>

<script>
export default {
  name: 'NAV',
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
    }
  },
}
</script>
