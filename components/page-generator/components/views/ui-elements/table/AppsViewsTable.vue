<!-- =========================================================================================
    File Name: Table.vue
    Description: Table demo - Imports all table demos
    ----------------------------------------------------------------------------------------
  
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
import TableDefault from './AppsViewsTableDefault.vue'
import TableStriped from './AppsViewsTableStriped.vue'
import TableState from './AppsViewsTableState.vue'
import TablePagination from './AppsViewsTablePagination.vue'
import TableSingleSelected from './AppsViewsTableSingleSelected.vue'
import TableMultipleSelected from './AppsViewsTableMultipleSelected.vue'
import TableExpandableData from './AppsViewsTableExpandableData.vue'
import TableEditDataTable from './AppsViewsTableEditDataTable.vue'
import TableFilterSorter from './AppsViewsTableFilterSorter.vue'
import TableMiscellaneous from './AppsViewsTableMiscellaneous.vue'
import TableSsr from './AppsViewsTableSSR.vue'

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
