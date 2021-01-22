<!-- =========================================================================================
    File Name: Button.vue
    Description: Buttons - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="button-demo">
    <button-filled></button-filled>
    <button-border></button-border>
    <button-flat></button-flat>
    <button-line-down></button-line-down>
    <button-gradient></button-gradient>
    <button-relief></button-relief>
    <button-color></button-color>
    <button-text-color></button-text-color>
    <button-icon></button-icon>
    <button-icon-only></button-icon-only>
    <button-size></button-size>
    <button-router></button-router>
    <button-link></button-link>
  </div>
</template>

<script>
import ButtonFilled from './ExampleButtonFilled.vue'
import ButtonBorder from './ExampleButtonBorder.vue'
import ButtonFlat from './ExampleButtonFlat.vue'
import ButtonLineDown from './ExampleButtonLineDown.vue'
import ButtonGradient from './ExampleButtonGradient.vue'
import ButtonRelief from './ExampleButtonRelief.vue'
import ButtonColor from './ExampleButtonColor.vue'
import ButtonTextColor from './ExampleButtonTextColor.vue'
import ButtonIcon from './ExampleButtonIcon.vue'
import ButtonIconOnly from './ExampleButtonIconOnly.vue'
import ButtonSize from './ExampleButtonSize.vue'
import ButtonRouter from './ExampleButtonRouter.vue'
import ButtonLink from './ExampleButtonLink.vue'

export default {
  components: {
    ButtonFilled,
    ButtonBorder,
    ButtonFlat,
    ButtonLineDown,
    ButtonGradient,
    ButtonRelief,
    ButtonColor,
    ButtonTextColor,
    ButtonIcon,
    ButtonIconOnly,
    ButtonSize,
    ButtonRouter,
    ButtonLink,
  },
}
</script>
