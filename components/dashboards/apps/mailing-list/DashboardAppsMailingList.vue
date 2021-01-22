<template>
  <DashboardApp :item="item" :schema="schema" />
</template>

<script>
export default {
  name: 'MailingList',
  data() {
    return {
      item: {
        item: 'MailingList',
        title: 'MailingList',
        child: 'MailingListSingle',
        sub_text: 'Create different MailingList',
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
          placeholder: 'Mailing List',
          type: 'text',
          label: 'Mailing List',
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

<style lang="scss" scoped>
.knowledge-base-jumbotron-content {
  background-image: url('../../../../assets/images/background/night.jpeg');
  background-size: cover;
}
</style>
