<template>
  <div>
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="flex-grow-0"
      >Flex Grow 0</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="flex-grow"
      >Flex Grow</vs-radio
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
      pmType: 'flex-grow-0',
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
