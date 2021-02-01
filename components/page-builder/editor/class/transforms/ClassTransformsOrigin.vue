<template>
  <div>
    <vs-radio
      v-model="pmType"
      vs-name="pmType"
      :vs-value="`origin-${num}`"
      v-for="(num, index) in sizes"
      :key="index"
      >Origin {{ num }}
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
        'center',
        'top',
        'right',
        'left',
        'bottom',
        'top-left',
        'top-right',
        'bottom-left',
        'bottom-right',
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
