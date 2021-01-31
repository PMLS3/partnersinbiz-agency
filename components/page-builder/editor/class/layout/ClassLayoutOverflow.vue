<template>
  <div>
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="overflow-auto"
      >Overflow Auto</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="overflow-hidden"
      >Overflow Hidden</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="overflow-visible"
      >Overflow Visible</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="overflow-scroll"
      >Overflow Scroll</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="overflow-x-auto"
      >Overflow X Auto</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="overflow-y-auto"
      >Overflow Y Auto</vs-radio
    >

    <vs-radio v-model="pmType" vs-name="pmType" vs-value="overflow-x-hidden"
      >Overflow X Hidden</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="overflow-y-hidden"
      >Overflow Y Hidden</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="overflow-x-visible"
      >Overflow X Visible</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="overflow-y-visible"
      >Overflow Y Visible</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="overflow-x-scroll"
      >Overflow X Scroll</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="overflow-y-scroll"
      >Overflow Y Scroll</vs-radio
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
      pmType: 'overflow-auto',
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
