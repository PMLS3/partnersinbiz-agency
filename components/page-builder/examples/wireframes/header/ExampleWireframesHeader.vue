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
      <vs-radio v-model="val" vs-name="val" vs-value="logoCenter"
        >Logo Center</vs-radio
      >
      <vs-radio v-model="val" vs-name="val" vs-value="logoLeftSplit"
        >Logo Left Split</vs-radio
      >
      <vs-radio v-model="val" vs-name="val" vs-value="logoMenuLeft"
        >Logo Menu Left</vs-radio
      >
      <vs-radio v-model="val" vs-name="val" vs-value="spaceBetween"
        >Space Between</vs-radio
      >
    </div>

    <logoCenter v-if="val == 'logoCenter'" />
    <logoLeftSplit v-if="val == 'logoLeftSplit'" />
    <logoMenuLeft v-if="val == 'logoMenuLeft'" />
    <spaceBetween v-if="val == 'spaceBetween'" />
  </vs-card>
</template>

<script>
import logoCenter from './ExampleWireframesHeaderLogo_center.vue'
import logoLeftSplit from './ExampleWireframesHeaderLogo_left_split'
import logoMenuLeft from './ExampleWireframesHeaderLogo_menu_left'
import spaceBetween from './ExampleWireframesHeaderSpace_between'

export default {
  components: {
    logoCenter,
    logoLeftSplit,
    logoMenuLeft,
    spaceBetween,
  },
  data: () => ({
    val: 'logoCenter',
  }),
}
</script>

<style></style>
