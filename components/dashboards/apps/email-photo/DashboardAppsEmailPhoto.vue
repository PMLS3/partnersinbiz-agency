<template>
  <DashboardApp :item="item" :schema="schema" />
</template>

<script>
export default {
  name: 'EmailPhoto',
  data() {
    return {
      item: {
        item: 'EmailPhoto',
        title: 'EmailPhoto',
        child: 'EmailPhotoSingle',
        sub_text: 'Create different form for EmailPhoto',
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
          placeholder: 'Group Name',
          type: 'text',
          label: 'Group Name',
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
