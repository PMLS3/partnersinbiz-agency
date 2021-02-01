<template>
  <div>
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="transition"
      >Transition
    </vs-radio>

    <vs-radio
      v-model="pmType"
      vs-name="pmType"
      :vs-value="`transition-${num}`"
      v-for="(num, index) in sizes"
      :key="index"
      >Transition {{ num }}
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
      sizes: ['none', 'all', 'colors', 'opacity', 'shadow', 'transform'],
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
