<!-- =========================================================================================
    File Name: Tooltip.vue
    Description: Tooltip - Imports all page portions
    ----------------------------------------------------------------------------------------
  
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
import TooltipDefault from './AppsViewsTooltipDefault.vue'
import TooltipPosition from './AppsViewsTooltipPosition.vue'
import TooltipDelay from './AppsViewsTooltipDelay.vue'
import TooltipColor from './AppsViewsTooltipColor.vue'
import TooltipTitle from './AppsViewsTooltipTitle.vue'

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
