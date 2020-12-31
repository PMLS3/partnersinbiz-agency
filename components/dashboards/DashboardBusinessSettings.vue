<template>
  <vs-tabs
    :position="isSmallerScreen ? 'top' : 'left'"
    class="mt-24 tabs-shadow-none"
    id="profile-tabs"
    :key="isSmallerScreen"
  >
    <!-- GENERAL -->
    <vs-tab
      icon-pack="feather"
      icon="icon-user"
      :label="!isSmallerScreen ? 'Account' : ''"
    >
      <div class="p-4 mt-4 ml-0 tab-general md:ml-4 md:mt-0">
        <client-only>
          <DashboardBusinessSettingsAccountSettings :data="business" />
        </client-only>
      </div>
    </vs-tab>
    <vs-tab
      icon-pack="feather"
      icon="icon-lock"
      :label="!isSmallerScreen ? 'Information' : ''"
    >
      <div class="p-4 mt-4 ml-0 tab-change-pwd md:ml-4 md:mt-0">
        <client-only>
          <DashboardBusinessSettingsInformationSettings :data="business" />
        </client-only>
      </div>
    </vs-tab>
    <vs-tab
      icon-pack="feather"
      icon="icon-info"
      :label="!isSmallerScreen ? 'Employee' : ''"
    >
      <div class="p-4 mt-4 ml-0 tab-info md:ml-4 md:mt-0">
        <client-only>
          <DashboardBusinessSettingEmployeeSettings :data="business" />
        </client-only>
      </div>
    </vs-tab>
    <vs-tab
      icon-pack="feather"
      icon="icon-github"
      :label="!isSmallerScreen ? 'Groups' : ''"
    >
      <div class="p-4 mt-4 ml-0 tab-social-links md:ml-4 md:mt-0">
        <client-only>
          <DashboardBusinessSettingsGroupSettings :data="business" />
        </client-only>
      </div>
    </vs-tab>
    <vs-tab
      icon-pack="feather"
      icon="icon-link-2"
      :label="!isSmallerScreen ? 'Social' : ''"
    >
      <div class="p-4 mt-4 ml-0 tab-text md:ml-4 md:mt-0">
        <client-only>
          <DashboardBusinessSettingsSocialSettings :data="business" />
        </client-only>
      </div>
    </vs-tab>
    <vs-tab
      icon-pack="feather"
      icon="icon-bell"
      :label="!isSmallerScreen ? 'Sales' : ''"
    >
      <div class="p-4 mt-4 ml-0 tab-text md:ml-4 md:mt-0">
        <client-only>
          <DashboardBusinessSettingsSalesSettings :data="business" />
        </client-only>
      </div>
    </vs-tab>
    <vs-tab
      icon-pack="feather"
      icon="icon-bell"
      :label="!isSmallerScreen ? 'Stock' : ''"
    >
      <div class="p-4 mt-4 ml-0 tab-text md:ml-4 md:mt-0">
        <client-only>
          <DashboardBusinessSettingsStockSettings :data="business" />
        </client-only>
      </div>
    </vs-tab>
  </vs-tabs>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    isSmallerScreen() {
      return this.$store.state.windowWidth < 768
    },
    business() {
      if (process.client) {
        return JSON.parse(localStorage.getItem('businessInfo'))
          ? JSON.parse(localStorage.getItem('businessInfo'))
          : this.$store.state.business.active_business
      }
    },
  },
}
</script>

<style lang="scss">
#profile-tabs {
  .vs-tabs--content {
    padding: 0;
  }
}
</style>
