<template>
  <div>
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="transform"
      >Transform
    </vs-radio>

    <vs-radio
      v-model="pmType"
      vs-name="pmType"
      :vs-value="`transform-${num}`"
      v-for="(num, index) in sizes"
      :key="index"
      >Transform {{ num }}
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
      sizes: ['gpu', 'none'],
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
