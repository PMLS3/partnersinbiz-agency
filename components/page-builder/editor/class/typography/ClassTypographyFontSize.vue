<template>
  <div>
    <vs-radio
      v-model="pmType"
      vs-name="pmType"
      :vs-value="`text-${num}`"
      v-for="(num, index) in sizes"
      :key="index"
      >Text {{ num }}
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
        'xs',
        'sm',
        'base',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      pmType: 'max-w-0',
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
