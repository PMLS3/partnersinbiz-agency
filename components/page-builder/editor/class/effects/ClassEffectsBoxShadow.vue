<template>
  <div>
    <vs-radio v-model="pmType" vs-name="pmType" :vs-value="shadow"
      >Shadow
    </vs-radio>
    <vs-radio
      v-model="pmType"
      vs-name="pmType"
      :vs-value="`shadow-${num}`"
      v-for="(num, index) in sizes"
      :key="index"
      >Shadow {{ num }}
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
      size: ['none', 'sm', 'md', 'lg', 'xl', '2xl', 'inner'],
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
