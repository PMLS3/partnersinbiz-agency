<template>
  <h6 @click="edit()" :class="schema.class" :style="schema.style">
    {{ schema.content.html }}
  </h6>
</template>

<script>
export default {
  name: 'h6Tag',
  props: ['schema'],

  methods: {
    edit() {
      let payload = {
        active_card: true,
        component_show: 'h6Tag',
        schema: this.schema,
        index: 0
      }

      this.$store.commit('page_builder/COMPONENTS_EDIT', payload)
    }
  }
}
</script>
