<template>
  <div class="flex items-center">
    <vs-avatar
      :src="params.data.cover"
      class="flex-shrink-0 mr-2"
      size="30px"
      @click="$router.push(url)"
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
  }
}
</script>
