<template>
  <div>
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="px-"
      >Horizontal</vs-radio
    >
    <br />
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="py-"
      >Vertical</vs-radio
    >
    <br />
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="pl-">Left</vs-radio>
    <br />
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="pr-">Right</vs-radio>
    <br />
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="pt-">Top</vs-radio>
    <br />
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="pb-">Bottom</vs-radio>

    <vs-divider></vs-divider>

    <vs-input-number min="0" v-model="number" class="w-24 mx-auto" />
    <vs-divider></vs-divider>

    <vs-button @click="changeComponent(pmType + number)" class="w-full mx-auto"
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
