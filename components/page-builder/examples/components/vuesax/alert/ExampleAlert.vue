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
    <alert-example></alert-example>
  </div>
</template>

<script>
import AlertDefault from './ExampleAlertDefault.vue'
import AlertTitle from './ExampleAlertTitle.vue'
import AlertColor from './ExampleAlertColor.vue'
import AlertClosable from './ExampleAlertClosable.vue'
import AlertIcon from './ExampleAlertIcon.vue'
import AlertExample from './ExampleAlertExample.vue'

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
