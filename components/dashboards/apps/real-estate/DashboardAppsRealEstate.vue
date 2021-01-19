<template>
  <DashboardApp :item="item" :schema="schema" />
</template>

<script>
export default {
  name: 'RealEstate',
  data() {
    return {
      item: {
        item: 'RealEstate',
        title: 'RealEstate',
        child: 'RealEstateSingle',
        sub_text: 'Create different estate groups',
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
          placeholder: 'Real Estate Group',
          type: 'text',
          label: 'Real Estate Group',
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
