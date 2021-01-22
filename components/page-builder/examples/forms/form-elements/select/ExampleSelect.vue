<!-- =========================================================================================
    File Name: Select.vue
    Description: Select element - Imports page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="form-element-select-demo">
    <select-single-selection></select-single-selection>
    <select-color></select-color>
    <select-autocomplete></select-autocomplete>
    <select-multiple></select-multiple>
    <select-labels></select-labels>
    <select-validators></select-validators>
    <select-is-selected-item></select-is-selected-item>
    <select-group-items></select-group-items>
  </div>
</template>

<script>
import SelectSingleSelection from './ExampleSelectSingleSelection.vue'
import SelectColor from './ExampleSelectColor.vue'
import SelectAutocomplete from './ExampleSelectAutocomplete.vue'
import SelectMultiple from './ExampleSelectMultiple.vue'
import SelectLabels from './ExampleSelectLabels.vue'
import SelectValidators from './ExampleSelectValidators.vue'
import SelectIsSelectedItem from './ExampleSelectIsSelectedItem.vue'
import SelectGroupItems from './ExampleSelectGroupItems.vue'

export default {
  components: {
    SelectSingleSelection,
    SelectColor,
    SelectAutocomplete,
    SelectMultiple,
    SelectLabels,
    SelectValidators,
    SelectIsSelectedItem,
    SelectGroupItems,
  },
}
</script>
