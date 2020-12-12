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
import DemoAframeShowRoom from '@/components/demo/aframe/DemoAframeShowRoom.vue'
import DemoAframeApartment from '@/components/demo/aframe/DemoAframeApartment.vue'
import DemoAframeSmall from '@/components/demo/aframe/DemoAframeSmall.vue'
import DemoAR from '@/components/demo/aframe/DemoAR.vue'

import mypage from '@/components/pages/MyPage.vue'

// Main First business dashboard
import dashboardMain from '@/components/dashboards/DashboardMain.vue'

// Secondary Dashboards
import dashboardRadio from '@/components/dashboards/DashboardRadio.vue'
import dashboardApps from '@/components/dashboards/DashboardApps.vue'
import dashboardBusinessSettings from '@/components/dashboards/DashboardBusinessSettings.vue'
import dashboardSales from '@/components/dashboards/DashboardSales.vue'
import dashboardMarketing from '@/components/dashboards/DashboardMarketing.vue'
import dashboardCommunication from '@/components/dashboards/DashboardCommunication.vue'
import dashboardAccounting from '@/components/dashboards/DashboardAccounting.vue'
import dashboardMarketPlace from '@/components/dashboards/DashboardMarketPlace.vue'
import dashboardHumanResources from '@/components/dashboards/DashboardHumanResource.vue'
import dashboardAnalytics from '@/components/dashboards/DashboardAnalytics.vue'
import dashboardLearn from '@/components/dashboards/DashboardLearn.vue'
import dashboardSupport from '@/components/dashboards/DashboardSupport.vue'
import dashboardRequest from '@/components/dashboards/DashboardRequest.vue'
// Apps Dashboards
import DashboardAppsBroadcast from '@/components/dashboards/apps/broadcast/DashboardAppsBroadcast.vue'

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
    DashboardAppsBroadcast,
    calendar,
    DemoAframeShowRoom,
    DemoAframeApartment,
    mypage,
    DemoAframeSmall,
    DemoAR,
    dashboardBusinessSettings,
    dashboardSales,
    dashboardMarketing,
    dashboardCommunication,
    dashboardAccounting,
    dashboardMarketPlace,
    dashboardHumanResources,
    dashboardAnalytics,
    dashboardLearn,
    dashboardSupport,
    dashboardRequest
    // videoChat
  }
}
</script>

<style></style>
