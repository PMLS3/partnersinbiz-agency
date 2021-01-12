<!-- =========================================================================================
    File Name: Divider.vue
    Description: Divider - Imports all page portions
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <div id="divider-demo">
    <divider-default></divider-default>
    <divider-text></divider-text>
    <divider-text-position></divider-text-position>
    <divider-color></divider-color>
    <divider-icon></divider-icon>
    <divider-style></divider-style>
  </div>
</template>

<script>
import DividerDefault from './AppsViewsDividerDefault.vue'
import DividerText from './AppsViewsDividerText.vue'
import DividerTextPosition from './AppsViewsDividerTextPosition.vue'
import DividerColor from './AppsViewsDividerColor.vue'
import DividerIcon from './AppsViewsDividerIcon.vue'
import DividerStyle from './AppsViewsDividerStyle.vue'

export default {
  components: {
    DividerDefault,
    DividerText,
    DividerTextPosition,
    DividerColor,
    DividerIcon,
    DividerStyle,
  },
}
</script>
