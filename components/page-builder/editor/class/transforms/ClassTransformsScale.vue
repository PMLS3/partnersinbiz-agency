<template>
  <div>
    <vs-radio
      v-model="pmType"
      vs-name="pmType"
      :vs-value="`scale-${num}`"
      v-for="(num, index) in sizes"
      :key="index"
      >Scale {{ num }}
    </vs-radio>

    <vs-radio
      v-model="pmType"
      vs-name="pmType"
      :vs-value="`scale-x-${num}`"
      v-for="(num, index) in sizes"
      :key="index"
      >Scale X {{ num }}
    </vs-radio>

    <vs-radio
      v-model="pmType"
      vs-name="pmType"
      :vs-value="`scale-y-${num}`"
      v-for="(num, index) in sizes"
      :key="index"
      >Scale Y {{ num }}
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
      size: [0, 50, 75, 90, 95, 100, 105, 110, 125, 150],
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
