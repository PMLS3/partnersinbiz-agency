<!-- =========================================================================================
    File Name: Colors.vue
    Description: Color Pallet - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="colors-demo">
    <colors-default></colors-default>
    <colors-gradient></colors-gradient>
    <colors-customization></colors-customization>
    <colors-change-color></colors-change-color>
    <colors-change-color-SSR></colors-change-color-SSR>
    <colors-tailwind></colors-tailwind>
  </div>
</template>

<script>
import ColorsDefault from './ExampleColorsDefault.vue'
import ColorsGradient from './ExampleColorsGradient.vue'
import ColorsCustomization from './ExampleColorsCustomization.vue'
import ColorsChangeColor from './ExampleColorsChangeColor.vue'
import ColorsChangeColorSSR from './ExampleColorsChangeColorSSR.vue'
import ColorsTailwind from './ExampleColorsTailwind.vue'

export default {
  components: {
    ColorsDefault,
    ColorsGradient,
    ColorsCustomization,
    ColorsChangeColor,
    ColorsChangeColorSSR,
    ColorsTailwind,
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/vuexy/pages/colors.scss';
</style>
