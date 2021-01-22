<!-- =========================================================================================
    File Name: contact/index.vue
    Description: Contact Us examples in wireframe format

    ----------------------------------------------------------------------------------------

========================================================================================== -->
<template>
  <vs-card class="m-12 bg-gray-100 border border-gray-400">
    <div slot="header" class="p-3">
      <h1 class="pb-2 text-3xl text-gray-400">Contact</h1>
      <vs-radio v-model="val" vs-name="val" vs-value="big"
        >Big Location</vs-radio
      >
      <vs-radio v-model="val" vs-name="val" vs-value="small"
        >Small Location</vs-radio
      >
      <vs-radio v-model="val" vs-name="val" vs-value="contact"
        >Contact Us</vs-radio
      >
    </div>

    <contactBigLocation v-if="val == 'big'" />
    <contactSmallLocation v-if="val == 'small'" />
    <contactContactUs v-if="val == 'contact'" />
  </vs-card>
</template>

<script>
import contactBigLocation from './ExampleWireframesContactBig_location'
import contactContactUs from './ExampleWireframesContactContact_us'
import contactSmallLocation from './ExampleWireframesContactSmall_location'

export default {
  name: 'contact',
  components: {
    contactBigLocation,
    contactContactUs,
    contactSmallLocation,
  },
  data: () => ({
    val: 'big',
  }),
}
</script>

<style></style>
