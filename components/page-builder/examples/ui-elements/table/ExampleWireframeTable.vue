<!-- =========================================================================================
    File Name: Table.vue
    Description: Table demo - Imports all table demos
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="table-demo">
    <table-default></table-default>
    <table-striped></table-striped>
    <table-state></table-state>
    <table-pagination></table-pagination>
    <table-single-selected></table-single-selected>
    <table-multiple-selected></table-multiple-selected>
    <table-expandable-data></table-expandable-data>
    <table-edit-data-table></table-edit-data-table>
    <table-filter-sorter></table-filter-sorter>
    <table-miscellaneous></table-miscellaneous>
    <table-ssr></table-ssr>
  </div>
</template>

<script>
import TableDefault from './ExampleWireframeTableDefault.vue'
import TableStriped from './ExampleWireframeTableStriped.vue'
import TableState from './ExampleWireframeTableState.vue'
import TablePagination from './ExampleWireframeTablePagination.vue'
import TableSingleSelected from './ExampleWireframeTableSingleSelected.vue'
import TableMultipleSelected from './ExampleWireframeTableMultipleSelected.vue'
import TableExpandableData from './ExampleWireframeTableExpandableData.vue'
import TableEditDataTable from './ExampleWireframeTableEditDataTable.vue'
import TableFilterSorter from './ExampleWireframeTableFilterSorter.vue'
import TableMiscellaneous from './ExampleWireframeTableMiscellaneous.vue'
import TableSsr from './ExampleWireframeTableSSR.vue'

export default {
  components: {
    TableDefault,
    TableStriped,
    TableState,
    TablePagination,
    TableSingleSelected,
    TableMultipleSelected,
    TableExpandableData,
    TableEditDataTable,
    TableFilterSorter,
    TableMiscellaneous,
    TableSsr,
  },
}
</script>
