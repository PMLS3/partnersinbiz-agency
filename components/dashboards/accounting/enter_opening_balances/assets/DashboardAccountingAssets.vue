<template>
  <div>
    <DashboardAccountingOpening :items="assets" />
  </div>
</template>
<script>
export default {
  computed: {
    assets() {
      let vm = this
      let assets = []
      for (let i = 0; i < vm.accounts.length; i++) {
        if (vm.accounts[i]) {
          if (vm.accounts[i].acc_title == 'Asset') {
            assets.push(vm.accounts[i])
          }
        }
      }
      return assets
    },
    accounts() {
      return this.$store.state.crm.accounts
    },
  },
}
</script>
