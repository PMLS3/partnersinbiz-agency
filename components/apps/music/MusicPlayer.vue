<template>
  <div>
    <div class="w-full">
      <div class="h-2 bg-red-light"></div>
      <div class="flex items-center justify-center h-screen bg-red-lightest">
        <div
          class="bg-white rounded-lg shadow-lg"
          style="width: 45rem !important;"
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
              <PlayersInfoPanel :trackInfo="getTrackInfo" />

              <PlayersControlsBars
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
              />
            </div>
          </div>
          <div class="py-4 mx-8">
            <PlayersProgress :progress="progress" :trackInfo="getTrackInfo" />
          </div>
          <div
            class="w-full overflow-hidden bg-white rounded-lg shadow-lg min-h-64"
          >
            <p class="px-4 pt-3 mb-2 text-2xl font-thin text-gray-600 ">
              PlayList
            </p>
            <!-- <PlayersSearchBar :playlist="playlist" /> -->
            <PlayersPlaylistPanel
              :playlist="playlist"
              :selectedTrack="selectedTrack"
              @selecttrack="selectTrack"
              @playtrack="play"
            />
            <!-- <div class="flex flex-row-reverse px-2 py-3 bg-gray-300">
              <button class="px-4 py-2 text-white bg-blue-500 rounded">
                Invite
              </button>
              <button class="px-4 py-2 text-gray-600 rounded">Cancel</button>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Howl, Howler } from 'howler'

export default {
  data() {
    return {
      playlist: [
        {
          audio:
            'https://rorg.z1.fm/d/3f/ti_ft_eminem_-_thats_all_she_wrote_(zv.fm).mp3',
          artist: 'T.I',
          title: "That's All She Wrote (ft. Eminem)",
          album: '',
          howl: null,
          display: true,
          cover:
            'https://res.cloudinary.com/djx5h4cjt/image/upload/v1551189593/random/f55abc725080eb05147e45ce3cd406a8.1000x1000x1.jpg'
        },
        {
          audio:
            'https://dll.z1.fm/music/8/e8/ellie_goulding_feat_diplo__swae_lee_-_close_to_me.mp3',
          artist: 'Ellie Goulding Feat. Diplo & Swae Lee',
          title: 'Close To Me',
          album: 'None',
          howl: null,
          display: true,
          cover:
            'https://res.cloudinary.com/djx5h4cjt/image/upload/v1551189716/random/ellie-goulding-close-to-me-lg.jpg'
        },
        {
          audio: 'https://rorg.z1.fm/8/ff/sia_-_lullaby_zaycevnet_(zv.fm).mp3',
          artist: 'Sia',
          title: 'Lullaby',
          album: '',
          howl: null,
          display: true,
          cover:
            'https://res.cloudinary.com/djx5h4cjt/image/upload/v1551189786/random/t54664010-b708389188_s400.jpg'
        },
        {
          audio: 'https://muz.z1.fm/6/6f/lp_-_muddy_waters_(zf.fm).mp3',
          artist: 'LP',
          title: 'Muddy Waters',
          howl: null,
          display: true,
          album: '',
          cover:
            'https://res.cloudinary.com/djx5h4cjt/image/upload/v1551189837/random/t337772630-i1186767461_s400.jpg'
        },
        {
          audio: 'https://rorg.z1.fm/f/d6/david_dallas_-_runnin_(zf.fm).mp3',
          artist: 'David Dallas',
          title: 'Runnin',
          howl: null,
          display: true,
          album: '',
          cover:
            'https://res.cloudinary.com/djx5h4cjt/image/upload/v1551189882/random/t93555159-i1095888717_s400.jpg'
        },
        {
          audio: 'https://jt2.z1.fm/f/bf/labrinth_-_vultures_(zvukoff.ru).mp3',
          artist: 'Labrinth',
          title: 'Vultures',
          album: '',
          howl: null,
          display: true,
          cover:
            'https://res.cloudinary.com/djx5h4cjt/image/upload/v1551189373/random/R-3512282-1392987047-7461.jpeg.jpg'
        },
        {
          audio:
            'https://muz17.z1.fm/b/10/niall_horan_-_slow_hands_slow_hands_(zf.fm).mp3',
          artist: 'Niall Horan',
          title: 'Slow Hands',
          album: '',
          howl: null,
          display: true,
          cover:
            'https://res.cloudinary.com/djx5h4cjt/image/upload/v1551190705/random/niall-horan-slow-hands-audio-02.jpg'
        },
        {
          audio:
            'https://muz.z1.fm/a/fa/davide_esposito_-_a_cavallo_del_vento_(zf.fm).mp3',
          artist: 'Davide Esposito',
          title: 'A Cavallo Del Vento',
          howl: null,
          display: true,
          album: '',
          cover:
            'https://res.cloudinary.com/djx5h4cjt/image/upload/v1551190889/random/500x500.jpg'
        },
        {
          audio:
            'https://dll.z1.fm/music/9/88/benny_blanco__halsey__khalid_-_eastside.mp3',
          artist: 'Benny Blanco, Halsey & Khalid',
          title: 'Eastside',
          howl: null,
          display: true,
          album: '',
          cover:
            'https://res.cloudinary.com/djx5h4cjt/image/upload/v1551192768/random/artworks-000432419499-7ts3gr-t500x500.jpg'
        }
      ],
      selectedTrack: null,
      index: 0,
      playing: false,
      loop: false,
      shuffle: false,
      seek: 0
    }
  },
  computed: {
    currentTrack() {
      return this.playlist[this.index]
    },
    progress() {
      if (this.currentTrack.howl.duration() === 0) return 0
      return this.seek / this.currentTrack.howl.duration()
    },
    getTrackInfo() {
      let artist = this.currentTrack.artist,
        title = this.currentTrack.title,
        seek = this.seek,
        duration = this.currentTrack.howl.duration()
      return {
        artist,
        title,
        seek,
        duration
      }
    }
  },
  watch: {
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
    }
  },
  created: function() {
    this.playlist.forEach(track => {
      let file = track.audio
      track.howl = new Howl({
        src: [`${file}`],
        onend: () => {
          if (this.loop) {
            this.play(this.index)
          } else {
            this.skip('next')
          }
        }
      })
    })
  },
  // created() {
  //   console.log('Mix')
  //   Mix.created()
  // }
  methods: {
    selectTrack(track) {
      this.selectedTrack = track
    },
    play(index) {
      let selectedTrackIndex = this.playlist.findIndex(
        track => track === this.selectedTrack
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
      let track = this.playlist[index].howl
      if (track.playing()) {
        return
      } else {
        track.play()
      }

      this.selectedTrack = this.playlist[index]
      this.playing = true
      this.index = index
    },
    pause() {
      this.currentTrack.howl.pause()
      this.playing = false
    },
    stop() {
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
    }
  }
}
</script>
