<template>
  <div>
    <PageGeneratorNavbar />

    {{ list }}
    <PageGeneratorViewer :list="list" />
  </div>
</template>

<script>
import { ref, useContext, computed, onMounted } from '@nuxtjs/composition-api'
export default {
  name: 'pageGeneratorBuilder',
  setup() {
    const { store } = useContext()
    onMounted(() => {
      $nuxt.$on('component-added', (data) => {
        console.log('data', data)
        list.value.push(data)
        //Do Something
      })
    })

    let list = ref([])

    const user = computed(() => store.state.auth.main_user)

    let business = computed(() => {
      return store.state.business.main_business
    })
    return {
      user,
      business,
      list,
    }
  },

  //   created() {
  //     this.$store.commit("business/UPDATE_BUSINESS_INFO", this.business);
  //   }
}
</script>
