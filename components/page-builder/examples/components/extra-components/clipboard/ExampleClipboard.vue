<!-- =========================================================================================
    File Name: Clipboard.vue
    Description: Clipboard demo
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="page-clipboard-demo">
    <clipboard-directive></clipboard-directive>
    <clipboard-without-directive></clipboard-without-directive>
  </div>
</template>

<script>
import ClipboardDirective from './ExampleClipboardDirective.vue'
import ClipboardWithoutDirective from './ExampleClipboardWithoutDirective.vue'

export default {
  components: {
    ClipboardDirective,
    ClipboardWithoutDirective,
  },
}
</script>
