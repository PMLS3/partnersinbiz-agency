<template>
  <div><h1>here</h1></div>
</template>

<script>
export default {
  props: {
    entity: { type: String, default: 'person' },
    handle: { type: String, default: '' },
    branch: { type: String, default: '' },
    twtConfig: { type: Object },
    fbConfig: { type: Object },
    instaConfig: { type: Object },
  },
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
