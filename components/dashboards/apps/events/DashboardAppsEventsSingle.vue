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
  name: 'EventsSingle',
  components: {
    CellRendererActions,
    CellRendererHtml,
  },
  data() {
    return {
      item: {
        item: 'EventsSingle',
        title: 'Calendar',
        sub_text: 'All your calendar needs',
        type: 'Single',
        has_categories: true,
        parent: 'Events',
        display: 'calendar',
        url: '/AppsEvents/',
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
      items: { item: 'Events', title: 'Add Category', type: 'Category' },

      knowledgeBaseSearchQuery: '',
      kb: [],
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
          title: 'SelectList',
          name: 'category',
          multi: false,
          label: 'Set Category',
          options: this.cats,
        },
        {
          title: 'TextInput',
          placeholder: 'Title',
          label: 'Title',
          name: 'title',
        },
        {
          title: 'TextArea',
          placeholder: 'Short Description',
          label: 'Short Description',
          name: 'desc',
        },
        {
          title: 'QuilEditor',
          name: 'description',
          label: 'Description',
          placeholder: 'Description',
        },
        {
          title: 'ImageUpload',
          placeholder: 'Image Upload',
          label: 'Image Upload',
          name: 'img',
        },
        {
          title: 'DatePicker',
          name: 'date_start',
          label: 'Start Date',
        },
        {
          title: 'TimePicker',
          name: 'time_start',
          label: 'Time Start',
        },
        {
          title: 'DatePicker',
          name: 'date_end',
          label: 'End Date',
        },
        {
          title: 'TimePicker',
          name: 'time_end',
          label: 'Time End',
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
