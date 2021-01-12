<template>
  <div>
    <vs-tabs position="left">
      <vs-tab label="Post" icon="send">
        <SocialPost
          :entity="entity"
          :branch="branch"
          :twtConfig="twtConfig"
          :fbConfig="fbConfig"
          :instaConfig="instaConfig"
        />
      </vs-tab>
      <vs-tab label="Seach Hashtags" icon="search">
        <vs-card>
          <vs-radio v-model="socialType" vs-name="socialType" vs-value="twt"
            >Twitter</vs-radio
          >
          <vs-radio v-model="socialType" vs-name="socialType" vs-value="fb"
            >Facebook</vs-radio
          >
          <vs-radio v-model="socialType" vs-name="socialType" vs-value="insta"
            >Instagram</vs-radio
          >
          <FormsTypesSearchHashTag
            @searchTag="searchTag"
            :socialType="socialType"
          />
        </vs-card>
        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="item in results.statuses" :key="item.id">
            <CardTwitter :item="item" class="mt-3" />
          </div>
        </div>
      </vs-tab>
      <vs-tab label="Search Users Followers" icon="person_search">
        <vs-card>
          <vs-radio v-model="socialType" vs-name="socialType" vs-value="twt"
            >Twitter</vs-radio
          >
          <vs-radio v-model="socialType" vs-name="socialType" vs-value="fb"
            >Facebook</vs-radio
          >
          <vs-radio v-model="socialType" vs-name="socialType" vs-value="insta"
            >Instagram</vs-radio
          >

          <FormsTypesSearchFollowers
            @searchName="SearchUserFollowersSend"
            :socialType="socialType"
          />
        </vs-card>
        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="item in resultsUsers.statuses" :key="item.id">
            <CardTwitter :item="item" class="mt-3" />
          </div>
        </div>
      </vs-tab>
    </vs-tabs>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  props: {
    entity: { type: String, default: 'person' },
    handle: { type: String, default: '' },
    branch: { type: String, default: '' },
    twtConfig: { type: Object },
    fbConfig: { type: Object },
    instaConfig: { type: Object },
  },
  data() {
    return {
      screen_name: '',
      twitterUserFollowersSearch: [],
      twitterUserFollowersSearchResults: [],
      results: [],
      resultsUsers: [],
      resultsSliced: [],
      socialType: 'twt',
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
      return this.$store.state.config.twitter
    },
  },
  watch: {
    twitterUserFollowersSearch: {
      handler: function (newVal) {
        let vm = this
        console.log('newVal', newVal.ids)
        if (newVal.ids) {
          if (newVal.ids.length > 0) {
            // for (let i = 0; i < newVal.ids.length; i++) {
            for (let i = 0; i < 10; i++) {
              console.log('i', i)
              console.log('here', typeof newVal.ids[i])
              let user_id = newVal.ids[i].toString()
              vm.UserShow(user_id)
            }
          }
        } else {
          let error = 'Rate limit exceeded'
          vm.unsuccessUpload(error)
        }
      },
      deep: true,
    },
    twitterUserFollowersSearchResults: {
      handler: function (newVal) {
        console.log(
          'twitterUserFollowersSearchResults',
          this.twitterUserFollowersSearchResults
        )
      },
    },
  },
  methods: {
    async UserShow(user_id) {
      console.log('user', user_id)
      let vm = this
      const ip = await this.$axios
        .$get(
          `/api/twitter/twitterUserShow?consumer_key=${this.twtConfig.consumer_key}&consumer_secret=${this.twtConfig.consumer_secret}&access_token=${this.twtConfig.access_token}&access_token_secret=${this.twtConfig.access_token_secret}&user_id=${user_id}`
        )
        .then(vm.successUpload('searching...'))
      if (ip.errors) {
        console.log('ip error', ip)
      } else {
        this.twitterUserFollowersSearchResults.push(ip)
      }
    },
    async SearchUserFollowersSend(data) {
      let vm = this
      const ip = await this.$axios
        .$get(
          `/api/twitter/twitterUserFollowersSearch?consumer_key=${this.twtConfig.consumer_key}&consumer_secret=${this.twtConfig.consumer_secret}&access_token=${this.twtConfig.access_token}&access_token_secret=${this.twtConfig.access_token_secret}&screen_name=${data.screen_name}`
        )
        .then(vm.successUpload('searching...'))

      this.twitterUserFollowersSearch = ip
      this.resultsUsers = []
    },
    async SearchTweetSend(data) {
      console.log('twt', this.twtConfig)
      console.log('data', data.date)
      let vm = this
      const ip = await this.$axios
        .$get(
          `/api/twitter/search?consumer_key=${this.twtConfig.consumer_key}&consumer_secret=${this.twtConfig.consumer_secret}&access_token=${this.twtConfig.access_token}&access_token_secret=${this.twtConfig.access_token_secret}&search=${data.search}&since=${data.date}&results_type=${data.results_type}`
        )
        .then(vm.successUpload('searching...'))

      this.results = ip
    },
    searchTag(data) {
      this.SearchTweetSend(data)
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
    console.log('twtConfig', this.twtConfig)
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
