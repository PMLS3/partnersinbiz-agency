<template>
  <DashboardApp :item="item" :schema="schema" />
</template>

<script>
export default {
  name: 'ImageGallery',
  data() {
    return {
      item: {
        item: 'ImageGallery',
        title: 'ImageGallery',
        child: 'ImageGallerySingle',
        sub_text: 'Create different gallery',
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
