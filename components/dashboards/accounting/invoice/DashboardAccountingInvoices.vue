<template>
  <div>
    <vs-radio v-model="radios1" vs-name="radios1" vs-value="invoice"
      >Invoice</vs-radio
    >
    <vs-radio v-model="radios1" vs-name="radios1" vs-value="recurring"
      >Recurring Invoice</vs-radio
    >
    <div v-if="radios1 == 'invoice'">
      <DashboardAccountingInvoices />
    </div>
    <div v-if="radios1 == 'recurring'">
      <DashboardAccountingInvoicesRecurringInvoices />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Invoice',

  data() {
    return {
      radios1: 'invoice',
    }
  },
}
</script>

<style></style>
