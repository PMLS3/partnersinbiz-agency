<!-- =========================================================================================
    File Name: Grid.vue
    Description: Theme Grid System - Imports page portions
    ----------------------------------------------------------------------------------------
  
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
import GridOverview from './AppsViewsGridOverview.vue'
import GridDesignConcept from './AppsViewsGridDesignConcept.vue'
import GridColumnOffset from './AppsViewsGridColumnOffset.vue'
import GridFlexLayout from './AppsViewsGridFlexLayout.vue'
import GridFlexAlignment from './AppsViewsGridFlexAlignment.vue'
import GridFlexOrder from './AppsViewsGridFlexOrder.vue'
import GridResponsiveLayout from './AppsViewsGridResponsiveLayout.vue'

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

<style lang="scss" scoped>
@import '@/assets/scss/vuexy/pages/grid.scss';
</style>
