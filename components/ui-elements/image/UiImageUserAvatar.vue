<template>
  <div>
    <vs-avatar class="user-profile-img" :src="avatar" size="85px" />
  </div>
</template>

<script>
export default {
  name: "UiImageUserAvatar",
  props: {
    avatar: { type: String, default: "" }
  }
};
</script>

<style></style>
