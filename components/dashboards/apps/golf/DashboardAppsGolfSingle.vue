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
  name: 'GolfSingle',
  components: {
    CellRendererActions,
    CellRendererHtml,
  },
  data() {
    return {
      item: {
        item: 'GolfSingle',
        title: 'Golf',
        sub_text: 'All your golf needs',
        type: 'Single',
        has_categories: false,
        parent: 'Golf',
        display: 'golf',
        url: '/AppsGolf/',
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
          headerName: 'Hole number',
          field: 'holenumber',
          filter: true,
          width: 250,
        },
        {
          headerName: 'Tee 1',
          field: 'tee1',
          filter: true,
          width: 250,
        },
        {
          headerName: 'Tee 2',
          field: 'tee2',
          filter: true,
          width: 175,
        },
        {
          headerName: 'Tee 3',
          field: 'tee3',
          filter: true,
          width: 175,
        },
        {
          headerName: 'Tee 4',
          field: 'tee4',
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
          placeholder: 'Hole Name',
          label: 'Name',
          name: 'title',
        },
        {
          title: 'TextInput',
          textType: 'number',
          placeholder: 'Hole Number',
          name: 'holenumber',
          label: 'Hole Number',
          minValue: 0,
        },
        {
          title: 'TextInput',
          textType: 'number',
          placeholder: 'Par',
          name: 'par',
          label: 'Par',
          minValue: 0,
        },
        {
          title: 'TextInput',
          textType: 'number',
          placeholder: 'Handicap',
          name: 'handicap',
          label: 'Handicap',
          minValue: 0,
        },
        {
          title: 'TextInput',
          textType: 'number',
          placeholder: 'Tee 1 - Distance',
          name: 'tee1',
          label: 'Tee 1 - Distance',
          minValue: 0,
        },
        {
          title: 'TextInput',
          textType: 'number',
          placeholder: 'Tee 2 - Distance',
          name: 'tee2',
          label: 'Tee 2 - Distance',
          minValue: 0,
        },
        {
          title: 'TextInput',
          textType: 'number',
          placeholder: 'Tee 3 - Distance',
          name: 'tee3',
          label: 'Tee 3 - Distance',
          minValue: 0,
        },
        {
          title: 'TextInput',
          textType: 'number',
          placeholder: 'Tee 4 - Distance',
          name: 'tee4',
          label: 'Tee 4 - Distance',
          minValue: 0,
        },
        {
          title: 'QuilEditor',
          name: 'desc',
          label: 'Description',
          placeholder: 'Description',
        },
        {
          title: 'ImageUpload',
          placeholder: 'Image',
          type: 'text',
          label: 'Image',
          name: 'url',
        },
        {
          title: 'MapsAutoGolf',
          placeholder: 'Green',
          name: 'green',
          label: 'Green',
        },
      ]
    },
  },
}
</script>
