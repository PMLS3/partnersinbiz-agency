<!-- =========================================================================================
    File Name: Button.vue
    Description: Buttons - Imports all page portions
    ----------------------------------------------------------------------------------------
  
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
import ButtonFilled from './AppsViewsButtonFilled.vue'
import ButtonBorder from './AppsViewsButtonBorder.vue'
import ButtonFlat from './AppsViewsButtonFlat.vue'
import ButtonLineDown from './AppsViewsButtonLineDown.vue'
import ButtonGradient from './AppsViewsButtonGradient.vue'
import ButtonRelief from './AppsViewsButtonRelief.vue'
import ButtonColor from './AppsViewsButtonColor.vue'
import ButtonTextColor from './AppsViewsButtonTextColor.vue'
import ButtonIcon from './AppsViewsButtonIcon.vue'
import ButtonIconOnly from './AppsViewsButtonIconOnly.vue'
import ButtonSize from './AppsViewsButtonSize.vue'
import ButtonRouter from './AppsViewsButtonRouter.vue'
import ButtonLink from './AppsViewsButtonLink.vue'

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
