<template>
  <div>
    <div class="flex items-center justify-between w-full mt-6">
      <div class="text-grey-darker" @click="skipTrack('prev')">
        <vs-icon>skip_previous</vs-icon>
      </div>

      <div
        class="p-8 text-white rounded-full shadow-lg"
        v-if="!playing"
        @click="playTrack()"
      >
        <!-- <vs-icon large>play_arrow</vs-icon> -->
        <vs-button icon="play_arrow" color="green"></vs-button>
      </div>
      <div
        class="p-8 text-white rounded-full shadow-lg"
        v-if="playing"
        @click="pauseTrack"
      >
        <vs-button icon="pause" color="red"></vs-button>
      </div>
      <div class="text-grey-darker" @click="stopTrack" v-if="playing">
        <vs-button icon="stop"></vs-button>
      </div>
      <div class="text-grey-darker" @click="skipTrack('next')">
        <vs-icon class="w-8 h-8">skip_next</vs-icon>
      </div>
      <div flat icon @click="toggleLoop">
        <vs-icon class="text-blue-300" v-if="this.loop">repeat_one</vs-icon>
        <vs-icon class="text-blue-600" v-else>repeat_one</vs-icon>
      </div>
      <div flat icon @click="toggleShuffle">
        <vs-icon class="text-blue-300" v-if="this.shuffle">shuffle</vs-icon>
        <vs-icon class="text-blue-600" v-else>shuffle</vs-icon>
      </div>
    </div>
    <div class="flex items-center justify-between ">
      <div flat icon @click="toggleMute">
        <template v-if="!this.muted">
          <vs-icon v-if="this.volume >= 0.5">volume_up</vs-icon>
          <vs-icon v-else-if="this.volume > 0">volume_down</vs-icon>
          <vs-icon v-else>volume_mute</vs-icon>
        </template>
        <vs-icon v-show="this.muted">volume_off</vs-icon>
      </div>
      <vs-slider
        v-model="volume"
        @input="updateVolume(volume)"
        max="1"
        :step-decimals="true"
        step="0.01"
      ></vs-slider>
      {{ this.volume * 100 + '%' }}
    </div>
  </div>
</template>

<script>
import { Howl, Howler } from 'howler'

export default {
  props: {
    loop: Boolean,
    shuffle: Boolean,
    progress: Number,
    playing: Boolean
  },
  data() {
    return {
      volume: 0.5,
      muted: false
    }
  },
  computed: {
    trackProgress() {
      return this.progress * 100
    }
  },
  created: function() {
    Howler.volume(this.volume)
  },
  methods: {
    playTrack(index) {
      this.$emit('playtrack', index)
    },
    pauseTrack() {
      this.$emit('pausetrack')
    },
    stopTrack() {
      this.$emit('stoptrack')
    },
    skipTrack(direction) {
      this.$emit('skiptrack', direction)
    },
    updateVolume(volume) {
      Howler.volume(volume)
    },
    toggleMute() {
      Howler.mute(!this.muted)
      this.muted = !this.muted
    },
    toggleLoop() {
      this.$emit('toggleloop', !this.loop)
    },
    toggleShuffle() {
      this.$emit('toggleshuffle', !this.shuffle)
    },
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
