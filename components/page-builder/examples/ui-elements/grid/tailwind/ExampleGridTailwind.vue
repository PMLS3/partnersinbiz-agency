<!-- =========================================================================================
    File Name: GridTailwind.vue
    Description: Tailwind Grid System - Imports page portions
    ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <div id="tailwind-grid-demo">
    <ExampleGridBasicGrid />
    <!-- <ExampleGridResponsiveGrids />
  <ExampleGridMixedColumnSizes/>
  <ExampleGridWrappingColumns/>
   <ExampleGridColumnSpacing/>
   <ExampleGridAutoColumnWidth/>
   <ExampleGridColumnOrder/>
   <ExampleGridSimpleOffset/> -->
  </div>
</template>

<script>
export default {}
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
