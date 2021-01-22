<!-- =========================================================================================
    File Name: Popup.vue
    Description: Popup - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="popup-demo">
    <popup-default></popup-default>
    <popup-inner-popup></popup-inner-popup>
    <popup-fullscreen></popup-fullscreen>
    <popup-background></popup-background>
  </div>
</template>

<script>
import PopupDefault from './ExamplePopupDefault.vue'
import PopupInnerPopup from './ExamplePopupInnerPopup.vue'
import PopupFullscreen from './ExamplePopupFullscreen.vue'
import PopupBackground from './ExamplePopupBackground.vue'

export default {
  components: {
    PopupDefault,
    PopupInnerPopup,
    PopupFullscreen,
    PopupBackground,
  },
}
</script>
