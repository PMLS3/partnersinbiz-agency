<template>
  <UiTreeItem
    :key="mykey"
    :schema="schema"
    :index="myindex"
    :mainIndex="mainIndex"
    :item_id="schema.id"
  />
</template>

<script>
export default {
  name: 'UiTreeMenu',

  components: {},
  data() {
    return {
      popup: false,
      field: {},
      index: 0,
    }
  },
  props: ['schema', 'mykey', 'myindex', 'mainIndex'],
}
</script>
