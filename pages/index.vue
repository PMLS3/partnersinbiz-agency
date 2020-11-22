<template>
  <HomePage />
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
