<template>
  <vs-card class="m-12 bg-gray-100 border border-gray-400">
    <div slot="header" class="p-3">
      <h1 class="pb-2 text-3xl text-gray-400">Pricing</h1>
      <vs-radio v-model="val" vs-name="val" vs-value="col">Col</vs-radio>
      <vs-radio v-model="val" vs-name="val" vs-value="straight"
        >Straight</vs-radio
      >
      <vs-radio v-model="val" vs-name="val" vs-value="left">Left</vs-radio>
    </div>

    <cols v-if="val == 'col'" />
    <left v-if="val == 'left'" />
    <straight v-if="val == 'straight'" />
  </vs-card>
</template>

<script>
import cols from './ExampleWireframesPricingCol'
import left from './ExampleWireframesPricingLeft'
import straight from './ExampleWireframesPricingStraight'

export default {
  components: {
    cols,
    left,
    straight,
  },
  data: () => ({
    val: 'col',
  }),
}
</script>

<style></style>
