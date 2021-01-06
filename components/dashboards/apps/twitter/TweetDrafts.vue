<template>
  <div><h1>here</h1></div>
</template>

<script>
export default {
  computed: {
    business() {
      return this.$store.state.business.active_business
    },
    user() {
      return this.$store.state.auth.main_user
    },
    config() {
      return this.$store.state.config.twitter
    },
  },
}
</script>

<style></style>
