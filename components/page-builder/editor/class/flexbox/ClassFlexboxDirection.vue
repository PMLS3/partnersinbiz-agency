<template>
  <div>
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="flex-row"
      >Flex Row</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="flex-row-reverse"
      >Flex Row Reverse</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="flex-col"
      >Flex Column</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="flex-col-reverse"
      >Flex Column Reverse</vs-radio
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
      pmType: 'flex-row',
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
