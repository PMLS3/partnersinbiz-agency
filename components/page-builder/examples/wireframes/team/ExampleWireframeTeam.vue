<!-- =========================================================================================
    File Name: blog/index.vue
    Description: Blog examples in wireframe format
TODO correct heading, name component and update this
    ----------------------------------------------------------------------------------------

========================================================================================== -->
<template>
  <vs-card class="m-12 bg-gray-100 border border-gray-400">
    <div slot="header" class="p-3">
      <h1 class="pb-2 text-3xl text-gray-400">Teams</h1>
      <vs-radio v-model="val" vs-name="val" vs-value="splitFour">Four</vs-radio>
      <vs-radio v-model="val" vs-name="val" vs-value="splitThree"
        >Three</vs-radio
      >
      <vs-radio v-model="val" vs-name="val" vs-value="splitTwo">Two</vs-radio>
    </div>

    <splitFour v-if="val == 'splitFour'" />
    <splitThree v-if="val == 'splitThree'" />
    <splitTwo v-if="val == 'splitTwo'" />
  </vs-card>
</template>

<script>
import splitFour from './ExampleWireframeTeamSplit_four'
import splitThree from './ExampleWireframeTeamSplit_three'
import splitTwo from './ExampleWireframeTeamSplit_two'

export default {
  components: {
    splitFour,
    splitThree,
    splitTwo,
  },
  data: () => ({
    val: 'splitFour',
  }),
}
</script>

<style></style>
