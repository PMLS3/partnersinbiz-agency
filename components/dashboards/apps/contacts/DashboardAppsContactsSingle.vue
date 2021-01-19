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
  name: 'ContactsSingle',
  components: {
    CellRendererActions,
    CellRendererHtml,
  },
  data() {
    return {
      item: {
        item: 'ContactsSingle',
        title: 'Calendar',
        sub_text: 'All your calendar needs',
        type: 'Single',
        has_categories: false,
        parent: 'Contacts',
        display: 'calendar',
        url: '/AppsContacts/',
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
      // items: { item: 'Contacts', title: 'Add Category', type: 'Category' },
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
          name: 'html',
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
          name: 'Address',
        },
      ]
    },
  },
}
</script>
