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
import FormInputGroupBasic from './AppsViewsFormInputGroupBasic.vue'
import FormInputGroupSizing from './AppsViewsFormInputGroupSizing.vue'
import FormInputGroupFormElements from './AppsViewsFormInputGroupFormElements.vue'
import FormInputGroupMultipleAddons from './AppsViewsFormInputGroupMultipleAddons.vue'
import FormInputGroupButtonAddons from './AppsViewsFormInputGroupButtonAddons.vue'

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
