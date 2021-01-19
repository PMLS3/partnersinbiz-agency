<!-- =========================================================================================
    File Name: simple.vue
    Description: Simple card for dashboard
    ----------------------------------------------------------------------------------------
   
========================================================================================== -->
<template>
  <vx-card
    class="text-center bg-gray-100 cursor-pointer"
    @click="sendFeature(item)"
  >
    <img
      :src="item.graphic"
      alt="graphic"
      width="180"
      class="h-48 mx-auto mb-4"
    />
    <hr />
    <div class="p-2 bg-gray-200">
      <h4 class="mt-2 mb-2">{{ item.title.toUpperCase() }}</h4>
      <small v-html="item.description">{{ item.description }}</small>
    </div>
  </vx-card>
</template>

<script>
export default {
  name: 'SimpleCard',
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
  setup() {
    function sendFeature(item) {
      if (item.url == '/dashboardMain') {
        this.$store.commit('business/UPDATE_BUSINESS_INFO', item)
        this.$router.push(item.url)
      } else {
        this.$store.commit('app/SET_FEATURE', item)
        this.$router.push(item.go_to_url)
      }
    }

    return { sendFeature }
  },
}
</script>

<style></style>
