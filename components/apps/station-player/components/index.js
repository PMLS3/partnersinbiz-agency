const { Howl, Howler } = require('howler')
module.exports = {
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
      return playlist[index]
    },
    progress() {
      if (currentTrack.howl.duration() === 0) return 0
      return seek / currentTrack.howl.duration()
    },
    getTrackInfo() {
      let artist = currentTrack.artist,
        title = currentTrack.title,
        seek = seek,
        duration = currentTrack.howl.duration()
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
      seek = currentTrack.howl.seek()
      let updateSeek
      if (playing) {
        updateSeek = setInterval(() => {
          seek = currentTrack.howl.seek()
        }, 250)
      } else {
        clearInterval(updateSeek)
      }
    }
  },
  created: function() {
    console.log('test')
    console.log('test c', this.playlist)
    console.log('test c', this.playlist)

    data().playlist.forEach(track => {
      let file = track.audio
      track.howl = new Howl({
        src: [`${file}`],
        onend: () => {
          if (data().loop) {
            play(data().index)
          } else {
            skip('next')
          }
        }
      })
      console.log('trec', track)
    })
  },
  methods: {
    selectTrack(track) {
      selectedTrack = track
    },
    play(index) {
      let selectedTrackIndex = data().playlist.findIndex(
        track => track === selectedTrack
      )
      if (typeof index === 'number') {
        index = index
      } else if (selectedTrack) {
        if (selectedTrack != currentTrack) {
          stop()
        }
        index = selectedTrackIndex
      } else {
        index = index
      }
      let track = playlist[index].howl
      if (track.playing()) {
        return
      } else {
        track.play()
      }

      selectedTrack = playlist[index]
      playing = true
      index = index
    },
    pause() {
      currentTrack.howl.pause()
      playing = false
    },
    stop() {
      currentTrack.howl.stop()
      playing = false
    },
    skip(direction) {
      let index = 0,
        lastIndex = playlist.length - 1
      if (shuffle) {
        index = Math.round(Math.random() * lastIndex)
        while (index === index) {
          index = Math.round(Math.random() * lastIndex)
        }
      } else if (direction === 'next') {
        index = index + 1
        if (index >= playlist.length) {
          index = 0
        }
      } else {
        index = index - 1
        if (index < 0) {
          index = playlist.length - 1
        }
      }
      skipTo(index)
    },
    skipTo(index) {
      if (currentTrack) {
        currentTrack.howl.stop()
      }
      play(index)
    },
    toggleLoop(value) {
      loop = value
    },
    toggleShuffle(value) {
      shuffle = value
    },
    setSeek(percents) {
      let track = currentTrack.howl
      if (track.playing()) {
        track.seek((track.duration() / 100) * percents)
      }
    }
  }
}
