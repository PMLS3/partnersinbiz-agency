<!-- =========================================================================================
    File Name: List.vue
    Description: List - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
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
import ListBasic from './ExampleListBasic.vue'
import ListHeader from './ExampleListHeader.vue'
import ListIcon from './ExampleListIcon.vue'
import ListContent from './ExampleListContent.vue'
import ListAvatar from './ExampleListAvatar.vue'

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
