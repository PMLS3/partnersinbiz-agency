<!-- =========================================================================================
    File Name: cpntent/index.vue
    Description: Content examples in wireframe format

    ----------------------------------------------------------------------------------------

========================================================================================== -->
<template>
  <vs-card class="m-12 bg-gray-100 border border-gray-400">
    <div slot="header" class="p-3">
      <h1 class="pb-2 text-3xl text-gray-400">Content</h1>
      <vs-radio v-model="val" vs-name="val" vs-value="b_split"
        >Banner Split</vs-radio
      >
      <vs-radio v-model="val" vs-name="val" vs-value="h_cards"
        >Head Cards</vs-radio
      >
      <vs-radio v-model="val" vs-name="val" vs-value="h_cols"
        >Head Cols</vs-radio
      >
      <vs-radio v-model="val" vs-name="val" vs-value="h_img"
        >Head Image</vs-radio
      >
      <vs-radio v-model="val" vs-name="val" vs-value="h_split"
        >Head Split</vs-radio
      >
      <vs-radio v-model="val" vs-name="val" vs-value="l_split"
        >Left Head</vs-radio
      >
      <vs-radio v-model="val" vs-name="val" vs-value="l_h_button"
        >Left Head Button</vs-radio
      >
      <vs-radio v-model="val" vs-name="val" vs-value="split">Split</vs-radio>
    </div>

    <contentBannerSplit v-if="val == 'b_split'" />
    <contentHeadCards v-if="val == 'h_cards'" />
    <contentHeadCol v-if="val == 'h_cols'" />
    <contentHeadImg v-if="val == 'h_img'" />
    <contentHeadSplit v-if="val == 'h_split'" />
    <contentLeftHeadButton v-if="val == 'l_split'" />
    <contentLeftHeadButton v-if="val == 'l_h_button'" />
    <contentSplitImg v-if="val == 'split'" />
  </vs-card>
</template>

<script>
import contentBannerSplit from './ExampleWireframesContentBanner_split'
import contentHeadCards from './ExampleWireframesContentHead_cards'
import contentHeadCol from './ExampleWireframesContentHead_col'
import contentHeadImg from './ExampleWireframesContentHead_img'
import contentHeadSplit from './ExampleWireframesContentHead_split'
import contentLeftHead from './ExampleWireframesContentLeft_head'
import contentLeftHeadButton from './ExampleWireframesContentLeft_head_button'
import contentSplitImg from './ExampleWireframesContentSplit_img'

export default {
  name: 'contentT',
  components: {
    contentBannerSplit,
    contentHeadCards,
    contentHeadCol,
    contentHeadImg,
    contentHeadSplit,
    contentLeftHead,
    contentLeftHeadButton,
    contentSplitImg,
  },
  data: () => ({
    val: 'b_split',
  }),
}
</script>

<style></style>
