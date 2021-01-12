<template>
  <content>
    <vs-button @click="popupActive = true" color="primary" type="filled"
      >Open Default popup</vs-button
    >

    <vs-popup
      :class="schema.class"
      :style="schema.style"
      :title="schema.content.title"
      :background-color="schema.inline.background_color"
      :background-color-popup="schema.inline.background_color_popup"
    >
      <div v-html="schema.content.quil"></div>
    </vs-popup>
  </content>
</template>

<script>
export default {
  name: 'popup',
  props: ['schema'],
  data() {
    return {
      popupActive: false
    }
  },

  methods: {
    edit() {
      let payload = {
        active_card: true,
        component_show: 'popup',
        schema: this.schema,
        index: 0
      }

      this.$store.commit('page_builder/COMPONENTS_EDIT', payload)
    }
  }
}
</script>
