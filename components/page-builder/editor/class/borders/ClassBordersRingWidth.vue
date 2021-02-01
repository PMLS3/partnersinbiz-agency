<template>
  <div>
    <vs-radio
      v-model="pmType"
      vs-name="pmType"
      :vs-value="`ring-${num}`"
      v-for="(num, index) in sizes"
      :key="index"
      >Ring {{ num }}
    </vs-radio>

    <vs-radio v-model="pmType" vs-name="pmType" vs-value="ring">Ring </vs-radio>

    <vs-button @click="changeComponent(pmType)" class="w-full mx-auto"
      >Submit</vs-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      sizes: [0, 1, 2, 4, 8, 'inset'],
      pmType: '',
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
