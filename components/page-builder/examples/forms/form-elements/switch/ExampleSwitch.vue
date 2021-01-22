<!-- =========================================================================================
    File Name: Switch.vue
    Description: Switch element - Imports all page portion
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="form-element-switch-demo">
    <switch-state></switch-state>
    <switch-color></switch-color>
    <switch-text></switch-text>
    <switch-icons></switch-icons>
    <switch-array-value></switch-array-value>
  </div>
</template>

<script>
import SwitchState from './ExampleSwitchState.vue'
import SwitchColor from './ExampleSwitchColor.vue'
import SwitchText from './ExampleSwitchText.vue'
import SwitchIcons from './ExampleSwitchIcons.vue'
import SwitchArrayValue from './ExampleSwitchArrayValue.vue'

export default {
  components: {
    SwitchState,
    SwitchColor,
    SwitchText,
    SwitchIcons,
    SwitchArrayValue,
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/vuexy/pages/switch.scss';
</style>
