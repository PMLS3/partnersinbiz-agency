<!-- =========================================================================================
    File Name: Tooltip.vue
    Description: Tooltip - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="tooltip-demo">
    <tooltip-default></tooltip-default>
    <tooltip-position></tooltip-position>
    <tooltip-delay></tooltip-delay>
    <tooltip-color></tooltip-color>
    <tooltip-title></tooltip-title>
  </div>
</template>

<script>
import TooltipDefault from './ExampleTooltipDefault.vue'
import TooltipPosition from './ExampleTooltipPosition.vue'
import TooltipDelay from './ExampleTooltipDelay.vue'
import TooltipColor from './ExampleTooltipColor.vue'
import TooltipTitle from './ExampleTooltipTitle.vue'

export default {
  components: {
    TooltipDefault,
    TooltipPosition,
    TooltipDelay,
    TooltipTitle,
    TooltipColor,
  },
}
</script>
