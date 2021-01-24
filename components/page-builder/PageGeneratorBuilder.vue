<template>
  <div class="w-screen h-full">
    <!-- <UiTree :data='list'/> -->
    <PageGeneratorNavbar :list="list" />

    <!-- {{ list }} -->
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
        // console.log('data', data)
        if (data.place.length == 1) {
          list.value.push(data)
        } else {
          getList(data)
        }
      })

      $nuxt.$on('place', (data) => {
        listPos.value = data
        store.commit('page_builder/LIST_UPDATE', data)
      })
    })

    function getList(data) {
      console.log('data list', data)
      console.log(' list', list.value)

      if (data.place.length == 2) {
        console.log('value', list.value[data.place[0]].children[data.place[1]])
        list.value[data.place[0]].children[data.place[1]].children.push(data)
        console.log('list', list.value)
      }
    }

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
