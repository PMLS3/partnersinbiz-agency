<!-- =========================================================================================
    File Name: Dialogs.vue
    Description: Dialogs - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="dialog-demo">
    <dialogs-alert></dialogs-alert>
    <dialogs-confirm></dialogs-confirm>
    <dialogs-prompt></dialogs-prompt>
  </div>
</template>

<script>
import DialogsAlert from './ExampleDialogsAlert.vue'
import DialogsConfirm from './ExampleDialogsConfirm.vue'
import DialogsPrompt from './ExampleDialogsPrompt.vue'

export default {
  components: {
    DialogsAlert,
    DialogsConfirm,
    DialogsPrompt,
  },
}
</script>
