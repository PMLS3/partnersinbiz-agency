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
  name: 'AroundUsSingle',
  components: {
    CellRendererActions,
    CellRendererHtml,
  },
  data() {
    return {
      item: {
        item: 'AroundUsSingle',
        title: 'Around Us',
        sub_text: 'Create different places with GPS Location',
        type: 'Single',
        has_categories: false,
        parent: 'AroundUs',
        display: 'around',
        url: '/AppsAroundUs/',
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
      // items: { item: 'Events', title: 'Add Category', type: 'Category' },
    }
  },
  computed: {
    // categories() {
    //   return this.$store.state.app.categories
    // },
    // cats() {
    //   let cats = []
    //   for (let i = 0; i < this.categories.length; i++) {
    //     cats.push(this.categories[i].title)
    //   }
    //   return cats
    // },
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
          field: 'addr_html',
          filter: true,
          width: 250,
          cellRendererFramework: 'CellRendererHtml',
        },
        {
          headerName: 'Icon',
          field: 'img',
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
          headerName: 'Email',
          field: 'email',
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
          placeholder: 'Name',
          type: 'text',
          label: 'Name',
          name: 'title',
        },
        {
          title: 'TextInput',
          placeholder: 'Website',
          type: 'text',
          label: 'Website',
          name: 'website',
        },
        {
          title: 'TextInput',
          type: 'number',
          placeholder: 'Contact Number',
          name: 'number',
          label: 'Contact Number',
          minValue: 0,
        },
        {
          title: 'TextInput',
          type: 'number',
          placeholder: 'Secondary Contact Number',
          name: 'number2',
          label: 'Secondary Contact Number',
          minValue: 0,
        },
        {
          title: 'TextInput',
          type: 'email',
          placeholder: 'Email',
          label: 'Email',
          name: 'email',
        },
        {
          title: 'Divider',
          name: 'Divider',
        },
        {
          title: 'ImageUpload',
          placeholder: 'Image Upload',
          label: 'Image Upload',
          name: 'img',
        },
        {
          title: 'Divider',
          name: 'Divider',
        },
        {
          title: 'QuilEditor',
          name: 'desc',
          label: 'Description',
          placeholder: 'Description',
        },
        {
          title: 'Divider',
          name: 'Divider',
        },
        {
          title: 'GoogleAddress',
          placeholder: 'Address',
          label: 'Address',
          name: 'addr',
        },
      ]
    },
  },
}
</script>
