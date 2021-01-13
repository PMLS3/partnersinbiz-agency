<!-- =========================================================================================
    File Name: GridTailwind.vue
    Description: Tailwind Grid System - Imports page portions
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <div id="tailwind-grid-demo">
    <grid-basic-grid></grid-basic-grid>
    <grid-responsive-grids></grid-responsive-grids>
    <grid-mixed-column-sizes></grid-mixed-column-sizes>
    <grid-wrapping-columns></grid-wrapping-columns>
    <grid-column-spacing></grid-column-spacing>
    <grid-auto-column-width></grid-auto-column-width>
    <grid-simple-offset></grid-simple-offset>
  </div>
</template>

<script>
import GridBasicGrid from './tailwind/TailwindAppsViewsGridBasicGrid.vue'
import GridResponsiveGrids from './tailwind/TailwindAppsViewsGridResponsiveGrids.vue'
import GridMixedColumnSizes from './tailwind/TailwindAppsViewsGridMixedColumnSizes.vue'
import GridWrappingColumns from './tailwind/TailwindAppsViewsGridWrappingColumns.vue'
import GridColumnSpacing from './tailwind/TailwindAppsViewsGridColumnSpacing.vue'
import GridAutoColumnWidth from './tailwind/TailwindAppsViewsGridAutoColumnWidth.vue'
import GridColumnOrder from './tailwind/TailwindAppsViewsGridColumnOrder.vue'
import GridSimpleOffset from './tailwind/TailwindAppsViewsGridSimpleOffset.vue'

export default {
  components: {
    GridBasicGrid,
    GridResponsiveGrids,
    GridMixedColumnSizes,
    GridWrappingColumns,
    GridColumnSpacing,
    GridAutoColumnWidth,
    GridSimpleOffset,
    GridColumnOrder,
  },
}
</script>

<style lang="scss">
#tailwind-grid-demo {
  .bg-grid-color {
    background-color: #b8c2cc;
  }

  .bg-grid-color-secondary {
    background-color: #dae1e7;
  }
}
.theme-dark {
  #tailwind-grid-demo {
    .bg-grid-color {
      background-color: #262c49; // $table-dark-stripe
    }

    .bg-grid-color-secondary {
      background-color: #414561; // $grid-dark-color
    }
  }
}
</style>
