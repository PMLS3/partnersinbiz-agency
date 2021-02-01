<template>
  <div>
    <vs-radio
      v-model="pmType"
      vs-name="pmType"
      :vs-value="`bg-${num}`"
      v-for="(num, index) in sizes"
      :key="index"
      >Background {{ num }}
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
      sizes: [
        'repeat',
        'no-repeat',
        'repeat-x',
        'repeat-y',
        'repeat-round',
        'repeat-space',
      ],
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
