<template>
  <div>
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="`border`"
      >Border
    </vs-radio>
    <vs-radio
      v-model="pmType"
      vs-name="pmType"
      :vs-value="`border-${num}`"
      v-for="(num, index) in sizes"
      :key="index"
      >Border {{ num }}
    </vs-radio>

    <div v-for="(num, index) in sizes" :key="index">
      <vs-radio v-model="pmType" vs-name="pmType" :vs-value="`border-t-${num}`"
        >Border Top {{ num }}
      </vs-radio>
      <vs-radio v-model="pmType" vs-name="pmType" :vs-value="`border-r-${num}`"
        >Border right {{ num }}
      </vs-radio>
      <vs-radio v-model="pmType" vs-name="pmType" :vs-value="`border-l-${num}`"
        >Border left {{ num }}
      </vs-radio>
      <vs-radio v-model="pmType" vs-name="pmType" :vs-value="`border-b-${num}`"
        >Border bottom {{ num }}
      </vs-radio>
    </div>
    <vs-radio v-model="pmType" vs-name="pmType" :vs-value="`border-t`"
      >Border Top
    </vs-radio>
    <vs-radio v-model="pmType" vs-name="pmType" :vs-value="`border-r`"
      >Border right
    </vs-radio>
    <vs-radio v-model="pmType" vs-name="pmType" :vs-value="`border-l`"
      >Border left
    </vs-radio>
    <vs-radio v-model="pmType" vs-name="pmType" :vs-value="`border-b`"
      >Border bottom
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
      sizes: [0, 2, 4, 8],
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
