<!-- =========================================================================================
    File Name: Slider.vue
    Description: Slider - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
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
import SliderDefault from './ExampleSliderDefault.vue'
import SliderColor from './ExampleSliderColor.vue'
import SliderTicks from './ExampleSliderTicks.vue'
import SliderRange from './ExampleSliderRange.vue'
import SliderIcon from './ExampleSliderIcon.vue'
import SliderTextFixed from './ExampleSliderTextFixed.vue'
import SliderChangeMethod from './ExampleSliderChangeMethod.vue'

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
