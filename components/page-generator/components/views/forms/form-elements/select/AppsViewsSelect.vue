<!-- =========================================================================================
    File Name: Select.vue
    Description: Select element - Imports page portions
    ----------------------------------------------------------------------------------------
  
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
import SelectSingleSelection from './AppsViewsSelectSingleSelection.vue'
import SelectColor from './AppsViewsSelectColor.vue'
import SelectAutocomplete from './AppsViewsSelectAutocomplete.vue'
import SelectMultiple from './AppsViewsSelectMultiple.vue'
import SelectLabels from './AppsViewsSelectLabels.vue'
import SelectValidators from './AppsViewsSelectValidators.vue'
import SelectIsSelectedItem from './AppsViewsSelectIsSelectedItem.vue'
import SelectGroupItems from './AppsViewsSelectGroupItems.vue'

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
