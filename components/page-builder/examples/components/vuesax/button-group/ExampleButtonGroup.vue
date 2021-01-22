<!-- =========================================================================================
  File Name: Button.vue
  Description: Buttons - Imports all page portions
  ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <div id="button-demo">
    <button-group-basic></button-group-basic>
    <button-group-toolbar></button-group-toolbar>
    <button-group-size></button-group-size>
    <button-group-vertical></button-group-vertical>
  </div>
</template>

<script>
import ButtonGroupBasic from './ExampleButtonGroupBasic.vue'
import ButtonGroupToolbar from './ExampleButtonGroupToolbar.vue'
import ButtonGroupSize from './ExampleButtonGroupSize.vue'
import ButtonGroupVertical from './ExampleButtonGroupVertical.vue'

export default {
  components: {
    ButtonGroupBasic,
    ButtonGroupToolbar,
    ButtonGroupSize,
    ButtonGroupVertical,
  },
}
</script>
