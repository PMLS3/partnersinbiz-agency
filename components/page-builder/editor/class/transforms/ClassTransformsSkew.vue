<template>
  <div>
    <vs-radio
      v-model="pmType"
      vs-name="pmType"
      :vs-value="`skew-x-${num}`"
      v-for="(num, index) in sizes"
      :key="index"
      >Skew X {{ num }}
    </vs-radio>

    <vs-radio
      v-model="pmType"
      vs-name="pmType"
      :vs-value="`-skew-x-${num}`"
      v-for="(num, index) in sizes"
      :key="index"
      >Negative Skew X {{ num }}
    </vs-radio>

    <vs-radio
      v-model="pmType"
      vs-name="pmType"
      :vs-value="`skew-y-${num}`"
      v-for="(num, index) in sizes"
      :key="index"
      >Skew Y {{ num }}
    </vs-radio>

    <vs-radio
      v-model="pmType"
      vs-name="pmType"
      :vs-value="`-skew-y-${num}`"
      v-for="(num, index) in sizes"
      :key="index"
      >Negative Skew Y {{ num }}
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
      size: [0, 1, 2, 3, 6, 12],
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
