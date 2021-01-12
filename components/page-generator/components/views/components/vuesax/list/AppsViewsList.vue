<!-- =========================================================================================
    File Name: List.vue
    Description: List - Imports all page portions
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <div id="list-demo">
    <list-basic></list-basic>
    <list-header></list-header>
    <list-icon></list-icon>
    <list-content></list-content>
    <list-avatar></list-avatar>
  </div>
</template>

<script>
import ListBasic from './AppsViewsListBasic.vue'
import ListHeader from './AppsViewsListHeader.vue'
import ListIcon from './AppsViewsListIcon.vue'
import ListContent from './AppsViewsListContent.vue'
import ListAvatar from './AppsViewsListAvatar.vue'

export default {
  components: {
    ListBasic,
    ListHeader,
    ListIcon,
    ListContent,
    ListAvatar,
  },
}
</script>
