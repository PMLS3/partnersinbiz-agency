<template>
  <!-- <HomePage /> -->
  <vs-card class="p-8">
    <DashboardBroadcast />
  </vs-card>
</template>

<script>
export default {
  mounted() {
    if (process.client) {
      this.socket = this.$nuxtSocket({ channel: '/index' })
    }
  }
}
</script>
