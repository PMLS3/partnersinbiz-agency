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
import DropdownDefault from './ExampleDropdownDefault.vue'
import DropdownColor from './ExampleDropdownColor.vue'
import DropdownGroupOption from './ExampleDropdownGroupOption.vue'
import DropdownCustomContent from './ExampleDropdownCustomContent.vue'
import DropdownButton from './ExampleDropdownButton.vue'

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

<style lang="scss">
@import '@/assets/scss/vuexy/pages/dropdown.scss';
</style>
