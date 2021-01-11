<template>
  <div class="flex items-center">
    <feather-icon
      icon="CloudRainIcon"
      svgClasses="h-5 w-5 hover:text-danger cursor-pointer"
      @click="goto(params.data)"
    />
  </div>
</template>

<script>
export default {
  name: 'CellRendererLink',
  computed: {
    url() {
      return '/apps/user/user-view/268'

      // Below line will be for actual product
      // Currently it's commented due to demo purpose - Above url is for demo purpose
      // return "/apps/user/user-view/" + this.params.data.id
    }
  },
  methods: {
    goto(data) {
      console.log('data', data)
      let payload = []

      payload.push({
        title: data.i_type,
        name: data.i_name,
        id: data.id
      })

      this.$store.commit('page_builder/COMPONENTS_LIST', payload)

      let payloads = {
        active_card: false,
        component_show: 'builder'
      }
      this.$store.commit('page_builder/COMPONENTS_NEEDED', payloads)
    }
  }
}
</script>
