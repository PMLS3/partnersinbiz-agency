<template>
  <div>
    <vs-card>
      <vs-textarea
        class="w-full"
        counter="280"
        label="Counter: 280"
        :counter-danger.sync="counterDanger"
        v-model="message"
      />

      <div
        class="flex flex-row w-1/2 vx-col sm:w-1/2 md:w-1/3 xl:1/4"
        v-for="(img, index) in images"
        :key="index"
      >
        <img
          :src="img"
          alt="latest-upload"
          class="mb-4 rounded user-latest-image responsive"
        />
      </div>

      <UploadImage @input="input" label="Add Images" />
      <div class="flex m-4">
        <vs-tooltip
          text="Everyone in the Company will have this draft"
          position="top"
        >
          <vs-checkbox v-model="for_all">Everyone</vs-checkbox>
        </vs-tooltip>
        <vs-tooltip
          text="Everyone in the Branch will have this draft"
          position="top"
        >
          <vs-checkbox v-model="for_branch" v-if="entity == 'branch'"
            >For everyon in Branch</vs-checkbox
          >
        </vs-tooltip>
      </div>
      <vs-tooltip
        text="Save Tweet to Drafts"
        position="top"
        class="float-right"
      >
        <vs-button @click="createDraft" class="mt-4" icon="save"
          >Save</vs-button
        >
      </vs-tooltip>
    </vs-card>

    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="item in drafts" :key="item.id">
        <CardTwitter
          :item="item"
          class="mt-3"
          :saveDraft="false"
          :followAccount="false"
        />

        <!-- <UiSocialTwitterFeeds :twitterFeeds="twitterFeeds" /> -->
      </div>
    </div>
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
  },
  components: {
    Popper: () => (process.client ? import('vue-popperjs') : null),
    VueImageLightboxCarousel: () =>
      process.client ? import('vue-image-lightbox-carousel') : null,
    VueSelectImage: () => (process.client ? import('vue-select-image') : null),
  },
  data() {
    return {
      drafts: [],
      images: [],
      message: '',
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
    createDraft() {
      let obj = {
        b_uid: this.business.b_uid,
        uid: this.user.uid,
        branch: this.branch,
        message: this.message,
        images: this.images,
        for_all: this.for_all,
        for_branch: this.for_branch,
        timestamp: Date.now(),
      }

      this.$fireStore.collection('tweetDrafts').add(obj)
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
            console.log(' payload', payload, vm.business.logo)
            payload.user = {}
            payload.user['profile_image_url_https'] = vm.business.logo
            payload.user.name = vm.business.b_name
            payload.user.screen_name = vm.business.b_name
            payload.text = doc.data().message
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
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, ' => ', doc.data())
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
            vm.drafts.push(doc.data())
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
          vm.drafts.push(doc.data())
        })
      })
      .catch(function (error) {
        console.log('Error getting documents: ', error)
      })
  },
}
</script>

<style></style>
