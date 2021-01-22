<!-- =========================================================================================
    File Name: Breadcrumb.vue
    Description: Breadcrumb - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="breadcrumb-demo">
    <breadcrumb-default></breadcrumb-default>
    <breadcrumb-color></breadcrumb-color>
    <breadcrumb-separator></breadcrumb-separator>
    <breadcrumb-slot></breadcrumb-slot>
    <breadcrumb-alignment></breadcrumb-alignment>
  </div>
</template>

<script>
import BreadcrumbDefault from './ExampleBreadcrumbDefault.vue'
import BreadcrumbColor from './ExampleBreadcrumbColor.vue'
import BreadcrumbSeparator from './ExampleBreadcrumbSeparator.vue'
import BreadcrumbSlot from './ExampleBreadcrumbSlot.vue'
import BreadcrumbAlignment from './ExampleBreadcrumbAlignment.vue'

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
