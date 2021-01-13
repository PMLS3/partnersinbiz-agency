<!-- =========================================================================================
    File Name: Grid.vue
    Description: Theme Grid System - Imports page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="vuexy-grid-demo">
    <grid-overview></grid-overview>
    <grid-design-concept></grid-design-concept>
    <grid-column-offset></grid-column-offset>
    <grid-flex-layout></grid-flex-layout>
    <grid-flex-alignment></grid-flex-alignment>
    <grid-flex-order></grid-flex-order>
    <grid-responsive-layout></grid-responsive-layout>
  </div>
</template>

<script>
import GridOverview from './UiGridOverview.vue'
import GridDesignConcept from './UiGridDesignConcept.vue'
import GridColumnOffset from './UiGridColumnOffset.vue'
import GridFlexLayout from './UiGridFlexLayout.vue'
import GridFlexAlignment from './UiGridFlexAlignment.vue'
import GridFlexOrder from './UiGridFlexOrder.vue'
import GridResponsiveLayout from './UiGridResponsiveLayout.vue'

export default {
  components: {
    GridOverview,
    GridDesignConcept,
    GridColumnOffset,
    GridFlexLayout,
    GridFlexAlignment,
    GridFlexOrder,
    GridResponsiveLayout,
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/vuexy/pages/grid.scss';
</style>
