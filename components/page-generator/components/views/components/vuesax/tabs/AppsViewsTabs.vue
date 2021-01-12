<!-- =========================================================================================
    File Name: Tabs.vue
    Description: Tabs - Imports all page portions
    ----------------------------------------------------------------------------------------
  
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
import TabsDefault from './AppsViewsTabsDefault.vue'
import TabsColor from './AppsViewsTabsColor.vue'
import TabsAlignments from './AppsViewsTabsAlignments.vue'
import TabsPosition from './AppsViewsTabsPosition.vue'
import TabsIcons from './AppsViewsTabsIcons.vue'

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
