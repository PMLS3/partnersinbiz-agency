<template>
  <DashboardApp :item="item" :schema="schema" :schemas="schemas" />
</template>

<script>
export default {
  name: 'Blog',
  components: {},
  data() {
    return {
      item: {
        item: 'Blog',
        title: 'Blog',
        child: 'BlogSingle',
        sub_text: 'Create a Blog',
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
          placeholder: 'Blog Name',
          type: 'text',
          label: 'Blog Name',
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
