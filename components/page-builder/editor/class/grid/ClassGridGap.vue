<template>
  <div>
    <div v-for="num in numbers" :key="num">
      <vs-radio v-model="pmType" vs-name="pmType" :vs-value="`gap-${num}`"
        >Gap {{ Num }}</vs-radio
      >

      <vs-radio v-model="pmType" vs-name="pmType" :vs-value="`gap-x-${num}`"
        >Gap X {{ num }}</vs-radio
      >
      <vs-radio v-model="pmType" vs-name="pmType" :vs-value="`gap-y-${num}`"
        >Gap Y {{ num }}</vs-radio
      >
      >
    </div>

    <vs-radio v-model="pmType" vs-name="pmType" vs-value="gap-px"
      >Gap 1px</vs-radio
    >

    <vs-radio v-model="pmType" vs-name="pmType" vs-value="gap-x-px"
      >Gap X 1px</vs-radio
    >
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="gap-y-px"
      >Gap Y 1px</vs-radio
    >
    >

    <vs-button @click="changeComponent(pmType)" class="w-full mx-auto"
      >Submit</vs-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbers: [
        0,
        0.5,
        1,
        1.5,
        2,
        2.5,
        3,
        3.5,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        14,
        16,
        20,
        24,
        28,
        32,
        36,
        40,
        44,
        48,
        52,
        56,
        60,
        6472,
        80,
        96,
      ],
      pmType: 'auto-rows-auto',
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
