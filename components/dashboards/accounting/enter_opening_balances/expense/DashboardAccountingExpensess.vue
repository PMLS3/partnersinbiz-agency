<template>
  <div>
    <DashboardAccountingOpening :items="expenses" />
  </div>
</template>
<script>
export default {
  computed: {
    expenses() {
      let vm = this
      let expenses = []
      for (let i = 0; i < vm.accounts.length; i++) {
        if (vm.accounts[i]) {
          if (vm.accounts[i].acc_title == 'Expense') {
            expenses.push(vm.accounts[i])
          }
        }
      }
      return expenses
    },
    accounts() {
      return this.$store.state.crm.accounts
    },
  },
}
</script>
