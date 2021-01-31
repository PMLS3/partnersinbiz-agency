<template>
  <div>
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="object-bottom"
      >Object Bottom</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="object-top"
      >Object Top</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="object-center"
      >Object Center</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="object-left"
      >Object Left</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="object-left-bottom"
      >Object Left Bottom</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="object-left-top"
      >Object Left Top</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="object-right"
      >Object Right</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="object-right-bottom"
      >Object Right Bottom</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="object-right-top"
      >Object Right Top</vs-radio
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
      pmType: 'object-bottom',
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
