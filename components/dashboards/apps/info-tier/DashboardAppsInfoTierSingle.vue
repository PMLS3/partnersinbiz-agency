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
  name: 'InfoTierSingle',
  components: {
    CellRendererActions,
    CellRendererHtml,
  },
  data() {
    return {
      item: {
        item: 'InfoTierSingle',
        title: 'Info Tier',
        sub_text: 'All your Info Tier needs',
        type: 'Single',
        has_categories: true,
        parent: 'InfoTier',
        display: 'info-tier',
        url: '/AppsInfoTier/',
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
      items: { item: 'InfoTier', title: 'Add Category', type: 'Category' },
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
          headerName: 'Category',
          field: 'category',
          filter: true,
          width: 250,
        },

        {
          headerName: 'Description',
          field: 'html',
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
          label: 'Category',
          options: this.cats,
        },
        {
          title: 'TextInput',
          placeholder: 'Name',
          label: 'Name',
          name: 'title',
        },
        {
          title: 'ImageUpload',
          placeholder: 'Image Upload',
          label: 'Image Upload',
          name: 'imageUpload',
        },
        {
          title: 'Divider',
          name: 'Divider',
        },
        {
          title: 'QuilEditor',
          name: 'html',
          label: 'Description',
          placeholder: 'Description',
        },
      ]
    },
  },
}
</script>
