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
  name: 'LoyaltySingle',
  components: {
    CellRendererActions,
    CellRendererHtml,
  },
  data() {
    return {
      item: {
        item: 'LoyaltySingle',
        title: 'Loyalty',
        sub_text: 'All your Loyalty needs',
        type: 'Single',
        has_categories: false,
        parent: 'Loyalty',
        display: 'loyalty',
        url: '/AppsLoyalty/',
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
      // items: { item: 'ImageGallery', title: 'Add Category', type: 'Category' },
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
          headerName: 'Image',
          field: 'img',
          filter: true,
          width: 250,
        },
        {
          headerName: 'Points',
          field: 'points',
          filter: true,
          width: 125,
        },
        {
          headerName: 'Type',
          field: 'type',
          filter: true,
          width: 125,
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
          title: 'SelectList',
          name: 'type',
          multi: false,
          label: 'Type',
          options: ['Points', 'Stamps'],
        },
        {
          title: 'TextInput',
          placeholder: 'Title',
          label: 'Title',
          name: 'title',
          type: 'text',
        },
        {
          title: 'TextInput',
          placeholder: 'How many needed',
          name: 'points',
          label: 'How many needed',
          minValue: 0,
          type: 'number',
        },
        {
          title: 'TextInput',
          placeholder: 'Secret Code',
          name: 'secret',
          label: 'Secret Code',
          minValue: 0,
          type: 'number',
        },
        {
          title: 'TextInput',
          placeholder: 'Minutes before next allowed input',
          name: 'minutes',
          label: 'Minutes before next allowed input',
          minValue: 0,
          type: 'number',
        },
        {
          title: 'TextInput',
          placeholder: "KM's from location ",
          name: 'kms',
          label: "KM's from location ",
          minValue: 0,
          type: 'number',
        },
        {
          title: 'ImageUpload',
          placeholder: 'Image Upload',
          label: 'Image Upload',
          name: 'img',
        },
        {
          title: 'QuilEditor',
          name: 'desc',
          label: 'Description',
          placeholder: 'Description',
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
