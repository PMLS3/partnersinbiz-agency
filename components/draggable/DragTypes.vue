<template>
  <div>
    <nested :list="list" @submitNewList="newList" />
  </div>
</template>

<script>
export default {
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
              children: []
            }
          ]
        },
        {
          name: 'task 3',
          children: [
            {
              name: 'task 4',
              children: []
            }
          ]
        },
        {
          name: 'task 5',
          children: []
        }
      ]
    }
  },
  components: {
    nested: () => (process.client ? import('./nested') : null)
  },
  methods: {
    newList(data) {
      this.$emit('submitNewList', data)
    }
  }
  // data() {
  //   return {
  //     list: [
  //       {
  //         name: 'task 1',
  //         children: [
  //           {
  //             name: 'task 2',
  //             children: []
  //           }
  //         ]
  //       },
  //       {
  //         name: 'task 3',
  //         children: [
  //           {
  //             name: 'task 4',
  //             children: []
  //           }
  //         ]
  //       },
  //       {
  //         name: 'task 5',
  //         children: []
  //       }
  //     ]
  //   }
  // }
}
</script>

<style></style>
