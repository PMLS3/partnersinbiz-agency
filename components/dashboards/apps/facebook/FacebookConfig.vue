<template>
  <vs-card>
    <h1 v-if="entity == 'business'" class="text-2xl text-gray-600">
      Twitter: {{ business.b_name }}
    </h1>
    <h1 v-else class="text-2xl text-gray-600">Twitter: {{ user.disp_name }}</h1>

    <h6>@{{ handle }}</h6>

    <vs-input
      name="event-name"
      class="w-full mt-4"
      label-placeholder="Consumer Key"
      v-model="consumer_key"
    ></vs-input>

    <vs-input
      name="event-name"
      class="w-full mt-4"
      label-placeholder="Consumer Secret"
      v-model="consumer_secret"
    ></vs-input>

    <vs-input
      name="event-name"
      class="w-full mt-4"
      label-placeholder="Access Token"
      v-model="access_token"
    ></vs-input>

    <vs-input
      name="event-name"
      class="w-full mt-4"
      label-placeholder="Access Token Secret"
      v-model="access_token_secret"
    ></vs-input>

    <vs-button @click="tweetConfigSet" class="mt-8">Submit</vs-button>
    <vs-button @click="ConfigSet" class="mt-8" v-if="config"
      >View current</vs-button
    >

    <HowToTwitterConfig />
  </vs-card>
</template>

<script>
export default {
  name: 'TweetConfig',
  props: {
    entity: { type: String, default: 'person' },
    handle: { type: String, default: '' },
    branch: { type: String, default: '' },
  },
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
    config() {
      return this.$store.state.config.twitter
    },
  },
  created() {
    let vm = this
    let payload = {}
    if (this.entity == 'business') {
      this.$fireStore
        .collection('business')
        .doc(this.business.b_uid)
        .onSnapshot(function (doc) {
          vm.$store.commit('config/TWITTER_UPDATE', doc.data())
        })
    } else if (this.entity == 'branch') {
      this.$fireStore
        .collection('business')
        .doc(this.business.b_uid)
        .collection('branch')
        .doc(this.branch)
        .onSnapshot(function (doc) {
          vm.$store.commit('config/TWITTER_UPDATE', doc.data().twtConfig)
        })
    } else {
      this.$fireStore
        .collection('business')
        .doc('users')
        .collection(this.business.b_uid)
        .doc(this.user.uid)
        .collection('config')
        .doc('twitter')
        .onSnapshot(function (doc) {
          vm.$store.commit('config/TWITTER_UPDATE_USER', doc.data())
        })
    }
  },
  methods: {
    ConfigSet() {
      this.consumer_key = this.config.consumer_key
      this.consumer_secret = this.config.consumer_secret
      this.access_token = this.config.access_token
      this.access_token_secret = this.config.access_token_secret
    },
    tweetConfigSet() {
      let vm = this
      let branch = 'HQ'
      let payload = {
        consumer_key: this.consumer_key,
        consumer_secret: this.consumer_secret,
        access_token: this.access_token,
        access_token_secret: this.access_token_secret,
        u_uid: this.user.uid,
        b_uid: this.business.b_uid,
      }
      let obj = {
        twtConfig: payload,
      }

      if (this.entity == 'business') {
        this.$fireStore
          .collection('business')
          .doc(this.business.b_uid)
          .update(obj)
          .then(() => {
            vm.successUpload()
          })
          .catch(function (error) {
            console.error('Error adding document: ', error)

            vm.unsuccessUpload(error)
          })
      } else if (this.entity == 'branch') {
        this.$fireStore
          .collection('business')
          .doc(this.business.b_uid)
          .collection('branch')
          .doc(this.branch)
          .update(obj)
          .then(() => {
            vm.successUpload()
          })
          .catch(function (error) {
            console.error('Error adding document: ', error)
            vm.$fireStore
              .collection('business')
              .doc(vm.business.b_uid)
              .collection('branch')
              .doc(vm.branch)
              .set(obj)
              .then(() => {
                vm.successUpload()
              })
              .catch(function (error) {
                console.error('Error adding document: ', error)
                vm.unsuccessUpload(error)
              })
          })
      } else {
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
            vm.$store.commit('config/TWITTER_UPDATE_USER', payload)

            vm.successUpload()
          })
          .catch(function (error) {
            console.error('Error writing document: ', error)
            vm.unsuccessUpload(error)
          })
      }
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
