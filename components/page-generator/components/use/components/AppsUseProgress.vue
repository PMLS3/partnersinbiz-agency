<template>
  <div style="width: 100%; height: 100%">
    <!-- {{ schema }} -->
    <vs-progress
      @click="edit()"
      :class="schema.class"
      :style="schema.style"
      :indeterminate="schema.inline.indeterminate"
      :height="schema.content.height"
      :percent="schema.content.percent"
      :color="schema.inline.color"
    ></vs-progress>
  </div>
</template>

<script>
export default {
  name: 'progressBar',
  props: ['schema'],

  methods: {
    edit() {
      let payload = {
        active_card: true,
        component_show: 'progressBar',
        schema: this.schema,
        index: 0
      }

      this.$store.commit('page_builder/COMPONENTS_EDIT', payload)
    }
  }
}
</script>
