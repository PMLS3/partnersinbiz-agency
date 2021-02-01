<template>
  <div>
    <vs-radio
      v-model="pmType"
      vs-name="pmType"
      :vs-value="`radius-${num}`"
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
        'none',
        'sm',
        '',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        'full',
        't-none',
        'r-none',
        'b-none',
        'l-none',
        't-sm',
        'r-sm',
        'b-sm',
        'l-sm',
        't',
        'r',
        'b',
        'l',
        't-md',
        'r-md',
        'b-md',
        'l-md',
        't-lg',
        'r-lg',
        'b-lg',
        'l-lg',
        't-xl',
        'r-xl',
        'b-xl',
        'l-xl',
        't-2xl',
        'r-2xl',
        'b-2xl',
        'l-2xl',
        't-3xl',
        'r-3xl',
        'b-3xl',
        'l-3xl',
        't-full',
        'r-full',
        'b-full',
        'l-full',
        'tl-none',
        'tr-none',
        'br-none',
        'bl-none',
        'tl-sm',
        'tr-sm',
        'br-sm',
        'bl-sm',
        'tl',
        'tr',
        'br',
        'bl',
        'tl-md',
        'tr-md',
        'br-md',
        'bl-md',
        'tl-lg',
        'tr-lg',
        'br-lg',
        'bl-lg',
        'tl-xl',
        'tr-xl',
        'br-xl',
        'bl-xl',
        'tl-2xl',
        'tr-2xl',
        'br-2xl',
        'bl-2xl',
        'tl-3xl',
        'tr-3xl',
        'br-3xl',
        'bl-3xl',
        'tl-full',
        'br-full',
        'bl-full',
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
