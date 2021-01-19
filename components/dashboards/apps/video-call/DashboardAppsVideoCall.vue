<template>
  <DashboardApp :item="item" :schema="schema" />
</template>

<script>
export default {
  name: 'VideoChat',
  data() {
    return {
      item: {
        item: 'VideoChat',
        title: 'VideoChat',
        child: 'VideoChatSingle',
        sub_text: 'Create different Calendar',
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
          placeholder: 'Title',
          type: 'text',
          label: 'Title',
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
        {
          title: 'DateTimePicker',
          name: 'call_date',
          label: 'Date and Time',
          placeholder: 'Date and Time',
        },
      ]
    },
  },
}
</script>
