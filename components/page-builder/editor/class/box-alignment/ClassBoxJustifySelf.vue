<template>
  <div>
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="justify-self-start"
      >Justify Self Start</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="justify-self-end"
      >Justify Self End</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="justify-self-center"
      >Justify Self Center</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="justify-self-auto"
      >Justify Self Auto</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="justify-self-stretch"
      >Justify Self Stretch</vs-radio
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
      pmType: 'justify-self-start',
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
