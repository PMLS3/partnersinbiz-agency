<!-- =========================================================================================
    File Name: NumberInput.vue
    Description: Number input element- Imports all page portions.
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <div id="form-element-number-input-demo">
    <number-input-default></number-input-default>
    <number-input-color></number-input-color>
    <number-input-min-max></number-input-min-max>
    <number-input-size></number-input-size>
    <number-input-step></number-input-step>
    <number-input-decimal></number-input-decimal>
    <number-input-label></number-input-label>
  </div>
</template>

<script>
import NumberInputDefault from './AppsViewsNumberInputDefault.vue'
import NumberInputColor from './AppsViewsNumberInputColor.vue'
import NumberInputMinMax from './AppsViewsNumberInputMinMax.vue'
import NumberInputSize from './AppsViewsNumberInputSize.vue'
import NumberInputStep from './AppsViewsNumberInputStep.vue'
import NumberInputDecimal from './AppsViewsNumberInputDecimal.vue'
import NumberInputLabel from './AppsViewsNumberInputLabel.vue'

export default {
  components: {
    NumberInputDefault,
    NumberInputColor,
    NumberInputMinMax,
    NumberInputSize,
    NumberInputStep,
    NumberInputDecimal,
    NumberInputLabel,
  },
}
</script>
