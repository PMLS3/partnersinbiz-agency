<template>
  <div>
    <vs-radio v-model="radios1" vs-name="radios1" vs-value="expense"
      >expense</vs-radio
    >
    <vs-radio v-model="radios1" vs-name="radios1" vs-value="milage"
      >milage</vs-radio
    >
    //TODO bulk import
    <!-- <vs-radio v-model="radios1" vs-name="radios1" vs-value="bulkImport"
      >Bulk Import</vs-radio
    > -->
    <div v-if="radios1 == 'expense'">
      <DashboardAccountingExpense />
    </div>
    <div v-if="radios1 == 'milage'">
      <DashboardAccountingExpensesMilage />
    </div>
    <!-- <div v-if="radios1 == 'bulkImport'">
      <bulkImport />
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'Expenses',

  data() {
    return {
      radios1: 'expense',
    }
  },
}
</script>

<style></style>
