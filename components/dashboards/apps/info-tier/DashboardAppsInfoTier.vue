<template>
  <DashboardApp :item="item" :schema="schema" :schemas="schemas" />
</template>

<script>
export default {
  name: 'InfoTier',
  data() {
    return {
      item: {
        item: 'InfoTier',
        title: 'Info Tier',
        child: 'InfoTierSingle',
        sub_text: 'Create different info tier',
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
          placeholder: 'Info Group',
          type: 'text',
          label: 'Info Group',
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
