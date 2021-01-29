<template>
  <div>
    <input
      :class="schema.class"
      :style="schema.style"
      :type="schema.type"
      :placeholder="schema.placeholder"
      @click="open_pop = !open_pop"
    />

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
  </div>
</template>

<script>
export default {
  name: 'INPUT',
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
