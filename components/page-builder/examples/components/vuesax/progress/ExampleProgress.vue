<!-- =========================================================================================
    File Name: Progress.vue
    Description: Progress - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="progress-demo">
    <progress-color></progress-color>
    <progress-interminate></progress-interminate>
    <progress-height></progress-height>
  </div>
</template>

<script>
import ProgressColor from './ExampleProgressColor.vue'
import ProgressInterminate from './ExampleProgressInterminate.vue'
import ProgressHeight from './ExampleProgressHeight.vue'

export default {
  components: {
    ProgressColor,
    ProgressInterminate,
    ProgressHeight,
  },
}
</script>
