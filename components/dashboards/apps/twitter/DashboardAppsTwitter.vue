<template>
  <div class="mt-24">
    <vs-tabs alignment="fixed">
      <vs-tab label="Dashboard" icon="dashboard">
        <TweetDashboard />
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
              <CardTwitter :item="item" class="mt-3" />
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
              <CardTwitter :item="item" class="mt-3" />
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
        <TweetSchedular />
      </vs-tab>
      <vs-tab label="Drafts" icon="history_edu">
        <TweetDrafts />
      </vs-tab>
      <!-- <vs-tab label="AutoLike" icon="thumb_up" @click="colorx = '#0000FF'">
        <TweetAutoLike />
      </vs-tab> -->
      <vs-tab label="Auto Pilot" icon="repeat">
        <TweetAuto />
      </vs-tab>
      <vs-tab label="Manual" icon="business_center">
        <TweetManual />
      </vs-tab>
      <vs-tab label="Golden" icon="toll">
        <TweetGold />
      </vs-tab>

      <vs-tab label="Configuration" icon="account_box">
        <TweetConfig :entity="entity" />
      </vs-tab>

      <vs-tab label="Pipeline" icon="all_out">
        <KanbanTodo type="twitter" />
      </vs-tab>
    </vs-tabs>
  </div>
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
    config() {
      return this.$store.state.config.twitter
    },
    entity() {
      return this.$store.state.app.entity
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
    setTimeout(() => {
      if (vm.config) {
        this.fetchTimeline()
        this.fetchHomeTimeline()
        this.fetchMentions()
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
