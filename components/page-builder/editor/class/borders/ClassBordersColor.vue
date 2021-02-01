<template>
  <div>
    <vs-radio
      v-model="pmType"
      vs-name="pmType"
      :vs-value="`divide-y-${num}`"
      v-for="(num, index) in sizes"
      :key="index"
      >Dividy Y {{ num }}
    </vs-radio>

    <vs-radio
      v-model="pmType"
      vs-name="pmType"
      :vs-value="`divide-x-${num}`"
      v-for="(num, index) in sizes"
      :key="index"
      >Divide X {{ num }}
    </vs-radio>

    <vs-radio v-model="pmType" vs-name="pmType" vs-value="divide-y"
      >Dividy Y
    </vs-radio>

    <vs-radio v-model="pmType" vs-name="pmType" vs-value="divide-x"
      >Divide X
    </vs-radio>

    <vs-radio v-model="pmType" vs-name="pmType" vs-value="divide-y-reverse"
      >Dividy Y Reverse
    </vs-radio>

    <vs-radio v-model="pmType" vs-name="pmType" vs-value="divide-x-reverse"
      >Divide X Reverse
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
      size: [0, 2, 4, 8],
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
