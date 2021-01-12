<template>
  <div :style="`margin-top: ${$store.state.marginTop}px`">
    <AgGridTable :item="item" :schema="schema" :columnDefs="columnDefs" />
  </div>
</template>

<script>
// Cell Renderer
import CellRendererAction from '@/components/tables/ag-grid-table/cell-renderer/actions_generic.vue'
import CellRendererImage from '@/components/tables/ag-grid-table/cell-renderer/imageHeader.vue'
import CellRendererImageFooter from '@/components/tables/ag-grid-table/cell-renderer/imageFooter.vue'
import CellRendererHtml from '@/components/tables/ag-grid-table/cell-renderer/html.vue'
export default {
  name: 'Letter-Head',
  components: {
    CellRendererAction,
    CellRendererImage,
    CellRendererImageFooter,
    CellRendererHtml,
  },

  data() {
    return {
      item: 'Letter Head',
      popup: false,
      popup2: false,
      list: [],
    }
  },
  computed: {
    columnDefs() {
      return [
        {
          cellRendererFramework: 'CellRendererHtml',
          headerName: 'Description',
          field: 'desc',
          width: 250,
          filter: true,
        },
        {
          headerName: 'Name',
          field: 'i_name',
          filter: true,
          width: 175,
          pinned: 'left',
          checkboxSelection: true,
          headerCheckboxSelectionFilteredOnly: true,
          headerCheckboxSelection: true,
        },
        {
          cellRendererFramework: 'CellRendererImage',
          headerName: 'Header',
          field: 'header',
          width: 175,
        },

        {
          cellRendererFramework: 'CellRendererAction',
          headerName: 'Edit/Delete',
          field: 'i_name',
          width: 175,
        },
      ]
    },
    schema() {
      return [
        {
          title: 'TextInput',
          placeholder: 'Name',
          type: 'text',
          label: 'Name',
          name: 'i_name',
        },
        {
          title: 'QuilEditor',
          name: 'desc',
          label: 'Description',
          placeholder: 'Description',
        },
        {
          title: 'ImageUpload',
          placeholder: 'Header',
          label: 'Header',
          name: 'header',
        },
      ]
    },
  },
}
</script>
