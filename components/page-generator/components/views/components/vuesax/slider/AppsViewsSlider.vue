<!-- =========================================================================================
    File Name: Slider.vue
    Description: Slider - Imports all page portions
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <div id="slider-demo">
    <slider-default></slider-default>
    <slider-color></slider-color>
    <slider-ticks></slider-ticks>
    <slider-range></slider-range>
    <slider-icon></slider-icon>
    <slider-text-fixed></slider-text-fixed>
    <slider-change-method></slider-change-method>
  </div>
</template>

<script>
import SliderDefault from './AppsViewsSliderDefault.vue'
import SliderColor from './AppsViewsSliderColor.vue'
import SliderTicks from './AppsViewsSliderTicks.vue'
import SliderRange from './AppsViewsSliderRange.vue'
import SliderIcon from './AppsViewsSliderIcon.vue'
import SliderTextFixed from './AppsViewsSliderTextFixed.vue'
import SliderChangeMethod from './AppsViewsSliderChangeMethod.vue'

export default {
  components: {
    SliderDefault,
    SliderColor,
    SliderTicks,
    SliderRange,
    SliderIcon,
    SliderTextFixed,
    SliderChangeMethod,
  },
}
</script>
