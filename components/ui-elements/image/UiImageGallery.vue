<template>
  <div class="mt-base" v-if="photos.length > 0">
    <div class="pt-2 vx-row">
      <div
        class="w-1/2 vx-col sm:w-1/2 md:w-1/3 xl:1/4"
        v-for="(photo, index) in photos"
        :key="index"
      >
        <div class="absolute">
          <vs-tooltip text="Use Image" class="flex float-right">
            <vs-button
              radius
              color="white"
              type="flat"
              class="mr-2"
              icon="add_photo_alternate"
              @click="userImage(photo)"
            ></vs-button>
          </vs-tooltip>
          <vs-tooltip text="Download Image" class="flex float-right">
            <vs-button
              radius
              color="white"
              type="flat"
              class="mr-2"
              icon="cloud_download"
              @click="downloadImage(photo)"
            ></vs-button>
          </vs-tooltip>
        </div>

        <img
          :src="photo.urls.thumb"
          alt="latest-upload"
          class="rounded user-latest-image responsive"
        />

        <div class="mx-1 mb-2 -mt-8 bg-gray-200 vx-row">
          <div class="w-1/4 vx-col">
            <vs-avatar size="large" :src="photo.user.profile_image.medium" />
          </div>
          <div class="items-center w-3/4 vx-col">
            <p class="float-left">Photo by: {{ photo.user.name }}</p>
            <p class="float-left">
              Portfolio:
              <a :href="photo.user.portfolio_url" target="_blank">
                {{ photo.user.portfolio_url }}</a
              >
            </p>
          </div>
          <p class="px-2 pb-2">{{ photo.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiImageGallery',
  props: {
    photos: { type: Array, default: () => [] },
  },
  data() {
    return {}
  },
  methods: {
    userImage(photo) {
      $nuxt.$emit('userImage', photo)
    },
    downloadImage(photo) {
      window.open(photo.links.downloads, '_blank')
    },
  },
}
</script>

<style></style>
