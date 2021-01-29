<template>
  <transition-group
    class="instruments"
    :class="schema.class"
    :name="schema.name"
    :style="schema.style"
    :slot="schema.slot"
    @click="open_pop = !open_pop"
    tag="div"
  >
    <!-- {{ schema.innerText }} -->
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
    <!-- <span v-for="item in items" v-bind:key="item" class="list-item">
      {{ item }}
    </span> -->
    <!-- <div> -->
    <ComponentCreatorEditor
      v-for="(field, index) in schema.children"
      v-bind:key="index + 1"
      :schema="field"
    />
    <!-- </div> -->

    <!-- <p>Hello World</p> -->
  </transition-group>
</template>

<script>
export default {
  name: 'TRANSITIONS',
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
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    }
  },
}
</script>
