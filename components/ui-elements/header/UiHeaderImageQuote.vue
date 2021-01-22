<!-- =========================================================================================
    File Name: Dashboard.vue.vue
    Description: Knowledge Base Page
    ----------------------------------------------------------------------------------------
========================================================================================== -->

<template>
  <div id="knowledge-base-page">
    <div class="p-8 pt-24 mb-4 knowledge-base-jumbotron-content">
      <UiMarqueeText
        :paused="isPaused"
        class="py-2 mt-2 text-white bg-dark"
        @mouseenter="isPaused = !isPaused"
        @mouseleave="isPaused = false"
      >
        {{ motivational_quotes }}
      </UiMarqueeText>
    </div>
  </div>
</template>

<script>
import { useContext, computed, ref } from '@nuxtjs/composition-api'
export default {
  name: 'UiHeaderImageQuote',
  setup() {
    const { store } = useContext()
    let isPaused = ref(false)
    let motivational_quotes = computed(() => {
      let num = Math.floor(Math.random() * 55)
      return store.state.info.motivational_quotes[num]
    })
    return {
      motivational_quotes,
      isPaused,
    }
  },
}
</script>

<style lang="scss" scoped>
.knowledge-base-jumbotron-content {
  background-image: url('../../../assets/images/background/night.jpeg');

  background-size: cover;
}
</style>
