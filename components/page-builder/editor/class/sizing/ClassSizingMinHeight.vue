<template>
  <div>
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="min-h-0"
      >Min Height</vs-radio
    >
    <br />
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="min-h-full"
      >Min Height Full</vs-radio
    >
    <br />
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="min-h-screen"
      >Min Height Screen</vs-radio
    >

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
