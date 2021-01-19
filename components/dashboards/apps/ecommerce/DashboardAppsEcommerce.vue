<template>
  <DashboardApp :item="item" :schema="schema" />
</template>

<script>
export default {
  name: 'Ecommerce',
  data() {
    return {
      item: {
        item: 'Ecommerce',
        title: 'Ecommerce',
        child: 'EcommerceSingle',
        sub_text: 'Create different Shop',
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
          placeholder: 'Gallery Name',
          type: 'text',
          label: 'Gallery Name',
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
