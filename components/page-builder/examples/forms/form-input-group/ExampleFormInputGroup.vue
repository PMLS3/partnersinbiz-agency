<template>
  <div id="input-group-demo">
    <form-input-group-basic></form-input-group-basic>
    <form-input-group-sizing></form-input-group-sizing>
    <form-input-group-form-elements></form-input-group-form-elements>
    <form-input-group-multiple-addons></form-input-group-multiple-addons>
    <form-input-group-button-addons></form-input-group-button-addons>
  </div>
</template>

<script>
import FormInputGroupBasic from './ExampleFormInputGroupBasic.vue'
import FormInputGroupSizing from './ExampleFormInputGroupSizing.vue'
import FormInputGroupFormElements from './ExampleFormInputGroupFormElements.vue'
import FormInputGroupMultipleAddons from './ExampleFormInputGroupMultipleAddons.vue'
import FormInputGroupButtonAddons from './ExampleFormInputGroupButtonAddons.vue'

export default {
  components: {
    FormInputGroupBasic,
    FormInputGroupSizing,
    FormInputGroupFormElements,
    FormInputGroupButtonAddons,
    FormInputGroupMultipleAddons,
  },
}
</script>
