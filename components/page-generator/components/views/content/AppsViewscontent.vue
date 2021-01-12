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
import divi from './AppsViewsdivi.vue'
import htmlEditor from './AppsViewshtmlEditor.vue'
import spanAdd from './AppsViewsspanAdd'
import h1Tag from './AppsViewsh1Tag'
import h2Tag from './AppsViewsh2Tag'
import h3Tag from './AppsViewsh3Tag'
import h4Tag from './AppsViewsh4Tag'
import h5Tag from './AppsViewsh5Tag'
import h6Tag from './AppsViewsh6Tag'
import pTag from './AppsViewspTag'

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
    pTag,
  },
}
</script>
