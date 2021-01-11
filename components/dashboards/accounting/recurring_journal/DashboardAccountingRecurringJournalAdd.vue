<template>
  <div>
    <h1>Recurring Journal</h1>
    <FormsTypesJournalRecurring />
    <FormsTypesJournalEntries />
  </div>
</template>

<script>
export default {
  name: 'Recurring-Journal',
  components: {
    // Recurring: () =>
    //   process.client
    //     ? import('@/components/forms/forms/journal/recurring_journal.vue')
    //     : null,
    // Entries: () =>
    //   process.client
    //     ? import('@/components/forms/forms/journal/entries.vue')
    //     : null
  },
}
</script>

<style></style>
