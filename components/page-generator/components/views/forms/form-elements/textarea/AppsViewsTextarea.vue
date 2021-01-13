<!-- =========================================================================================
  File Name: Textarea.vue
  Description: Add textarea using vs-textarea - Imports page portions
  ----------------------------------------------------------------------------------------

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
import TextareaDefault from './AppsViewsTextareaDefault.vue'
import TextareaLabel from './AppsViewsTextareaLabel.vue'
import TextareaCounter from './AppsViewsTextareaCounter.vue'
import TextareaWidth from './AppsViewsTextareaWidth.vue'
import TextareaHeight from './AppsViewsTextareaHeight.vue'

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
