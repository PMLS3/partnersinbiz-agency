<!-- =========================================================================================
    File Name: blog/index.vue
    Description: Blog examples in wireframe format
TODO correct heading, name component and update this
    ----------------------------------------------------------------------------------------

========================================================================================== -->
<template>
  <vs-card class="m-12 bg-gray-100 border border-gray-400">
    <div slot="header" class="p-3">
      <h1 class="pb-2 text-3xl text-gray-400">Gallery</h1>
      <vs-radio v-model="val" vs-name="val" vs-value="centerr">Center</vs-radio>
      <vs-radio v-model="val" vs-name="val" vs-value="headerr">Header</vs-radio>
      <vs-radio v-model="val" vs-name="val" vs-value="mix">Mix</vs-radio>
    </div>

    <centerr v-if="val == 'centerr'" />
    <headerr v-if="val == 'headerr'" />
    <mix v-if="val == 'mix'" />
  </vs-card>
</template>

<script>
import centerr from './ExampleWireframesGalleryCenter'
import headerr from './ExampleWireframesGalleryHeader'
import mix from './ExampleWireframesGalleryMix'

export default {
  components: {
    centerr,
    headerr,
    mix,
  },
  data: () => ({
    val: 'centerr',
  }),
}
</script>

<style></style>
