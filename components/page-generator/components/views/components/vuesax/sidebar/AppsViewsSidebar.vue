<!-- =========================================================================================
    File Name: Sidebar.vue
    Description: Sidebar - Imports all page portions
    ----------------------------------------------------------------------------------------
  
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
import SidebarDefault from './AppsViewsSidebarDefault.vue'
import SidebarParent from './AppsViewsSidebarParent.vue'
import SidebarStatic from './AppsViewsSidebarStatic.vue'
import SidebarGroupCollapsed from './AppsViewsSidebarGroupCollapsed.vue'
import SidebarRight from './AppsViewsSidebarRight.vue'
import SidebarReduceExpand from './AppsViewsSidebarReduceExpand.vue'
import SidebarCustom from './AppsViewsSidebarCustom.vue'

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

<style lang="scss" scoped>
@import '@/assets/scss/vuexy/pages/sidebar.scss';
</style>
