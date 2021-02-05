<!-- =========================================================================================
    File Name: Dashboard.vue.vue
    Description: Knowledge Base Page
    ----------------------------------------------------------------------------------------
========================================================================================== -->

<template>
  <div class="p-8 pt-24 mb-4 bg-gray-700 bg-opacity-75">
    <UiMarqueeText
      :paused="isPaused"
      class="py-2 mt-2 text-white bg-gray-700"
      @mouseenter="isPaused = !isPaused"
      @mouseleave="isPaused = false"
    >
      {{ motivational_quote }} | ' '
    </UiMarqueeText>
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
      return store.state.info.motivational_quotes
    })
    let motivational_quote = computed(() => {
      let num = Math.floor(Math.random() * 55)
      return motivational_quotes.value[num]
    })
    return {
      motivational_quotes,
      motivational_quote,
      isPaused,
    }
  },
}
</script>
