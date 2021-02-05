<template>
  <div :style="{ direction: $vs.rtl ? 'rtl' : 'ltr' }">
    <feather-icon
      icon="SearchIcon"
      svgClasses="h-5 w-5 mr-4 hover:text-primary cursor-pointer"
      @click="seeRecord(params.data)"
    />
    <vs-popup fullscreen title="Responses" :active.sync="popActive">
      <UiAgGridTableSingle
        :info="attendees"
        :item="params.data"
        :columnDefs="columnDefs"
      />
    </vs-popup>
  </div>
</template>

<script>
import CellRendererBooleanColor from '@/components/ui-elements/ag-grid-table/cell-renderer/CellRendererBooleanColor.vue'

export default {
  name: 'CellRendererPopUp',
  components: {
    CellRendererBooleanColor,
  },
  data() {
    return {
      attendees: [],
      popActive: false,
    }
  },
  computed: {
    user() {
      return this.$store.state.auth.active_user
    },
    business() {
      return this.$store.state.business.main_business
    },
    columnDefs() {
      return [
        {
          headerName: 'Display Name',
          field: 'displayName',
          width: 175,
          filter: true,
          checkboxSelection: true,
          headerCheckboxSelectionFilteredOnly: true,
          headerCheckboxSelection: true,
        },
        {
          headerName: 'Name',
          field: 'name',
          filter: true,
          width: 250,
        },
        {
          headerName: 'Surname',
          field: 'surname',
          filter: true,
          width: 250,
        },
        {
          headerName: 'Email',
          field: 'email',
          filter: true,
          width: 175,
        },

        {
          headerName: 'Going',
          field: 'going',
          filter: true,
          width: 250,
          cellRendererFramework: 'CellRendererBooleanColor',
        },
      ]
    },
  },
  methods: {
    seeRecord(data) {
      console.log('data:', data)
      let vm = this
      if (data.component == 'EventsSingle') {
        this.$fireStore
          .collection('apps')
          .doc('EventsSingle')
          .collection('app')
          .doc(data.id)
          .collection('attendees')
          .onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
              if (change.type === 'added') {
                let doc = change.doc
                let data = doc.data()
                data.id = doc.id
                vm.attendees.push(data)
              }
            })
          })
        vm.popActive = true
      }
    },
  },
}
</script>
