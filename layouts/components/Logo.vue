<template>
  <div>
    <div v-if="business.logo">
      <vs-avatar size="50px" :src="business.logo" />
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    business() {
      // if (process.client) {
      //   return JSON.parse(localStorage.getItem('businessInfo'))
      //     ? JSON.parse(localStorage.getItem('businessInfo'))
      //     : this.$store.state.business.main_business
      // }
      this.$store.state.business.main_business
    },
  },
}
</script>
