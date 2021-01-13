<!-- =========================================================================================
    File Name: Input.vue
    Description: Input Element - Imports all page portions.
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <div id="form-element-input-demo">
    <input-default></input-default>
    <input-label></input-label>
    <input-label-placeholder></input-label-placeholder>
    <input-icon></input-icon>
    <input-color></input-color>
    <input-validation></input-validation>
    <input-size></input-size>
  </div>
</template>

<script>
import InputDefault from './AppsViewsInputDefault.vue'
import InputLabel from './AppsViewsInputLabel.vue'
import InputLabelPlaceholder from './AppsViewsInputLabelPlaceholder.vue'
import InputIcon from './AppsViewsInputIcon.vue'
import InputColor from './AppsViewsInputColor.vue'
import InputValidation from './AppsViewsInputValidation.vue'
import InputSize from './AppsViewsInputSize.vue'

export default {
  components: {
    InputDefault,
    InputLabel,
    InputLabelPlaceholder,
    InputIcon,
    InputColor,
    InputValidation,
    InputSize,
  },
}
</script>
