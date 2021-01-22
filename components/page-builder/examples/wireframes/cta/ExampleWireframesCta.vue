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
      <vs-radio v-model="val" vs-name="val" vs-value="btn"
        >Line Button</vs-radio
      >
      <vs-radio v-model="val" vs-name="val" vs-value="sign">Lign Sign</vs-radio>
      <vs-radio v-model="val" vs-name="val" vs-value="playstore"
        >Playstore</vs-radio
      >
      <vs-radio v-model="val" vs-name="val" vs-value="signup">SignUp</vs-radio>
    </div>

    <ctaLineBtn v-if="val == 'btn'" />
    <ctaLineSign v-if="val == 'sign'" />
    <ctaPlaystore v-if="val == 'playstore'" />
    <ctaSignUp v-if="val == 'signup'" />
  </vs-card>
</template>

<script>
import ctaLineBtn from './ExampleWireframesCtaLine_btn'
import ctaLineSign from './ExampleWireframesCtaLine_sign'
import ctaPlaystore from './ExampleWireframesCtaPlaystore'
import ctaSignUp from './ExampleWireframesCtaSign_up'

export default {
  components: {
    ctaLineBtn,
    ctaLineSign,
    ctaPlaystore,
    ctaSignUp,
  },
  data: () => ({
    val: 'btn',
  }),
}
</script>

<style></style>
