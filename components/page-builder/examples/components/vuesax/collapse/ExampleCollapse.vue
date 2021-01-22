<!-- =========================================================================================
    File Name: Collapse.vue
    Description: Collapse - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="collapse-demo">
    <collapse-default></collapse-default>
    <collapse-accordion></collapse-accordion>
    <collapse-type></collapse-type>
    <collapse-open-hover></collapse-open-hover>
    <collapse-change-arrow-icon></collapse-change-arrow-icon>
  </div>
</template>

<script>
import CollapseDefault from './ExampleCollapseDefault.vue'
import CollapseAccordion from './ExampleCollapseAccordion.vue'
import CollapseType from './ExampleCollapseType.vue'
import CollapseOpenHover from './ExampleCollapseOpenHover.vue'
import CollapseChangeArrowIcon from './ExampleCollapseChangeArrowIcon.vue'

export default {
  components: {
    CollapseDefault,
    CollapseAccordion,
    CollapseType,
    CollapseChangeArrowIcon,
    CollapseOpenHover,
  },
}
</script>
