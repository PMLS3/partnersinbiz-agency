<!-- =========================================================================================
    File Name: Button.vue
    Description: Buttons - Imports all page portions
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vs-tabs alignment="fixed" position="left">
    <vs-tab label="Small Filled"><ExampleTailwindButtonSmallFilled /> </vs-tab>
    <vs-tab label="Regular Filled">
      <ExampleTailwindButtonRegularFilled
    /></vs-tab>
    <vs-tab label="Large Filled"><ExampleTailwindButtonLargeFilled /> </vs-tab>
    <vs-tab label="Small Outline"
      ><ExampleTailwindButtonSmallOutline />
    </vs-tab>
    <vs-tab label="Regular Outline">
      <ExampleTailwindButtonRegularOutline />
    </vs-tab>
    <vs-tab label="Large Outline">
      <ExampleTailwindButtonLargeOutline />
    </vs-tab>
    <vs-tab label="Links"> <ExampleTailwindButtonLinks /> </vs-tab>
  </vs-tabs>
</template>

<script>
export default {
  name: 'ExampleTailwindButton',
}
</script>
