<!-- =========================================================================================
    File Name: Dashboard.vue.vue
    Description: Knowledge Base Page
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <div id="knowledge-base-page">
    <client-only>
      <user-list class="h-full"></user-list>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'humanResource',
  components: {
    userList: () =>
      process.client
        ? import('@/components/apps/user/user-list/UserList.vue')
        : null
  },

  computed: {
    business() {
      return this.$store.state.business.active_business
    },
    user() {
      return this.$store.state.auth.main_user
    },
    reseller() {
      return this.$store.state.business.reseller_id
    },
    sub_reseller() {
      return this.$store.state.business.sub_sellers
    }
  }
}
</script>

<style lang="scss">
.knowledge-base-jumbotron-content {
  background-image: url('../../../../assets/images/background/night.jpeg');
  background-size: cover;
}
</style>
