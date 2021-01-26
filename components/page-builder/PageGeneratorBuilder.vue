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
        <!-- <UiTree :data="list" /> -->
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
import {
  ref,
  useContext,
  computed,
  onMounted,
  watch,
} from '@nuxtjs/composition-api'
export default {
  name: 'pageGeneratorBuilder',
  setup() {
    const { store } = useContext()
    onMounted(() => {
      $nuxt.$on('component-added', (data) => {
        // console.log('data', data)
        if (data.place.length == 1) {
          list.value.push([data])
        } else {
          getList(data)
        }
      })

      $nuxt.$on('place', (data, schema, MainIndex) => {
        console.log('data', data, schema, MainIndex)
        listPos.value = data
        mainIndex.value = MainIndex
        Schema.value = schema
        store.commit('page_builder/LIST_UPDATE', data)
      })

      $nuxt.$on('edit_comp', (data, MainIndex) => {
        mainIndex.value = MainIndex
        edit_comp.value = data
        editactive.value = true
      })
    })

    function getList(data) {
      console.log('data list', data)
      console.log(' list', list.value)
      console.log('value', Schema.value)
      let schema = Schema.value
      let MainIndex = mainIndex.value
      let deleteList = list.value[MainIndex][0]
      let schemaId = schema.id
      console.log('schema', schema)
      if (schemaId == deleteList.id) {
        list.value[MainIndex][0].push(data)
      } else {
        if (deleteList.children.length) {
          for (let i = 0; i < deleteList.children.length; i++) {
            let childDeleteList = list.value[MainIndex][0].children[i]
            if (schemaId == childDeleteList.id) {
              list.value[MainIndex][0].children[i].children.push(data)
            } else {
              if (childDeleteList.children.length) {
                for (let e = 0; e < childDeleteList.children.length; e++) {
                  let child2DeleteList =
                    list.value[MainIndex][0].children[i].children[e]
                  if (schemaId == child2DeleteList.id) {
                    list.value[MainIndex][0].children[i].children[
                      e
                    ].children.push(data)
                  } else {
                    if (child2DeleteList.children.length) {
                      for (
                        let a = 0;
                        a < child2DeleteList.children.length;
                        a++
                      ) {
                        let child3DeleteList =
                          list.value[MainIndex][0].children[i].children[e]
                            .children[a]
                        if (schemaId == child3DeleteList.id) {
                          list.value[MainIndex][0].children[i].children[
                            e
                          ].children[a].children.push(data)
                        } else {
                          if (child3DeleteList.children.length) {
                            for (
                              let u = 0;
                              u < child3DeleteList.children.length;
                              u++
                            ) {
                              let child4DeleteList =
                                list.value[MainIndex][0].children[i].children[e]
                                  .children[a].children[u]
                              if (schemaId == child4DeleteList.id) {
                                list.value[MainIndex][0].children[i].children[
                                  e
                                ].children[a].children[u].children.push(data)
                                return
                              } else {
                                console.log('end')
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      // if (data.place.length == 2) {
      //   console.log('value', list.value[data.place[0]].children[data.place[1]])
      //   list.value[data.place[0]].children[data.place[1]].children.push(data)
      //   console.log('list', list.value)
      // }
    }

    let list = ref([])
    let listPos = ref(0)
    let active = ref(false)
    let editactive = ref(false)
    let page_view = ref(true)
    let mainIndex = ref(0)
    let Schema = ref({})

    let edit_comp = ref({})

    const user = computed(() => store.state.auth.main_user)

    let update_component = computed(
      () => store.state.page_builder.update_component
    )

    let delete_component = computed(
      () => store.state.page_builder.delete_component
    )

    watch(delete_component, (newValue, oldValue) => {
      console.log('delete_component', newValue, oldValue)
      let schema = delete_component.value.schema
      let MainIndex = delete_component.value.MainIndex

      let deleteList = list.value[MainIndex][0]
      let schemaId = schema.id

      if (schemaId == deleteList.id) {
        list.value.splice([MainIndex], 1)
      } else {
        if (deleteList.children.length) {
          for (let i = 0; i < deleteList.children.length; i++) {
            let childDeleteList = list.value[MainIndex][0].children[i]
            if (schemaId == childDeleteList.id) {
              list.value[MainIndex][0].children.splice([i], 1)
            } else {
              if (childDeleteList.children.length) {
                for (let e = 0; e < childDeleteList.children.length; e++) {
                  let child2DeleteList =
                    list.value[MainIndex][0].children[i].children[e]
                  if (schemaId == child2DeleteList.id) {
                    list.value[MainIndex][0].children[i].children.splice([e], 1)
                  } else {
                    if (child2DeleteList.children.length) {
                      for (
                        let a = 0;
                        a < child2DeleteList.children.length;
                        a++
                      ) {
                        let child3DeleteList =
                          list.value[MainIndex][0].children[i].children[e]
                            .children[a]
                        if (schemaId == child3DeleteList.id) {
                          list.value[MainIndex][0].children[i].children[
                            e
                          ].children.splice([a], 1)
                        } else {
                          if (child3DeleteList.children.length) {
                            for (
                              let u = 0;
                              u < child3DeleteList.children.length;
                              u++
                            ) {
                              let child4DeleteList =
                                list.value[MainIndex][0].children[i].children[e]
                                  .children[a].children[u]
                              if (schemaId == child4DeleteList.id) {
                                list.value[MainIndex][0].children[i].children[
                                  e
                                ].children[a].children.splice([u], 1)
                                return
                              } else {
                                console.log('end')
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    })

    watch(update_component, (newValue, oldValue) => {
      let data = update_component.value

      let schema = data.schema
      let classUpdate = data.classUpdate
      let MainIndex = mainIndex.value
      let deleteList = list.value[MainIndex][0]
      let schemaId = schema.id

      if (schemaId == deleteList.id) {
        list.value[MainIndex][0].class = classUpdate
      } else {
        if (deleteList.children.length) {
          for (let i = 0; i < deleteList.children.length; i++) {
            let childDeleteList = list.value[MainIndex][0].children[i]
            if (schemaId == childDeleteList.id) {
              list.value[MainIndex][0].children[i].class = classUpdate
            } else {
              if (childDeleteList.children.length) {
                for (let e = 0; e < childDeleteList.children.length; e++) {
                  let child2DeleteList =
                    list.value[MainIndex][0].children[i].children[e]
                  if (schemaId == child2DeleteList.id) {
                    list.value[MainIndex][0].children[i].children[
                      e
                    ].class = classUpdate
                  } else {
                    if (child2DeleteList.children.length) {
                      for (
                        let a = 0;
                        a < child2DeleteList.children.length;
                        a++
                      ) {
                        let child3DeleteList =
                          list.value[MainIndex][0].children[i].children[e]
                            .children[a]
                        if (schemaId == child3DeleteList.id) {
                          list.value[MainIndex][0].children[i].children[
                            e
                          ].children[a].class = classUpdate
                        } else {
                          if (child3DeleteList.children.length) {
                            for (
                              let u = 0;
                              u < child3DeleteList.children.length;
                              u++
                            ) {
                              let child4DeleteList =
                                list.value[MainIndex][0].children[i].children[e]
                                  .children[a].children[u]
                              if (schemaId == child4DeleteList.id) {
                                list.value[MainIndex][0].children[i].children[
                                  e
                                ].children[a].children[u].class = classUpdate
                                return
                              } else {
                                console.log('end')
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    })

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
      page_view,
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
