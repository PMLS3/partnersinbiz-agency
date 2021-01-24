<template>
  <h1 @click="edit()" :class="schema.class" :style="schema.style">
    {{ schema.content.html }}
  </h1>
</template>

<script>
export default {
  name: 'h1Tag',
  props: ['schema'],

  methods: {
    edit() {
      let payload = {
        active_card: true,
        component_show: 'h1Tag',
        schema: this.schema,
        index: 0
      }

      this.$store.commit('page_builder/COMPONENTS_EDIT', payload)
    }
  }
}
</script>
