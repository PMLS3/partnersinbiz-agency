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
import ColorsDefault from './UiColorsDefault.vue'
import ColorsGradient from './UiColorsGradient.vue'
import ColorsCustomization from './UiColorsCustomization.vue'
import ColorsChangeColor from './UiColorsChangeColor.vue'
import ColorsChangeColorSSR from './UiColorsChangeColorSSR.vue'
import ColorsTailwind from './UiColorsTailwind.vue'

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
