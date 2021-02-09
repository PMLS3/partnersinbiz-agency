<template>
  <div>
    <UiTreeItem
      :key="mykey"
      :schema="schema"
      :index="myindex"
      :mainIndex="mainIndex"
      :item_id="schema.id"
      :depth="depth"
    />
  </div>
</template>

<script>
export default {
  name: 'UiTreeMenu',
  components: {
    UiTreeItem: () => import('./UiTreeItem.vue'),
  },

  data() {
    return {
      popup: false,
      field: {},
      index: 0,
    }
  },
  props: ['schema', 'mykey', 'myindex', 'mainIndex', 'depth'],
}
</script>
