<template>
  <div>
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="static"
      >Statice</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="fixed"
      >Fixed</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="absolute"
      >Absolute</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="relative"
      >Relative</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="sticky"
      >Sticky</vs-radio
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
      pmType: 'static',
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
