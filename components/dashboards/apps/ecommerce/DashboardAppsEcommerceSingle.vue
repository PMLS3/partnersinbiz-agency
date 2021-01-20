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
  name: 'EcommerceSingle',
  components: {
    CellRendererActions,
    CellRendererHtml,
  },
  data() {
    return {
      item: {
        item: 'EcommerceSingle',
        title: 'eCommerce',
        sub_text: 'All your eCommerce needs',
        type: 'Single',
        has_categories: true,
        parent: 'Ecommerce',
        display: 'ecommerce',
        url: '/AppsEcommerce/',
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
      items: { item: 'Ecommerce', title: 'Add Category', type: 'Category' },
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
          headerName: 'Start',
          field: 'start',
          filter: true,
          width: 250,
        },
        {
          headerName: 'End',
          field: 'end',
          filter: true,
          width: 250,
        },
        {
          headerName: 'Short',
          field: 'content',
          filter: true,
          width: 175,
        },

        {
          headerName: 'Long Description',
          field: 'contentFull',
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
          title: 'TextInput',
          placeholder: 'Gallery Name',
          type: 'text',
          label: 'Gallery Name',
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
