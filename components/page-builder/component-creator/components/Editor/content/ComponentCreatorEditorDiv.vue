<template>
  <div
    class="relative border border-orange-500 border-dashed"
    :class="schema.class"
    :style="schema.style"
    :slot="schema.slot"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    @dragenter.prevent
    @dragover.prevent
    @drop.prevent="drop(schema)"
  >
    {{ schema.innerText }}
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
