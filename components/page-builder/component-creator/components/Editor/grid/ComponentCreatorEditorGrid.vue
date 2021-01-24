<!-- =========================================================================================
    File Name: GridBasicGrid.vue
    Description: Example of building grid layouts with Tailwind CSS

========================================================================================== -->

<template>
  <div :class="schema.class" :style="schema.style" :slot="schema.slot">
    <ComponentGenerator
      v-if="schema.children"
      v-for="(field, index) in schema.children"
      :key="index"
      :schema="field"
    />
  </div>
</template>

<script>
export default {
  name: 'grid',

  props: ['schema'],
  components: {},
  methods: {
    add() {
      let payload = {
        active_card: true,
        component_show: 'grid',
        place: this.schema.place,
        index: 1,
      }

      this.$store.commit('page_builder/COMPONENTS_NEEDED', payload)
    },
    edit() {
      let payload = {
        active_card: true,
        component_show: 'grid',
        schema: this.schema,
        index: 0,
      }
      this.$store.commit('page_builder/COMPONENTS_EDIT', payload)
    },
  },
}
</script>
