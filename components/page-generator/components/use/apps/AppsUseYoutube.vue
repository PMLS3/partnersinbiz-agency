<template>
  <div>
    <div class="post-media-container">
      <div>
        <ul>
          <li v-for="vid in videosEmbed" :key="vid">
            <h2>{{ vid.title }}</h2>
            <div v-html="vid.iFrame"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['schema'],

  data() {
    return {
      selected: [],
      videos: [],
      videosEmbed: [],
      Categories: [],

      isMounted: false,
      // component options
      playsinline: true,

      // videojs options
      // playerOptions: {
      //   muted: true,
      //   language: 'en',
      //   playbackRates: [0.7, 1.0, 1.5, 2.0],
      //   sources: [{
      //     type: "video/mp4",
      //     src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
      //   }],
      // poster: "/static/images/author.jpg",
      // }
    }
  },
  watch: {
    videos() {
      for (let i = 0; i < this.videos.length; i++) {
        function getId(url) {
          const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
          const match = url.match(regExp)

          return match && match[2].length === 11 ? match[2] : null
        }

        const videoId = getId(this.videos[i].link)
        const iframeMarkup =
          '<iframe width="100%" height="auto" src="//www.youtube.com/embed/' +
          videoId +
          '" frameborder="0" allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>'

        let payload = {
          vidID: videoId,
          iFrame: iframeMarkup,
          title: this.videos[i].title,
        }

        this.videosEmbed.push(payload)
      }
    },
  },
  computed: {
    playerOptions() {
      return (media) => {
        return {
          height: '360',
          fluid: true,
          autoplay: false,
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [
            {
              type: 'video/mp4',
              src: media.link,
            },
          ],
          // sources: media.link,
          // poster: media.downloadURL
        }
      }
    },
    activeBusinessInfo() {
      return this.$store.state.business.app_active_business
    },
    activeUserInfo() {
      return this.$store.state.user.app_active_user
    },
  },
  methods: {
    // listen event
    onPlayerPlay(player) {
      // console.log('player play!', player)
    },
    onPlayerPause(player) {
      // console.log('player pause!', player)
    },
    onPlayerEnded(player) {
      // console.log('player ended!', player)
    },
    onPlayerLoadeddata(player) {
      // console.log('player Loadeddata!', player)
    },
    onPlayerWaiting(player) {
      // console.log('player Waiting!', player)
    },
    onPlayerPlaying(player) {
      // console.log('player Playing!', player)
    },
    onPlayerTimeupdate(player) {
      // console.log('player Timeupdate!', player.currentTime())
    },
    onPlayerCanplay(player) {
      // console.log('player Canplay!', player)
    },
    onPlayerCanplaythrough(player) {
      // console.log('player Canplaythrough!', player)
    },
    // or listen state event
    playerStateChanged(playerCurrentState) {
      console.log('player current update state', playerCurrentState)
    },
    // player is ready
    playerReadied(player) {
      console.log('example 01: the player is readied', player)
    },
  },

  mounted() {
    let videosRetrieve = this.$fireStore
      .collection('apps')
      .doc('apps')
      .collection(this.activeBusinessInfo.b_uid)
      .doc(this.schema.title)
      .collection(this.schema.title)
      .doc(this.schema.id)
      .collection('added')

    videosRetrieve.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        let doc = change.doc
        this.videos.push({
          id: doc.id,
          cat: doc.data().cat,
          title: doc.data().title,
          link: doc.data().link,
          desc: doc.data().desc,
        })
      })
    })
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vuexy/pages/profile.scss';
</style>
