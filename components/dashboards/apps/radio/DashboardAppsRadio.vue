<template>
  <DashboardApp :item="item" :schema="schema" />
</template>

<script>
export default {
  name: 'Radio',
  data() {
    return {
      item: {
        item: 'Radio',
        title: 'Radio',
        child: 'RadioSingle',
        sub_text: 'Create different radio group',
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
          placeholder: 'Stations Name',
          type: 'text',
          label: 'Station Name',
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
