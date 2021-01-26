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
    @drop.prevent="drop($event, schema)"
  >
    <vs-button
      icon="drag_indicator"
      class="absolute top-0"
      v-if="schema.place.length == 1 && hover"
      draggable
      @dragstart="startDrag($event, schema)"
    ></vs-button>
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
    <vs-button
      icon="drag_indicator"
      v-if="schema.place.length > 1 && hover"
      class="absolute top-0 right-0 mr-1"
      draggable
      @dragstart="startDrag($event, schema)"
    ></vs-button>
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
    // add() {
    //   $nuxt.$emit('add_comp', this.schema.place)
    // },
    // edit() {
    //   $nuxt.$emit('edit_comp', this.schema)
    // },
    // delete() {
    //   $nuxt.$emit('delete_comp', this.schema.place)
    // },
    // add_quick() {
    //   $nuxt.$emit('add_comp_quick', this.schema.place)
    // },
    drop(evt, item) {
      console.log('Drop drag', evt, item)
      // evt.dataTransfer.dropEffect = 'move'
      // evt.dataTransfer.effectAllowed = 'move'
      // evt.dataTransfer.setData('itemID', item.id)
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
    startDrag(evt, item) {
      console.log('start Drag', evt, item)

      let payload = {
        schema: item,
        MainIndex: this.mainIndex,
      }
      setTimeout(() => {
        console.log('payload:', payload)
        this.$store.commit('page_builder/DRAG_START_COMPONENT', payload)
      }, 1000)
    },
  },
}
</script>
