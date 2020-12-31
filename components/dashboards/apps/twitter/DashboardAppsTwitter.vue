<template>
  <div class="mt-24">
    <vs-tabs :color="colorx" position="left">
      <vs-tab label="Dashboard" icon="dashboard" @click="colorx = '#8B0000'">
        <TweetDashboard />
      </vs-tab>
      <vs-tab label="Timeline" icon="theaters" @click="colorx = '#FFA500'">
        <vs-tabs :color="colorx" position="left">
          <vs-tab
            label="Home"
            icon="home"
            @click="colorx = '#8B0000'"
            class="grid grid-cols-3 gap-4"
          >
            <vs-button
              radius
              class="absolute right-0 p-4"
              @click="fetchHomeTimeline"
              type="gradient"
              icon="cached"
            ></vs-button>
            <div v-for="item in hometimeline" :key="item.id">
              <CardTwitter :item="item" class="mt-3" />
            </div>
          </vs-tab>
          <vs-tab
            label="History"
            icon="history"
            @click="colorx = '#8B0000'"
            class="grid grid-cols-3 gap-4"
          >
            <vs-button
              radius
              class="absolute right-0 p-4"
              @click="fetchTimeline"
              type="gradient"
              icon="cached"
            ></vs-button>
            <div v-for="item in timeline" :key="item.id">
              <CardTwitter :item="item" class="mt-3" />
            </div>
          </vs-tab>

          <vs-tab
            label="Mentions"
            icon="alternate_email"
            @click="colorx = '#8B0000'"
            class="grid grid-cols-3 gap-4"
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
      <vs-tab label="Schedule" icon="schedule" @click="colorx = '#551A8B'">
        <TweetSchedular />
      </vs-tab>
      <vs-tab label="Recurring" icon="update" @click="colorx = '#0000FF'">
        <TweetRecurring />
      </vs-tab>
      <!-- <vs-tab label="AutoLike" icon="thumb_up" @click="colorx = '#0000FF'">
        <TweetAutoLike />
      </vs-tab> -->
      <vs-tab label="Auto Pilot" icon="repeat" @click="colorx = '#0000FF'">
        <TweetAuto />
      </vs-tab>
      <vs-tab label="Manual" icon="business_center" @click="colorx = '#0000FF'">
        <TweetManual />
      </vs-tab>
      <vs-tab label="Golden" icon="toll" @click="colorx = '#0000FF'">
        <TweetGold />
      </vs-tab>

      <vs-tab
        label="Configuration"
        icon="account_box"
        @click="colorx = '#0000FF'"
      >
        <TweetConfig />
      </vs-tab>

      <vs-tab label="Pipeline" icon="all_out" @click="colorx = '#0000FF'">
        <KanbanTodo type="twitter" />
      </vs-tab>
    </vs-tabs>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => ({
    colorx: '#8B0000',
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
    config() {
      return this.$store.state.config.twitter
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
  created() {
    let vm = this
    this.$fireStore
      .collection('business')
      .doc('users')
      .collection(this.business.b_uid)
      .doc(this.user.uid)
      .collection('config')
      .doc('twitter')
      .onSnapshot(function (doc) {
        vm.$store.commit('config/TWITTER_UPDATE', doc.data())
        vm.fetchTimeline()
        vm.fetchHomeTimeline()
        vm.fetchMentions()
      })
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
