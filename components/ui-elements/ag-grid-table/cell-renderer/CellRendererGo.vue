<template>
  <div :style="{ direction: $vs.rtl ? 'rtl' : 'ltr' }">
    <feather-icon
      icon="ArrowRightCircleIcon"
      svgClasses="h-5 w-5 mr-4 hover:text-primary cursor-pointer"
      @click="goTo(params.data)"
    />
  </div>
</template>

<script>
export default {
  name: 'CellRendererActions',
  methods: {
    goTo(data) {
      if (this.$route.params.id == 'DashboardEmailCampaigns') {
        console.log('Pleased', data)
        this.$store.commit('app/UPDATE_ROUTE_ID', data.id)
        setTimeout(() => {
          this.$router.push('/DashboardEmailCampaignsSpecific')
        }, 500)
      }

      // DashboardEmailCampaingsSpecific
    },
  },
}
</script>
