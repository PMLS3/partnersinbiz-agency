<template>
  <div>
    {{ instaProfile }}
  </div>
</template>

<script>
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import vSelect from 'vue-select'

import moment from 'moment'
export default {
  components: {
    flatPickr,
    vSelect,
  },
  data() {
    return {
      instaProfile: {},
    }
  },
  computed: {
    business() {
      return this.$store.state.business.active_business
    },
    user() {
      return this.$store.state.auth.main_user
    },
    config() {
      return this.$store.state.config.instagram
    },
  },
  watch: {},
  methods: {
    // TweetSend() {
    //   console.log('date', this.date)
    //   let vm = this
    //   this.$axios
    //     .$post('/api/twitter/tweet', {
    //       config: this.config,
    //       message: this.message,
    //     })
    //     .then(
    //       (response) => {
    //         vm.successUpload('TWEETED')
    //       },
    //       (error) => {
    //         console.log(error)
    //         vm.unsuccessUpload(error)
    //       }
    //     )
    // },
    async UserShow(user_id) {
      console.log('user', user_id)
      let vm = this
      const ip = await this.$axios
        .$get(
          `/api/instagram/instagramClientProfile?username=${this.config.username}&password=${this.config.password}`
        )
        .then(vm.successUpload('searching...'))

      this.instaProfile = ip
    },

    successUpload(msg) {
      this.$vs.notify({
        color: 'success',
        title: 'Yeah',
        text: `${msg}`,
      })
    },
    unsuccessUpload(err) {
      this.$vs.notify({
        color: 'danger',
        title: 'Oops',
        text: `${err}`,
      })
    },
  },
  created() {
    this.UserShow()
    // let vm = this
    // this.$fireStore
    //   .collection('retweets')
    //   .doc(this.config.consumer_key)
    //   .onSnapshot(function (doc) {
    //     vm.set_retweets = doc.data().retweet_words
    //     vm.retweet_status = doc.data().status
    //   })
    // this.$fireStore
    //   .collection('likeTweets')
    //   .doc(this.config.consumer_key)
    //   .onSnapshot(function (doc) {
    //     vm.set_liked_words = doc.data().liked_words
    //     vm.liked_status = doc.data().status
    //   })
  },
}
</script>

<style></style>
