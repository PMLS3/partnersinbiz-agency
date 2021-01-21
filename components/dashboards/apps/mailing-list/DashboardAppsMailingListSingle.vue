<!-- =========================================================================================
    File Name: Dashboard.vue.vue
    Description: Knowledge Base Page
    ----------------------------------------------------------------------------------------
  TODO link to email lists
========================================================================================== -->

<template>
  <DashboardAppSingle :item="item" :schema="schema" :columnDefs="columnDefs" />
</template>

<script>
import CellRendererActions from '@/components/ui-elements/ag-grid-table/cell-renderer/CellRendererActions.vue'
import CellRendererHtml from '@/components/ui-elements/ag-grid-table/cell-renderer/CellRendererHtml.vue'

export default {
  name: 'MailingListSingle',
  components: {
    CellRendererActions,
    CellRendererHtml,
  },
  data() {
    return {
      item: {
        item: 'MailingListSingle',
        title: 'Mailing List',
        sub_text: 'All your image gallery needs',
        type: 'Single',
        has_categories: false,
        parent: 'MailingList',
        display: 'mailing-list',
        url: '/AppsMailingList/',
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
          headerName: 'Name',
          field: 'name',
          width: 175,
          filter: true,
          checkboxSelection: true,
          headerCheckboxSelectionFilteredOnly: true,
          headerCheckboxSelection: true,
        },
        {
          headerName: 'Email',
          field: 'email',
          filter: true,
          width: 250,
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
          placeholder: 'List Name',
          type: 'text',
          label: 'List Name',
          name: 'title',
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
      ]
    },
  },
}
</script>
