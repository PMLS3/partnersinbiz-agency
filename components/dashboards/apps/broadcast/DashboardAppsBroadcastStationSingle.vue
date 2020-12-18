<template lang="html">
  <div id="knowledge-base-page">
    <client-only>
      <vs-card>
        <a :href="`/station/${$route.params.id}`" target="_blank">Stations</a>
        <vs-radio v-model="optionset" vs-value="Player" class="ml-3"
          >Player</vs-radio
        >
        <vs-radio v-model="optionset" vs-value="Whiteboard"
          >Whiteboard</vs-radio
        >
        <!-- <vs-radio v-model="optionset" vs-value="Stations">Stations</vs-radio> -->
        <vs-radio v-model="optionset" vs-value="Station">Forms</vs-radio>
      </vs-card>
      <div v-show="optionset == 'Player'">
        <StationPlayer :room="$route.params.id" :show="show" />
        <StationList />
      </div>
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
  name: 'dashboardAppsBroadcastStationSingle',
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

    let optionset = ref('Player')

    let show = ref(true)

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

    return {
      user,
      columnDefs,
      item,
      motivational_quotes,
      itemData,
      optionset,
      show,
    }
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
