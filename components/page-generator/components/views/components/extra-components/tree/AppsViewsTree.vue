<!-- =========================================================================================
    File Name: Tree.vue
    Description: Tree demo
    ----------------------------------------------------------------------------------------
     
========================================================================================== -->
<template>
  <div id="page-tree-demo">
    <tree-dropdown></tree-dropdown>
    <tree-search-tree></tree-search-tree>
    <tree-async-tree></tree-async-tree>
  </div>
</template>

<script>
import TreeDropdown from './AppsViewsTreeDropdown.vue'
import TreeSearchTree from './AppsViewsTreeSearchTree.vue'
import TreeAsyncTree from './AppsViewsTreeAsyncTree.vue'

export default {
  components: {
    TreeDropdown,
    TreeSearchTree,
    TreeAsyncTree,
  },
}
</script>
