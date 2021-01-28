<!-- =========================================================================================
    File Name: Button.vue
    Description: Buttons - Imports all page portions
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vs-tabs alignment="fixed" position="left">
    <vs-tab label="Single"> <ExampleTailwindAvatarSingle /> </vs-tab>
    <vs-tab label="Group"> <ExampleTailwindAvatarGroup /></vs-tab>
  </vs-tabs>
</template>

<script>
export default {
  name: 'ExampleTailwindImage',
}
</script>
