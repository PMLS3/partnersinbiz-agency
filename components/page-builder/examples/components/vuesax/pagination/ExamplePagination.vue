<!-- =========================================================================================
    File Name: Pagination.vue
    Description: Pagination - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="pagination-demo">
    <pagination-default></pagination-default>
    <pagination-icon></pagination-icon>
    <pagination-links-limit></pagination-links-limit>
    <pagination-go-to></pagination-go-to>
    <pagination-color></pagination-color>
    <pagination-programmatic-inc-dec></pagination-programmatic-inc-dec>
  </div>
</template>

<script>
import PaginationDefault from './ExamplePaginationDefault.vue'
import PaginationIcon from './ExamplePaginationIcon.vue'
import PaginationLinksLimit from './ExamplePaginationLinksLimit.vue'
import PaginationGoTo from './ExamplePaginationGoTo.vue'
import PaginationColor from './ExamplePaginationColor.vue'
import PaginationProgrammaticIncDec from './ExamplePaginationProgrammaticIncDec.vue'

export default {
  components: {
    PaginationDefault,
    PaginationIcon,
    PaginationLinksLimit,
    PaginationGoTo,
    PaginationProgrammaticIncDec,
    PaginationColor,
  },
}
</script>
