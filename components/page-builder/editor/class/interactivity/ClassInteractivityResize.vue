<template>
  <div>
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="resize"
      >Resize
    </vs-radio>

    <vs-radio
      v-model="pmType"
      vs-name="pmType"
      :vs-value="`resize-${num}`"
      v-for="(num, index) in sizes"
      :key="index"
      >Resize {{ num }}
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
      size: ['none', 'x', 'y'],
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
