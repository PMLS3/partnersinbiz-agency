<template>
  <div class="w-screen h-full">
    <!-- <UiTree :data='list'/> -->
    <PageGeneratorNavbar :list="list" />

    <!-- {{ list }} -->
    <PageGeneratorViewer :list="list" />

    <vs-button
      color="primary"
      type="filled"
      class="customizer-btn"
      icon-pack="feather"
      icon="icon-settings"
      @click.stop="active = !active"
    />

    <!-- Customizer Content -->
    <vs-sidebar
      v-model="active"
      click-not-close
      hidden-background
      position-right
      class="h-screen items-no-padding"
    >
      <div class="h-screen p-2">
        <UiTree :data="list" />
      </div>
    </vs-sidebar>
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
    let active = ref(false)

    const user = computed(() => store.state.auth.main_user)

    let business = computed(() => {
      return store.state.business.main_business
    })
    return {
      user,
      business,
      list,
      active,
    }
  },
}
</script>

<style lang="scss" scoped>
#theme-customizer {
  .vs-sidebar {
    position: fixed;
    z-index: 52000;
    width: 400px;
    max-width: 90vw;
    // @apply shadow-lg;
    box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),
      0 5px 15px 0 rgba(0, 0, 0, 0.08);
  }
}

.customizer-btn {
  position: fixed;
  top: 50%;
  right: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  z-index: 50000;

  .vs-icon {
    animation: spin 1.5s linear infinite;
  }
}

.scroll-area--customizer {
  height: calc(100% - 5rem);
}
</style>
