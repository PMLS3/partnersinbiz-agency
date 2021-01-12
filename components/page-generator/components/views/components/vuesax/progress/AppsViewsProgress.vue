<!-- =========================================================================================
    File Name: Progress.vue
    Description: Progress - Imports all page portions
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <div id="progress-demo">
    <progress-color></progress-color>
    <progress-interminate></progress-interminate>
    <progress-height></progress-height>
  </div>
</template>

<script>
import ProgressColor from './AppsViewsProgressColor.vue'
import ProgressInterminate from './AppsViewsProgressInterminate.vue'
import ProgressHeight from './AppsViewsProgressHeight.vue'

export default {
  components: {
    ProgressColor,
    ProgressInterminate,
    ProgressHeight,
  },
}
</script>
