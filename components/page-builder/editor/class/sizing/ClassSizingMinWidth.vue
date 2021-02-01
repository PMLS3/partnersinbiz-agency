<template>
  <div>
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="min-w-0"
      >Min Width</vs-radio
    >
    <br />
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="min-w-full"
      >Min Width Full</vs-radio
    >
    <br />
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="min-w-min"
      >Min Width Min</vs-radio
    >
    <br />
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="min-w-max"
      >Min Width max</vs-radio
    >
    <br />

    <vs-divider></vs-divider>

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
