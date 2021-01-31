<template>
  <div>
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="box-border"
      >Box Border</vs-radio
    >
    <br />
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="box-content"
      >Box Content</vs-radio
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
      pmType: 'box-border',
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
