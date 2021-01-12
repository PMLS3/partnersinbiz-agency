<!-- =========================================================================================
    File Name: Breadcrumb.vue
    Description: Breadcrumb - Imports all page portions
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <div id="breadcrumb-demo">
    <breadcrumb-default></breadcrumb-default>
    <breadcrumb-color></breadcrumb-color>
    <breadcrumb-separator></breadcrumb-separator>
    <!-- <breadcrumb-slot></breadcrumb-slot> -->
    <breadcrumb-alignment></breadcrumb-alignment>
  </div>
</template>

<script>
import BreadcrumbDefault from './AppsViewsBreadcrumbDefault.vue'
import BreadcrumbColor from './AppsViewsBreadcrumbColor.vue'
import BreadcrumbSeparator from './AppsViewsBreadcrumbSeparator.vue'
import BreadcrumbSlot from './AppsViewsBreadcrumbSlot.vue'
import BreadcrumbAlignment from './AppsViewsBreadcrumbAlignment.vue'

export default {
  components: {
    BreadcrumbDefault,
    BreadcrumbColor,
    BreadcrumbSeparator,
    BreadcrumbSlot,
    BreadcrumbAlignment,
  },
}
</script>
