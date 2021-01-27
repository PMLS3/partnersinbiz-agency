<!-- =========================================================================================
  File Name: ButtonGroupBasic.vue.vue
  Description: Buttons Group Basic
  ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <vx-card title="Cite" @click="addComponent('cite')">
    <p class="mb-4">Add <code>cite</code> usually used as...</p>

    <cite id="cite">Cite</cite>
  </vx-card>
</template>

<script>
export default {
  methods: {
    addComponent(name) {
      let element = document.getElementById(name)

      let payload = this.$comp_create(
        element,
        this.$store.state.page_builder.list_pos
      )

      $nuxt.$emit('component-added', payload)
      $nuxt.$emit('close_comp')
    },
  },
}
</script>
