<!-- =========================================================================================
  File Name: Chip.vue
  Description: Chip - Imports all page portions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="chip-demo">
    <chip-default />
    <chip-color />
    <chip-transparent />
    <chip-icon />
    <chip-closable />
    <chip-add-remove />
    <chip-customize-close-clear-chip-icon />
  </div>
</template>

<script>
import ChipDefault from './ExampleChipDefault.vue'
import ChipColor from './ExampleChipColor.vue'
import ChipTransparent from './ExampleChipTransparent.vue'
import ChipIcon from './ExampleChipIcon.vue'
import ChipClosable from './ExampleChipClosable.vue'
import ChipAddRemove from './ExampleChipAddRemove.vue'
import ChipCustomizeCloseClearChipIcon from './ExampleChipCustomizeCloseClearChipIcon.vue'

export default {
  components: {
    ChipDefault,
    ChipColor,
    ChipTransparent,
    ChipIcon,
    ChipClosable,
    ChipAddRemove,
    ChipCustomizeCloseClearChipIcon,
  },
}
</script>
