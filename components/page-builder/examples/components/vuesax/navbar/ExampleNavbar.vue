<!-- =========================================================================================
    File Name: Navbar.vue
    Description: Navbar - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="navbar-demo">
    <navbar-default></navbar-default>
    <navbar-input></navbar-input>
    <navbar-type></navbar-type>
    <navbar-color></navbar-color>
    <navbar-collapse></navbar-collapse>
  </div>
</template>

<script>
import NavbarDefault from './ExampleNavbarDefault.vue'
import NavbarInput from './ExampleNavbarInput.vue'
import NavbarType from './ExampleNavbarType.vue'
import NavbarColor from './ExampleNavbarColor.vue'
import NavbarCollapse from './ExampleNavbarCollapse.vue'

export default {
  components: {
    NavbarDefault,
    NavbarInput,
    NavbarType,
    NavbarCollapse,
    NavbarColor,
  },
}
</script>
