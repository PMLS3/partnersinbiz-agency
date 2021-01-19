<template>
  <DashboardApp :item="item" :schema="schema" />
</template>

<script>
export default {
  name: 'ReservationPerson',
  data() {
    return {
      item: {
        item: 'ReservationPerson',
        title: 'ReservationPerson',
        child: 'ReservationPersonSingle',
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
