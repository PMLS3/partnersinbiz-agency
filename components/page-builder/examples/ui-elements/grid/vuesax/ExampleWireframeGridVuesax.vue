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
import GridOverview from './ExampleWireframeGridOverview.vue'
import GridDesignConcept from './ExampleWireframeGridDesignConcept.vue'
import GridColumnOffset from './ExampleWireframeGridColumnOffset.vue'
import GridFlexLayout from './ExampleWireframeGridFlexLayout.vue'
import GridFlexAlignment from './ExampleWireframeGridFlexAlignment.vue'
import GridFlexOrder from './ExampleWireframeGridFlexOrder.vue'
import GridResponsiveLayout from './ExampleWireframeGridResponsiveLayout.vue'

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
