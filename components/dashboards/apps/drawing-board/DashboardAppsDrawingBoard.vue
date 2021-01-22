<template>
  <DashboardApp :item="item" :schema="schema" />
</template>

<script>
export default {
  name: 'Drawingboard',
  data() {
    return {
      item: {
        item: 'Drawingboard',
        title: 'Drawingboard',
        child: 'DrawingboardSingle',
        sub_text: 'Create different Drawingboard Folders',
        type: 'Category',
        has_categories: false,
        search: true,
      },
    }
  },
  computed: {
    schema() {
      return [
        {
          title: 'TextInput',
          placeholder: 'Drawingboard Folder',
          type: 'text',
          label: 'Drawingboard Folder',
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
  },
}
</script>
