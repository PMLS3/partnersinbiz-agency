<template>
  <vs-tabs
    :position="isSmallerScreen ? 'top' : 'left'"
    class="mt-24 tabs-shadow-none"
    id="profile-tabs"
    :key="isSmallerScreen"
  >
    <!-- GENERAL -->
    <vs-tab icon="account_box" :label="!isSmallerScreen ? 'Account' : ''">
      <div class="p-4 mt-4 ml-0 md:ml-4 md:mt-0">
        <vs-card class="py-4">
          <FormsBusinessSettingsAccountSettings :data="business" />
        </vs-card>
      </div>
    </vs-tab>
    <vs-tab icon="info" :label="!isSmallerScreen ? 'Information' : ''">
      <div class="p-4 mt-4 ml-0 md:ml-4 md:mt-0">
        <vs-card class="py-4">
          <FormsBusinessSettingsInformationSettings :data="business" />
        </vs-card>
      </div>
    </vs-tab>
    <vs-tab icon="supervisor_account" :label="!isSmallerScreen ? 'Groups' : ''">
      <div class="p-4 mt-4 ml-0 md:ml-4 md:mt-0">
        <vs-card class="py-4">
          <FormsBusinessSettingsGroupSettings :data="business" />
        </vs-card>
      </div>
    </vs-tab>
    <vs-tab icon="face" :label="!isSmallerScreen ? 'Employee' : ''">
      <div class="p-4 mt-4 ml-0 md:ml-4 md:mt-0">
        <vs-card class="py-4">
          <FormsBusinessSettingsEmployeeSettings :data="business" />
        </vs-card>
      </div>
    </vs-tab>

    <vs-tab icon="view_module" :label="!isSmallerScreen ? 'Social' : ''">
      <div class="p-4 mt-4 ml-0 md:ml-4 md:mt-0">
        <vs-card class="py-4">
          <FormsBusinessSettingsSocialSettings :data="business" />
        </vs-card>
      </div>
    </vs-tab>
    <vs-tab icon="shopping_cart" :label="!isSmallerScreen ? 'Sales' : ''">
      <div class="p-4 mt-4 ml-0 md:ml-4 md:mt-0">
        <vs-card class="py-4">
          <FormsBusinessSettingsSalesSettings :data="business" />
        </vs-card>
      </div>
    </vs-tab>
    <vs-tab icon="grid_on" :label="!isSmallerScreen ? 'Stock' : ''">
      <div class="p-4 mt-4 ml-0 md:ml-4 md:mt-0">
        <vs-card class="py-4">
          <FormsBusinessSettingsStockSettings :data="business" />
        </vs-card>
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
