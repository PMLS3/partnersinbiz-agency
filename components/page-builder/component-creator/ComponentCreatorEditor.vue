<template>
  <component
    :key="mykey"
    :is="schema.title"
    :schema="schema"
    :index="myindex"
    :mainIndex="mainIndex"
  ></component>
</template>

<script>
import grid from '@/components/page-generator/components/grid/grid'

export default {
  name: 'componentGenerator',

  components: {
    grid,
  },
  data() {
    return {
      popup: false,
      field: {},
      index: 0,
      styleData: {
        border: '1px solid black',
        'min-height': '50px',
        position: 'relative',
      },
    }
  },
  props: ['schema', 'mykey', 'myindex', 'mainIndex'],
}
</script>
