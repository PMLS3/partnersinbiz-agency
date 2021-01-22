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
      <vs-radio v-model="val" vs-name="val" vs-value="list">List</vs-radio>
      <vs-radio v-model="val" vs-name="val" vs-value="product"
        >Product</vs-radio
      >
      <vs-radio v-model="val" vs-name="val" vs-value="product2"
        >Product 2</vs-radio
      >
    </div>

    <list v-if="val == 'list'" />
    <product v-if="val == 'product'" />
    <product2 v-if="val == 'product2'" />
  </vs-card>
</template>

<script>
import list from './ExampleWireframeEcommerceList'
import product from './ExampleWireframeEcommerceProduct'
import product2 from './ExampleWireframeEcommerceProduct_2'

export default {
  components: {
    list,
    product,
    product2,
  },
  data: () => ({
    val: 'list',
  }),
}
</script>

<style></style>
