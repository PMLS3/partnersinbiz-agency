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
import ButtonGroupBasic from './AppsViewsButtonGroupBasic.vue'
import ButtonGroupToolbar from './AppsViewsButtonGroupToolbar.vue'
import ButtonGroupSize from './AppsViewsButtonGroupSize.vue'
import ButtonGroupVertical from './AppsViewsButtonGroupVertical.vue'

export default {
  components: {
    ButtonGroupBasic,
    ButtonGroupToolbar,
    ButtonGroupSize,
    ButtonGroupVertical,
  },
}
</script>
