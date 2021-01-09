<template>
  <!-- LATEST PHOTOS -->
  <vx-card :title="title" class="mt-base">
    <div class="pt-2 vx-row" v-if="userLatestPhotos.length > 0">
      <div
        class="w-1/2 vx-col sm:w-1/2 md:w-1/3 xl:1/4"
        v-for="(img, index) in userLatestPhotos"
        :key="index"
      >
        <img
          :src="img"
          alt="latest-upload"
          class="mb-4 rounded user-latest-image responsive"
        />
      </div>
    </div>
  </vx-card>
</template>

<script>
export default {
  name: 'UiImageGrid',
  props: {
    title: { type: String, default: 'Latest Photos' },
    userLatestPhotos: { type: Array, default: [] },
  },
}
</script>
