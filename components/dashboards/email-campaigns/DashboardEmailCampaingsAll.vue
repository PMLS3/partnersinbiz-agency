<!-- =========================================================================================
  File Name: UserList.vue
  Description: User List page
  ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <div>
    <UiAgGridTableAny
      :item="item"
      :schema="schema"
      :columnDefs="columnDefs"
      :info="info"
    />
  </div>
</template>
<script>
// Cell Renderer

import CellRendererLink from '@/components/ui-elements/ag-grid-table/cell-renderer/CellRendererLink.vue'
import CellRendererStatus from '@/components/ui-elements/ag-grid-table/cell-renderer/CellRendererStatus.vue'
import CellRendererVerified from '@/components/ui-elements/ag-grid-table/cell-renderer/CellRendererVerified.vue'
import CellRendererActions from '@/components/ui-elements/ag-grid-table/cell-renderer/CellRendererActions.vue'

export default {
  components: {
    // Cell Renderer
    CellRendererLink,
    CellRendererStatus,
    CellRendererVerified,
    CellRendererActions,
  },
  props: {
    info: { type: Array, default: () => [] },
  },
  data() {
    return { item: 'Email-Campaigns', info: [] }
  },

  computed: {
    schema() {
      return [
        {
          title: 'TextInput',
          placeholder: 'Gallery Name',
          type: 'text',
          label: 'Gallery Name',
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
      ]
    },
    columnDefs() {
      return [
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
          headerName: 'Campaing',
          field: 'campaing_name',
          filter: true,
          width: 125,
        },
        {
          headerName: 'Prospects',
          field: 'prospects',
          filter: true,
          width: 210,
        },
        {
          headerName: 'Delivered',
          field: 'delivered',
          filter: true,
          width: 225,
        },
        {
          headerName: 'Opened',
          field: 'opened',
          filter: true,
          width: 200,
        },
        {
          headerName: 'Responed',
          field: 'responded',
          filter: true,
          width: 150,
        },
        {
          headerName: 'Interest Level',
          field: 'role',
          filter: true,
          width: 150,
        },
        {
          headerName: 'Status',
          field: 'status',
          filter: true,
          width: 150,
          cellRendererFramework: 'CellRendererStatus',
        },
      ]
    },
  },
}
</script>

<style></style>
