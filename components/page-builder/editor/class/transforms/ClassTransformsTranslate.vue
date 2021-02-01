<template>
  <div>
    <vs-radio
      v-model="pmType"
      vs-name="pmType"
      :vs-value="`translate-x-${num}`"
      v-for="(num, index) in sizes"
      :key="index"
      >Translate X {{ num }}
    </vs-radio>

    <vs-radio
      v-model="pmType"
      vs-name="pmType"
      :vs-value="`-translate-x-${num}`"
      v-for="(num, index) in sizes"
      :key="index"
      >Negative Translate X {{ num }}
    </vs-radio>

    <vs-radio
      v-model="pmType"
      vs-name="pmType"
      :vs-value="`translate-y-${num}`"
      v-for="(num, index) in sizes"
      :key="index"
      >Translate Y {{ num }}
    </vs-radio>

    <vs-radio
      v-model="pmType"
      vs-name="pmType"
      :vs-value="`-translate-y-${num}`"
      v-for="(num, index) in sizes"
      :key="index"
      >Negative Translate Y {{ num }}
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
        13,
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
        64,
        72,
        80,
        96,
        'px',
        '1/2',
        '1/3',
        '2/3',
        '1/4',
        '3/4',
        'full',
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
