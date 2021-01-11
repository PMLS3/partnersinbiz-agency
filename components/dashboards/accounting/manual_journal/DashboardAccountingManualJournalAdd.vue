<template>
  <div>
    <h1>Manual Journal</h1>
    <FormsTypesJournalManual />
    <FormsTypesJournalEntries />
  </div>
</template>

<script>
export default {
  name: 'Manual-Journal',
  components: {
    // ManualJournal: () =>
    //   process.client
    //     ? import('@/components/forms/forms/journal/manual_journal.vue')
    //     : null,
    // Entries: () =>
    //   process.client
    //     ? import('@/components/forms/forms/journal/entries.vue')
    //     : null
  },
}
</script>

<style></style>
