<template>
  <div>
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="flex-1"
      >Flex 1</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="flex-auto"
      >Flex Auto</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="flex-initial"
      >Flex Initial</vs-radio
    >

    <vs-radio v-model="pmType" vs-name="pmType" vs-value="flex-none"
      >Flex None</vs-radio
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
      pmType: 'flex-flex',
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
