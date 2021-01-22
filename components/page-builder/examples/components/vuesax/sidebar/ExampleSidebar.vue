<!-- =========================================================================================
    File Name: Sidebar.vue
    Description: Sidebar - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="sidebar-demo">
    <sidebar-default></sidebar-default>
    <sidebar-parent></sidebar-parent>
    <sidebar-static></sidebar-static>
    <sidebar-group-collapsed></sidebar-group-collapsed>
    <sidebar-right></sidebar-right>
    <sidebar-reduce-expand></sidebar-reduce-expand>
    <sidebar-custom></sidebar-custom>
  </div>
</template>

<script>
import SidebarDefault from './ExampleSidebarDefault.vue'
import SidebarParent from './ExampleSidebarParent.vue'
import SidebarStatic from './ExampleSidebarStatic.vue'
import SidebarGroupCollapsed from './ExampleSidebarGroupCollapsed.vue'
import SidebarRight from './ExampleSidebarRight.vue'
import SidebarReduceExpand from './ExampleSidebarReduceExpand.vue'
import SidebarCustom from './ExampleSidebarCustom.vue'

export default {
  components: {
    SidebarDefault,
    SidebarParent,
    SidebarStatic,
    SidebarGroupCollapsed,
    SidebarRight,
    SidebarReduceExpand,
    SidebarCustom,
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/vuexy/pages/sidebar.scss';
</style>
