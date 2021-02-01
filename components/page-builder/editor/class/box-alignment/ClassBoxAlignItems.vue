<template>
  <div>
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="items-start">
      Items Start</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="items-end">
      Items End</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="items-center">
      Items Center</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="items-baseline">
      Items Baseline</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="items-stretch">
      Items Stretch</vs-radio
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
      pmType: 'items-start',
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
