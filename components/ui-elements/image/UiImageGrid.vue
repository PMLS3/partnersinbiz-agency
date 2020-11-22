<template>
  <!-- LATEST PHOTOS -->
  <vx-card :title="title" class="mt-base">
    <div class="vx-row pt-2" v-if="userLatestPhotos.length > 0">
      <div
        class="vx-col w-1/2 sm:w-1/2 md:w-1/3 xl:1/4"
        v-for="(img, index) in userLatestPhotos"
        :key="index"
      >
        <img
          :src="img"
          alt="latest-upload"
          class="rounded mb-4 user-latest-image responsive"
        />
      </div>
    </div>
  </vx-card>
</template>

<script>
export default {
  name: "UiImageGrid",
  props: {
    title: { type: String, default: "Latest Photos" },
    userLatestPhotos: { type: Array, default: [] }
  }
};
</script>
