<!-- =========================================================================================
    File Name: Notifications.vue
    Description: Notifications - Imports all page portions
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <div id="notifications-demo">
    <p class="mb-4">Nice, simple, and interactive notifications</p>

    <notifications-default></notifications-default>
    <notifications-position></notifications-position>
    <notifications-icon></notifications-icon>
    <notifications-fixed-and-function-click></notifications-fixed-and-function-click>
    <notifications-time></notifications-time>
  </div>
</template>

<script>
import NotificationsDefault from './AppsViewsNotificationsDefault.vue'
import NotificationsPosition from './AppsViewsNotificationsPosition.vue'
import NotificationsIcon from './AppsViewsNotificationsIcon.vue'
import NotificationsFixedAndFunctionClick from './AppsViewsNotificationsFixedAndFunctionClick.vue'
import NotificationsTime from './AppsViewsNotificationsTime.vue'

export default {
  components: {
    NotificationsDefault,
    NotificationsPosition,
    NotificationsIcon,
    NotificationsFixedAndFunctionClick,
    NotificationsTime,
  },
}
</script>
