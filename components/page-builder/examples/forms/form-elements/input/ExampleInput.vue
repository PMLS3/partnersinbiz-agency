<!-- =========================================================================================
    File Name: Input.vue
    Description: Input Element - Imports all page portions.
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
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
import InputDefault from './ExampleInputDefault.vue'
import InputLabel from './ExampleInputLabel.vue'
import InputLabelPlaceholder from './ExampleInputLabelPlaceholder.vue'
import InputIcon from './ExampleInputIcon.vue'
import InputColor from './ExampleInputColor.vue'
import InputValidation from './ExampleInputValidation.vue'
import InputSize from './ExampleInputSize.vue'

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
