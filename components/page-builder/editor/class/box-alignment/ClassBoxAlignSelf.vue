<template>
  <div>
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="self-start"
      >Self Start</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="self-end"
      >Self End</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="self-center"
      >Self Center</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="self-auto"
      >Self Auto</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="self-stretch"
      >Self Stretch</vs-radio
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
      pmType: 'self-start',
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
