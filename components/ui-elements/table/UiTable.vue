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
import TableDefault from './UiTableDefault.vue'
import TableStriped from './UiTableStriped.vue'
import TableState from './UiTableState.vue'
import TablePagination from './UiTablePagination.vue'
import TableSingleSelected from './UiTableSingleSelected.vue'
import TableMultipleSelected from './UiTableMultipleSelected.vue'
import TableExpandableData from './UiTableExpandableData.vue'
import TableEditDataTable from './UiTableEditDataTable.vue'
import TableFilterSorter from './UiTableFilterSorter.vue'
import TableMiscellaneous from './UiTableMiscellaneous.vue'
import TableSsr from './UiTableSSR.vue'

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
