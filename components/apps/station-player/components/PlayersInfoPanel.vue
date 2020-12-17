<template>
  <!-- <vs-card height="60">
    <vs-card-title>
      <h2>{{ trackInfo.artist }} - {{ trackInfo.title }}</h2>
      <vs-spacer></vs-spacer>
      <h3>{{ trackInfo.seek | minutes }}/{{ trackInfo.duration | minutes }}</h3>
    </vs-card-title>
  </vs-card> -->

  <div class="flex justify-between">
    <div>
      <h3 class="text-2xl text-white  font-medium">
        {{ trackInfo.artist }}
      </h3>
      <p class="text-sm text-white  mt-1">{{ trackInfo.title }}</p>
    </div>
    <div class="text-red-300">
      <svg
        class="w-6 h-6"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    trackInfo: Object
  }
}
</script>
