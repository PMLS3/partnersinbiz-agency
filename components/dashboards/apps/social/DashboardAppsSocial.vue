<!-- =========================================================================================
    File Name: DashboardAppsSocial.vue
    Description: dashboard with all social accounts
    ----------------------------------------------------------------------------------------
// TODO: Social Dashboards for data
========================================================================================== -->

<template>
  <vs-tabs
    :position="$device.isMobile ? 'top' : 'left'"
    class="mt-24 tabs-shadow-none"
    id="profile-tabs"
  >
    <!-- <vs-tab label="Dashboard" icon="dashboard">
      <SocialDashboard :entity="entity" :branch="branch" />
    </vs-tab> -->
    <vs-tab label="Timeline" icon="theaters">
      <SocialTimeline
        :entity="entity"
        :branch="branch"
        :twtConfig="twtConfig"
        :fbConfig="fbConfig"
        :instaConfig="instaConfig"
      />
    </vs-tab>
    <vs-tab label="Schedule" icon="schedule">
      <SocialSchedular
        :entity="entity"
        :branch="branch"
        :twtConfig="twtConfig"
        :fbConfig="fbConfig"
        :instaConfig="instaConfig"
      />
    </vs-tab>
    <vs-tab label="Drafts" icon="gesture">
      <SocialDrafts
        :entity="entity"
        :branch="branch"
        :twtConfig="twtConfig"
        :fbConfig="fbConfig"
        :instaConfig="instaConfig"
      />
    </vs-tab>
    <!-- <vs-tab label="AutoLike" icon="thumb_up" @click="colorx = '#0000FF'">
        <TweetAutoLike />
      </vs-tab> -->
    <vs-tab label="Auto Pilot" icon="repeat">
      <SocialAuto
        :entity="entity"
        :branch="branch"
        :twtConfig="twtConfig"
        :fbConfig="fbConfig"
        :instaConfig="instaConfig"
      />
    </vs-tab>
    <vs-tab label="Manual" icon="business_center">
      <SocialManual
        :entity="entity"
        :branch="branch"
        :twtConfig="twtConfig"
        :fbConfig="fbConfig"
        :instaConfig="instaConfig"
      />
    </vs-tab>
    <vs-tab label="Golden" icon="toll">
      <SocialGold
        :entity="entity"
        :branch="branch"
        :twtConfig="twtConfig"
        :fbConfig="fbConfig"
        :instaConfig="instaConfig"
      />
    </vs-tab>

    <vs-tab label="Configuration" icon="account_box">
      <SocialConfig
        :entity="entity"
        :branch="branch"
        :twtConfig="twtConfig"
        :fbConfig="fbConfig"
        :instaConfig="instaConfig"
      />
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
    fbConfig() {
      return { key: '123' }
    },
    instaConfig() {
      return { key: '123' }
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
