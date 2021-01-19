<template>
  <DashboardApp :item="item" :schema="schema" />
</template>

<script>
export default {
  name: 'Loyalty',
  data() {
    return {
      item: {
        item: 'Loyalty',
        title: 'Loyalty',
        child: 'LoyaltySingle',
        sub_text: 'Create different Loyalty card',
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
          placeholder: 'Loyalty Group',
          type: 'text',
          label: 'Loyalty Group',
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
