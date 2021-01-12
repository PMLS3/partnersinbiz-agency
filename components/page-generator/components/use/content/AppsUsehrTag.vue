<template>
  <hr @click="edit()" :class="schema.class" :style="schema.style">

  </hr>
</template>

<script>
export default {
  name: 'hrTag',
  props: ['schema'],

  methods: {
    edit() {
      let payload = {
        active_card: true,
        component_show: 'hrTag',
        schema: this.schema,
        index: 0
      }

      this.$store.commit('page_builder/COMPONENTS_EDIT', payload)
    }
  }
}
</script>
