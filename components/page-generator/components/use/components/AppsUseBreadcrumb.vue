<template>
  <vs-breadcrumb
    @click="edit()"
    :class="schema.class"
    :style="schema.style"
    :separator="schema.inline.separator"
    :color="schema.inline.color"
    :items="schema.content.items"
    :align="schema.inline.align"
  ></vs-breadcrumb>
</template>

<script>
export default {
  name: 'breadcrumb',
  props: ['schema', 'index', 'mainIndex'],
  methods: {
    edit() {
      let payload = {
        active_card: true,
        component_show: 'breadcrumb',
        schema: this.schema,
        index: 0
      }

      this.$store.commit('page_builder/COMPONENTS_EDIT', payload)
    }
  }
}
</script>
