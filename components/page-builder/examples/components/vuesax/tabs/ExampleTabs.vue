<!-- =========================================================================================
    File Name: Tabs.vue
    Description: Tabs - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="tabs-demo">
    <tabs-default></tabs-default>
    <tabs-color></tabs-color>
    <tabs-alignments></tabs-alignments>
    <tabs-position></tabs-position>
    <tabs-icons></tabs-icons>
  </div>
</template>

<script>
import TabsDefault from './ExampleTabsDefault.vue'
import TabsColor from './ExampleTabsColor.vue'
import TabsAlignments from './ExampleTabsAlignments.vue'
import TabsPosition from './ExampleTabsPosition.vue'
import TabsIcons from './ExampleTabsIcons.vue'

export default {
  components: {
    TabsDefault,
    TabsColor,
    TabsAlignments,
    TabsPosition,
    TabsIcons,
  },
}
</script>
