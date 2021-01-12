<template>
  <p @click="edit()" :class="schema.class" :style="schema.style">
    {{ schema.content.html }}
  </p>
</template>

<script>
export default {
  name: 'pTag',
  props: ['schema'],

  methods: {
    edit() {
      let payload = {
        active_card: true,
        component_show: 'pTag',
        schema: this.schema,
        index: 0
      }

      this.$store.commit('page_builder/COMPONENTS_EDIT', payload)
    }
  }
}
</script>
