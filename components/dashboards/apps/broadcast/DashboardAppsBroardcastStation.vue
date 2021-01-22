<template>
  <div id="knowledge-base-page">
    <client-only>
      <!-- JUMBOTRON -->
      <div class="knowledge-base-jumbotron">
        <div
          class="p-8 rounded-lg knowledge-base-jumbotron-content lg:p-32 md:p-24 sm:p-16 mb-base"
        >
          <h1 class="mb-1 text-white">Broadcast Station</h1>
          <h2 class="text-xl leading-tight text-white font-semibild">
            Run your station from here
          </h2>

          <div class="flex justify-between py-2">
            <div class="flex items-center">
              <p class="text-white">
                {{ motivational_quotes }}
              </p>
            </div>
            <AppsVideoChat />
          </div>
          <div class="flex flex-row">
            <!-- <vs-tooltip text="Click to change data view" position="top">
                <vs-button
                  icon="chrome_reader_mode"
                  class="ml-1"
                  @click="viewSet = !viewSet"
                >
                </vs-button>
              </vs-tooltip> -->

            <vs-tooltip text="View Component" position="top">
              <vs-button
                class="ml-1"
                icon="preview"
                @click="$router.push(`${item.url}${$route.params.id}`)"
              ></vs-button>
            </vs-tooltip>
            <!-- <UploadApps :schema="schema" :item="item" /> -->
            <!-- <vs-input v-model="userUrl" class="inline-flex mb-2 mr-2" /> -->
            <vs-tooltip text="Copy link to send on" position="top">
              <vs-button
                v-clipboard:copy="userUrl"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
                icon="content_copy"
                class="ml-1"
              >
              </vs-button>
            </vs-tooltip>

            <!-- <UploadApps :schema="schema" :item="item" />

              <UploadCategory
                :schema="schemas"
                :item="items"
                v-if="item.has_categories"
              /> -->
          </div>
        </div>
      </div>

      <vs-card>
        <vs-radio v-model="optionset" vs-value="SongsLists" class="ml-3"
          >Songs</vs-radio
        >

        <vs-radio v-model="optionset" vs-value="Upload">Upload</vs-radio>
        <vs-radio v-model="optionset" vs-value="Station">Station</vs-radio>
      </vs-card>

      <UiAgGridTableApp
        :item="item"
        :columnDefs="columnDefs"
        :itemData="itemData"
        v-show="optionset == 'SongsLists'"
      />
      <vs-card>
        <UploadMusic v-show="optionset == 'Upload'" />
      </vs-card>
      <DashboardAppsBroadcastStationSingle
        v-show="optionset == 'Station'"
        :item="item"
      />
    </client-only>
  </div>
</template>

<script>
import {
  ref,
  useContext,
  computed,
  onBeforeMount,
  onMounted,
} from '@nuxtjs/composition-api'
import CellRendererLink from '@/components/ui-elements/ag-grid-table/cell-renderer/CellRendererLink.vue'
import CellRendererStatus from '@/components/ui-elements/ag-grid-table/cell-renderer/CellRendererStatus.vue'
import CellRendererVerified from '@/components/ui-elements/ag-grid-table/cell-renderer/CellRendererVerified.vue'
import CellRendererActions from '@/components/ui-elements/ag-grid-table/cell-renderer/CellRendererActions.vue'
import CellRendererAudio from '@/components/ui-elements/ag-grid-table/cell-renderer/CellRendererAudio.vue'

