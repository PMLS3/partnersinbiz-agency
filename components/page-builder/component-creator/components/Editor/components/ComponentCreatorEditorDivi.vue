<template>
  <div
    class="relative"
    :class="schema.class"
    :style="schema.style"
    :slot="schema.slot"
  >
    <div
      class="flex pointer-events-auto profile-actions"
      style="
        position: absolute;
        margin-top: 1px;
        margin-right: 2px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 200;
      "
    >
      <vs-button
        icon-pack="feather"
        radius
        icon="icon-edit-2"
        size="small"
        @click="edit()"
      ></vs-button>
      <vs-button
        icon-pack="feather"
        size="small"
        color="success"
        radius
        icon="icon-plus-circle"
        @click="add()"
      ></vs-button>

      <vs-button
        icon-pack="feather"
        size="small"
        color="danger"
        radius
        icon="icon-trash"
      ></vs-button>
    </div>
    <ComponentCreatorEditor
      v-for="(field, ind) in schema.children"
      :key="ind"
      :schema="field"
    ></ComponentCreatorEditor>
  </div>
</template>

<script>
export default {
  name: 'DIV',
  props: ['schema'],
  components: {
    ComponentCreatorEditor: () =>
      import(
        '@/components/page-builder/component-creator/ComponentCreatorEditor.vue'
      ),
  },
  methods: {
    add() {
      $nuxt.$emit('add_comp', this.schema.place)
      // let payload = {
      //   active_card: true,
      //   component_show: 'grid',
      //   place: this.schema.place,
      //   index: 1,
      // }
      // this.$store.commit('page_builder/COMPONENTS_NEEDED', payload)
    },
    edit() {
      let payload = {
        active_card: true,
        component_show: 'divi',
        schema: this.schema,
        index: 0,
      }

      this.$store.commit('page_builder/COMPONENTS_EDIT', payload)
    },
  },
}
</script>
