<template>
  <div>
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="place-content-start"
      >Place Content Start</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="place-content-end"
      >Place Content End</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="place-content-center"
      >Place Content Center</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="place-content-between"
      >Place Content Between</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="place-content-around"
      >Place Content Arpund</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="place-content-evenly"
      >Place Content Evenly</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="place-content-stretch"
      >Place Content Stretch</vs-radio
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
      pmType: 'place-content-start',
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
