<template>
  <div v-if="user" class="flex items-center the-navbar__user-meta">
    <!-- <div class="flex items-center the-navbar__user-meta" > -->

    <div class="hidden leading-tight text-right sm:block">
      <p class="font-semibold">{{ user.disp_name || 'undefined' }}</p>
      <!-- <p class="font-semibold">Me</p> -->

      <small>{{ user.o_status }}</small>
    </div>

    <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
      <client-only>
        <div class="ml-3 con-img">
          <img
            v-if="user.avatar"
            key="onlineImg"
            :src="user.avatar"
            alt="user-img"
            width="40"
            height="40"
            class="block rounded-full shadow-md cursor-pointer"
          />
          <img
            v-else
            key="onlineImg"
            :src="business.logo"
            alt="user-img"
            width="40"
            height="40"
            class="block rounded-full shadow-md cursor-pointer"
          />
        </div>
      </client-only>

      <vs-dropdown-menu class="vx-navbar-dropdown">
        <ul style="min-width: 9rem">
          <li
            class="flex px-4 py-2 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/profile')"
            v-if="isUserLoggedIn"
          >
            <feather-icon icon="UserIcon" svg-classes="w-4 h-4" />
            <span class="ml-2">Profile</span>
          </li>

          <li
            class="flex px-4 py-2 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push(`/dashboardMain`)"
          >
            <feather-icon icon="CheckSquareIcon" svg-classes="w-4 h-4" />
            <span class="ml-2">Dashboard </span>
          </li>

          <!--  <li
            class="flex px-4 py-2 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/apps/email').catch(() => {})"
          >
            <feather-icon icon="MailIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Inbox</span>
          </li>
          <li
            class="flex px-4 py-2 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/apps/calendar/vue-simple-calendar')"
          >
            <feather-icon icon="CalendarIcon" svg-classes="w-4 h-4" />
            <span class="ml-2">Calendar</span>
          </li>

          <li
            class="flex px-4 py-2 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/apps/todo').catch(() => {})"
          >
            <feather-icon icon="CheckSquareIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Tasks</span>
          </li>

          <li
            class="flex px-4 py-2 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/apps/chat').catch(() => {})"
          >
            <feather-icon icon="MessageSquareIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Chat</span>
          </li>

          <li
            class="flex px-4 py-2 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/apps/eCommerce/wish-list').catch(() => {})"
          >
            <feather-icon icon="HeartIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Wish List</span>
          </li>

          <li
            class="flex px-4 py-2 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/apps/user/user-list-man')"
          >
            <feather-icon icon="HeartIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">MY TEAM</span>
          </li>
          <li
            class="flex px-4 py-2 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/crm')"
          >
            <feather-icon icon="LayoutIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">CRM</span>
          </li>
        
          <li
            class="flex px-4 py-2 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push(`/m/${business.un_name}`)"
            v-if="user.role == 'admin'"
          >
            <feather-icon icon="CheckSquareIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">App </span>
          </li> -->

          <vs-divider class="m-1" />

          <li
            class="flex px-4 py-2 cursor-pointer hover:bg-primary hover:text-white"
            @click="logout"
          >
            <feather-icon icon="LogOutIcon" svg-classes="w-4 h-4" />
            <span class="ml-2">Logout</span>
          </li>
        </ul>
      </vs-dropdown-menu>
    </vs-dropdown>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  data() {
    return {}
  },
  computed: {
    user() {
      if (process.client) {
        return JSON.parse(localStorage.getItem('userInfo'))
          ? JSON.parse(localStorage.getItem('userInfo'))
          : this.$store.state.auth.active_user
      }
    },
    business() {
      if (process.client) {
        return JSON.parse(localStorage.getItem('businessInfo'))
          ? JSON.parse(localStorage.getItem('businessInfo'))
          : this.$store.state.business.main_business
      }
    },
    isUserLoggedIn() {
      return this.$store.state.auth.isUserLoggedIn
    }
  },

  methods: {
    logout() {
      this.$store.dispatch('auth/logoutUser')
    }
  }
}
</script>
