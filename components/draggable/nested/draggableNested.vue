<template>
  <div class="flex">
    <div class="w-1/2 bg-gray-400 p-8">
      <h3>Nested draggable</h3>
      <Nested :children="list" />
    </div>

    <rawDisplayer class="w-1/2 bg-gray-400 p-8" :value="list" title="List" />
  </div>
</template>

<script>
import rawDisplayer from '../rawDisplayer'
export default {
  name: 'nested-example',
  display: 'Nested',
  order: 15,
  props: {
    list: {
      required: true,
      type: Array,
      default: () => [
        {
          name: 'task 1',
          children: [
            {
              name: 'task 2',
              children: [],
            },
          ],
        },
        {
          name: 'task 3',
          children: [
            {
              name: 'task 4',
              children: [],
            },
          ],
        },
        {
          name: 'task 5',
          children: [],
        },
      ],
    },
  },
  components: {
    rawDisplayer,
  },
  watch: {
    list() {
      this.$emit('submitNewList', this.list)
    },
  },
}
</script>
<style scoped></style>
