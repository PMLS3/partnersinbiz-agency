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
import CellRendererAudio from '@/components/ui-elements/ag-grid-table/cell-renderer/CellRendererAudio.vue'

export default {
  name: 'MusicSingle',
  components: {
    CellRendererActions,
    CellRendererHtml,
    CellRendererAudio,
  },
  data() {
    return {
      item: {
        item: 'MusicSingle',
        title: 'Music',
        sub_text: 'All your music needs',
        type: 'Single',
        has_categories: false,
        parent: 'Music',
        display: 'music',
        url: '/AppsMusic/',
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
      items: { item: 'Music', title: 'Add Category', type: 'Category' },
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
          headerName: 'Cover',
          field: 'cover',
          filter: true,
          width: 250,
        },
        {
          headerName: 'Artist',
          field: 'Artist',
          filter: true,
          width: 250,
        },
        {
          headerName: 'Category',
          field: 'category',
          filter: true,
          width: 250,
        },
        {
          headerName: 'Genre',
          field: 'genre',
          filter: true,
          width: 250,
        },
        {
          headerName: 'Audio',
          field: 'audio',
          filter: true,
          width: 250,
          cellRendererFramework: 'CellRendererAudio',
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
        // {
        //   title: 'SelectList',
        //   name: 'category',
        //   multi: false,
        //   label: 'Set Category',
        //   options: this.cats,
        // },
        // {
        //   title: 'TextInput',
        //   placeholder: 'Doc Name',
        //   type: 'text',
        //   label: 'Doc Name',
        //   name: 'title',
        // },

        // {
        //   title: 'QuilEditor',
        //   name: 'desc',
        //   label: 'Description',
        //   placeholder: 'Description',
        // },
        {
          title: 'MusicUpload',
          placeholder: 'Music',
          type: 'text',
          label: 'Music',
          name: 'url',
        },
      ]
    },
  },
}
</script>
