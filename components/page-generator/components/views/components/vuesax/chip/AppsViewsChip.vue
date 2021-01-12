<!-- =========================================================================================
  File Name: Chip.vue
  Description: Chip - Imports all page portions
  ----------------------------------------------------------------------------------------

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
import ChipDefault from './AppsViewsChipDefault.vue'
import ChipColor from './AppsViewsChipColor.vue'
import ChipTransparent from './AppsViewsChipTransparent.vue'
import ChipIcon from './AppsViewsChipIcon.vue'
import ChipClosable from './AppsViewsChipClosable.vue'
import ChipAddRemove from './AppsViewsChipAddRemove.vue'
import ChipCustomizeCloseClearChipIcon from './AppsViewsChipCustomizeCloseClearChipIcon.vue'

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
