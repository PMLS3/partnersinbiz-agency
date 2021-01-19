<!-- =========================================================================================
    File Name: Dashboard.vue.vue
    Description: Knowledge Base Page
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <div id="knowledge-base-page">
    <!-- JUMBOTRON -->
    <div class="knowledge-base-jumbotron">
      <div
        class="p-8 rounded-lg knowledge-base-jumbotron-content lg:p-32 md:p-24 sm:p-16 mb-base"
      >
        <h1 class="mb-1 text-white">Clients Management</h1>
        <h2 class="text-xl leading-tight text-white font-semibild">
          Manage all your clients from one place
        </h2>

        <vs-input
          icon-no-border
          placeholder="Search Topic or Keyword"
          v-model="knowledgeBaseSearchQuery"
          icon-pack="feather"
          icon="icon-search"
          size="large"
          class="w-full mt-6"
        />
        <div class="flex items-center justify-between py-2">
          <div class="flex items-center">
            <p class="text-white">
              {{ motivational_quotes }}
            </p>
          </div>
          <div class="flex">
            <UploadApps :schema="schema" :item="item" />
            <vs-tooltip text="Let us know what you want!" position="top">
              <vs-button
                type="filled"
                icon="live_help"
                class="float-right ml-2"
                @click="popupActivo = true"
              ></vs-button>
            </vs-tooltip>
            <vs-popup
              fullscreen
              :title="$route.params.id"
              :active.sync="popupActivo"
            >
              <KanbanTodo :type="$route.params.id" v-if="popupActivo" />
            </vs-popup>
          </div>
        </div>
      </div>
    </div>

    <UserList :users="users" />
  </div>
</template>

<script>
import { ref, useContext, computed, onMounted } from '@nuxtjs/composition-api'

export default {
  name: 'dashboardAppsBroadcast',

  setup() {
    const { store, $fireStore, route } = useContext()

    const item = ref({
      item: 'Broadcast',
      title: 'Load Folders',
      type: 'Category',
    })
    let knowledgeBaseSearchQuery = ref('')
    let popupActivo = ref(false)
    let kb = ref([])
    let clients = ref([])

    const business = computed(() => store.state.business.active_business)
    const users = computed(() => store.state.userManagement.users)

    const motivational_quotes = computed(() => {
      let num = Math.floor(Math.random() * 55)
      return store.state.info.motivational_quotes[num]
    })
    let filteredKB = computed(() =>
      kb.value.filter(
        (item) =>
          item.title
            .toLowerCase()
            .includes(knowledgeBaseSearchQuery.value.toLowerCase()) ||
          item.description
            .toLowerCase()
            .includes(knowledgeBaseSearchQuery.value.toLowerCase())
      )
    )

    const schema = computed(() => [
      {
        title: 'TextInput',
        placeholder: 'Stations Name',
        type: 'text',
        label: 'Station Name',
        name: 'title',
      },
      {
        title: 'ImageUpload',
        placeholder: 'Cover Image',
        type: 'text',
        label: 'Cover Image',
        name: 'url',
      },
      {
        title: 'QuilEditor',
        name: 'desc',
        label: 'Description',
        placeholder: 'Description',
      },
    ])

    onMounted(() => {
      if (process.client) {
        // let ref = $fireStore
        //   .collection(item.value.item)
        //   .where('b_uid', '==', business.value.b_uid)

        // ref.onSnapshot((snapshot) => {
        //   snapshot.docChanges().forEach((change) => {
        //     if (change.type === 'added') {
        //       let doc = change.doc
        //       let data = doc.data()
        //       data.id = doc.id
        //       kb.value.push({
        //         id: doc.id,
        //         title: doc.data().title,
        //         description: doc.data().desc,
        //         graphic: doc.data().url[0],
        //         feature: route.value.params.id,
        //         go_to_url: `${window.location.pathname}/${doc.id}`,
        //       })
        //     }
        //   })
        // })

        let getUser = $fireStore
          .collection('business')
          .doc('users')
          .collection(business.value.b_uid)
        // .where('b_uid', '==', business.value.b_uid)

        getUser.onSnapshot((snapshot) => {
          snapshot.docChanges().forEach((change) => {
            console.log('change', change)
            if (change.type === 'added') {
              let doc = change.doc
              let data = doc.data()
              data.id = doc.id
              clients.value.push(data)
            }
          })
        })

        store.commit('userManagement/SET_USERS', clients.value)
      }
    })

    return {
      item,
      knowledgeBaseSearchQuery,
      kb,
      motivational_quotes,
      schema,
      filteredKB,
      popupActivo,
      clients,
      users,
    }
  },
}
</script>

<style lang="scss">
.knowledge-base-jumbotron-content {
  background-image: url('../../assets/images/background/night.jpeg');

  background-size: cover;
}
</style>
