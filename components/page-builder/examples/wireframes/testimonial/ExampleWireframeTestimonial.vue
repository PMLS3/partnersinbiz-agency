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
      <vs-radio v-model="val" vs-name="val" vs-value="cardOne">One</vs-radio>
      <vs-radio v-model="val" vs-name="val" vs-value="cardTwo">Two</vs-radio>
      <vs-radio v-model="val" vs-name="val" vs-value="cardThree"
        >Three</vs-radio
      >
    </div>

    <cardOne v-if="val == 'cardOne'" />
    <cardTwo v-if="val == 'cardTwo'" />
    <cardThree v-if="val == 'cardThree'" />
  </vs-card>
</template>

<script>
import cardOne from './ExampleWireframeTestimonialCard_one'
import cardTwo from './ExampleWireframeTestimonialCard_two'
import cardThree from './ExampleWireframeTestimonialCard_three'

export default {
  components: {
    cardOne,
    cardTwo,
    cardThree,
  },
  data: () => ({
    val: 'cardOne',
  }),
}
</script>

<style></style>
