<!-- =========================================================================================
    File Name: Button.vue
    Description: Buttons - Imports all page portions
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <div class="w-full">
    <ExampleTailwindButtonSmallFilled />
    <ExampleTailwindButtonRegularFilled />
    <ExampleTailwindButtonLargeFilled />

    <ExampleTailwindButtonSmallOutline />
    <ExampleTailwindButtonRegularOutline />
    <ExampleTailwindButtonLargeOutline />
    <ExampleTailwindButtonLinks />
  </div>
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
