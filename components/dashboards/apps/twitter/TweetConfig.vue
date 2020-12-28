<template>
  <div class="flex justify-center">
    <vs-card class="mt-12 md:w-1/3">
      <vs-input
        name="event-name"
        class="w-full mt-12"
        label-placeholder="Consumer Key"
        v-model="consumer_key"
      ></vs-input>

      <vs-input
        name="event-name"
        class="w-full mt-12"
        label-placeholder="Consumer Secret"
        v-model="consumer_secret"
      ></vs-input>

      <vs-input
        name="event-name"
        class="w-full mt-12"
        label-placeholder="Access Token"
        v-model="access_token"
      ></vs-input>

      <vs-input
        name="event-name"
        class="w-full mt-12"
        label-placeholder="Access Token Secret"
        v-model="access_token_secret"
      ></vs-input>

      <vs-button @click="tweetConfigSet" class="mt-8">Submit</vs-button>
    </vs-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      consumer_key: '',
      consumer_secret: '',
      access_token: '',
      access_token_secret: '',
    }
  },
  computed: {
    business() {
      return this.$store.state.business.active_business
    },
    user() {
      return this.$store.state.auth.main_user
    },
  },
  methods: {
    tweetConfigSet() {
      let vm = this
      let payload = {
        consumer_key: this.consumer_key,
        consumer_secret: this.consumer_secret,
        access_token: this.access_token,
        access_token_secret: this.access_token_secret,
        u_uid: this.user.uid,
        b_uid: this.business.b_uid,
      }

      this.$fireStore
        .collection('business')
        .doc('users')
        .collection(this.business.b_uid)
        .doc(this.user.uid)
        .collection('config')
        .doc('twitter')
        .set(payload)
        .then(function () {
          console.log('Document successfully written!')
          vm.$store.commit('config/TWITTER_UPDATE', payload)

          vm.successUpload()
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
          vm.unsuccessUpload(error)
        })
    },
    successUpload() {
      this.$vs.notify({
        color: 'success',
        title: 'Yeah',
        text: 'All set and ready to go!',
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
}
</script>

<style></style>
