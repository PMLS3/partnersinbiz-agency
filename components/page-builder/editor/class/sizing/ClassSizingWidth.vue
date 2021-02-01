<template>
  <div>
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="w-full"
      >Width Full</vs-radio
    >
    <br />
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="w-screen"
      >Width Screen</vs-radio
    >
    <br />
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="w-min"
      >Width min</vs-radio
    >
    <br />
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="w-max"
      >Width max</vs-radio
    >
    <br />

    <vs-radio v-model="pmType" vs-name="pmType" vs-value="w-"
      >Width {{ number }}</vs-radio
    >
    <br />

    <vs-divider></vs-divider>
    <div
      v-if="
        pmType != 'w-full' &&
        pmType != 'w-screen' &&
        pmType != 'w-min' &&
        pmType != 'w-max'
      "
    >
      <vs-input-number min="0" v-model="number" class="w-24 mx-auto" />
      <vs-divider></vs-divider>

      <vs-button
        @click="changeComponent(pmType + number)"
        class="w-full mx-auto"
        >Submit</vs-button
      >
    </div>

    <vs-button @click="changeComponent(pmType)" class="w-full mx-auto" v-else
      >Submit</vs-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
      pmType: 'mx',
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
