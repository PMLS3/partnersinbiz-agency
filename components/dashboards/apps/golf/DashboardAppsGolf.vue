<template>
  <DashboardApp :item="item" :schema="schema" />
</template>

<script>
export default {
  name: 'Golf',
  components: {},
  data() {
    return {
      item: {
        item: 'Golf',
        title: 'Golf',
        child: 'GolfSingle',
        sub_text: 'Create a Golf',
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
          placeholder: 'Course Name',
          label: 'Name',
          name: 'title',
        },
        {
          title: 'TextInput',
          placeholder: 'Website',
          label: 'Website',
          name: 'website',
        },
        {
          title: 'TextInput',
          placeholder: 'Contact Number',
          name: 'number',
          label: 'Contact Number',
          minValue: 0,
        },
        {
          title: 'TextInput',
          placeholder: 'Secondary Contact Number',
          name: 'number2',
          label: 'Secondary Contact Number',
          minValue: 0,
        },
        {
          title: 'TextInput',
          placeholder: 'Email',
          label: 'Email',
          name: 'email',
        },
        {
          title: 'SelectList',
          name: 'category',
          multi: false,
          label: 'Distance',
          options: ['', 'Yards', 'Km'],
        },
        {
          title: 'QuilEditor',
          name: 'desc',
          label: 'Description',
          placeholder: 'Description',
        },
        {
          title: 'ImageUpload',
          placeholder: 'Image',
          type: 'text',
          label: 'Image',
          name: 'url',
        },
      ]
    },
  },
}
</script>
