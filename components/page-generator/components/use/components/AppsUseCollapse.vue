<template>
  <vs-collapse
    @click="edit()"
    :class="schema.class"
    :style="schema.style"
    :accordion="schema.inline.accordion"
    :open-hover="schema.inline.open_hover"
  >
    <vs-collapse-item
      v-for="(item, i) in schema.content.items"
      :key="i"
      :icon-arrow="schema.inline.icon_arrow"
      :icon-pack="schema.inline.icon_pack"
    >
      <div slot="header">{{ item.title }}</div>
      <div v-html="item.quil"></div>
    </vs-collapse-item>
  </vs-collapse>
</template>

<script>
export default {
  name: 'collapse',
  props: ['schema', 'index', 'mainIndex'],

  methods: {
    edit() {
      let payload = {
        active_card: true,
        component_show: 'collapse',
        schema: this.schema,
        index: 0
      }

      this.$store.commit('page_builder/COMPONENTS_EDIT', payload)
    }
  }
}
</script>
