<template>
  <vs-tabs>
    <vs-tab
      label="Home"
      icon="home"
      class="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
      <vs-button
        radius
        class="absolute right-0 p-4"
        @click="fetchHomeTimeline"
        type="gradient"
        icon="cached"
      ></vs-button>
      <div v-for="item in hometimeline" :key="item.id">
        <CardTwitter
          :item="item"
          :entity="entity"
          :branch="branch"
          class="mt-3"
        />
      </div>
    </vs-tab>
    <vs-tab
      label="History"
      icon="history"
      class="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
      <vs-button
        radius
        class="absolute right-0 p-4"
        @click="fetchTimeline"
        type="gradient"
        icon="cached"
      ></vs-button>
      <div v-for="item in timeline" :key="item.id">
        <CardTwitter
          :item="item"
          :entity="entity"
          :branch="branch"
          class="mt-3"
        />
      </div>
    </vs-tab>

    <vs-tab
      label="Mentions"
      icon="alternate_email"
      class="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
      <vs-button
        radius
        class="absolute right-0 p-4"
        @click="fetchMentions"
        type="gradient"
        icon="cached"
      ></vs-button>
      <div v-for="item in mentions" :key="item.id">
        <CardTwitter :item="item" :entity="entity" class="mt-3" />
      </div>
    </vs-tab>
  </vs-tabs>
</template>

<script>
export default {
  props: {
    entity: { type: String, default: 'person' },
    handle: { type: String, default: '' },
    branch: { type: String, default: '' },
  },
  data() {
    return {
      timeline: [],
      mentions: [],
      hometimeline: [],
    }
  },
  computed: {
    business() {
      return this.$store.state.business.active_business
    },
    user() {
      return this.$store.state.auth.main_user
    },
    twtConfig() {
      return this.$store.state.config.twitter
    },

    entity() {
      if (this.branch == 'Company') {
        return 'business'
      } else {
        return 'branch'
      }
    },
    branch() {
      return this.$store.state.app.selected_branch
    },
  },
  watch: {
    branch() {
      let vm = this
      if (vm.branch == 'Company') {
        let payload = vm.business.twtConfig
        vm.$store.commit('config/TWITTER_UPDATE', payload)

        if (
          vm.twtConfig.access_token &&
          vm.twtConfig.access_token_secret &&
          vm.twtConfig.consumer_key &&
          vm.twtConfig.consumer_secret
        ) {
          vm.fetchTimeline()
          vm.fetchHomeTimeline()
          vm.fetchMentions()
        } else {
          vm.$vs.notify({
            title: 'No Config',
            text: `Please check config for ${vm.branch}`,
            color: 'success',
          })
        }
      } else {
        vm.$fireStore
          .collection('business')
          .doc(vm.business.b_uid)
          .collection('branch')
          .doc(vm.branch)
          .get()
          .then(function (doc) {
            if (doc.exists) {
              console.log('Document data:', doc.data())
              vm.$store.commit('app/CURRENT_BRANCH', doc.data())
              vm.$store.commit('config/TWITTER_UPDATE', doc.data().twtConfig)
              if (
                doc.data().twtConfig.access_token &&
                doc.data().twtConfig.access_token_secret &&
                doc.data().twtConfig.consumer_key &&
                doc.data().twtConfig.consumer_secret
              ) {
                vm.fetchTimeline()
                vm.fetchHomeTimeline()
                vm.fetchMentions()
              } else {
                vm.$vs.notify({
                  title: 'No Config',
                  text: `Please check config for ${vm.branch}`,
                  color: 'success',
                })
              }
            } else {
              // doc.data() will be undefined in this case
              console.log('No such document!')
            }
          })
          .catch(function (error) {
            console.log('Error getting document:', error)
          })
      }
    },
  },

  mounted() {
    let vm = this
    console.log('this.branch', this.branch)

    if (this.branch == 'Company') {
      let payload = vm.business.twtConfig
      vm.$store.commit('config/TWITTER_UPDATE', payload)
    } else {
      this.$fireStore
        .collection('business')
        .doc(vm.business.b_uid)
        .collection('branch')
        .doc(vm.branch)
        .get()
        .then(function (doc) {
          if (doc.exists) {
            console.log('Document data:', doc.data())
            vm.$store.commit('app/CURRENT_BRANCH', doc.data())
            vm.$store.commit('config/TWITTER_UPDATE', doc.data().twtConfig)
          } else {
            // doc.data() will be undefined in this case
            console.log('No such document!')
          }
        })
        .catch(function (error) {
          console.log('Error getting document:', error)
        })
    }
    setTimeout(() => {
      if (vm.twtConfig) {
        console.log('fetching', vm.twtConfig)
        if (
          vm.twtConfig.access_token &&
          vm.twtConfig.access_token_secret &&
          vm.twtConfig.consumer_key &&
          vm.twtConfig.consumer_secret
        ) {
          vm.fetchTimeline()
          vm.fetchHomeTimeline()
          vm.fetchMentions()
        } else {
          vm.$vs.notify({
            title: 'No Config',
            text: `Please check config for ${vm.branch}`,
            color: 'success',
          })
        }
      }
    }, 1000)
  },
  methods: {
    async fetchTimeline() {
      const ip = await this.$axios.$get(
        `/api/twitter/timeline?consumer_key=${this.twtConfig.consumer_key}&consumer_secret=${this.twtConfig.consumer_secret}&access_token=${this.twtConfig.access_token}&access_token_secret=${this.twtConfig.access_token_secret}`
      )

      this.timeline = ip
    },
    async fetchHomeTimeline() {
      const ip = await this.$axios.$get(
        `/api/twitter/home_timeline?consumer_key=${this.twtConfig.consumer_key}&consumer_secret=${this.twtConfig.consumer_secret}&access_token=${this.twtConfig.access_token}&access_token_secret=${this.twtConfig.access_token_secret}`
      )

      this.hometimeline = ip
    },
    async fetchMentions() {
      const ip = await this.$axios.$get(
        `/api/twitter/mentions?consumer_key=${this.twtConfig.consumer_key}&consumer_secret=${this.twtConfig.consumer_secret}&access_token=${this.twtConfig.access_token}&access_token_secret=${this.twtConfig.access_token_secret}`
      )

      this.mentions = ip
    },
  },
}
</script>

<style></style>
