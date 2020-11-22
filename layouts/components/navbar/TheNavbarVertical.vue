<!-- =========================================================================================
  File Name: TheNavbar.vue
  Description: Navbar component
  Component Name: TheNavbar
  ----------------------------------------------------------------------------------------
 TODO: vue 18 en bookmarks
========================================================================================== -->

<template>
  <div class="relative">
    <div class="vx-navbar-wrapper" :class="classObj">
      <vs-navbar
        class="vx-navbar navbar-custom navbar-skelton"
        :color="navbarColorLocal"
        :class="textColor"
      >
        <!-- SM - OPEN SIDEBAR BUTTON -->
        <feather-icon
          class="p-2 cursor-pointer sm:inline-flex xl:hidden"
          icon="MenuIcon"
          @click.stop="showSidebar"
        />

        <nuxt-link
          tag="div"
          to="/"
          class="flex items-center mx-auto cursor-pointer vx-logo"
        >
          <logo class="w-10 mr-4 fill-current text-primary" alt="logo" />
        </nuxt-link>
        <!-- <p v-if="currentlyDisplayingUser" class="font-semibold">"Guest"</p> -->
        <!-- <p  class="font-semibold"> Guest</p> -->

        <!-- <bookmarks
          :navbarColor="navbarColor"
          v-if="windowWidth >= 992 && showNav.bookmarksNow"
        />-->
        <!-- <bookmarks
          :navbarColor="navbarColor"
          v-if="windowWidth >= 992 && showNav.bookmarksNow"
        />-->
        <client-only>
          <UiMiscAnon v-if="showNav.anon" class="ml-6" />
          <UiMiscSpeed v-if="showNav.speed" class="ml-6" />
          <SideChat v-if="showNav.chat" class="ml-6" />
          <client-only>
            <VideoChat v-if="showNav.video" class="ml-6" />
          </client-only>
        </client-only>
        <vs-spacer />

        <!-- <i18n /> -->

        <!-- <search-bar /> -->

        <cart-drop-down v-if="showNav.cartDropDown" />

        <notification-drop-down v-if="showNav.notificationDropDown" />

        <profile-drop-down v-if="showNav.profileDropDown" />
        <div v-if="isUserLoggedIn">
          <feather-icon
            icon="LogOutIcon"
            class="ml-3"
            svg-classes="w-4 h-4 cursor-pointer"
            @click="logout"
          />
          <span class="ml-2 cursor-pointer" @click="logout">Logout</span>
        </div>
        <div v-else>
          <feather-icon
            icon="LogOutIcon"
            class="ml-3"
            svg-classes="w-4 h-4 cursor-pointer"
            @click="$router.push('/login')"
          />
          <span class="ml-2 cursor-pointer" @click="$router.push('/login')"
            >Login</span
          >
        </div>
      </vs-navbar>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import Logo from "../Logo.vue";
import Bookmarks from "./components/Bookmarks.vue";
// import I18n from "./components/I18n.vue";
import SearchBar from "./components/SearchBar.vue";
import CartDropDown from "./components/CartDropDown.vue";
import NotificationDropDown from "./components/NotificationDropDown.vue";
import ProfileDropDown from "./components/ProfileDropDown.vue";

export default {
  name: "TheNavbarVertical",
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
    navbarColor: {
      type: String,
      default: "#fff"
    }
  },
  data() {
    return {};
  },
  computed: {
    showNav() {
      return this.$store.getters["navbar/showNav"];
    },
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
    isUserLoggedIn() {
      return this.$store.state.auth.isUserLoggedIn;
    },

    navbarColorLocal() {
      return this.$store.state.theme === "dark" && this.navbarColor === "#fff"
        ? "#10163a"
        : this.navbarColor;
    },
    verticalNavMenuWidth() {
      return this.$store.state.verticalNavMenuWidth;
    },
    textColor() {
      return {
        "text-white":
          (this.navbarColor != "#10163a" &&
            this.$store.state.theme === "dark") ||
          (this.navbarColor != "#fff" && this.$store.state.theme !== "dark")
      };
    },
    windowWidth() {
      return this.$store.state.windowWidth;
    },

    // NAVBAR STYLE
    classObj() {
      if (this.verticalNavMenuWidth == "default") return "navbar-default";
      else if (this.verticalNavMenuWidth == "reduced") return "navbar-reduced";
      else if (this.verticalNavMenuWidth) return "navbar-full";
    }
  },
  methods: {
    showSidebar() {
      this.$store.commit("TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE", true);
    },
    logout() {
      this.$store.dispatch("auth/logoutUser");
    }
  }
};
</script>
