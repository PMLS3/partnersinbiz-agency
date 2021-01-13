<!-- =========================================================================================
    File Name: CardTwitter.vue
    Description: Twitter Thread display
    ----------------------------------------------------------------------------------------
  TODO Images
  TODO multi tweets show
========================================================================================== -->

<template>
  <div>
    <SocialPost />
    <vs-card>
      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="item in drafts" :key="item.id">
          <vs-button
            icon="delete_sweep"
            @click="deleteDraft(item.id)"
            class="float-left"
            color="danger"
            v-if="item.uid == user.uid"
          ></vs-button>
          <CardTwitter :item="item" :entity="entity" class="mt-3" />

          <!-- <UiSocialTwitterFeeds :twitterFeeds="twitterFeeds" /> -->
        </div>
      </div>
    </vs-card>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'TweetDrafts',
  props: {
    entity: { type: String, default: 'person' },
    handle: { type: String, default: '' },
    branch: { type: String, default: '' },
    twtConfig: { type: Object },
    fbConfig: { type: Object },
    instaConfig: { type: Object },
  },
  components: {},
  data() {
    return {
      drafts: [],
      tweets: [
        {
          textarea: '',
          imgs: [],
        },
      ],
      for_all: false,
      for_branch: false,
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
    input(data) {
      console.log('data', data)
      this.images = data
      console.log('images', this.images)
    },
    addAnother() {
      this.tweets.push({
        textarea: '',
        imgs: [],
      })
    },
    deleteDraft(id) {
      let vm = this
      this.$fireStore
        .collection('tweetDrafts')
        .doc(id)
        .delete()
        .then(() => {
          vm.successUpload('Delete Success')
        })
        .catch((error) => {
          vm.unsuccessUpload(error)
        })
    },
    createDraft() {
      let vm = this
      let obj = {
        b_uid: this.business.b_uid,
        uid: this.user.uid,
        branch: this.branch,
        tweets: this.tweets,
        for_all: this.for_all,
        for_branch: this.for_branch,
        timestamp: Date.now(),
      }

      this.$fireStore
        .collection('tweetDrafts')
        .add(obj)
        .then(() => {
          vm.successUpload('Upload Success')
        })
        .catch((error) => {
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
    let payload = {}
    if (this.entity == 'business') {
      this.$fireStore
        .collection('tweetDrafts')
        .where('b_uid', '==', this.business.b_uid)
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, ' => ', doc.data())
            let payload = doc.data()
            payload.id = doc.id
            console.log(' payload', payload, vm.business.logo)
            payload.user = {}
            payload.user['profile_image_url_https'] = vm.business.logo
            payload.user.name = vm.business.b_name
            payload.user.screen_name = vm.business.b_name
            payload.text = doc.data().tweets[0].textarea
            payload.favorite_count = 0
            payload.retweet_count = 0
            payload.created_at = moment(doc.data().timestamp).format(
              'MMMM Do YYYY, h:mm:ss a'
            )
            console.log(payload)
            vm.drafts.push(payload)
          })
        })
        .catch(function (error) {
          console.log('Error getting documents: ', error)
        })
    } else if (this.entity == 'branch') {
      this.$fireStore
        .collection('tweetDrafts')
        .where('b_uid', '==', this.business.b_uid)
        .where('branch', '==', this.branch)
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            console.log(doc.id, ' => ', doc.data())
            let payload = doc.data()
            payload.id = doc.id
            console.log(' payload', payload, vm.business.logo)
            payload.user = {}
            payload.user['profile_image_url_https'] = vm.business.logo
            payload.user.name = vm.business.b_name
            payload.user.screen_name = vm.business.b_name
            payload.text = doc.data().tweets[0].textarea
            payload.favorite_count = 0
            payload.retweet_count = 0
            payload.created_at = moment(doc.data().timestamp).format(
              'MMMM Do YYYY, h:mm:ss a'
            )
            console.log(payload)
            vm.drafts.push(doc.data())
          })
        })
        .catch(function (error) {
          console.log('Error getting documents: ', error)
        })
    } else {
      this.$fireStore
        .collection('tweetDrafts')
        .where('b_uid', '==', this.business.b_uid)
        .where('uid', '==', this.user.uid)
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, ' => ', doc.data())
            let payload = doc.data()
            payload.id = doc.id
            console.log(' payload', payload, vm.business.logo)
            payload.user = {}
            payload.user['profile_image_url_https'] = vm.business.logo
            payload.user.name = vm.business.b_name
            payload.user.screen_name = vm.business.b_name
            payload.text = doc.data().tweets[0].textarea
            payload.favorite_count = 0
            payload.retweet_count = 0
            payload.created_at = moment(doc.data().timestamp).format(
              'MMMM Do YYYY, h:mm:ss a'
            )
            console.log(payload)
            vm.drafts.push(payload)
          })
        })
        .catch(function (error) {
          console.log('Error getting documents: ', error)
        })
    }

    this.$fireStore
      .collection('tweetDrafts')
      .where('b_uid', '==', this.business.b_uid)
      .where('for_all', '==', true)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, ' => ', doc.data())
          let payload = doc.data()
          payload.id = doc.id
          console.log(' payload', payload, vm.business.logo)
          payload.user = {}
          payload.user['profile_image_url_https'] = vm.business.logo
          payload.user.name = vm.business.b_name
          payload.user.screen_name = vm.business.b_name
          payload.text = doc.data().tweets[0].textarea
          payload.favorite_count = 0
          payload.retweet_count = 0
          payload.created_at = moment(doc.data().timestamp).format(
            'MMMM Do YYYY, h:mm:ss a'
          )
          console.log(payload)
          vm.drafts.push(payload)
        })
      })
      .catch(function (error) {
        console.log('Error getting documents: ', error)
      })
  },
}
</script>

<style></style>
