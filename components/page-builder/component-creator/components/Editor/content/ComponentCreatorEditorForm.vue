<template>
  <form :class="schema.class" :style="schema.style" :slot="schema.slot">
    <ComponentCreatorEditor
      v-for="(field, ind) in schema"
      :key="ind"
      :schema="field"
    />
  </form>
</template>

<script>
export default {
  name: 'bodyAdd',
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
        component_show: 'bodyAdd',
        schema: this.schema,
        index: 0,
      }

      this.$store.commit('page_builder/COMPONENTS_EDIT', payload)
    },
  },
}
</script>
