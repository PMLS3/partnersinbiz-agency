<!-- =========================================================================================
    File Name: blog/index.vue
    Description: Blog examples in wireframe format
TODO correct heading, name component and update this
    ----------------------------------------------------------------------------------------

========================================================================================== -->
<template>
  <vs-card class="m-12 bg-gray-100 border border-gray-400">
    <div slot="header" class="p-3">
      <h1 class="pb-2 text-3xl text-gray-400">Blogs</h1>
      <vs-radio v-model="val" vs-name="val" vs-value="centerr">Center</vs-radio>
      <vs-radio v-model="val" vs-name="val" vs-value="down">down</vs-radio>
      <vs-radio v-model="val" vs-name="val" vs-value="imgRight"
        >Image Right</vs-radio
      >
    </div>

    <centerr v-if="val == 'centerr'" />
    <dovss v-if="val == 'dovs'" />
    <imgRight v-if="val == 'imgRight'" />
  </vs-card>
</template>

<script>
import centerr from './ExampleWireframeStepCenter'
import down from './ExampleWireframeStepDown.vue'
import imgRight from './ExampleWireframeStepImg_right.vue'

export default {
  name: 'steps',
  components: {
    centerr,
    down,
    imgRight,
  },
  data: () => ({
    val: 'centerr',
  }),
}
</script>

<style></style>
