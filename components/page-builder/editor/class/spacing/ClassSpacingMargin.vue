<template>
  <div>
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="mx-auto"
      >Horizontal Auto</vs-radio
    >
    <br />
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="my-auto"
      >Vertical Auto</vs-radio
    >
    <br />
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="mx-"
      >Horizontal</vs-radio
    >
    <br />
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="my-"
      >Vertical</vs-radio
    >
    <br />

    <vs-radio v-model="pmType" vs-name="pmType" vs-value="ml-">Left</vs-radio>
    <br />

    <vs-radio v-model="pmType" vs-name="pmType" vs-value="mr-">Right</vs-radio>
    <br />

    <vs-radio v-model="pmType" vs-name="pmType" vs-value="mt-">Top</vs-radio>
    <br />

    <vs-radio v-model="pmType" vs-name="pmType" vs-value="mb-">Bottom</vs-radio>
    <br />

    <vs-divider></vs-divider>
    <div v-if="pmType != 'mx-auto' && pmType != 'my-auto'">
      <vs-input-number min="0" v-model="number" class="w-24 mx-auto" />
      <vs-divider></vs-divider>

      <vs-button
        @click="changeComponent(pmType + number)"
        class="w-full mx-auto"
        >Submit</vs-button
      >
    </div>

    <vs-button @click="changeComponent(pmType)" class="w-full mx-auto" v-else
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
