<template>
  <div>
    <vs-tabs position="left">
      <vs-tab label="Post" icon="send">
        <SocialPost :entity="entity" :branch="branch" :twtConfig="twtConfig" />
      </vs-tab>
      <vs-tab label="Seach Hashtags" icon="search">
        <vs-card>
          <vs-input
            name="search"
            class="w-full mt-12"
            label-placeholder="Keywords that you want to search for"
            v-model="search"
          ></vs-input>
          <small class="w-full mt-2"
            >Example: '#Nodejs, #Angular, #Reactjs, #ionicframework,
            #ReactNative, #es6'</small
          >
          <div class="my-4">
            <v-select
              label="Result type"
              v-model="results_type"
              :options="results_types"
            />
            <small class="w-full mt-2"
              >* mixed : Include both popular and real time results in the
              response.</small
            >
            <small class="w-full mt-2"
              >* recent : return only the most recent results in the
              response</small
            >
            <small class="w-full mt-2"
              >* popular : return only the most popular results in the
              response.</small
            >
          </div>

          <div class="my-4">
            <small class="date-label">Tweet Date (since)</small>
            <flat-pickr
              :config="configdateTimePicker"
              v-model="date"
              placeholder="Since"
              class="w-full p-2"
            />
          </div>
          <br />

          <vs-button @click="SearchTweetSend" class="mt-4"
            >Search for Tweet</vs-button
          >
        </vs-card>
        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="item in results.statuses" :key="item.id">
            <CardTwitter :item="item" class="mt-3" />
          </div>
        </div>
      </vs-tab>
      <vs-tab label="Search Users Followers" icon="person_search">
        <vs-card>
          <vs-input
            name="search"
            class="w-full mt-12"
            label-placeholder="User handle"
            v-model="screen_name"
          ></vs-input>
          <small class="w-full mt-2">Example: 'standerpm'</small>

          <vs-button @click="SearchUserFollowersSend" class="mt-4"
            >Search Users Followers</vs-button
          >
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
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import vSelect from 'vue-select'

import moment from 'moment'
export default {
  components: {
    flatPickr,
    vSelect,
  },
  props: {
    entity: { type: String, default: 'person' },
    handle: { type: String, default: '' },
    branch: { type: String, default: '' },
    twtConfig: { type: Object },
  },
  data() {
    return {
      //   retweet_words: '',
      //   set_retweets: '',
      //   retweet_status: '',
      //   liked_words: '',
      //   set_liked_words: '',
      //   liked_status: '',
      screen_name: '',
      twitterUserFollowersSearch: [],
      twitterUserFollowersSearchResults: [],

      configdateTimePicker: {
        wrap: true, // set wrap to true only when using 'input-group'
        altFormat: 'M j, Y',
        altInput: true,
        dateFormat: 'Y-m-d',
      },
      results: [],
      resultsUsers: [],
      results_type: 'mixed',
      results_types: ['mixed', 'recent', 'popular'],
      data: [],
      date: '',
      search: '',
      message: '',
      counterDanger: false,
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
    TweetSend() {
      console.log('date', this.date)
      let vm = this
      let message = this.message
      if (this.images) {
        for (let i = 0; i < this.images.length; i++) {
          message = message + ' ' + this.images[i] + ' '
        }
      }
      console.log('image', message)

      this.$axios
        .$post('/api/twitter/tweet', {
          config: this.config,
          message: message,
        })
        .then(
          (response) => {
            vm.successUpload('TWEETED')
          },
          (error) => {
            console.log(error)
            vm.unsuccessUpload(error)
          }
        )
    },
    async UserShow(user_id) {
      console.log('user', user_id)
      let vm = this
      const ip = await this.$axios
        .$get(
          `/api/twitter/twitterUserShow?consumer_key=${this.config.consumer_key}&consumer_secret=${this.config.consumer_secret}&access_token=${this.config.access_token}&access_token_secret=${this.config.access_token_secret}&user_id=${user_id}`
        )
        .then(vm.successUpload('searching...'))

      this.twitterUserFollowersSearchResults.push(ip)
    },
    async SearchUserFollowersSend() {
      let vm = this
      const ip = await this.$axios
        .$get(
          `/api/twitter/twitterUserFollowersSearch?consumer_key=${this.config.consumer_key}&consumer_secret=${this.config.consumer_secret}&access_token=${this.config.access_token}&access_token_secret=${this.config.access_token_secret}&screen_name=${this.screen_name}`
        )
        .then(vm.successUpload('searching...'))

      this.twitterUserFollowersSearch = ip
      this.resultsUsers = []
    },
    async SearchTweetSend() {
      let vm = this
      const ip = await this.$axios
        .$get(
          `/api/twitter/search?consumer_key=${this.config.consumer_key}&consumer_secret=${this.config.consumer_secret}&access_token=${this.config.access_token}&access_token_secret=${this.config.access_token_secret}&search=${this.search}&since=${this.date}&results_type=${this.results_type}`
        )
        .then(vm.successUpload('searching...'))

      this.results = ip
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
