<template>
  <div>
    <DashboardAccountingOpening :items="income" />
  </div>
</template>
<script>
export default {
  computed: {
    income() {
      let vm = this
      let income = []
      for (let i = 0; i < vm.accounts.length; i++) {
        if (vm.accounts[i]) {
          if (vm.accounts[i].acc_title == 'Income') {
            income.push(vm.accounts[i])
          }
        }
      }
      return income
    },
    accounts() {
      return this.$store.state.crm.accounts
    },
  },
}
</script>
