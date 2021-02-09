<template>
  <div class="w-screen h-full">
    <!-- <UiTree :data='list'/> -->

    <div class="grid grid-cols-4 gap-4">
      <div>
        <vs-tabs>
          <vs-tab label="Tree">
            <!-- <div
              class="w-full h-full"
              v-for="(comp, index) in list"
              :key="index"
            > -->
            <UiTreeListPageBuilder :list="list" />
            <!-- </div> -->
          </vs-tab>
          <vs-tab label="Edit">
            <PageGeneratorComponentEditor :edit_comp="edit_comp" />
          </vs-tab>
        </vs-tabs>
      </div>
      <div class="col-span-3">
        <PageGeneratorNavbar :list="list" />

        <PageGeneratorViewer :list="list" />
      </div>
    </div>
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

    let mainAdd = ref(false)
    onMounted(() => {
      $nuxt.$on('main-add', (data) => {
        mainAdd.value = data
      })

      $nuxt.$on('component-added', (data) => {
        if (data.place.length == 1 && mainAdd.value) {
          list.value.push([data])
        } else {
          getList(data)
        }
      })

      $nuxt.$on('place', (data, schema, MainIndex) => {
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
      let schema = Schema.value
      let MainIndex = mainIndex.value
      let addList = list.value[MainIndex][0]
      let schemaId = schema.id

      if (schemaId == addList.id) {
        list.value[MainIndex][0].children.push(data)
      } else {
        if (addList.children.length) {
          for (let i = 0; i < addList.children.length; i++) {
            let childaddList = list.value[MainIndex][0].children[i]
            if (schemaId == childaddList.id) {
              list.value[MainIndex][0].children[i].children.push(data)
            } else {
              if (childaddList.children.length) {
                for (let e = 0; e < childaddList.children.length; e++) {
                  let child2addList =
                    list.value[MainIndex][0].children[i].children[e]
                  if (schemaId == child2addList.id) {
                    list.value[MainIndex][0].children[i].children[
                      e
                    ].children.push(data)
                  } else {
                    if (child2addList.children.length) {
                      for (let a = 0; a < child2addList.children.length; a++) {
                        let child3addList =
                          list.value[MainIndex][0].children[i].children[e]
                            .children[a]
                        if (schemaId == child3addList.id) {
                          list.value[MainIndex][0].children[i].children[
                            e
                          ].children[a].children.push(data)
                        } else {
                          if (child3addList.children.length) {
                            for (
                              let u = 0;
                              u < child3addList.children.length;
                              u++
                            ) {
                              let child4addList =
                                list.value[MainIndex][0].children[i].children[e]
                                  .children[a].children[u]
                              if (schemaId == child4addList.id) {
                                list.value[MainIndex][0].children[i].children[
                                  e
                                ].children[a].children[u].children.push(data)
                                return
                              } else {
                                if (child4addList.children.length) {
                                  for (
                                    let q = 0;
                                    q < child4addList.children.length;
                                    q++
                                  ) {
                                    let child5addList =
                                      list.value[MainIndex][0].children[i]
                                        .children[e].children[a].children[u]
                                        .children[q]
                                    if (schemaId == child5addList.id) {
                                      list.value[MainIndex][0].children[
                                        i
                                      ].children[e].children[a].children[
                                        u
                                      ].children[q].children.push(data)
                                      return
                                    } else {
                                      if (child5addList.children.length) {
                                        for (
                                          let w = 0;
                                          w < child5addList.children.length;
                                          w++
                                        ) {
                                          let child6addList =
                                            list.value[MainIndex][0].children[i]
                                              .children[e].children[a].children[
                                              u
                                            ].children[q].children[w]
                                          if (schemaId == child6addList.id) {
                                            list.value[MainIndex][0].children[
                                              i
                                            ].children[e].children[a].children[
                                              u
                                            ].children[q].children[
                                              w
                                            ].children.push(data)
                                            return
                                          } else {
                                            if (child6addList.children.length) {
                                              for (
                                                let r = 0;
                                                r <
                                                child6addList.children.length;
                                                r++
                                              ) {
                                                let child7addList =
                                                  list.value[MainIndex][0]
                                                    .children[i].children[e]
                                                    .children[a].children[u]
                                                    .children[q].children[w]
                                                    .children[r]
                                                if (
                                                  schemaId == child7addList.id
                                                ) {
                                                  list.value[
                                                    MainIndex
                                                  ][0].children[i].children[
                                                    e
                                                  ].children[a].children[
                                                    u
                                                  ].children[q].children[
                                                    w
                                                  ].children[r].children.push(
                                                    data
                                                  )
                                                  return
                                                } else {
                                                  if (
                                                    child7addList.children
                                                      .length
                                                  ) {
                                                    for (
                                                      let s = 0;
                                                      s <
                                                      child7addList.children
                                                        .length;
                                                      s++
                                                    ) {
                                                      let child8addList =
                                                        list.value[MainIndex][0]
                                                          .children[i].children[
                                                          e
                                                        ].children[a].children[
                                                          u
                                                        ].children[q].children[
                                                          w
                                                        ].children[r].children[
                                                          s
                                                        ]
                                                      if (
                                                        schemaId ==
                                                        child8addList.id
                                                      ) {
                                                        list.value[
                                                          MainIndex
                                                        ][0].children[
                                                          i
                                                        ].children[e].children[
                                                          a
                                                        ].children[u].children[
                                                          q
                                                        ].children[w].children[
                                                          r
                                                        ].children[
                                                          s
                                                        ].children.push(data)
                                                        return
                                                      } else {
                                                        if (
                                                          child8addList.children
                                                            .length
                                                        ) {
                                                          for (
                                                            let t = 0;
                                                            t <
                                                            child8addList
                                                              .children.length;
                                                            t++
                                                          ) {
                                                            let child9addList =
                                                              list.value[
                                                                MainIndex
                                                              ][0].children[i]
                                                                .children[e]
                                                                .children[a]
                                                                .children[u]
                                                                .children[q]
                                                                .children[w]
                                                                .children[r]
                                                                .children[s]
                                                                .children[t]
                                                            if (
                                                              schemaId ==
                                                              child9addList.id
                                                            ) {
                                                              list.value[
                                                                MainIndex
                                                              ][0].children[
                                                                i
                                                              ].children[
                                                                e
                                                              ].children[
                                                                a
                                                              ].children[
                                                                u
                                                              ].children[
                                                                q
                                                              ].children[
                                                                w
                                                              ].children[
                                                                r
                                                              ].children[
                                                                s
                                                              ].children[
                                                                t
                                                              ].children.push(
                                                                data
                                                              )
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
        }
      }
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

    let drag_start_component = computed(
      () => store.state.page_builder.drag_start_component
    )
    let drag_end_component = computed(
      () => store.state.page_builder.drag_end_component
    )

    watch(drag_end_component, (newValue, oldValue) => {
      let new_component = drag_start_component.value.schema
      new_component.id = drag_start_component.value.schema.id + 'l'

      listPos.value = drag_end_component.value.schema.place
      mainIndex.value = drag_end_component.value.MainIndex
      Schema.value = drag_end_component.value.schema
      store.commit('page_builder/LIST_UPDATE', listPos.value)

      $nuxt.$emit('component-added', new_component)

      setTimeout(() => {
        store.commit(
          'page_builder/DELETE_COMPONENT',
          drag_start_component.value
        )
      }, 1000)
    })

    let update_component = computed(
      () => store.state.page_builder.update_component
    )

    let delete_component = computed(
      () => store.state.page_builder.delete_component
    )

    watch(delete_component, (newValue, oldValue) => {
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
                                if (child4DeleteList.children.length) {
                                  for (
                                    let q = 0;
                                    q < child4DeleteList.children.length;
                                    q++
                                  ) {
                                    let child5DeleteList =
                                      list.value[MainIndex][0].children[i]
                                        .children[e].children[a].children[u]
                                        .children[q]
                                    if (schemaId == child5DeleteList.id) {
                                      list.value[MainIndex][0].children[
                                        i
                                      ].children[e].children[a].children[
                                        q
                                      ].children.splice([u], 1)
                                      return
                                    } else {
                                      if (child5DeleteList.children.length) {
                                        for (
                                          let w = 0;
                                          w < child5DeleteList.children.length;
                                          w++
                                        ) {
                                          let child6DeleteList =
                                            list.value[MainIndex][0].children[i]
                                              .children[e].children[a].children[
                                              u
                                            ].children[q].children[w]
                                          if (schemaId == child6DeleteList.id) {
                                            list.value[MainIndex][0].children[
                                              i
                                            ].children[e].children[a].children[
                                              q
                                            ].children[w].children.splice(
                                              [u],
                                              1
                                            )
                                            return
                                          } else {
                                            if (
                                              child6DeleteList.children.length
                                            ) {
                                              for (
                                                let t = 0;
                                                t <
                                                child6DeleteList.children
                                                  .length;
                                                t++
                                              ) {
                                                let child7DeleteList =
                                                  list.value[MainIndex][0]
                                                    .children[i].children[e]
                                                    .children[a].children[u]
                                                    .children[q].children[w]
                                                    .children[t]
                                                if (
                                                  schemaId ==
                                                  child7DeleteList.id
                                                ) {
                                                  list.value[
                                                    MainIndex
                                                  ][0].children[i].children[
                                                    e
                                                  ].children[a].children[
                                                    q
                                                  ].children[w].children[
                                                    t
                                                  ].children.splice([u], 1)
                                                  return
                                                } else {
                                                  if (
                                                    child7DeleteList.children
                                                      .length
                                                  ) {
                                                    for (
                                                      let s = 0;
                                                      s <
                                                      child7DeleteList.children
                                                        .length;
                                                      s++
                                                    ) {
                                                      let child8DeleteList =
                                                        list.value[MainIndex][0]
                                                          .children[i].children[
                                                          e
                                                        ].children[a].children[
                                                          u
                                                        ].children[q].children[
                                                          w
                                                        ].children[t].children[
                                                          s
                                                        ]
                                                      if (
                                                        schemaId ==
                                                        child8DeleteList.id
                                                      ) {
                                                        list.value[
                                                          MainIndex
                                                        ][0].children[
                                                          i
                                                        ].children[e].children[
                                                          a
                                                        ].children[q].children[
                                                          w
                                                        ].children[t].children[
                                                          s
                                                        ].children.splice(
                                                          [u],
                                                          1
                                                        )
                                                        return
                                                      } else {
                                                        if (
                                                          child8DeleteList
                                                            .children.length
                                                        ) {
                                                          for (
                                                            let p = 0;
                                                            p <
                                                            child8DeleteList
                                                              .children.length;
                                                            p++
                                                          ) {
                                                            let child9DeleteList =
                                                              list.value[
                                                                MainIndex
                                                              ][0].children[i]
                                                                .children[e]
                                                                .children[a]
                                                                .children[u]
                                                                .children[q]
                                                                .children[w]
                                                                .children[t]
                                                                .children[s]
                                                                .children[p]
                                                            if (
                                                              schemaId ==
                                                              child9DeleteList.id
                                                            ) {
                                                              list.value[
                                                                MainIndex
                                                              ][0].children[
                                                                i
                                                              ].children[
                                                                e
                                                              ].children[
                                                                a
                                                              ].children[
                                                                q
                                                              ].children[
                                                                w
                                                              ].children[
                                                                t
                                                              ].children[
                                                                s
                                                              ].children[
                                                                p
                                                              ].children.splice(
                                                                [u],
                                                                1
                                                              )
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
        }
      }
    })

    watch(update_component, (newValue, oldValue) => {
      let data = update_component.value

      let schema = data.schema
      let classUpdate = data.classUpdate
      let MainIndex = mainIndex.value
      let UpdateList = list.value[MainIndex][0]
      let schemaId = schema.id

      if (schemaId == UpdateList.id) {
        list.value[MainIndex][0].class = classUpdate
      } else {
        if (UpdateList.children.length) {
          for (let i = 0; i < UpdateList.children.length; i++) {
            let childUpdateList = list.value[MainIndex][0].children[i]
            if (schemaId == childUpdateList.id) {
              list.value[MainIndex][0].children[i].class = classUpdate
            } else {
              if (childUpdateList.children.length) {
                for (let e = 0; e < childUpdateList.children.length; e++) {
                  let child2UpdateList =
                    list.value[MainIndex][0].children[i].children[e]
                  if (schemaId == child2UpdateList.id) {
                    list.value[MainIndex][0].children[i].children[
                      e
                    ].class = classUpdate
                  } else {
                    if (child2UpdateList.children.length) {
                      for (
                        let a = 0;
                        a < child2UpdateList.children.length;
                        a++
                      ) {
                        let child3UpdateList =
                          list.value[MainIndex][0].children[i].children[e]
                            .children[a]
                        if (schemaId == child3UpdateList.id) {
                          list.value[MainIndex][0].children[i].children[
                            e
                          ].children[a].class = classUpdate
                        } else {
                          if (child3UpdateList.children.length) {
                            for (
                              let u = 0;
                              u < child3UpdateList.children.length;
                              u++
                            ) {
                              let child4UpdateList =
                                list.value[MainIndex][0].children[i].children[e]
                                  .children[a].children[u]
                              if (schemaId == child4UpdateList.id) {
                                list.value[MainIndex][0].children[i].children[
                                  e
                                ].children[a].children[u].class = classUpdate
                                return
                              } else {
                                if (child4UpdateList.children.length) {
                                  for (
                                    let q = 0;
                                    q < child4UpdateList.children.length;
                                    q++
                                  ) {
                                    let child5UpdateList =
                                      list.value[MainIndex][0].children[i]
                                        .children[e].children[a].children[u]
                                        .children[q]
                                    if (schemaId == child5UpdateList.id) {
                                      list.value[MainIndex][0].children[
                                        i
                                      ].children[e].children[a].children[
                                        u
                                      ].children[q].class = classUpdate
                                      return
                                    } else {
                                      if (child5UpdateList.children.length) {
                                        for (
                                          let w = 0;
                                          w < child5UpdateList.children.length;
                                          w++
                                        ) {
                                          let child6UpdateList =
                                            list.value[MainIndex][0].children[i]
                                              .children[e].children[a].children[
                                              u
                                            ].children[q].children[w]
                                          if (schemaId == child6UpdateList.id) {
                                            list.value[MainIndex][0].children[
                                              i
                                            ].children[e].children[a].children[
                                              u
                                            ].children[q].children[
                                              w
                                            ].class = classUpdate
                                            return
                                          } else {
                                            if (
                                              child6UpdateList.children.length
                                            ) {
                                              for (
                                                let s = 0;
                                                s <
                                                child6UpdateList.children
                                                  .length;
                                                s++
                                              ) {
                                                let child7UpdateList =
                                                  list.value[MainIndex][0]
                                                    .children[i].children[e]
                                                    .children[a].children[u]
                                                    .children[q].children[w]
                                                    .children[s]
                                                if (
                                                  schemaId ==
                                                  child7UpdateList.id
                                                ) {
                                                  list.value[
                                                    MainIndex
                                                  ][0].children[i].children[
                                                    e
                                                  ].children[a].children[
                                                    u
                                                  ].children[q].children[
                                                    w
                                                  ].children[
                                                    s
                                                  ].class = classUpdate
                                                  return
                                                } else {
                                                  if (
                                                    child7UpdateList.children
                                                      .length
                                                  ) {
                                                    for (
                                                      let p = 0;
                                                      p <
                                                      child7UpdateList.children
                                                        .length;
                                                      p++
                                                    ) {
                                                      let child8UpdateList =
                                                        list.value[MainIndex][0]
                                                          .children[i].children[
                                                          e
                                                        ].children[a].children[
                                                          u
                                                        ].children[q].children[
                                                          w
                                                        ].children[s].children[
                                                          p
                                                        ]
                                                      if (
                                                        schemaId ==
                                                        child8UpdateList.id
                                                      ) {
                                                        list.value[
                                                          MainIndex
                                                        ][0].children[
                                                          i
                                                        ].children[e].children[
                                                          a
                                                        ].children[u].children[
                                                          q
                                                        ].children[w].children[
                                                          s
                                                        ].children[
                                                          p
                                                        ].class = classUpdate
                                                        return
                                                      } else {
                                                        if (
                                                          child8UpdateList
                                                            .children.length
                                                        ) {
                                                          for (
                                                            let r = 0;
                                                            r <
                                                            child8UpdateList
                                                              .children.length;
                                                            r++
                                                          ) {
                                                            let child9UpdateList =
                                                              list.value[
                                                                MainIndex
                                                              ][0].children[i]
                                                                .children[e]
                                                                .children[a]
                                                                .children[u]
                                                                .children[q]
                                                                .children[w]
                                                                .children[s]
                                                                .children[p]
                                                                .children[r]
                                                            if (
                                                              schemaId ==
                                                              child9UpdateList.id
                                                            ) {
                                                              list.value[
                                                                MainIndex
                                                              ][0].children[
                                                                i
                                                              ].children[
                                                                e
                                                              ].children[
                                                                a
                                                              ].children[
                                                                u
                                                              ].children[
                                                                q
                                                              ].children[
                                                                w
                                                              ].children[
                                                                s
                                                              ].children[
                                                                p
                                                              ].children[
                                                                r
                                                              ].class = classUpdate
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
