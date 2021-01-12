<!-- =========================================================================================
    File Name: Avatar.vue
    Description: Avatars
    ----------------------------------------------------------------------------------------
  
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
import AvatarDefault from './AppsViewsAvatarDefault.vue'
import AvatarSize from './AppsViewsAvatarSize.vue'
import AvatarColor from './AppsViewsAvatarColor.vue'
import AvatarWithBadge from './AppsViewsAvatarWithBadge.vue'
import AvatarIcon from './AppsViewsAvatarIcon.vue'

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
