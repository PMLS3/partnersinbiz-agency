<template>
  <div>
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="float-none"
      >Float None</vs-radio
    >
    <br />
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="float-right"
      >Float Right</vs-radio
    >
    <br />
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="float-left"
      >Float Left</vs-radio
    >

    <br />

    <vs-button @click="changeComponent(pmType)" class="w-full mx-auto"
      >Submit</vs-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
      pmType: 'float-none',
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
