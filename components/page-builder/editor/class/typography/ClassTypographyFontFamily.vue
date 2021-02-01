<template>
  <div>
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="font-sans"
      >Font Sans</vs-radio
    >
    <br />
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="font-serif"
      >Font Serif</vs-radio
    >
    <br />
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="font-mono"
      >Font Mono</vs-radio
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
