<!-- =========================================================================================
    File Name: Dashboard.vue.vue
    Description: Knowledge Base Page
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <DashboardAppSingle :item="item" :schema="schema" :columnDefs="columnDefs" />
</template>

<script>
import CellRendererActions from '@/components/ui-elements/ag-grid-table/cell-renderer/CellRendererActions.vue'
import CellRendererHtml from '@/components/ui-elements/ag-grid-table/cell-renderer/CellRendererHtml.vue'

export default {
  name: 'DocumentsSingle',
  components: {
    CellRendererActions,
    CellRendererHtml,
  },
  data() {
    return {
      item: {
        item: 'DrawingboardSingle',
        title: 'Drawingboard',
        sub_text: 'All your Drawingboard needs',
        type: 'Single',
        has_categories: false,
        parent: 'Drawingboard',
        display: 'drawingboard',
        url: '/AppsDrawingboard/',
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
      },
      items: { item: 'Documents', title: 'Add Category', type: 'Category' },
    }
  },
  computed: {
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
          headerName: 'Doctype',
          field: 'url[0].type',
          filter: true,
          width: 250,
        },
        {
          headerName: 'Document',
          field: 'url[0]',
          filter: true,
          width: 250,
        },

        {
          headerName: 'Long Description',
          field: 'desc',
          filter: true,
          width: 250,
          cellRendererFramework: 'CellRendererHtml',
        },

        {
          headerName: 'Actions',
          field: 'id',
          filter: 'agNumberColumnFilter',
          width: 125,
          cellRendererFramework: 'CellRendererActions',
        },
      ]
    },

    schema() {
      return [
        {
          title: 'TextInput',
          placeholder: 'Doc Name',
          type: 'text',
          label: 'Doc Name',
          name: 'title',
        },

        {
          title: 'QuilEditor',
          name: 'desc',
          label: 'Description',
          placeholder: 'Description',
        },
        {
          title: 'DocumentUpload',
          placeholder: 'Document',
          type: 'text',
          label: 'Document',
          name: 'url',
        },
      ]
    },
  },
}
</script>
