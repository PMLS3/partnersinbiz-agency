<template>
  <div>
    <client-only>
      <pageGenerator :list2="list2" @askParentToAddToList="addToList" />
      <drag-types :list="list" @submitNewList="addToListTwo" />
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'page-builder',
  components: {
    dragTypes: () =>
      process.client ? import('@/components/draggable/index.vue') : null,
    pageGenerator: () =>
      process.client
        ? import('@/components/page-generator/pageBuilder.vue')
        : null,
  },
  data() {
    return {
      list: [],
      list2: [],
    }
  },
  methods: {
    addToList(data) {
      this.list.push(data[0])
    },
    addToListTwo(data) {
      this.list2 = data
    },
  },
}
</script>
