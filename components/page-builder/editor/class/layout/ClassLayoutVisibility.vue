<template>
  <div>
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="visible"
      >Visible</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="invisible"
      >Invisible</vs-radio
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
      pmType: 'visible',
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
