<template>
  <component :is="$route.params.id" />
  <!-- <div id="page"> -->
  <!-- <dashboard-apps-broadcast></dashboard-apps-broadcast> -->
  <!-- </div> -->
</template>

<script>
import register from '@/components/pages/register/Register.vue'
import login from '@/components/pages/login/Login.vue'
import aframeWorld from '@/components/apps/aframe-world/AframeWorld.vue'
import profile from '@/components/pages/Profile.vue'
import userSettings from '@/components/pages/user-settings/UserSettings.vue'

// Main First business dashboard
import dashboardMain from '@/components/dashboards/DashboardMain.vue'

// Secondary Dashboards
import dashboardRadio from '@/components/dashboards/DashboardRadio.vue'
import dashboardApps from '@/components/dashboards/DashboardApps.vue'

// Apps Dashboards
import dashboardAppsBroadcast from '@/components/dashboards/apps/broadcast/dashboardAppsBroadcast.vue'

// Pages
import calendar from '@/components/pages/Calendar.vue'

// import videoChat from "@/components/apps/videoChat/VideoChat.vue";
import myMiddleware from '@/middleware/index'
export default {
  layout: myMiddleware,
  components: {
    register,
    login,
    aframeWorld,
    profile,
    userSettings,
    dashboardRadio,
    dashboardMain,
    dashboardApps,
    dashboardAppsBroadcast,
    calendar
    // videoChat
  }
}
</script>

<style></style>
