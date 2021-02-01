<template>
  <div>
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="content-start"
      >Content Start</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="content-end"
      >Content End</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="content-center"
      >Content Center</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="content-between"
      >Content Between</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="content-around"
      >Content Arpund</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="content-evenly"
      >Content Evenly</vs-radio
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
      pmType: 'content-start',
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
