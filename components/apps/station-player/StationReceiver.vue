<template>
  <div class="w-screen h-screen bg-black bg-opacity-75">
    <!-- <client-only>
      <vs-card class="flex items-center h-48 bg-gray-200">
        <video-chat :room="room" :show="show" />
      </vs-card>
      <station-player :room="room" :show="show" v-if="roomInfo" />
    </client-only> -->

    <h1>HELOO</h1>
    <h1>HELOO</h1>
    <h1>HELOO</h1>
    <h1>HELOO</h1>
    <h1>HELOO</h1>

    <StationPlayer :room="$route.params.id" :show="show" />
  </div>
</template>

<script>
export default {
  components: {
    // stationPlayer: () =>
    //   process.client
    //     ? import(
    //         '@/components/apps/music/radio/components/station-player/index.vue'
    //       )
    //     : null,
    // videoChat: () =>
    //   process.client
    //     ? import('@/components/apps/videoCall/videoChat/index.vue')
    //     : null,
    // whiteboard: () =>
    //   process.client ? import('@/components/apps/konva/index.vue') : null,
  },
  data() {
    return {
      show: false,
      roomInfo: null,
      receivePlayTrack: '',
      showChat: false,
      showBoard: false,
      showPlayer: true,
    }
  },
  watch: {
    roomInfo() {
      console.log('here')
      console.log('here', this.roomInfo)
      let playTrack = this.roomInfo.playlist
      let currentPlay = this.roomInfo.currentPlay
      this.$store.commit('radio/SET_CURRENT_PLAY', currentPlay)
      this.$store.commit('radio/SET_PLAYLIST', playTrack)
    },
  },
  computed: {
    stations() {
      return this.$store.state.form.uploaded_stations
    },
    user() {
      return this.$store.state.auth.active_user
    },
    room() {
      return this.$route.params.id
    },
  },
  methods: {
    updateUsers(data) {
      console.log('data', data)
      this.$store.commit('radio/SET_PLAYLIST', data)
    },
    playTracked(data) {
      console.log('playtracked', data)
      this.$store.commit('radio/SET_PLAY_ID', data)

      this.$store.commit('radio/SET_PLAY', true)
    },
    pauseTracked(data) {
      console.log('pausetracked', data)
      this.$store.commit('radio/SET_PAUSE', data)
      this.$store.commit('radio/SET_PLAY', false)
    },
    stopTracked(data) {
      console.log('playtracked', data)
      this.$store.commit('radio/SET_STOP', data)
      this.$store.commit('radio/SET_PLAY', false)
    },
    skipToTracked(data) {
      console.log('playtracked', data)
      this.$store.commit('radio/SET_PLAY', false)

      this.$store.commit('radio/SET_SKIP_TO', data)
    },
    receivedPlaylist(data) {
      console.log('received', data)
      this.$store.commit('radio/SET_PLAYLIST', data)
    },
    selectTrack(track) {
      this.selectedTrack = track
    },
  },
  created() {
    if (process.client) {
      let url = this.$route.params.id

      this.$store.commit('form/UPLOADED_STATIONS', url)
      console.log('payload', url)

      // let musicRetrieve = this.$fireStore
      //     .collection('apps')
      //     .doc('apps')
      //     .collection('Broadcastt')
      //     .where('b_uid', '==', this.business.b_uid)

      //   musicRetrieve.onSnapshot(snapshot => {
      //     snapshot.docChanges().forEach(change => {
      //       let doc = change.doc
      //       let data = {
      //         id: doc.id,
      //         ...doc.data()
      //       }
      //       this.audios.push(data)
      //     })
      //   })
      //   this.$store.commit('form/UPLOADED_MUSIC', this.audios)
    }
  },
  mounted() {
    this.socket = this.$nuxtSocket({ channel: '/radio' })
    if (process.client) {
      if (this.user.uid) {
        this.userNumber = this.user.uid
      } else {
        this.userNumber = Math.floor(Math.random() * 1000000)
      }

      if (this.user.disp_name == 'Guest') {
        this.disp_active = true
      }
    }
    let user = {
      name: this.user.disp_name,
      id: this.userNumber,
    }
    this.joinDetails = { room: this.room, user: user }
    this.joinRoom()
  },
}
</script>

<style></style>
