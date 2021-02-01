<template>
  <div>
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="grid-cols-none"
      >Grid Cols None</vs-radio
    >

    <vs-radio
      v-model="pmType"
      vs-name="pmType"
      :vs-value="`grid-cols-${num}`"
      v-for="(num, index) in numbers"
      :key="index"
      >Grid Cols {{ num }}
    </vs-radio>

    <vs-button @click="changeComponent(pmType)" class="w-full mx-auto"
      >Submit</vs-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      pmType: 'flex-shrink-0',
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
