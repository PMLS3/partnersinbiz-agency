<template>
  <div>
    <div
      class="relative h-12 border border-orange-500 border-dashed"
      :style="indent"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      @dragenter.prevent
      @dragover.prevent
      @drop.prevent="drop(schema)"
    >
      {{ schema.title }}

      <ComponentsCreatorEditorButtons
        :schema="schema"
        :index="index"
        :mainIndex="mainIndex"
        class="absolute top-0 right-0 mr-1"
      />
    </div>
    <UiTreeMenu
      v-for="(field, ind) in schema.children"
      :key="ind"
      :schema="field"
      :mainIndex="mainIndex"
      :depth="depth + 1"
    />
  </div>
</template>

<script>
export default {
  name: 'UiTreeItem',
  props: ['schema', 'index', 'mainIndex', 'depth'],
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
  computed: {
    indent() {
      return { transform: `translate(${this.depth * 50}px)` }
    },
  },
  methods: {
    drop(item) {
      let payload = {
        schema: item,
        MainIndex: this.mainIndex,
      }
      setTimeout(() => {
        console.log('payload:', payload)
        this.$store.commit('page_builder/DRAG_END_COMPONENT', payload)
      }, 1000)
    },
    dragleave(evt, item) {
      console.log('drag leave', evt, item)
    },
    dragover(evt, item) {
      console.log('dragover', evt, item)
    },
  },
}
</script>
