<!-- =========================================================================================
    File Name: Dialogs.vue
    Description: Dialogs - Imports all page portions
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <div id="dialog-demo">
    <dialogs-alert></dialogs-alert>
    <dialogs-confirm></dialogs-confirm>
    <dialogs-prompt></dialogs-prompt>
  </div>
</template>

<script>
import DialogsAlert from './AppsViewsDialogsAlert.vue'
import DialogsConfirm from './AppsViewsDialogsConfirm.vue'
import DialogsPrompt from './AppsViewsDialogsPrompt.vue'

export default {
  components: {
    DialogsAlert,
    DialogsConfirm,
    DialogsPrompt,
  },
}
</script>
