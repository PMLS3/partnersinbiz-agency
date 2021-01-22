<!-- =========================================================================================
    File Name: Loading.vue
    Description: Loading - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="loading-demo">
    <loading-default></loading-default>
    <loading-type></loading-type>
    <loading-color></loading-color>
    <loading-background></loading-background>
    <loading-contained></loading-contained>
  </div>
</template>

<script>
import LoadingDefault from './ExampleLoadingDefault.vue'
import LoadingType from './ExampleLoadingType.vue'
import LoadingColor from './ExampleLoadingColor.vue'
import LoadingBackground from './ExampleLoadingBackground.vue'
import LoadingContained from './ExampleLoadingContained.vue'

export default {
  components: {
    LoadingDefault,
    LoadingType,
    LoadingColor,
    LoadingBackground,
    LoadingContained,
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/vuexy/pages/loading.scss';
</style>
