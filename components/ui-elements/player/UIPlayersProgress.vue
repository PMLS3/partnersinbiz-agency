<template>
  <div>
    <div class="flex justify-between text-sm text-grey-darker">
      <p>{{ trackInfo.seek | minutes }}</p>
      <p>{{ trackInfo.duration | minutes }}</p>
    </div>
    <div class="mt-1">
      <vs-slider
        v-model="trackProgress"
        @click="updateSeek($event)"
      ></vs-slider>
    </div>
  </div>
</template>

<script>
import { Howl, Howler } from 'howler'

export default {
  props: {
    progress: Number,
    trackInfo: Object
  },
  data() {
    return {}
  },
  computed: {
    trackProgress() {
      return this.progress * 100
    }
  },
  created: function() {},
  methods: {
    updateSeek(event) {
      let el = document.querySelector('.progress-linear__bar'),
        mousePos = event.offsetX,
        elWidth = el.clientWidth,
        percents = (mousePos / elWidth) * 100
      this.$emit('updateseek', percents)
    }
  }
}
</script>
