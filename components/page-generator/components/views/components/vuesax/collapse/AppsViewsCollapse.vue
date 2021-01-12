<!-- =========================================================================================
    File Name: Collapse.vue
    Description: Collapse - Imports all page portions
    ----------------------------------------------------------------------------------------
  
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
import CollapseDefault from './AppsViewsCollapseDefault.vue'
import CollapseAccordion from './AppsViewsCollapseAccordion.vue'
import CollapseType from './AppsViewsCollapseType.vue'
import CollapseOpenHover from './AppsViewsCollapseOpenHover.vue'
import CollapseChangeArrowIcon from './AppsViewsCollapseChangeArrowIcon.vue'

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
