<template>
  <vs-alert
    @click="edit()"
    :class="schema.class"
    :style="schema.style"
    :title="schema.content.title"
    :color="schema.inline.color"
    :active="schema.inline.active"
    :type="schema.inline.type"
    :closable="schema.inline.closable"
    :icon-pack="schema.inline.icon_pack"
    :close-icon="schema.inline.close_icon"
  >
    {{ schema.content.description }}
  </vs-alert>
</template>

<script>
export default {
  name: 'alert',
  props: ['schema', 'index', 'mainIndex'],

  methods: {
    edit() {
      let payload = {
        active_card: true,
        component_show: 'alert',
        schema: this.schema,
        index: 0
      }

      this.$store.commit('page_builder/COMPONENTS_EDIT', payload)
    }
  }
}
</script>
