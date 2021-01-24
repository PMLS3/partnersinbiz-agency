<template>
  <vs-navbar
    :collapse="schema.inline.closable"
    @click="edit()"
    :class="schema.class"
    :style="schema.style"
    :color="schema.inline.color"
    :text-color="schema.inline.text_color"
    :active-text-color="schema.inline.active_text_color"
    :type="schema.inline.type"
  >
    <div slot="title">
      <vs-navbar-title
        ><span>{{ schema.content.title }}</span></vs-navbar-title
      >
    </div>

    <vs-navbar-item
      :index="i"
      v-for="(item, i) in schema.content.items"
      :key="i"
    >
      <a :href="item.href">{{ item.title }}</a>
    </vs-navbar-item>
  </vs-navbar>
</template>

<script>
export default {
  name: 'navbar',
  props: ['schema'],

  methods: {
    edit() {
      let payload = {
        active_card: true,
        component_show: 'navbar',
        schema: this.schema,
        index: 0
      }

      this.$store.commit('page_builder/COMPONENTS_EDIT', payload)
    }
  }
}
</script>
