<template>
  <div>
    <DashboardAccountingOpening :items="equity" />
  </div>
</template>
<script>
export default {
  computed: {
    equity() {
      let vm = this
      let equity = []
      for (let i = 0; i < vm.accounts.length; i++) {
        if (vm.accounts[i]) {
          if (vm.accounts[i].acc_title == 'Equity') {
            equity.push(vm.accounts[i])
          }
        }
      }
      return equity
    },
    accounts() {
      return this.$store.state.crm.accounts
    },
  },
}
</script>
