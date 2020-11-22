<!-- =========================================================================================
  File Name: TheNavbar.vue
  Description: Navbar component
  Component Name: TheNavbar
  ----------------------------------------------------------------------------------------
TODO showNav, dark mode dark navbar
========================================================================================== -->

<template>
  <div class="relative">
    <div class="p-0 vx-navbar-wrapper navbar-full">
      <vs-navbar
        class="navbar-custom navbar-skelton"
        :class="navbarClasses"
        :style="navbarStyle"
        :color="navbarColor"
      >
        <!-- <bookmarks :navbarColor="navbarColor" v-if="windowWidth >= 992 && showNav.bookmarksNow" /> -->

        <nuxt-link
          tag="div"
          to="/"
          class="flex items-center mx-auto cursor-pointer vx-logo"
        >
          <logo class="w-10 fill-current text-primary" />
          <span class="ml-8 vx-logo-text text-primary">{{
            business.b_name
          }}</span>
        </nuxt-link>
        <!-- <i18n v-if="showNav.i18nNow"/> -->

        <!-- <search-bar v-if='showNav.searchNow'/> -->

        <cart-drop-down v-if="showNav.cartDropDown" />

        <notification-drop-down v-if="showNav.notificationDropDown" />

        <profile-drop-down v-if="showNav.profileDropDown" />
      </vs-navbar>
    </div>
  </div>
</template>

<script>
import Logo from "../Logo.vue";
import Bookmarks from "./components/Bookmarks.vue";
// import I18n                 from "./components/I18n.vue"
import SearchBar from "./components/SearchBar.vue";
import CartDropDown from "./components/CartDropDown.vue";
import NotificationDropDown from "./components/NotificationDropDown.vue";
import ProfileDropDown from "./components/ProfileDropDown.vue";

export default {
  name: "TheNavbarHorizontal",

  components: {
    Logo,
    Bookmarks,
    // I18n,
    SearchBar,
    CartDropDown,
    NotificationDropDown,
    ProfileDropDown
  },
  props: {
    logo: { type: String },
    navbarType: {
      type: String,
      required: true
    }
  },
  computed: {
    user() {
      if (process.client) {
        return JSON.parse(localStorage.getItem("userInfo"))
          ? JSON.parse(localStorage.getItem("userInfo"))
          : this.$store.state.auth.active_user;
      }
    },
    business() {
      if (process.client) {
        return JSON.parse(localStorage.getItem("mainBusiness"))
          ? JSON.parse(localStorage.getItem("mainBusiness"))
          : this.$store.state.business.main_business;
      }
    },
    showNav() {
      return this.$store.state.navbar.showNav;
    },
    isUserLoggedIn() {
      return this.$store.state.auth.isUserLoggedIn;
    },
    navbarColor() {
      let color = "#fff";
      if (this.navbarType === "sticky") color = "#f7f7f7";
      else if (this.navbarType === "static") {
        if (this.scrollY < 50) {
          color = "#f7f7f7";
        }
      }

      this.isThemedark === "dark"
        ? color === "#fff"
          ? (color = "#10163a")
          : (color = "#262c49")
        : null;

      return color;
    },
    isThemedark() {
      return this.$store.state.theme;
    },
    navbarStyle() {
      return this.navbarType === "static"
        ? { transition: "all .25s ease-in-out" }
        : {};
    },
    navbarClasses() {
      return this.scrollY > 5 && this.navbarType === "static"
        ? null
        : "d-theme-dark-light-bg shadow-none";
    },
    scrollY() {
      return this.$store.state.scrollY;
    },
    verticalNavMenuWidth() {
      return this.$store.state.verticalNavMenuWidth;
    },
    windowWidth() {
      return this.$store.state.windowWidth;
    }
  }
};
</script>
