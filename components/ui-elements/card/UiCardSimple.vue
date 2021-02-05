<!-- =========================================================================================
    File Name: simple.vue
    Description: Simple card for dashboard
    ----------------------------------------------------------------------------------------
   
========================================================================================== -->
<template>
  <vx-card
    class="text-center transition duration-500 ease-in-out transform bg-gray-700 shadow-2xl cursor-pointer hover:bg-gray-900 hover:-translate-y-1 hover:scale-110"
    :class="{ [` bg-black hover:bg-gray-500`]: item.coming_soon }"
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
      if (item.coming_soon) {
        this.$vs.notify({
          title: 'Coming Soon',
          text: 'Check out our roadmap on release date',
          color: 'warning',
        })
      } else {
        if (item.url == '/dashboardMain') {
          this.$store.commit('business/UPDATE_BUSINESS_INFO', item)
          this.$router.push(item.url)
        } else {
          this.$store.commit('app/SET_FEATURE', item)
          this.$router.push(item.go_to_url)
        }
      }
    }

    return { sendFeature }
  },
}
</script>
