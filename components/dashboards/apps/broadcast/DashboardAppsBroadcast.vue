<template>
  <DashboardApp :item="item" :schema="schema" :schemas="schemas" />
</template>

<script>
export default {
  name: 'Broadcast',
  components: {},
  data() {
    return {
      item: {
        item: 'Broadcast',
        title: 'Broadcast',
        child: 'BroadcastSingle',
        sub_text: 'Create a Broadcast',
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
          placeholder: 'Broadcast Name',
          type: 'text',
          label: 'Broadcast Name',
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
