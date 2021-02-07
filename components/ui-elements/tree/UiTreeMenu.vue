<template>
  <div>
    {{ schema.title }}
    <UiTreeItem
      :key="mykey"
      :schema="schema"
      :index="myindex"
      :mainIndex="mainIndex"
      :item_id="schema.id"
    ></UiTreeItem>
  </div>
</template>

<script>
export default {
  name: 'ComponentCreatorEditor',

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
