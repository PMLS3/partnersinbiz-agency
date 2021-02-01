<template>
  <div>
    <vs-radio
      v-model="pmType"
      vs-name="pmType"
      :vs-value="`${num}`"
      v-for="(num, index) in sizes"
      :key="index"
      >Font Variant Numberic {{ num }}
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
        'normal-nums',
        'ordinal',
        'slashed-zero',
        'lining-nums',
        'oldstyle-nums',
        'proportional-nums',
        'tabular-nums',
        'diagonal-fractions',
        'stacked-fractions',
      ],
      pmType: 'italic',
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
