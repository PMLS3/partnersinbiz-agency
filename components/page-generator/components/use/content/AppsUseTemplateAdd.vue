<template>
  <div :class="schema.class" :style="schema.style" :slot="schema.slot">
    <component-generator
      v-if="schema.children"
      v-for="(field, index) in schema.children"
      :key="index"
      :schema="field"
    ></component-generator>
  </div>
</template>

<script>
export default {
  name: 'divi',
  props: ['schema'],
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
        component_show: 'divi',
        schema: this.schema,
        index: 0,
      }

      this.$store.commit('page_builder/COMPONENTS_EDIT', payload)
    },
  },
}
</script>
