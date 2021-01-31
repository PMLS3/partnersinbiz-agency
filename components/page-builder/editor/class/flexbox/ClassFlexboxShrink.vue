<template>
  <div>
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="flex-shrink-0"
      >Flex Shrink 0</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="flex-shrink"
      >Flex Shrink</vs-radio
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
      pmType: 'flex-shrink-0',
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
