<template>
  <div>
    <vs-avatar size="50px" :src="business.logo" />
  </div>
</template>
<script>
export default {
  computed: {
    business() {
      if (process.client) {
        return JSON.parse(localStorage.getItem('businessInfo'))
          ? JSON.parse(localStorage.getItem('businessInfo'))
          : this.$store.state.business.main_business
      }
    }
  }
}
</script>
