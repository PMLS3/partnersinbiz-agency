<template>
  <div>
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="row-auto"
      >Row Auto</vs-radio
    >

    <vs-radio
      v-model="pmType"
      vs-name="pmType"
      :vs-value="`row-span-${num}`"
      v-for="(num, index) in numbers"
      :key="index"
      >Column {{ num }}
    </vs-radio>

    <vs-radio v-model="pmType" vs-name="pmType" vs-value="row-span-full"
      >Row Full</vs-radio
    >
    <vs-radio
      v-model="pmType"
      vs-name="pmType"
      :vs-value="`row-start-${num}`"
      v-for="(num, index) in numbers"
      :key="index"
      >Row Start {{ num }}
    </vs-radio>

    <vs-radio v-model="pmType" vs-name="pmType" vs-value="row-start-auto"
      >Row Start Auto</vs-radio
    >
    <vs-radio
      v-model="pmType"
      vs-name="pmType"
      :vs-value="`row-end-${num}`"
      v-for="(num, index) in numbers"
      :key="index"
      >Row End {{ num }}
    </vs-radio>
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="row-end-auto"
      >Row End Auto</vs-radio
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
      numbers: [1, 2, 3, 4, 5, 6],
      pmType: 'row-auto',
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
