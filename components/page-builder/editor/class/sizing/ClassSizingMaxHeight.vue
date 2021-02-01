<template>
  <div>
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="max-h-full"
      >Height Full</vs-radio
    >
    <br />
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="max-h-screen"
      >Height Screen</vs-radio
    >
    <br />
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="max-h-min"
      >Height min</vs-radio
    >
    <br />
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="max-h-max"
      >Height max</vs-radio
    >
    <br />

    <vs-radio v-model="pmType" vs-name="pmType" vs-value="max-h-"
      >Height {{ number }}</vs-radio
    >
    <br />

    <vs-divider></vs-divider>
    <div
      v-if="
        pmType != 'max-h-full' &&
        pmType != 'max-h-screen' &&
        pmType != 'max-h-min' &&
        pmType != 'max-h-max'
      "
    >
      <vs-input-number min="0" v-model="number" class="w-24 mx-auto" />
      <vs-divider></vs-divider>

      <vs-button
        @click="changeComponent(pmType + number)"
        class="max-h-full mx-auto"
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
