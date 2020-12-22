<template>
  <div>
    <div class="w-full">
      <!-- <p>here: {{ currentPlay }}</p> -->
      <div class="h-2 bg-red-light"></div>
      <div
        class="flex items-center justify-center mb-5 bg-red-lightest"
        v-if="currentTrack"
      >
        <div
          class="bg-black bg-opacity-25 rounded-lg shadow-lg"
          style="width: 45rem !important"
        >
          <div class="flex">
            <div class="w-full">
              <img
                class="hidden w-full rounded md:block"
                :src="currentTrack.cover"
                alt="Album Pic"
              />
            </div>
            <div class="w-full p-8">
              <players-info-panel :trackInfo="getTrackInfo">
              </players-info-panel>
              <players-controls-bars
                v-show="show"
                :loop="loop"
                :shuffle="shuffle"
                :progress="progress"
                :playing="playing"
                @playtrack="play"
                @pausetrack="pause"
                @stoptrack="stop"
                @skiptrack="skip"
                @toggleloop="toggleLoop"
                @toggleshuffle="toggleShuffle"
                @updateseek="setSeek"
              >
              </players-controls-bars>
            </div>
          </div>

          <div class="py-4 mx-8" v-show="show">
            <players-progress :progress="progress" :trackInfo="getTrackInfo">
            </players-progress>
          </div>
          <div
            class="w-full overflow-hidden bg-black bg-opacity-25 rounded-lg shadow-lg min-h-64"
            v-show="show"
          >
            <!-- <p class="px-4 pt-3 mb-2 text-2xl font-thin text-gray-600">
              Songs
            </p> -->
            <players-search-bar :playlist="playlist"> </players-search-bar>
            <players-playlist-panel
              :playlist="playlist"
              :selectedTrack="selectedTrack"
              @selecttrack="selectTrack"
              @playtrack="play"
            >
            </players-playlist-panel>
            <div class="flex flex-row-reverse px-2 py-3 bg-gray-300">
              <button
                class="z-50 px-4 py-2 text-white bg-blue-500 rounded"
                @click="updateList()"
              >
                Update songs to Cloud
              </button>
              <button class="px-4 py-2 text-gray-600 rounded">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlayersTitleBar from './components/PlayersTitleBar.vue'
