<template>
  <div>
    <vs-input v-model="search" name="search" />
    <vs-button @click="SearchNow">Search Hastag</vs-button>
    <div v-if="instaActivity">
      <div v-if="instaActivity.edge_hashtag_to_media">
        <div
          v-for="(item, index) in instaActivity.edge_hashtag_to_media.edges"
          :key="index"
        >
          <CardInstaPost
            :item="item"
            :name="instaActivity.name"
            :profile_pic_url="instaActivity.profile_pic_url"
          />
        </div>
      </div>

      <div v-if="instaActivity.edge_hashtag_to_top_posts">
        <div
          v-for="(item, index) in instaActivity.edge_hashtag_to_top_posts.edges"
          :key="index"
        >
          <CardInstaPost
            :item="item"
            :name="instaActivity.name"
            :profile_pic_url="instaActivity.profile_pic_url"
          />
        </div>
      </div>
    </div>
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
      search: '',
      instaActivity: {},
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
    async SearchNow() {
      let vm = this
      const ip = await this.$axios
        .$get(
          `/api/instagram/getFeedHashtag?username=${this.config.username}&password=${this.config.password}&hashtag=${this.search}`
        )
        .then(vm.successUpload('searching...'))

      this.instaActivity = ip
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
