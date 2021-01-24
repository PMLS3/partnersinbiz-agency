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
        if (listPos.value == 0) {
          list.value.push(data)
        }
      })

      $nuxt.$on('grid-only', (data) => {
        listPos.value = 0
      })
    })

    let list = ref([])
    let listPos = ref(0)

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
}
</script>
