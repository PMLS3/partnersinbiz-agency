<template>
  <vs-divider
    @click="edit()"
    :class="schema.class"
    :style="schema.style"
    :color="schema.inline.color"
    :icon-pack="schema.inline.icon_pack"
    :icon="schema.inline.icon"
    :position="schema.inline.position"
    :border-style="schema.inline.border_style"
    >{{ schema.content.title }}</vs-divider
  >
</template>

<script>
export default {
  name: 'divider',
  props: ['schema', 'index', 'mainIndex'],

  methods: {
    edit() {
      let payload = {
        active_card: true,
        component_show: 'divider',
        schema: this.schema,
        index: 0
      }

      this.$store.commit('page_builder/COMPONENTS_EDIT', payload)
    }
  }
}
</script>
