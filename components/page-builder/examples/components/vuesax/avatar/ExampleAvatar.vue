<!-- =========================================================================================
    File Name: Avatar.vue
    Description: Avatars
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="avatar-demo">
    <avatar-default></avatar-default>
    <avatar-size></avatar-size>
    <avatar-color></avatar-color>
    <avatar-with-badge></avatar-with-badge>
    <avatar-icon></avatar-icon>
  </div>
</template>

<script>
import AvatarDefault from './ExampleAvatarDefault.vue'
import AvatarSize from './ExampleAvatarSize.vue'
import AvatarColor from './ExampleAvatarColor.vue'
import AvatarWithBadge from './ExampleAvatarWithBadge.vue'
import AvatarIcon from './ExampleAvatarIcon.vue'

export default {
  components: {
    AvatarDefault,
    AvatarSize,
    AvatarColor,
    AvatarWithBadge,
    AvatarIcon,
  },
}
</script>
