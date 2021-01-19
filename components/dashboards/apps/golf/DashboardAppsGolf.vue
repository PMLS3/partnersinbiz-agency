<template>
  <DashboardApp :item="item" :schema="schema" />
</template>

<script>
export default {
  name: 'Golf',
  data() {
    return {
      item: {
        item: 'Golf',
        title: 'Golf',
        child: 'GolfSingle',
        sub_text: 'Create different Course',
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
          name: 'name',
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
          title: 'TextArea',
          placeholder: 'Description',
          label: 'Description',
          name: 'description',
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
