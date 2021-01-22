<!-- =========================================================================================
    File Name: NumberInput.vue
    Description: Number input element- Imports all page portions.
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
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
import NumberInputDefault from './ExampleNumberInputDefault.vue'
import NumberInputColor from './ExampleNumberInputColor.vue'
import NumberInputMinMax from './ExampleNumberInputMinMax.vue'
import NumberInputSize from './ExampleNumberInputSize.vue'
import NumberInputStep from './ExampleNumberInputStep.vue'
import NumberInputDecimal from './ExampleNumberInputDecimal.vue'
import NumberInputLabel from './ExampleNumberInputLabel.vue'

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
