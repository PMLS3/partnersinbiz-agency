<template>
  <div>
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="justify-start"
      >Justify Start</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="justify-end"
      >Justify End</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="justify-center"
      >Justify Center</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="justify-between"
      >Justify Between</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="justify-around"
      >Justify Arpund</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="justify-evenly"
      >Justify Evenly</vs-radio
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
      pmType: 'justify-start',
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
