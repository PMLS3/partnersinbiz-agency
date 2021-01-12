<!-- =========================================================================================
    File Name: Colors.vue
    Description: Color Pallet - Imports all page portions
    ----------------------------------------------------------------------------------------
  
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
import ColorsDefault from './AppsViewsColorsDefault.vue'
import ColorsGradient from './AppsViewsColorsGradient.vue'
import ColorsCustomization from './AppsViewsColorsCustomization.vue'
import ColorsChangeColor from './AppsViewsColorsChangeColor.vue'
import ColorsChangeColorSSR from './AppsViewsColorsChangeColorSSR.vue'
import ColorsTailwind from './AppsViewsColorsTailwind.vue'

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
