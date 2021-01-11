<template>
  <div :style="`margin-top: ${$store.state.marginTop}px`">
    <grid-table :item="item" :schema="schema" :columnDefs="columnDefs" />
  </div>
</template>

<script>
import gridTable from '@/components/tables/ag-grid-table/AgGridTableBuilder.vue'
// Cell Renderer
import CellRendererAction from '@/components/tables/ag-grid-table/cell-renderer/actions_generic.vue'
import CellRendererImage from '@/components/tables/ag-grid-table/cell-renderer/imageHeader.vue'
import CellRendererImageFooter from '@/components/tables/ag-grid-table/cell-renderer/imageFooter.vue'
import CellRendererHtml from '@/components/tables/ag-grid-table/cell-renderer/html.vue'
export default {
  name: 'Terms-and-Conditions',

  components: {
    gridTable,
    CellRendererAction,
    CellRendererImage,
    CellRendererImageFooter,
    CellRendererHtml
  },

  data() {
    return {
      item: 'Terms & Conditions',
      popup: false,
      popup2: false,
      list: []
    }
  },
  computed: {
    business() {
      return this.$store.state.business.active_business
    },
    activeUserInfo() {
      return this.$store.state.user.active_user
    },

    columnDefs() {
      return [
        {
          cellRendererFramework: 'CellRendererHtml',
          headerName: 'Description',
          field: 'desc',
          width: 250,
          filter: true
        },
        {
          headerName: 'Name',
          field: 'i_name',
          filter: true,
          width: 175,
          pinned: 'left',
          checkboxSelection: true,
          headerCheckboxSelectionFilteredOnly: true,
          headerCheckboxSelection: true
        },

        {
          cellRendererFramework: 'CellRendererAction',
          headerName: 'Edit/Delete',
          field: 'i_name',
          width: 250
        }
      ]
    },
    schema() {
      return [
        {
          title: 'TextInput',
          placeholder: 'Name',
          type: 'text',
          label: 'Name',
          name: 'i_name'
        },
        {
          title: 'QuilEditor',
          name: 'desc',
          label: 'Description',
          placeholder: 'Description'
        }
      ]
    }
  }
}
</script>
