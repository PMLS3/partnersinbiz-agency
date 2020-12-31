<template>
  <div class="flex justify-center">
    <vs-tabs alignment="fixed">
      <vs-tab label="Tweet">
        <vs-card class="mt-12 md:w-1/2">
          <vs-textarea
            class="w-full"
            counter="280"
            label="Counter: 280"
            :counter-danger.sync="counterDanger"
            v-model="message"
          />

          <vs-button @click="TweetSend" class="mt-4">Send Tweet</vs-button>
        </vs-card>
      </vs-tab>
      <vs-tab label="Documents">
        <div></div>
      </vs-tab>
      <vs-tab label="Contributors">
        <div></div>
      </vs-tab>
      <vs-tab label="Ecosystem">
        <div></div>
      </vs-tab>
    </vs-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //   retweet_words: '',
      //   set_retweets: '',
      //   retweet_status: '',
      //   liked_words: '',
      //   set_liked_words: '',
      //   liked_status: '',
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
  methods: {
    TweetSend() {
      let vm = this
      this.$axios
        .$post('/api/twitter/tweet', {
          config: this.config,
          message: this.message,
        })
        .then(
          (response) => {
            console.log(response)
            console.log(response.data)
            console.log(response.status)
            console.log(response.statusText)
            console.log(response.headers)
            console.log(response.config)
            vm.successUpload('TWEETED')
          },
          (error) => {
            console.log(error)
            vm.unsuccessUpload(error)
          }
        )
    },
    // RetweetsSet() {
    //   let vm = this
    //   if (this.config) {
    //     const obj = {
    //       retweet_words: this.retweet_words,
    //       u_uid: this.user.uid,
    //       b_uid: this.business.b_uid,
    //       config: this.config,
    //       type: 'Tweet',
    //       status: 'scheduled',
    //     }
    //     this.$fireStore
    //       .collection('retweets')
    //       .doc(this.config.consumer_key)
    //       .set(obj)
    //       .then(function () {
    //         vm.set_retweets = vm.retweet_words
    //         let msg = 'Retweets has been set'
    //         vm.successUpload(msg)
    //       })
    //       .catch(function (error) {
    //         console.error('Error writing document: ', error)
    //         vm.unsuccessUpload(error)
    //       })
    //   } else {
    //     let error = 'Please enter your configuration file'
    //     vm.unsuccessUpload(error)
    //   }
    // },
    // RetweetsStatusSet() {
    //   let vm = this
    //   let status = ''
    //   if (this.retweet_status == 'scheduled') {
    //     status = 'offline'
    //   } else {
    //     status = 'scheduled'
    //   }

    //   let obj = {
    //     status: status,
    //   }

    //   this.$fireStore
    //     .collection('retweets')
    //     .doc(this.config.consumer_key)
    //     .update(obj)
    //     .then(function () {
    //       vm.retweet_status = status
    //       let msg = 'Liked Tweets has been set to'
    //       vm.successUpload(msg)
    //     })
    //     .catch(function (error) {
    //       console.error('Error writing document: ', error)
    //       vm.unsuccessUpload(error)
    //     })
    // },

    // LikesSet() {
    //   let vm = this
    //   if (this.config) {
    //     const obj = {
    //       liked_words: this.liked_words,
    //       u_uid: this.user.uid,
    //       b_uid: this.business.b_uid,
    //       config: this.config,
    //       type: 'Tweet',
    //       status: 'scheduled',
    //     }
    //     this.$fireStore
    //       .collection('likeTweets')
    //       .doc(this.config.consumer_key)
    //       .set(obj)
    //       .then(function () {
    //         vm.set_liked_words = vm.liked_words
    //         let msg = 'Liked Tweets has been set'
    //         vm.successUpload(msg)
    //       })
    //       .catch(function (error) {
    //         console.error('Error writing document: ', error)
    //         vm.unsuccessUpload(error)
    //       })
    //   } else {
    //     let error = 'Please enter your configuration file'
    //     vm.unsuccessUpload(error)
    //   }
    // },
    // LikesStatusSet() {
    //   let vm = this

    //   let status = ''
    //   if (this.liked_status == 'scheduled') {
    //     status = 'offline'
    //   } else {
    //     status = 'scheduled'
    //   }

    //   let obj = {
    //     status: status,
    //   }

    //   this.$fireStore
    //     .collection('likeTweets')
    //     .doc(this.config.consumer_key)
    //     .update(obj)
    //     .then(function () {
    //       vm.liked_status = status
    //       let msg = 'Liked Tweets has been set to'
    //       vm.successUpload(msg)
    //     })
    //     .catch(function (error) {
    //       console.error('Error writing document: ', error)
    //       vm.unsuccessUpload(error)
    //     })
    // },
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
