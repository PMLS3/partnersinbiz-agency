<!-- =========================================================================================
    File Name: blog/index.vue
    Description: Blog examples in wireframe format
TODO correct heading, name component and update this
    ----------------------------------------------------------------------------------------

========================================================================================== -->
<template>
  <vs-card class="m-12 bg-gray-100 border border-gray-400">
    <div slot="header" class="p-3">
      <h1 class="pb-2 text-3xl text-gray-400">Statistics</h1>
      <vs-radio v-model="val" vs-name="val" vs-value="cards">Card</vs-radio>
      <vs-radio v-model="val" vs-name="val" vs-value="imgg">Image</vs-radio>
      <vs-radio v-model="val" vs-name="val" vs-value="small">Small</vs-radio>
    </div>

    <cards v-if="val == 'cards'" />
    <imgg v-if="val == 'imgg'" />
    <smalls v-if="val == 'small'" />
  </vs-card>
</template>

<script>
import cards from './ExampleWireframesStatisticCard'
import imgg from './ExampleWireframesStatisticImg'
import smalls from './ExampleWireframesStatisticSmall'

export default {
  components: {
    cards,
    imgg,
    smalls,
  },
  data: () => ({
    val: 'cards',
  }),
}
</script>

<style></style>