import PlayersPlaylistPanel from './components/PlayersPlaylistPanel.vue'
import PlayersControlsBars from './components/PlayersControlsBars.vue'
import PlayersInfoPanel from './components/PlayersInfoPanel.vue'
import PlayersSearchBar from './components/PlayersSearchBar.vue'
import PlayersProgress from './components/PlayersProgress.vue'
export default {
  props: {
    // playlist: {
    //   required: true,
    //   type: Array,
    //   default: []
    // },
    room: {
      required: true,
      type: String,
    },
    show: {
      required: true,
      type: Boolean,
      default: false,
    },
  },
  components: {
    PlayersTitleBar,
    PlayersPlaylistPanel,
    PlayersControlsBars,
    PlayersInfoPanel,
    PlayersSearchBar,
    PlayersProgress,
  },
  data() {
    return {
      selectedTrack: null,
      index: 0,
      playing: false,
      loop: false,
      shuffle: false,
      seek: 0,
      receivePlayTrack: 22,
      receivePlaylist: false,
    }
  },
  computed: {
    playlist() {
      return this.$store.state.radio.playlist
    },
    currentPlay() {
      return this.$store.state.radio.currentPlay
    },
    currentTrack() {
      return this.playlist[this.index]
    },
    progress() {
      if (this.currentTrack.howl.duration() === 0) return 0
      return this.seek / this.currentTrack.howl.duration()
    },
    playID() {
      return this.$store.state.radio.playID
    },
    skipID() {
      return this.$store.state.radio.skipID
    },
    setPlay() {
      return this.$store.state.radio.setPlay
    },
    setPause() {
      return this.$store.state.radio.setPause
    },
    setStop() {
      return this.$store.state.radio.setStop
    },
    getTrackInfo() {
      let artist = this.currentTrack.artist,
        title = this.currentTrack.title,
        seek = this.seek,
        duration = this.currentTrack.howl.duration()
          ? this.currentTrack.howl.duration()
          : null
      return {
        artist,
        title,
        seek,
        duration,
      }
    },
  },
  watch: {
    receivePlaylist() {
      if (this.receivePlaylist) {
        this.$vs.notify({
          title: 'Received',
          text: 'Playlist has been update in cloud',
          color: 'success',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
        })
      }
      this.receivePlaylist = false
    },
    playing(playing) {
      this.seek = this.currentTrack.howl.seek()
      let updateSeek
      if (playing) {
        updateSeek = setInterval(() => {
          this.seek = this.currentTrack.howl.seek()
        }, 250)
      } else {
        clearInterval(updateSeek)
      }
    },

    playlist() {
      if (this.show) {
        this.updateList()
      }
      this.howlIt()
    },
    setPlay() {
      console.log('playID', this.playID)
      if (this.setPlay) {
        this.play(this.playID)
      }
    },
    skipID() {
      console.log('skipID', this.skipID)
      this.skipTo(this.skipID)
    },
    setStop() {
      if (this.setStop) {
        this.stop()
      }
    },
    setPause() {
      if (this.setPause) {
        this.pause()
      }
    },
  },
  created: function () {
    this.howlIt()
  },
  mounted() {
    this.socket = this.$nuxtSocket({ channel: '/radio' })
  },

  methods: {
    howlIt() {
      let vm = this
      vm.playlist.forEach((track) => {
        let file = track.audio
        track.howl = new Howl({
          src: [`${file}`],
          onend: () => {
            if (vm.loop) {
              vm.play(vm.index)
            } else {
              vm.skip('next')
            }
          },
        })
      })
      function playCurrentTrack(index, time) {
        console.log('index', index, time)
        let correctTime = time + 10
        vm.play(index, correctTime)
      }

      if (!vm.show) {
        console.log('going to play', vm.currentPlay.index)

        setTimeout(
          playCurrentTrack,
          10000,
          vm.currentPlay.index,
          vm.currentPlay.currentTime
        )
        // this.skipTo(this.currentPlay.index)
      }
    },
    updateList() {
      this.howlIt()
      let vm = this
      this.$vs.loading()

      setTimeout(function () {
        let list = []
        for (let i = 0; i < vm.playlist.length; i++) {
          let track = {}
          track.audio = vm.playlist[i].audio
          track.artist = vm.playlist[i].artist
          track.title = vm.playlist[i].title
          track.album = vm.playlist[i].album
          track.duration = vm.playlist[i].howl.duration()
          track.display = vm.playlist[i].display
          track.cover = vm.playlist[i].cover
          track.currentTime = 0
          console.log('HERE', vm.playlist[i].howl)
          list.push(track)
        }
        vm.newList = {
          playlist: list,
          room: vm.room,
        }
        console.log('playlist sending', list)
        vm.sendPlaylist(vm.newList)
        vm.$vs.loading.close()
      }, 4000)
    },

    selectTrack(track) {
      this.selectedTrack = track
    },

    play(index, time) {
      console.log('play', index)
      let selectedTrackIndex = this.playlist.findIndex(
        (track) => track === this.selectedTrack
      )
      if (typeof index === 'number') {
        index = index
      } else if (this.selectedTrack) {
        if (this.selectedTrack != this.currentTrack) {
          this.stop()
        }
        index = selectedTrackIndex
      } else {
        index = this.index
      }

      if (this.show) {
        this.playIndex = {
          room: this.room,
          index: index,
        }
        this.playTrack(this.playIndex)
      }
      console.log('list', this.playlist[index])
      let track = this.playlist[index].howl

      console.log('tra', this.playlist[index].howl)
      if (track.playing()) {
        return
      } else {
        if (time) {
          console.log('time', parseInt(time))
          let trackNow = track.play()
          track.seek(time, trackNow)
        } else {
          track.play()
        }
      }

      this.selectedTrack = this.playlist[index]
      this.playing = true
      this.index = index
      this.$store.commit('radio/SET_STOP', false)
      this.$store.commit('radio/SET_PAUSE', false)
    },
    pause() {
      if (this.show) {
        this.pauseIndex = {
          room: this.room,
          set: true,
        }
        this.pauseTrack()
      }
      this.currentTrack.howl.pause()
      this.playing = false
    },
    stop() {
      if (this.show) {
        this.stopIndex = {
          room: this.room,
          set: true,
        }
        this.stopTrack()
      }
      this.currentTrack.howl.stop()
      this.playing = false
    },
    skip(direction) {
      let index = 0,
        lastIndex = this.playlist.length - 1
      if (this.shuffle) {
        index = Math.round(Math.random() * lastIndex)
        while (index === this.index) {
          index = Math.round(Math.random() * lastIndex)
        }
      } else if (direction === 'next') {
        index = this.index + 1
        if (index >= this.playlist.length) {
          index = 0
        }
      } else {
        index = this.index - 1
        if (index < 0) {
          index = this.playlist.length - 1
        }
      }
      if (this.show) {
        this.skipToIndex = {
          room: this.room,
          index: index,
        }
        this.skipToTrack()
      }
      this.skipTo(index)
    },
    skipTo(index) {
      if (this.currentTrack) {
        this.currentTrack.howl.stop()
      }
      this.play(index)
    },
    toggleLoop(value) {
      this.loop = value
    },
    toggleShuffle(value) {
      this.shuffle = value
    },
    setSeek(percents) {
      let track = this.currentTrack.howl
      if (track.playing()) {
        track.seek((track.duration() / 100) * percents)
      }
    },
  },
}
</script>
