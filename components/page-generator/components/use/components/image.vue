<template>
  <img
    @click="edit()"
    :src="schema.content.src"
    :class="schema.class"
    :style="schema.style"
  />
</template>

<script>
export default {
  name: 'imageAdd',
  props: ['schema'],

  methods: {
    edit() {
      let payload = {
        active_card: true,
        component_show: 'imageAdd',
        schema: this.schema,
        index: 0
      }

      this.$store.commit('page_builder/COMPONENTS_EDIT', payload)
    }
  }
}
</script>
