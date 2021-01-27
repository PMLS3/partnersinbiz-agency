<!-- =========================================================================================
    File Name: blog/index.vue
    Description: Blog examples in wireframe format
TODO correct heading, name component and update this
    ----------------------------------------------------------------------------------------

========================================================================================== -->
<template>
  <vs-card class="m-12 bg-gray-100 border border-gray-400">
    <div slot="header" class="p-3">
      <h1 class="pb-2 text-3xl text-gray-400">Hero</h1>
      <vs-radio v-model="val" vs-name="val" vs-value="imgg">Image</vs-radio>
      <vs-radio v-model="val" vs-name="val" vs-value="imgInput"
        >Image Input</vs-radio
      >
      <vs-radio v-model="val" vs-name="val" vs-value="imgInputRight"
        >Image Input Right</vs-radio
      >
      <vs-radio v-model="val" vs-name="val" vs-value="imgLeft"
        >Image Left</vs-radio
      >
      <vs-radio v-model="val" vs-name="val" vs-value="imgLeftInput"
        >Image Left Input</vs-radio
      >
      <vs-radio v-model="val" vs-name="val" vs-value="imgRight"
        >Image Right</vs-radio
      >
    </div>

    <imgg v-if="val == 'imgg'" />
    <imgInput v-if="val == 'imgInput'" />
    <imgInputRight v-if="val == 'imgInputRight'" />
    <imgLeft v-if="val == 'imgLeft'" />
    <imgLeftInput v-if="val == 'imgLeftInput'" />
    <imgRight v-if="val == 'imgRight'" />
    <ExampleWireframesHeroGradient
      v-if="val == 'ExampleWireframesHeroGradient'"
    />
    <ExampleWireframesHeroLeft v-if="val == 'ExampleWireframesHeroLeft'" />
    <ExampleWireframesHeroCenter v-if="val == 'ExampleWireframesHeroCenter'" />
  </vs-card>
</template>

<script>
import imgg from './ExampleWireframesHeroImg'
import imgInput from './ExampleWireframesHeroImg_input.vue'
import imgInputRight from './ExampleWireframesHeroImg_input_right.vue'
import imgLeft from './ExampleWireframesHeroImg_left.vue'
import imgLeftInput from './ExampleWireframesHeroImg_left_input.vue'
import imgRight from './ExampleWireframesHeroImg_right.vue'

export default {
  name: 'heros',
  components: {
    imgg,
    imgInput,
    imgLeft,
    imgInputRight,
    imgLeftInput,
    imgRight,
  },
  data: () => ({
    val: 'imgg',
  }),
}
</script>

<style></style>
