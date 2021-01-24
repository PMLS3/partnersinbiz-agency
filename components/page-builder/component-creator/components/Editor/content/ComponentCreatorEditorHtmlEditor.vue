<template>
  <div
    @click="edit()"
    :class="schema.class"
    :style="schema.style"
    v-html="schema.content.html"
  ></div>
</template>

<script>
export default {
  name: 'htmlAdd',
  props: ['schema', 'index', 'mainIndex'],

  methods: {
    edit() {
      let payload = {
        active_card: true,
        component_show: 'htmlAdd',
        schema: this.schema,
        index: 0
      }

      this.$store.commit('page_builder/COMPONENTS_EDIT', payload)
    }
  }
}
</script>
