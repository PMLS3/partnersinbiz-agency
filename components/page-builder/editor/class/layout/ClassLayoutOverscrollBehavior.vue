<template>
  <div>
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="overscroll-auto"
      >Overscroll Auto</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="overscroll-contain"
      >Overscroll Contain</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="overscroll-none"
      >Overscroll None</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="overscroll-x-auto"
      >Overscroll X Auto</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="overscroll-y-auto"
      >Overscroll Y Auto</vs-radio
    >

    <vs-radio v-model="pmType" vs-name="pmType" vs-value="overscroll-x-contain"
      >Overscroll X Contain</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="overscroll-y-contain"
      >Overscroll Y Contain</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="overscroll-x-none"
      >Overscroll X None</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="overscroll-y-none"
      >Overscroll Y None</vs-radio
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
      pmType: 'overscroll-auto',
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
