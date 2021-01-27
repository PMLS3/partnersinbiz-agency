<!-- =========================================================================================
  File Name: ButtonGroupBasic.vue.vue
  Description: Buttons Group Basic
  ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <vx-card title="Div" @click="addComponent('comp')">
    <p class="mb-4">Add <code>div</code> class to wrapper.</p>

    <div id="comp" class="h-12"></div>
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
