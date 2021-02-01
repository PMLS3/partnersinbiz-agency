<template>
  <div>
    <vs-radio
      v-model="pmType"
      vs-name="pmType"
      :vs-value="`leading-${num}`"
      v-for="(num, index) in sizes"
      :key="index"
      >Line Height {{ num }}
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
      size: [
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        'none',
        'tight',
        'snug',
        'normal',
        'relaxed',
        'loose',
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
