<!-- =========================================================================================
    File Name: Datepicker.vue
    Description: Datepicker (third-party) - Imports page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="extra-component-datetime-picker-demo">
    <p class="mb-4">
      vue-flatpickr-component is Vue.js component for Flatpickr datetime picker.
      Read full documnetation
      <a
        href="https://github.com/ankurk91/vue-flatpickr-component"
        target="_blank"
        rel="nofollow"
        >here</a
      >
    </p>

    <div class="vx-row match-height">
      <div class="vx-col md:w-1/2 w-full">
        <datetime-picker-basic class="mb-base"></datetime-picker-basic>
      </div>
      <div class="vx-col md:w-1/2 w-full">
        <datetime-picker-datetime class="mb-base"></datetime-picker-datetime>
      </div>
      <div class="vx-col md:w-1/2 w-full">
        <datetime-picker-time class="mb-base"></datetime-picker-time>
      </div>
      <div class="vx-col md:w-1/2 w-full">
        <datetime-picker-locale class="mb-base"></datetime-picker-locale>
      </div>
      <div class="vx-col md:w-1/2 w-full">
        <datetime-picker-start-end class="mb-base"></datetime-picker-start-end>
      </div>
      <div class="vx-col md:w-1/2 w-full">
        <datetime-picker-input class="mb-base"></datetime-picker-input>
      </div>
      <div class="vx-col w-full">
        <datetime-picker-inline></datetime-picker-inline>
      </div>
    </div>
  </div>
</template>

<script>
import DatetimePickerBasic from './ExampleDatetimePickerBasic.vue'
import DatetimePickerDatetime from './ExampleDatetimePickerDatetime.vue'
import DatetimePickerTime from './ExampleDatetimePickerTime.vue'
import DatetimePickerLocale from './ExampleDatetimePickerLocale.vue'
import DatetimePickerStartEnd from './ExampleDatetimePickerStartEnd.vue'
import DatetimePickerInline from './ExampleDatetimePickerInline.vue'
import DatetimePickerInput from './ExampleDatetimePickerInput.vue'

export default {
  components: {
    DatetimePickerBasic,
    DatetimePickerDatetime,
    DatetimePickerTime,
    DatetimePickerLocale,
    DatetimePickerStartEnd,
    DatetimePickerInline,
    DatetimePickerInput,
  },
}
</script>
