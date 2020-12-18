<template>
  <!-- <vs-card height="330" :class="{ playlist }">
    <vs-list>
      <vs-list-tile
        v-for="(track, index) in playlist"
        :key="track.title"
        v-show="track.display"
        :class="[
          { selected: track === selectedTrack },
          { even: index % 2 == 0 }
        ]"
      >
        <vs-list-tile-content
          @click="selectTrack(track)"
          @dblclick="playTrack()"
        >
          <vs-list-tile-title
            >{{ index | numbers }} {{ track.artist }} -
            {{ track.title }}</vs-list-tile-title
          >
        </vs-list-tile-content>
        <vs-spacer></vs-spacer>
        {{ track.howl.duration() | minutes }}
      </vs-list-tile>
    </vs-list>
  </vs-card> -->
  <div class="py-5 px-3">
    <div
      class="flex justify-between px-2 py-2"
      v-for="(track, index) in playlist"
      :key="track.title"
      v-show="track.display"
      :class="[{ selected: track === selectedTrack }, { even: index % 2 == 0 }]"
      @click="selectTrack(track)"
      @dblclick="playTrack()"
    >
      <p class="flex text-gray-700">
        <svg
          class="w-2 text-gray-500 mx-2"
          viewBox="0 0 8 8"
          fill="currentColor"
        >
          <circle cx="4" cy="4" r="3" />
        </svg>
        {{ index | numbers }} {{ track.artist }} -
        {{ track.title }}
      </p>
      <p class="text-gray-700 font-thin">
        {{ track.howl.duration() | minutes }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    playlist: Array,
    selectedTrack: Object
  },
  methods: {
    selectTrack(track) {
      this.$emit('selecttrack', track)
    },
    playTrack(index) {
      this.$emit('playtrack', index)
    }
  }
}
</script>

<style scoped>
.selected {
  background-color: orange !important;
}
.even {
  background-color: #cccccc;
}
.playlist {
  overflow: auto;
}
</style>
