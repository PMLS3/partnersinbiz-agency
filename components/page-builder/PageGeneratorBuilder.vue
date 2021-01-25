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

    <vs-sidebar
      v-model="active"
      hidden-background
      position-right
      class="h-screen items-no-padding"
    >
      <div class="h-screen p-2">
        <UiTree :data="list" />
      </div>
    </vs-sidebar>

    <vs-sidebar
      v-model="editactive"
      hidden-background
      class="h-screen items-no-padding"
      click-not-close
    >
      <vs-button icon="close" @click="editactive = false" class="float-right">
      </vs-button>
      <!-- <div v-if="editactive"> -->
      <PerfectScrollbar>
        <PageGeneratorComponentEditor :edit_comp="edit_comp" />
      </PerfectScrollbar>
      <!-- </div> -->
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

      $nuxt.$on('edit_comp', (data) => {
        edit_comp.value = data
        editactive.value = true
      })

      $nuxt.$on('delete_comp', (data) => {
        console.log('data', data)

        if (data.length == 1) {
          list.value[data[0]].class = classUpdate
        }

        if (data.length == 2) {
          list.value[data[0]].children.splice(data[1], 1)
        }

        if (data.length == 3) {
          list.value[data[0]].children[data[1]].children.splice(data[2], 1)
        }

        if (data.length == 4) {
          list.value[data[0]].children[data[1]].children[
            data[2]
          ].children.splice(data[3], 1)
        }
      })

      $nuxt.$on('edit_comp_update', (data) => {
        // editactive.value = false
        console.log('edit classUpdate', data)
        let schema = data.schema
        let classUpdate = data.classUpdate

        if (schema.place.length == 1) {
          list.value[schema.place[0]].class = classUpdate
        }

        if (schema.place.length == 2) {
          list.value[schema.place[0]].children[
            schema.place[1]
          ].class = classUpdate
        }

        if (schema.place.length == 3) {
          list.value[schema.place[0]].children[schema.place[1]].children[
            schema.place[2]
          ].class = classUpdate
        }

        if (schema.place.length == 4) {
          list.value[schema.place[0]].children[schema.place[1]].children[
            schema.place[2]
          ].children[schema.place[3]].class = classUpdate
        }
      })
    })

    function getList(data) {
      console.log('data list', data)
      console.log(' list', list.value)

      // if (data.place.length == 1) {
      //   list.value[data.place[0]].children.push(data)
      // }

      if (data.place.length == 2) {
        console.log('value', list.value[data.place[0]].children[data.place[1]])
        list.value[data.place[0]].children[data.place[1]].children.push(data)
        console.log('list', list.value)
      }
    }

    let list = ref([])
    let listPos = ref(0)
    let active = ref(false)
    let editactive = ref(false)

    let edit_comp = ref({})

    const user = computed(() => store.state.auth.main_user)

    let business = computed(() => {
      return store.state.business.main_business
    })
    return {
      user,
      business,
      list,
      active,
      editactive,
      edit_comp,
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
