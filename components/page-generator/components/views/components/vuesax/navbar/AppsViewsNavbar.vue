<!-- =========================================================================================
    File Name: Navbar.vue
    Description: Navbar - Imports all page portions
    ----------------------------------------------------------------------------------------
  
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
import NavbarDefault from './AppsViewsNavbarDefault.vue'
import NavbarInput from './AppsViewsNavbarInput.vue'
import NavbarType from './AppsViewsNavbarType.vue'
import NavbarColor from './AppsViewsNavbarColor.vue'
import NavbarCollapse from './AppsViewsNavbarCollapse.vue'

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
