<!-- =========================================================================================
    File Name: Maintenance.vue
    Description: Maintenance Page
    ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <div class="flex w-full h-screen bg-img">
    <div
      class="flex flex-col items-center justify-center mx-auto text-center vx-col sm:w-1/2 md:w-3/5 lg:w-3/4 xl:w-1/2"
    >
      <img
        src="@/assets/illustrations/static_assets.svg"
        alt="graphic-maintenance"
        class="mx-auto mb-4"
      />
      <h1 class="mx-4 mb-6 text-5xl sm:mx-0 d-theme-heading-color">
        Under Maintenance!
      </h1>

      <vs-button size="large" @click="$router.push('/')"
        >Back to Home</vs-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Maintenance',

  data() {
    return {}
  },
}
</script>
