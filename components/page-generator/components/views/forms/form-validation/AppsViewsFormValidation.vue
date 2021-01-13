<!-- =========================================================================================
    File Name: FormValidation.vue
    Description: Form validation (third-party) - Imports page portions
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <div id="extra-component-form-validation-demo">
    <p class="mb-4">
      <a
        href="https://logaretm.github.io/vee-validate/guide/"
        target="_blank"
        rel="nofollow"
        >vee-validate</a
      >
      is a Template Based Validation Framework for Vue.js. Read full
      documentation
      <a
        href="https://baianat.github.io/vee-validate/guide/"
        target="_blank"
        rel="nofollow"
        >here</a
      >
    </p>

    <form-validation-simple></form-validation-simple>
    <form-validation-multiple-rules></form-validation-multiple-rules>
    <div class="vx-row match-height">
      <div class="vx-col sm:w-1/2 w-full">
        <!-- <form-validation-custom-error-messages class="mb-base"></form-validation-custom-error-messages> -->
      </div>
      <div class="vx-col sm:w-1/2 w-full">
        <form-validation-events class="mb-base"></form-validation-events>
      </div>
    </div>
    <form-validation-types></form-validation-types>
  </div>
</template>

<script>
import FormValidationSimple from './AppsViewsFormValidationSimple.vue'
import FormValidationMultipleRules from './AppsViewsFormValidationMultipleRules.vue'
import FormValidationCustomErrorMessages from './AppsViewsFormValidationCustomErrorMessages.vue'
import FormValidationEvents from './AppsViewsFormValidationEvents.vue'
import FormValidationTypes from './AppsViewsFormValidationTypes.vue'

export default {
  components: {
    FormValidationSimple,
    FormValidationMultipleRules,
    FormValidationCustomErrorMessages,
    FormValidationEvents,
    FormValidationTypes,
  },
}
</script>
