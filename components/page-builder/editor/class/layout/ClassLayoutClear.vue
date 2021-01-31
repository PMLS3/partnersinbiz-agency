<template>
  <div>
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="clear-left"
      >Clear Left</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="clear-right"
      >Clear Right</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="clear-both"
      >Clear Both</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="clear-none"
      >Clear None</vs-radio
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
      number: 0,
      pmType: 'clear-left',
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
