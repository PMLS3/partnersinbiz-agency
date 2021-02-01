<template>
  <div>
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="grid-flow-row"
      >Grid Flow Row</vs-radio
    >

    <vs-radio v-model="pmType" vs-name="pmType" vs-value="grid-flow-col"
      >Grid Flow Col</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="grid-flow-row-dense"
      >Grid Flow Row Dense</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="grid-flow-col-dense"
      >Grid Flow Col Dense</vs-radio
    >

    <vs-button @click="changeComponent(pmType)" class="w-full mx-auto"
      >Submit</vs-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      pmType: 'grid-flow-row',
    }
  },
  methods: {
    changeComponent(data) {
      this.$emit('emitvalue', data)
    },
  },
}
</script>

<style></style>
