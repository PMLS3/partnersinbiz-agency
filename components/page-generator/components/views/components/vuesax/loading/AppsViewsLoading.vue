<!-- =========================================================================================
    File Name: Loading.vue
    Description: Loading - Imports all page portions
    ----------------------------------------------------------------------------------------
  
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
import LoadingDefault from './AppsViewsLoadingDefault.vue'
import LoadingType from './AppsViewsLoadingType.vue'
import LoadingColor from './AppsViewsLoadingColor.vue'
import LoadingBackground from './AppsViewsLoadingBackground.vue'
import LoadingContained from './AppsViewsLoadingContained.vue'

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

<style lang="scss" scoped>
@import '@/assets/scss/vuexy/pages/loading.scss';
</style>
