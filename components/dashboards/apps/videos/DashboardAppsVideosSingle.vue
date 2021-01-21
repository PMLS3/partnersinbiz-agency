<!-- =========================================================================================
    File Name: Dashboard.vue.vue
    Description: Knowledge Base Page
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <DashboardAppSingle
    :item="item"
    :items="items"
    :schema="schema"
    :schemas="schemas"
    :columnDefs="columnDefs"
  />
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
        item: 'VideosSingle',
        title: 'Videos',
        sub_text: 'All your videos needs',
        type: 'Single',
        has_categories: true,
        parent: 'Videos',
        display: 'videos',
        url: '/AppsVideos/',
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
      items: { item: 'Videos', title: 'Add Category', type: 'Category' },
    }
  },
  computed: {
    categories() {
      return this.$store.state.app.categories
    },
    cats() {
      let cats = []
      for (let i = 0; i < this.categories.length; i++) {
        cats.push(this.categories[i].title)
      }
      return cats
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
          headerName: 'Doctype',
          field: 'url[0].type',
          filter: true,
          width: 250,
        },
        {
          headerName: 'Video',
          field: 'url[0]',
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
    schemas() {
      return [
        {
          title: 'TextInput',
          placeholder: 'Title',
          type: 'text',
          label: 'Title',
          name: 'title',
        },
        {
          title: 'ColorSelect',
          placeholder: 'Color',
          type: 'text',
          label: 'Color',
          name: 'color',
        },
      ]
    },

    schema() {
      return [
        {
          title: 'SelectList',
          name: 'category',
          multi: false,
          label: 'Set Category',
          options: this.cats,
        },
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
          placeholder: 'Video',
          type: 'text',
          label: 'Video',
          name: 'url',
        },
      ]
    },
  },
}
</script>
