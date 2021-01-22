<!-- =========================================================================================
    File Name: Tree.vue
    Description: Tree demo
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
    Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->
<template>
  <div id="page-tree-demo">
    <tree-dropdown></tree-dropdown>
    <tree-search-tree></tree-search-tree>
    <tree-async-tree></tree-async-tree>
  </div>
</template>

<script>
import TreeDropdown from './ExampleTreeDropdown.vue'
import TreeSearchTree from './ExampleTreeSearchTree.vue'
import TreeAsyncTree from './ExampleTreeAsyncTree.vue'

export default {
  components: {
    TreeDropdown,
    TreeSearchTree,
    TreeAsyncTree,
  },
}
</script>
