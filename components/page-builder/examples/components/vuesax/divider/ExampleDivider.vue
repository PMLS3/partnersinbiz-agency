<!-- =========================================================================================
    File Name: Divider.vue
    Description: Divider - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
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
import DividerDefault from './ExampleDividerDefault.vue'
import DividerText from './ExampleDividerText.vue'
import DividerTextPosition from './ExampleDividerTextPosition.vue'
import DividerColor from './ExampleDividerColor.vue'
import DividerIcon from './ExampleDividerIcon.vue'
import DividerStyle from './ExampleDividerStyle.vue'

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
