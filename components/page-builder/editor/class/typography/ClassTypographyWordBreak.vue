<template>
  <div>
    <vs-radio
      v-model="pmType"
      vs-name="pmType"
      :vs-value="`break-${num}`"
      v-for="(num, index) in sizes"
      :key="index"
      >Break {{ num }}
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
      sizes: ['normal', 'words', 'all'],
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
