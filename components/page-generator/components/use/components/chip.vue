<template>
  <vs-chip
    @click="edit()"
    :class="schema.class"
    :style="schema.style"
    :disabled="schema.inline.disabled"
    :color="schema.inline.color"
    :icon-pack="schema.inline.icon_pack"
    :icon="schema.inline.icon"
    :closable="schema.inline.closable"
    :placeholder="schema.inline.placeholder"
    :close-icon="schema.inline.close - icon"
    :remove-icon="schema.inline.remove_icon"
    :transparent="schema.inline.transparent"
  >
    <vs-avatar
      :avatar="schema.inline.avatar"
      :text="schema.content.text"
      :src="schema.content.src"
    />
    {{ schema.inline.title }}
  </vs-chip>
</template>

<script>
export default {
  name: 'chip',
  props: ['schema', 'index', 'mainIndex'],

  methods: {
    edit() {
      let payload = {
        active_card: true,
        component_show: 'chip',
        schema: this.schema,
        index: 0
      }

      this.$store.commit('page_builder/COMPONENTS_EDIT', payload)
    }
  }
}
</script>
