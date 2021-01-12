<!-- =========================================================================================
    File Name: Button.vue
    Description: Buttons - Imports all page portions
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <div id="button-demo">
    <divi></divi>
    <html-editor></html-editor>
    <span-add></span-add>
    <h1-tag></h1-tag>
    <h2-tag></h2-tag>
    <h3-tag></h3-tag>
    <h4-tag></h4-tag>
    <h5-tag></h5-tag>
    <h6-tag></h6-tag>
    <p-tag></p-tag>
  </div>
</template>

<script>
import divi from './divi.vue'
import htmlEditor from './htmlEditor.vue'
import spanAdd from './spanAdd'
import h1Tag from './h1Tag'
import h2Tag from './h2Tag'
import h3Tag from './h3Tag'
import h4Tag from './h4Tag'
import h5Tag from './h5Tag'
import h6Tag from './h6Tag'
import pTag from './pTag'

export default {
  components: {
    divi,
    htmlEditor,
    spanAdd,
    h1Tag,
    h2Tag,
    h3Tag,
    h4Tag,
    h5Tag,
    h6Tag,
    pTag
  }
}
</script>
