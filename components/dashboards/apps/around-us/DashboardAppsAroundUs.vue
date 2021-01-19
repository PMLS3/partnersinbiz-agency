<template>
  <DashboardApp :item="item" :schema="schema" />
</template>
<script>
export default {
  name: 'AroundUs',
  components: {},
  data() {
    return {
      item: {
        item: 'AroundUs',
        title: 'AroundUs',
        child: 'AroundUsSingle',
        sub_text: 'Create different Folders',
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
          placeholder: 'Around Us Group',
          type: 'text',
          label: 'Around Us Group',
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
