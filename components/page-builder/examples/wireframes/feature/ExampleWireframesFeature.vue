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
      <vs-radio v-model="val" vs-name="val" vs-value="bigImgSplit"
        >Image Split</vs-radio
      >
      <vs-radio v-model="val" vs-name="val" vs-value="cross">Cross</vs-radio>
      <vs-radio v-model="val" vs-name="val" vs-value="head3Btn"
        >Head 3 btn</vs-radio
      >
      <vs-radio v-model="val" vs-name="val" vs-value="head2Split"
        >Head 2 Split</vs-radio
      >
      <vs-radio v-model="val" vs-name="val" vs-value="headSplit"
        >Head Split</vs-radio
      >
      <vs-radio v-model="val" vs-name="val" vs-value="itemized"
        >Itemized</vs-radio
      >
      <vs-radio v-model="val" vs-name="val" vs-value="listSplit"
        >List Split</vs-radio
      >
      <vs-radio v-model="val" vs-name="val" vs-value="twoCards"
        >Two Cards</vs-radio
      >
    </div>

    <bigImgSplit v-if="val == 'bigImgSplit'" />
    <cross v-if="val == 'cross'" />
    <head3Btn v-if="val == 'head3Btn'" />
    <head2Split v-if="val == 'head2Split'" />
    <headSplit v-if="val == 'headSplit'" />
    <itemized v-if="val == 'itemized'" />
    <listSplit v-if="val == 'listSplit'" />
    <twoCards v-if="val == 'twoCards'" />
  </vs-card>
</template>

<script>
import bigImgSplit from './ExampleWireframesFeatureBig_img_split'
import cross from './ExampleWireframesFeatureCross'
import head3Btn from './ExampleWireframesFeatureHead_3_btn'
import head2Split from './ExampleWireframesFeatureHead_3_split'
import headSplit from './ExampleWireframesFeatureHead_split'
import itemized from './ExampleWireframesFeatureItemized'
import listSplit from './ExampleWireframesFeatureList_split'
import twoCards from './ExampleWireframesFeatureTwo_cards'

export default {
  components: {
    bigImgSplit,
    cross,
    head3Btn,
    head2Split,
    headSplit,
    itemized,
    listSplit,
    twoCards,
  },
  data: () => ({
    val: 'bigImgSplit',
  }),
}
</script>

<style></style>
