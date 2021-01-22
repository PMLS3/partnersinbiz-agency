<!-- =========================================================================================
    File Name: Upload.vue
    Description: Upload - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="upload-demo">
    <upload-default></upload-default>
    <upload-multiple></upload-multiple>
    <upload-automatic></upload-automatic>
  </div>
</template>

<script>
import UploadDefault from './ExampleUploadDefault.vue'
import UploadMultiple from './ExampleUploadMultiple.vue'
import UploadAutomatic from './ExampleUploadAutomatic.vue'

export default {
  components: {
    UploadDefault,
    UploadMultiple,
    UploadAutomatic,
  },
}
</script>
