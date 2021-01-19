<!-- =========================================================================================
    File Name: Dashboard.vue.vue
    Description: Knowledge Base Page
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <DashboardApp :item="item" :schema="schema" :schemas="schemas" />
</template>

<script>
export default {
  name: 'Events',
  components: {},
  data() {
    return {
      item: {
        item: 'Events',
        title: 'Events',
        child: 'EventsSingle',
        sub_text: 'Create different Calendar',
        type: 'Category',
        has_categories: true,
        search: true,
      },
    }
  },
  computed: {
    schema() {
      return [
        {
          title: 'TextInput',
          placeholder: 'Events Calendar',
          type: 'text',
          label: 'Events Calendar',
          name: 'title',
        },
        {
          title: 'ImageUpload',
          placeholder: 'Cover Image',
          type: 'text',
          label: 'Cover Image',
          name: 'url',
        },
        {
          title: 'QuilEditor',
          name: 'desc',
          label: 'Description',
          placeholder: 'Description',
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
  },
}
</script>