export default {
  name: 'DashboardAppsBroardcastStation',
  components: {
    CellRendererLink,
    CellRendererStatus,
    CellRendererVerified,
    CellRendererActions,
    CellRendererAudio,
  },
  setup() {
    const { store, $fireStore, route } = useContext()

    const user = computed(() => store.state.auth.main_user)

    let motivational_quotes = computed(() => {
      let num = Math.floor(Math.random() * 55)
      return store.state.info.motivational_quotes[num]
    })

    let optionset = ref('SongsLists')

    const userUrl = computed(() => {
      var url =
        window.location.origin + '/se' + item.value.url + route.value.params.id
      return url
    })

    let item = ref({
      name: 'dashboard',
      item: 'BroadcastSingle',
      title: 'Broadcast',
      sub_text: 'All your Broadcast needs',
      type: 'Single',
      has_categories: false,
      parent: 'Broadcast',
      display: 'broadcast',
      url: '/AppsBroadcaster/',
      settings: {
        search: true,
        drawingboard: false,
        host: false,
        private_room: false,
        access_control: false,
        popup: false,
        selected_view: false,
        adding_view: false,
        calendar_times: false,
      },
    })
    let columnDefs = ref([
      {
        headerName: 'ID',
        field: 'id',
        width: 125,
        filter: true,
        checkboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        headerCheckboxSelection: true,
      },
      {
        headerName: 'Cover',
        field: 'cover',
        filter: true,
        width: 150,
        cellRendererFramework: 'CellRendererLink',
      },
      {
        headerName: 'Title',
        field: 'title',
        filter: true,
        width: 225,
        editable: true,
      },
      {
        headerName: 'Genre',
        field: 'genre',
        filter: true,
        width: 200,
      },
      {
        headerName: 'Info',
        field: 'desc',
        filter: true,
        width: 150,
      },
      {
        headerName: 'Artist',
        field: 'artist',
        filter: true,
        width: 150,
      },
      {
        headerName: 'Audio',
        field: 'audio',
        filter: true,
        width: 350,
        cellRendererFramework: 'CellRendererAudio',
      },
      {
        headerName: 'Favourite',
        field: 'fav',
        filter: true,
        width: 125,
        cellRendererFramework: 'CellRendererVerified',
        cellClass: 'text-center',
      },

      {
        headerName: 'Actions',
        field: 'transactions',
        width: 150,
        cellRendererFramework: 'CellRendererActions',
      },
    ])

    let itemData = ref([])

    onMounted(() => {
      console.log('route', route)
      let infoRetrieve = $fireStore.collection('music')
      // .where('u_uid', '==', this.user.uid)

      infoRetrieve.onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          let doc = change.doc
          itemData.value.push({
            id: doc.id,
            category: doc.data().category,
            audio: doc.data().audio,
            artist: doc.data().artist,
            title: doc.data().title,
            album: doc.data().album,
            display: doc.data().display,
            cover: doc.data().cover,
            genre: doc.data().genre,
            u_uid: doc.data().u_uid,
            b_uid: doc.data().b_uid,
            r_uid: doc.data().r_uid,
            mr_uid: doc.data().mr_uid,
          })
        })
      })
    })

    return {
      user,
      columnDefs,
      item,
      motivational_quotes,
      itemData,
      optionset,
      userUrl,
    }
  },
  mounted() {
    this.socket = this.$nuxtSocket({ channel: '/radio' })
    if (process.client) {
      if (this.user.uid) {
        this.userNumber = this.user.uid
      } else {
        this.userNumber = Math.floor(Math.random() * 1000000)
      }

      if (this.user.disp_name == 'Guest') {
        this.disp_active = true
      }
    }
    let user = {
      name: this.user.disp_name,
      id: this.userNumber,
    }
    this.joinDetails = { room: this.$route.params.id, user: user }
    this.joinRoom()
  },
  methods: {
    updateSettings() {
      let payload = {}

      this.$fireStore
        .collection('apps')
        .doc('VidChatCat')
        .collection('app')
        .doc(this.$route.params.id)
        .update(payload)
        .then(() => {
          vm.success()
        })
    },
    success() {
      this.$vs.notify({
        title: 'Success',
        text: 'Call updated',
        color: 'success',
      })
    },
    onCopy() {
      this.$vs.notify({
        title: 'Success',
        text: 'Text copied successfully',
        color: 'success',
        iconPack: 'feather',
        position: 'top-center',
        icon: 'icon-check-circle',
      })
    },
    onError() {
      this.$vs.notify({
        title: 'Failed',
        text: 'Error in copying text',
        color: 'danger',
        iconPack: 'feather',
        position: 'top-center',
        icon: 'icon-alert-circle',
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.knowledge-base-jumbotron-content {
  background-image: url('../../../../assets/images/background/night.jpeg');

  background-size: cover;
}
</style>
