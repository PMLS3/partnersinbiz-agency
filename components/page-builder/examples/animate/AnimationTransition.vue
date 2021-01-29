<template>
  <vs-tabs alignment="fixed" position="left">
    <!-- <vs-tab label="Login"><ExampleLogin /> </vs-tab> -->
    <!-- <vs-tab label="Register"><ExampleRegister /> </vs-tab> -->
    <vs-tab label="Back Entrances">
      <AnimateBackEntrancesBackInDown />
      <AnimateBackEntrancesBackInUp class="mt-2" />
      <AnimateBackEntrancesBackInRight class="mt-2" />
      <AnimateBackEntrancesBackInLeft class="mt-2" />
    </vs-tab>
  </vs-tabs>
</template>

<script>
export default {
  name: 'AnimationTransition',
}
</script>

<style></style>
