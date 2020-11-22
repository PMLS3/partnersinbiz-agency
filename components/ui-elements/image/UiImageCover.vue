<template>
  <div class="cover-container rounded-t-lg">
    <img
      :src="user.cover_img ? user.cover_img : user_info.cover_img"
      alt="user-profile-cover"
      class="responsive block"
    />
  </div>
</template>

<script>
export default {
  name: "UiImageCover",
  props: {
    user: { type: Object, default: {} },
    user_info: { type: Object, default: {} }
  }
};
</script>

<style></style>
