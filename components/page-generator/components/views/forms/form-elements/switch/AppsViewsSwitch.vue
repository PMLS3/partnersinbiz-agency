<!-- =========================================================================================
    File Name: Switch.vue
    Description: Switch element - Imports all page portion
    ----------------------------------------------------------------------------------------
  
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
import SwitchState from './AppsViewsSwitchState.vue'
import SwitchColor from './AppsViewsSwitchColor.vue'
import SwitchText from './AppsViewsSwitchText.vue'
import SwitchIcons from './AppsViewsSwitchIcons.vue'
import SwitchArrayValue from './AppsViewsSwitchArrayValue.vue'

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

<style lang="scss" scoped>
@import '@/assets/scss/vuexy/pages/switch.scss';
</style>
