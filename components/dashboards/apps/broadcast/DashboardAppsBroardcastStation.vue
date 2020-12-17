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
            <VideoChat />
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

      <AgGridTableNew
        :item="item"
        :columnDefs="columnDefs"
        :itemData="itemData"
        v-show="optionset == 'SongsLists'"
      />
      <UploadMusic v-show="optionset == 'Upload'" />
      <!--   <stations v-if="optionset == 'Stations'" /> -->
      <DashboardAppsBroadcastStationSingle v-show="optionset == 'Station'" />

      <!-- <div>
        <UploadMusic v-if="optionset == 'Upload'"/>

        <MusicPlayer class="mt-3" />
      </div>
      <div>
      
      </div> -->
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
    const { store, $fireStore } = useContext()

    const user = computed(() => store.state.auth.main_user)

    let motivational_quotes = computed(() => {
      let num = Math.floor(Math.random() * 55)
      return store.state.info.motivational_quotes[num]
    })

    let optionset = ref('SongsLists')

    let item = ref({
      name: 'dashboard',
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

    return { user, columnDefs, item, motivational_quotes, itemData, optionset }
  },
  //   data: () => ({
  //     colorx: "#8B0000"
  //   })
}
</script>
<style lang="scss">
.knowledge-base-jumbotron-content {
  background-image: url('../../../../assets/images/background/night.jpeg');

  background-size: cover;
}
</style>
