<!-- =========================================================================================
    File Name: Dashboard.vue.vue
    Description: Knowledge Base Page
    ----------------------------------------------------------------------------------------
  TODO seller/contact person
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
  name: 'RealEstateSingle',
  components: {
    CellRendererActions,
    CellRendererHtml,
  },
  data() {
    return {
      item: {
        item: 'RealEstateSingle',
        title: 'Real Estate',
        sub_text: 'All your Real Estate needs',
        type: 'Single',
        has_categories: true,
        parent: 'RealEstate',
        display: 'real-estate',
        url: '/AppsRealEstate/',
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
      items: { item: 'RealEstate', title: 'Add Category', type: 'Category' },
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
          width: 175,
        },
        {
          headerName: 'Bathrooms',
          field: 'bathrooms',
          filter: true,
          width: 125,
        },
        {
          headerName: 'Bedrooms',
          field: 'bedrooms',
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
          placeholder: 'Title',
          type: 'text',
          label: 'Title',
          name: 'title',
        },
        // {
        //   title: 'SelectList',
        //   name: 'agent',
        //   multi: false,
        //   label: 'Agent',
        //   options: myAgents
        // },
        {
          title: 'SelectList',
          name: 'category',
          multi: false,
          label: 'Category',
          options: ['Rent', 'Buy'],
        },
        {
          title: 'SelectList',
          name: 'type',
          multi: false,
          label: 'Property Type',
          options: [
            'House',
            'Flats & Apartments',
            'Townhouse & Cluster',
            'Land',
            'Farms & Smallholdings',
            'Commercial Property',
            'Industrial Property',
          ],
        },
        {
          title: 'SelectList',
          name: 'bedrooms',
          multi: false,
          label: 'Bedrooms',
          options: ['1', '2', '3', '4', '5+'],
        },
        {
          title: 'SelectList',
          name: 'bathrooms',
          multi: false,
          label: 'Bathrooms',
          options: ['1', '2', '3', '4', '5+'],
        },
        {
          title: 'SelectList',
          name: 'parking',
          multi: false,
          label: 'Parking',
          options: ['1', '2', '3', '4', '5+'],
        },
        {
          title: 'SelectList',
          name: 'security',
          multi: true,
          label: 'Security',
          options: [
            'Alarm',
            'Access Gate',
            'Electric Fencing',
            'Intercom',
            'Security Post',
          ],
        },
        {
          title: 'SelectList',
          name: 'amenities',
          multi: true,
          label: 'Amenities',
          options: [
            'Pool',
            'Pet Friendly',
            'Staff Quaters',
            'Sea View',
            'Flatlet / Garden Cottage',
          ],
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
