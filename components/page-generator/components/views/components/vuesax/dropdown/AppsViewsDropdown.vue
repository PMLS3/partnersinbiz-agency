<!-- =========================================================================================
    File Name: Dropdown.vue
    Description: Dropdown - Imports all page portions
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <div id="dropdown-demo">
    <dropdown-default></dropdown-default>
    <dropdown-color></dropdown-color>
    <dropdown-group-option></dropdown-group-option>
    <dropdown-custom-content></dropdown-custom-content>
    <dropdown-button></dropdown-button>
  </div>
</template>

<script>
import DropdownDefault from './AppsViewsDropdownDefault.vue'
import DropdownColor from './AppsViewsDropdownColor.vue'
import DropdownGroupOption from './AppsViewsDropdownGroupOption.vue'
import DropdownCustomContent from './AppsViewsDropdownCustomContent.vue'
import DropdownButton from './AppsViewsDropdownButton.vue'

export default {
  components: {
    DropdownDefault,
    DropdownColor,
    DropdownGroupOption,
    DropdownCustomContent,
    DropdownButton,
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vuexy/pages/dropdown.scss';
</style>
