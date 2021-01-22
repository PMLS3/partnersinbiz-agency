<!-- =========================================================================================
	File Name: 
	Description:
	Component Name: 
	----------------------------------------------------------------------------------------
========================================================================================== -->

<template>
  <div>
    <!-- {{ items[0].position }} -->
    <MapsBasic :center="center" :markers="items" />
    <div class="flex items-center justify-between">
      <vs-switch v-model="get_center">
        <span slot="on">My Location</span>
        <span slot="off">Search</span>
      </vs-switch>
      <MapsSearch />
      <div v-html="search_center.adr_address">
        {{ search_center.adr_address }}
      </div>
    </div>

    <UiAgGridTableSingle :info="items" :item="item" :columnDefs="columnDefs" />
  </div>
</template>

<script>
import CellRendererHtml from '@/components/ui-elements/ag-grid-table/cell-renderer/CellRendererHtml.vue'

export default {
  name: 'AppsAroundUs',
  props: {
    item_id: {
      type: String,
      default: '',
    },
  },
  components: {
    CellRendererHtml,
  },
  data() {
    return {
      item: {},
      items: [],
      status: {
        textContent: '',
      },
      get_center: true,
      my_center: { lat: 10.0, lng: 10.0 },
      search_center: { adr_address: '', lat: 10.0, lng: 10.0 },
    }
  },
  computed: {
    center() {
      return this.get_center ? this.my_center : this.search_center
    },
    item_unique() {
      return this.item_id ? this.item_id : this.$route.params.id
    },
    columnDefs() {
      return [
        {
          headerName: 'Title',
          field: 'title',
          width: 175,
          filter: true,
          checkboxSelection: true,
          headerCheckboxSelectionFilteredOnly: true,
          headerCheckboxSelection: true,
        },
        {
          headerName: 'Address',
          field: 'addr_name',
          filter: true,
          width: 250,
        },
        {
          headerName: 'Email',
          field: 'email',
          filter: true,
          width: 250,
        },
        {
          headerName: 'Number',
          field: 'number',
          filter: true,
          width: 175,
        },
        {
          headerName: 'Website',
          field: 'website',
          filter: true,
          width: 175,
        },

        {
          headerName: 'Description',
          field: 'desc',
          filter: true,
          width: 250,
          cellRendererFramework: 'CellRendererHtml',
        },
      ]
    },
  },
  created() {
    let vm = this
    if (process.client) {
      if (!navigator.geolocation) {
        // status.textContent = 'Geolocation is not supported by your browser'
      } else {
        // status.textContent = 'Locating…'
        navigator.geolocation.getCurrentPosition(success, error)
      }
    }

    this.$nuxt.$on('my-place', (data) => {
      vm.search_center = data
      vm.search_center.lat = data.geometry.location.lat()
      vm.search_center.lng = data.geometry.location.lng()
      vm.get_center = false
    })

    function success(position) {
      console.log('postion', position)
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude
      vm.my_center.lat = latitude
      vm.my_center.lng = longitude
      // status.textContent = ''
      // mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`
      // mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`
    }

    function error() {
      // status.textContent = 'Unable to retrieve your location'
    }

    let ref = this.$fireStore
      .collection('apps')
      .doc('AroundUsSingle')
      .collection('app')
      .where('id', '==', this.item_unique)

    ref.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          let doc = change.doc
          let data = doc.data()
          data.id = doc.id
          data.position = {
            lat: parseFloat(doc.data().lat),
            lng: parseFloat(doc.data().lng),
          }
          vm.items.push(data)
        }
      })
    })
  },
}
</script>
