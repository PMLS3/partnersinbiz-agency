<template>
  <vs-avatar
    @click="edit()"
    :badge-color="schema.inline.badge_color"
    :badge="schema.content.badge"
    :size="schema.inline.size"
    :icon-pack="schema.inline.icon_pack"
    :icon="schema.inline.icon"
    :src="schema.content.src"
    :color="schema.inline.color"
    :text="schema.content.title"
    :text-color="schema.inline.text_color"
  />
</template>
<script>
export default {
  name: 'avatar',
  props: ['schema', 'index', 'mainIndex'],

  methods: {
    edit() {
      let payload = {
        active_card: true,
        component_show: 'avatar',
        schema: this.schema,
        index: 0
      }

      this.$store.commit('page_builder/COMPONENTS_EDIT', payload)
    }
  }
}
</script>
