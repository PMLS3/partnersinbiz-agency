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
  name: 'GolfSingle',
  components: {
    CellRendererActions,
    CellRendererHtml,
  },
  data() {
    return {
      item: {
        item: 'GolfSingle',
        title: 'Calendar',
        sub_text: 'All your calendar needs',
        type: 'Single',
        has_categories: true,
        parent: 'Golf',
        display: 'calendar',
        url: '/AppsGolf/',
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
      items: { item: 'Golf', title: 'Add Category', type: 'Category' },
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
    schema() {
      return [
        // {
        //   title: 'SelectList',
        //   name: 'course',
        //   multi: false,
        //   label: 'Course',
        //   options: golfCourse,
        // },
        {
          title: 'NumberInput',
          placeholder: 'Hole Number',
          name: 'holenumber',
          label: 'Hole Number',
          minValue: 0,
        },
        {
          title: 'NumberInput',
          placeholder: 'Par',
          name: 'par',
          label: 'Par',
          minValue: 0,
        },
        {
          title: 'NumberInput',
          placeholder: 'Handicap',
          name: 'handicap',
          label: 'Handicap',
          minValue: 0,
        },
        {
          title: 'NumberInput',
          placeholder: 'Tee 1 - Distance',
          name: 'tee1',
          label: 'Tee 1 - Distance',
          minValue: 0,
        },
        {
          title: 'NumberInput',
          placeholder: 'Tee 2 - Distance',
          name: 'tee2',
          label: 'Tee 2 - Distance',
          minValue: 0,
        },
        {
          title: 'NumberInput',
          placeholder: 'Tee 3 - Distance',
          name: 'tee3',
          label: 'Tee 3 - Distance',
          minValue: 0,
        },
        {
          title: 'NumberInput',
          placeholder: 'Tee 4 - Distance',
          name: 'tee4',
          label: 'Tee 4 - Distance',
          minValue: 0,
        },
      ]
    },
  },
}
</script>
