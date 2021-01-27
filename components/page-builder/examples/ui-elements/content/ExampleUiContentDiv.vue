<!-- =========================================================================================
  File Name: ButtonGroupBasic.vue.vue
  Description: Buttons Group Basic
  ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <vx-card title="Div">
    <p class="mb-4">
      Add <code>div</code> class to wrapper to make all contained button acts as
      grouped buttons.
    </p>

    <div id="comp" @click="addComponent('comp')"></div>
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
