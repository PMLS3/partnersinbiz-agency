<template>
  <img
    :src="schema.src"
    :class="schema.class"
    :style="schema.style"
    @click="open_pop = !open_pop"
  />
  <!-- <vs-popup
      classContent="popup-example"
      :title="schema.title"
      :active.sync="open_pop"
      v-if='open_pop'
    >
      <ComponentsCreatorEditorButtons
        :schema="schema"
        :index="index"
        :mainIndex="mainIndex"
      />
    </vs-popup> -->
  <!-- <ComponentCreatorEditor
      v-for="(field, ind) in schema"
      :key="ind"
      :schema="field"
    /> -->
  <!-- </img> -->
</template>

<script>
export default {
  name: 'IMGS',
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
