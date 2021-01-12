<!-- =========================================================================================
    File Name: Popup.vue
    Description: Popup - Imports all page portions
    ----------------------------------------------------------------------------------------
  
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
import PopupDefault from './AppsViewsPopupDefault.vue'
import PopupInnerPopup from './AppsViewsPopupInnerPopup.vue'
import PopupFullscreen from './AppsViewsPopupFullscreen.vue'
import PopupBackground from './AppsViewsPopupBackground.vue'

export default {
  components: {
    PopupDefault,
    PopupInnerPopup,
    PopupFullscreen,
    PopupBackground,
  },
}
</script>
