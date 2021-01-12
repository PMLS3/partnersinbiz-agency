<!-- =========================================================================================
    File Name: Alert.vue
    Description: Alert
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <div id="alert-demo">
    <alert-default></alert-default>
    <alert-title></alert-title>
    <alert-color></alert-color>
    <alert-closable></alert-closable>
    <alert-icon></alert-icon>
    <!-- <alert-example></alert-example> -->
  </div>
</template>

<script>
import AlertDefault from './AppsViewsAlertDefault.vue'
import AlertTitle from './AppsViewsAlertTitle.vue'
import AlertColor from './AppsViewsAlertColor.vue'
import AlertClosable from './AppsViewsAlertClosable.vue'
import AlertIcon from './AppsViewsAlertIcon.vue'
import AlertExample from './AppsViewsAlertExample.vue'

export default {
  components: {
    AlertDefault,
    AlertTitle,
    AlertColor,
    AlertClosable,
    AlertIcon,
    AlertExample,
  },
}
</script>
