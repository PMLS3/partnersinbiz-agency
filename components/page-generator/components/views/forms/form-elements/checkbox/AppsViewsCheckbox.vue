<!-- =========================================================================================
    File Name: Checkbox.vue
    Description: Checkbox Element - Imports all page portions.
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <div id="form-element-checkbox-demo">
    <checkbox-state></checkbox-state>
    <checkbox-color></checkbox-color>
    <checkbox-boolean-value></checkbox-boolean-value>
    <checkbox-string-value></checkbox-string-value>
    <checkbox-array-value></checkbox-array-value>
    <checkbox-array-object-value></checkbox-array-object-value>
    <checkbox-change-icon></checkbox-change-icon>
  </div>
</template>

<script>
import CheckboxState from './AppsViewsCheckboxState.vue'
import CheckboxColor from './AppsViewsCheckboxColor.vue'
import CheckboxBooleanValue from './AppsViewsCheckboxBooleanValue.vue'
import CheckboxStringValue from './AppsViewsCheckboxStringValue.vue'
import CheckboxArrayValue from './AppsViewsCheckboxArrayValue.vue'
import CheckboxArrayObjectValue from './AppsViewsCheckboxArrayObjectValue.vue'
import CheckboxChangeIcon from './AppsViewsCheckboxChangeIcon.vue'

export default {
  components: {
    CheckboxState,
    CheckboxColor,
    CheckboxBooleanValue,
    CheckboxStringValue,
    CheckboxArrayValue,
    CheckboxArrayObjectValue,
    CheckboxChangeIcon,
  },
}
</script>
