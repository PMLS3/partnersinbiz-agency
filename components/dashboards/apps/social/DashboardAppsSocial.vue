<template>
  <vs-tabs
    :position="$device.isMobile ? 'top' : 'left'"
    class="mt-24 tabs-shadow-none"
    id="profile-tabs"
  >
    <vs-tab label="Dashboard" icon="dashboard">
      <TweetDashboard :entity="entity" :branch="branch" />
    </vs-tab>
    <vs-tab label="Timeline" icon="theaters">
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
            <CardTwitter :item="item" class="mt-3" />
          </div>
        </vs-tab>
      </vs-tabs>
      <!-- <div v-for="item in timeline" :key="item.id" class="flex-1">
          <CardTwitter :item="item" class="mt-3" />
        </div> -->
    </vs-tab>
    <vs-tab label="Schedule" icon="schedule">
      <TweetSchedular :entity="entity" :branch="branch" />
    </vs-tab>
    <vs-tab label="Drafts" icon="gesture">
      <TweetDrafts :entity="entity" :branch="branch" />
    </vs-tab>
    <!-- <vs-tab label="AutoLike" icon="thumb_up" @click="colorx = '#0000FF'">
        <TweetAutoLike />
      </vs-tab> -->
    <vs-tab label="Auto Pilot" icon="repeat">
      <TweetAuto :entity="entity" :branch="branch" />
    </vs-tab>
    <vs-tab label="Manual" icon="business_center">
      <SocialManual :entity="entity" :branch="branch" :twtConfig="twtConfig" />
    </vs-tab>
    <vs-tab label="Golden" icon="toll">
      <TweetGold />
    </vs-tab>

    <vs-tab label="Configuration" icon="account_box">
      <SocialConfig :entity="entity" :branch="branch" :twtConfig="twtConfig" />
    </vs-tab>

    <vs-tab label="Pipeline" icon="all_out">
      <KanbanTodo type="twitter" />
    </vs-tab>
  </vs-tabs>
  <!-- <SocialPost :entity="entity" :branch="branch" /> -->
</template>

<script>
export default {
  components: {},
  data: () => ({
    active: true,
    notExpand: false,
    reduce: true,
    showScreen: 'Dashboard',
    timeline: [],
    mentions: [],
    hometimeline: [],
    item: {
      name: 'dashboard',
    },
  }),
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
          vm.config.access_token &&
          vm.config.access_token_secret &&
          vm.config.consumer_key &&
          vm.config.consumer_secret
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

  methods: {
    async fetchTimeline() {
      const ip = await this.$axios.$get(
        `/api/twitter/timeline?consumer_key=${this.config.consumer_key}&consumer_secret=${this.config.consumer_secret}&access_token=${this.config.access_token}&access_token_secret=${this.config.access_token_secret}`
      )

      this.timeline = ip
    },
    async fetchHomeTimeline() {
      const ip = await this.$axios.$get(
        `/api/twitter/home_timeline?consumer_key=${this.config.consumer_key}&consumer_secret=${this.config.consumer_secret}&access_token=${this.config.access_token}&access_token_secret=${this.config.access_token_secret}`
      )

      this.hometimeline = ip
    },
    async fetchMentions() {
      const ip = await this.$axios.$get(
        `/api/twitter/mentions?consumer_key=${this.config.consumer_key}&consumer_secret=${this.config.consumer_secret}&access_token=${this.config.access_token}&access_token_secret=${this.config.access_token_secret}`
      )

      this.mentions = ip
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
      if (vm.config) {
        console.log('fetching', vm.config)
        if (
          vm.config.access_token &&
          vm.config.access_token_secret &&
          vm.config.consumer_key &&
          vm.config.consumer_secret
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
}
</script>

<style scoped>
#parentx {
  overflow: hidden;
  height: 500px;
  position: relative;
}

.header-sidebar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}

h4 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.footer-sidebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
</style>
