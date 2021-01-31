<template>
  <div>
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="flex-wrap"
      >Flex Wrap</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="flex-wrap-reverse"
      >Flex Wrap Reverse</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="flex-nowrap"
      >Flex No Wrap</vs-radio
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
