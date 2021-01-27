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
      <vs-radio v-model="val" vs-name="val" vs-value="actionInput"
        >Action Input</vs-radio
      >
      <vs-radio v-model="val" vs-name="val" vs-value="actionRight"
        >Action Right</vs-radio
      >
      <vs-radio v-model="val" vs-name="val" vs-value="leftLogo"
        >Left Logo</vs-radio
      >
      <vs-radio v-model="val" vs-name="val" vs-value="rightLogo"
        >Right Logo</vs-radio
      >
      <vs-radio v-model="val" vs-name="val" vs-value="simple">Simple</vs-radio>
      <vs-radio
        v-model="val"
        vs-name="val"
        vs-value="ExampleWireframesFooterBlue"
        >Blue Background</vs-radio
      >
      <vs-radio
        v-model="val"
        vs-name="val"
        vs-value="ExampleWireframesFooterSiteMap"
        >Site Map</vs-radio
      >
    </div>

    <actionInput v-if="val == 'actionInput'" />
    <actionRight v-if="val == 'actionRight'" />
    <leftLogo v-if="val == 'leftLogo'" />
    <rightLogo v-if="val == 'rightLogo'" />
    <simple v-if="val == 'simple'" />
    <ExampleWireframesFooterBlue v-if="val == 'ExampleWireframesFooterBlue'" />
    <ExampleWireframesFooterSiteMap
      v-if="val == 'ExampleWireframesFooterSiteMap'"
    />
  </vs-card>
</template>

<script>
import actionInput from './ExampleWireframesFooterAction_input'
import actionRight from './ExampleWireframesFooterAction_right'
import leftLogo from './ExampleWireframesFooterLeft_logo'
import rightLogo from './ExampleWireframesFooterRight_logo'
import simple from './ExampleWireframesFooterSimple'

export default {
  components: {
    actionInput,
    actionRight,
    leftLogo,
    rightLogo,
    simple,
  },
  data: () => ({
    val: 'actionInput',
  }),
}
</script>

<style></style>
