<template>
  <a
    :class="schema.class"
    :style="schema.style"
    :href="schema.href"
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
      v-for="(field, ind) in schema.childre"
      :key="ind"
      :schema="field"
    />
  </a>
</template>

<script>
export default {
  name: 'PS',
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
