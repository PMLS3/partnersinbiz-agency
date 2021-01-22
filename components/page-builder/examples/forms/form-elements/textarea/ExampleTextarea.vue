<!-- =========================================================================================
  File Name: Textarea.vue
  Description: Add textarea using vs-textarea - Imports page portions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
    Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="form-element-textarea-demo">
    <textarea-default></textarea-default>
    <textarea-label></textarea-label>
    <textarea-counter></textarea-counter>
    <textarea-width></textarea-width>
    <textarea-height></textarea-height>
  </div>
</template>
<script>
import TextareaDefault from './ExampleTextareaDefault.vue'
import TextareaLabel from './ExampleTextareaLabel.vue'
import TextareaCounter from './ExampleTextareaCounter.vue'
import TextareaWidth from './ExampleTextareaWidth.vue'
import TextareaHeight from './ExampleTextareaHeight.vue'

export default {
  components: {
    TextareaDefault,
    TextareaLabel,
    TextareaCounter,
    TextareaWidth,
    TextareaHeight,
  },
}
</script>
