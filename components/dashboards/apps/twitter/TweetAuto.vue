<template>
  <div class="flex justify-center">
    <vs-card class="mt-12 md:w-1/2">
      <vs-input
        name="event-name"
        class="w-full mt-12"
        label-placeholder="Keywords place commma between words"
        v-model="retweet_words"
      ></vs-input>
      <small class="w-full mt-2"
        >Example: '#Nodejs, #Angular, #Reactjs, #ionicframework, #ReactNative,
        #es6'</small
      >
      <br />
      <small class="w-full mt-2">Current: {{ set_retweets }}</small>
      <br />
      <vs-button @click="RetweetsSet" class="mt-4">Add Retweets</vs-button>
      <vs-button @click="RetweetsStatusSet" class="mt-4">{{
        retweet_status
      }}</vs-button>

      <vs-input
        name="event-name"
        class="w-full mt-12"
        label-placeholder="Keywords place commma between words"
        v-model="liked_words"
      ></vs-input>
      <small class="w-full mt-2"
        >Example: '#Nodejs, #Angular, #Reactjs, #ionicframework, #ReactNative,
        #es6'</small
      >
      <br />
      <small class="w-full mt-2">Current: {{ set_liked_words }}</small>
      <br />
      <vs-button @click="LikesSet" class="mt-4">Add Liked</vs-button>
      <vs-button @click="LikesStatusSet" class="mt-4">{{
        liked_status
      }}</vs-button>
    </vs-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      retweet_words: '',
      set_retweets: '',
      retweet_status: '',
      liked_words: '',
      set_liked_words: '',
      liked_status: '',
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
  methods: {
    RetweetsSet() {
      let vm = this
      if (this.config) {
        const obj = {
          retweet_words: this.retweet_words,
          u_uid: this.user.uid,
          b_uid: this.business.b_uid,
          config: this.config,
          type: 'Tweet',
          status: 'scheduled',
        }
        this.$fireStore
          .collection('retweets')
          .doc(this.config.consumer_key)
          .set(obj)
          .then(function () {
            vm.set_retweets = vm.retweet_words
            let msg = 'Retweets has been set'
            vm.successUpload(msg)
          })
          .catch(function (error) {
            console.error('Error writing document: ', error)
            vm.unsuccessUpload(error)
          })
      } else {
        let error = 'Please enter your configuration file'
        vm.unsuccessUpload(error)
      }
    },
    RetweetsStatusSet() {
      let vm = this
      let status = ''
      if (this.retweet_status == 'scheduled') {
        status = 'offline'
      } else {
        status = 'scheduled'
      }

      let obj = {
        status: status,
      }

      this.$fireStore
        .collection('retweets')
        .doc(this.config.consumer_key)
        .update(obj)
        .then(function () {
          vm.retweet_status = status
          let msg = 'Liked Tweets has been set to'
          vm.successUpload(msg)
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
          vm.unsuccessUpload(error)
        })
    },

    LikesSet() {
      let vm = this
      if (this.config) {
        const obj = {
          liked_words: this.liked_words,
          u_uid: this.user.uid,
          b_uid: this.business.b_uid,
          config: this.config,
          type: 'Tweet',
          status: 'scheduled',
        }
        this.$fireStore
          .collection('likeTweets')
          .doc(this.config.consumer_key)
          .set(obj)
          .then(function () {
            vm.set_liked_words = vm.liked_words
            let msg = 'Liked Tweets has been set'
            vm.successUpload(msg)
          })
          .catch(function (error) {
            console.error('Error writing document: ', error)
            vm.unsuccessUpload(error)
          })
      } else {
        let error = 'Please enter your configuration file'
        vm.unsuccessUpload(error)
      }
    },
    LikesStatusSet() {
      let vm = this

      let status = ''
      if (this.liked_status == 'scheduled') {
        status = 'offline'
      } else {
        status = 'scheduled'
      }

      let obj = {
        status: status,
      }

      this.$fireStore
        .collection('likeTweets')
        .doc(this.config.consumer_key)
        .update(obj)
        .then(function () {
          vm.liked_status = status
          let msg = 'Liked Tweets has been set to'
          vm.successUpload(msg)
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
          vm.unsuccessUpload(error)
        })
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
    let vm = this
    this.$fireStore
      .collection('retweets')
      .doc(this.config.consumer_key)
      .onSnapshot(function (doc) {
        vm.set_retweets = doc.data().retweet_words
        vm.retweet_status = doc.data().status
      })

    this.$fireStore
      .collection('likeTweets')
      .doc(this.config.consumer_key)
      .onSnapshot(function (doc) {
        vm.set_liked_words = doc.data().liked_words
        vm.liked_status = doc.data().status
      })
  },
}
</script>

<style></style>
