<!-- =========================================================================================
    File Name: Maintenance.vue
    Description: Maintenance Page
    ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <div
    class="h-screen flex w-full bg-img"
    @click="addComponent('maintenance-page')"
    id="maintenance-page"
  >
    <div
      class="vx-col flex items-center justify-center flex-col sm:w-1/2 md:w-3/5 lg:w-3/4 xl:w-1/2 mx-auto text-center"
    >
      <img
        src="@/assets/images/pages/maintenance-2.png"
        alt="graphic-maintenance"
        class="mx-auto mb-4"
      />
      <h1 class="sm:mx-0 mx-4 mb-6 text-5xl d-theme-heading-color">
        Under Maintenance!
      </h1>
      <p class="sm:mx-0 mx-4 mb-6 d-theme-text-inverse">
        paraphonic unassessable foramination Caulopteris worral Spirophyton
        encrimson esparcet aggerate chondrule restate whistler shallopy
        biosystematy area bertram plotting unstarting quarterstaff.
      </p>
      <vs-button size="large" to="/">Back to Home</vs-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: '',
    }
  },
  addComponent(name) {
    let element = document.getElementById(name)

    let payload = this.$comp_create(
      element,
      this.$store.state.page_builder.list_pos
    )

    $nuxt.$emit('component-added', payload)
    $nuxt.$emit('close_comp')
  },
}
</script>
