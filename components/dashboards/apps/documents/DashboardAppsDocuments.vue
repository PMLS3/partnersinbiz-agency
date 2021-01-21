<template>
  <DashboardApp :item="item" :schema="schema" :schemas="schemas" />
</template>

<script>
export default {
  name: 'Documents',
  data() {
    return {
      item: {
        item: 'Documents',
        title: 'Documents',
        child: 'DocumentsSingle',
        sub_text: 'Create different Document Folders',
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
          placeholder: 'Documents Folder',
          type: 'text',
          label: 'Documents Folder',
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
