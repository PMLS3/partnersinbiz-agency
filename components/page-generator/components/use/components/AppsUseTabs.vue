<template>
  <vs-button
    @click="edit()"
    :href="schema.content.href"
    :class="schema.class"
    :style="schema.style"
    :disabled="schema.inline.disabled"
    :size="schema.inline.size"
    :radius="schema.inline.radius"
    :color="schema.inline.color"
    :gradient-color-secondary="schema.inline.colorx2"
    :type="schema.inline.type"
    :icon-pack="schema.inline.icon_pack"
    :icon="schema.inline.icon"
    :icon-after="schema.inline.icon_after"
    :text-color="schema.inline.text_color"
    :line-position="schema.inline.line_position"
    :line-origin="schema.inline.line_origin"
    >{{ schema.content.name }}</vs-button
  >
</template>

<script>
export default {
  name: 'tabas',
  props: ['schema'],

  methods: {
    edit() {
      let payload = {
        active_card: true,
        component_show: 'tabs',
        schema: this.schema,
        index: 0
      }

      this.$store.commit('page_builder/COMPONENTS_EDIT', payload)
    }
  }
}
</script>
