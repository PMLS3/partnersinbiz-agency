<!-- =========================================================================================
    File Name: Clipboard.vue
    Description: Clipboard demo
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <div id="page-clipboard-demo">
    <clipboard-directive></clipboard-directive>
    <clipboard-without-directive></clipboard-without-directive>
  </div>
</template>

<script>
import ClipboardDirective from './AppsViewsClipboardDirective.vue'
import ClipboardWithoutDirective from './AppsViewsClipboardWithoutDirective.vue'

export default {
  components: {
    ClipboardDirective,
    ClipboardWithoutDirective,
  },
}
</script>
