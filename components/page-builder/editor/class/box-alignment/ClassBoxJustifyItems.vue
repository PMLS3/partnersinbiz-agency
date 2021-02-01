<template>
  <div>
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="justify-items-start"
      >Justify Items Start</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="justify-items-end"
      >Justify Items End</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="justify-items-center"
      >Justify Items Center</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="justify-items-auto"
      >Justify Items Auto</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="justify-items-stretch"
      >Justify Items Stretch</vs-radio
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
      pmType: 'justify-items-start',
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
