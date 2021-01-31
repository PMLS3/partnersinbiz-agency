<template>
  <div>
    <div class="flex">
      <vs-radio v-model="pos" vs-name="pos" vs-value="">Positive</vs-radio>
      <vs-radio v-model="pos" vs-name="pos" vs-value="-">Negative</vs-radio>
    </div>
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="inset-"
      >Inset</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="inset-y-"
      >Inset Y</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="inset-x-"
      >Inset X</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="top-">Top</vs-radio>
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="bottom-"
      >Bottom</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="left-">Left</vs-radio>
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="right-"
      >Right</vs-radio
    >

    <vs-divider></vs-divider>

    <vs-input-number min="0" v-model="number" class="w-24 mx-auto" />
    <vs-divider></vs-divider>

    <vs-button
      @click="changeComponent(pos + pmType + number)"
      class="w-full mx-auto"
      >Submit</vs-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
      pmType: 'static',
      pos: '',
      number: '',
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
