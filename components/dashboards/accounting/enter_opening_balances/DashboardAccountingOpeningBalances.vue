<template>
  <vs-tabs alignment="center">
    <vs-tab label="Bulk Upload">
      <DashboardAccountingBulk />
    </vs-tab>
    <vs-tab label="Accounts Receivable">
      <DashboardAccountingAccountsReceivable />
    </vs-tab>
    <vs-tab label="Accounts Payable">
      <!-- <grid-table /> -->
      <DashboardAccountingAccountsPayable />
    </vs-tab>
    <vs-tab label="Assets">
      <DashboardAccountingAssets />
    </vs-tab>
    <vs-tab label="Liability">
      <DashboardAccountingLiability />
    </vs-tab>
    <vs-tab label="Equity">
      <DashboardAccountingEquity />
    </vs-tab>
    <vs-tab label="Bank">
      <vs-tabs alignment="center">
        <vs-tab label="Page Builder">
          <vs-row vs-w="12"> hello </vs-row>
        </vs-tab>
        <vs-tab label="Builder">
          <vs-row vs-w="12"> hello </vs-row>
        </vs-tab>
      </vs-tabs>
    </vs-tab>
    <vs-tab label="Income">
      <DashboardAccountingIncome />
    </vs-tab>
    <vs-tab label="Expense">
      <DashboardAccountingExpenses />
    </vs-tab>
    <DashboardAccountingTotals />
  </vs-tabs>
</template>

<script>
export default {
  name: 'Opening-Balance',
  components: {},
}
</script>
