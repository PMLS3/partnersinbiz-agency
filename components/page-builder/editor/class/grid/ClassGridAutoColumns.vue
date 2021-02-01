<template>
  <div>
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="auto-cols-auto"
      >Auto Cols</vs-radio
    >

    <vs-radio v-model="pmType" vs-name="pmType" vs-value="auto-cols-min"
      >Auto Min</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="auto-cols-max"
      >Auto Max</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="auto-cols-fr"
      >Auto fr</vs-radio
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
      pmType: 'auto-cols-auto',
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
