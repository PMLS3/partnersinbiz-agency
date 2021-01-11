<template>
  <div>
    <DashboardAccountingOpening :items="liabilities" />
  </div>
</template>
<script>
export default {
  computed: {
    liabilities() {
      let vm = this
      let liabilities = []
      for (let i = 0; i < vm.accounts.length; i++) {
        if (vm.accounts[i]) {
          if (vm.accounts[i].acc_title == 'Liability') {
            liabilities.push(vm.accounts[i])
          }
        }
      }
      return liabilities
    },
    accounts() {
      return this.$store.state.crm.accounts
    },
  },
}
</script>
