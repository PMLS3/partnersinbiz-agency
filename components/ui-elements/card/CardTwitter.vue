<template>
  <div
    class="w-full p-5 mx-auto text-gray-800 bg-white rounded-lg shadow"
    style="max-width: 400px"
  >
    <div class="flex w-full mb-4">
      <div class="w-12 h-12 overflow-hidden rounded-full">
        <img :src="item.user.profile_image_url_https" alt="" />
      </div>
      <div class="flex-grow pl-3">
        <h6 class="font-bold text-md">{{ item.user.name }}</h6>
        <p class="text-xs text-gray-600">@{{ item.user.screen_name }}</p>
      </div>
      <div class="w-12 text-right">
        <i class="text-3xl text-blue-400 mdi mdi-twitter"></i>
      </div>
    </div>
    <div class="w-full mb-4">
      <p class="text-sm">
        {{ item.text }}
      </p>
    </div>
    <div class="flex items-center">
      <vs-icon
        icon="thumb_up"
        class="mr-2"
        :color="item.favorite_count ? blue : gray"
      ></vs-icon>
      {{ item.favorite_count }}
      <vs-icon
        icon="repeat"
        class="ml-4 mr-2"
        :color="item.retweet_count ? green : gray"
      ></vs-icon
      >{{ item.retweet_count }}
    </div>

    <div class="w-full">
      <p class="text-xs text-right text-gray-500">
        {{ item.created_at.split('+')[0] }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {
      blue: 'blue',
      green: 'green',
      gray: 'gray',
    }
  },
}
</script>

<style>
@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);
</style>
