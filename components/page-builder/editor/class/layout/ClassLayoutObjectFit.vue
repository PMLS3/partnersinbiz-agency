<template>
  <div>
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="object-contain"
      >Object Contain</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="object-cover"
      >Object Cover</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="object-fill"
      >Object Fill</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="object-none"
      >Object None</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="object-scale-down"
      >Object Scale Down</vs-radio
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
      pmType: 'object-contain',
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
