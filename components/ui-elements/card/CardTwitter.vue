<template>
  <div
    class="w-full p-5 mx-auto text-gray-800 bg-white rounded-lg shadow"
    style="max-width: 400px"
  >
    <div class="flex w-full mb-4">
      <div class="w-12 h-12 overflow-hidden rounded-full">
        <img :src="item.img" alt="" />
      </div>
      <div class="flex-grow pl-3">
        <h6 class="font-bold text-md">{{ item.name }}</h6>
        <p class="text-xs text-gray-600">{{ item.handle }}</p>
      </div>
      <div class="w-12 text-right">
        <i class="text-3xl text-blue-400 mdi mdi-twitter"></i>
      </div>
    </div>
    <div class="w-full mb-4">
      <p class="text-sm">
        {{ item.tweet }}
      </p>
    </div>
    <div class="w-full">
      <p class="text-xs text-right text-gray-500">{{ item.date }}</p>
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
}
</script>

<style>
@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);
</style>
