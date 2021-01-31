<template>
  <div>
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="z-0"
      >Z-index 0</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="z-10"
      >Z-index 10</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="z-20"
      >Z-index 20</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="z-30"
      >Z-index 30</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="z-40"
      >Z-index 40</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="z-50"
      >Z-index 50</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="z-auto"
      >Z-index auto</vs-radio
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
      pmType: 'z-0',
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
