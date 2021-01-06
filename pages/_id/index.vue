<template>
  <component :is="$route.params.id" />
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
import dashboardHumanResource from '@/components/dashboards/DashboardHumanResource.vue'
import dashboardAnalytics from '@/components/dashboards/DashboardAnalytics.vue'
import dashboardLearn from '@/components/dashboards/DashboardLearn.vue'
import dashboardSupport from '@/components/dashboards/DashboardSupport.vue'
import dashboardRequest from '@/components/dashboards/DashboardRequest.vue'
import dashboardClients from '@/components/dashboards/DashboardClients.vue'
import dashboardSocialMedia from '@/components/dashboards/DashboardSocialMedia.vue'
// Apps Dashboards
import dashboardAppsBroadcast from '@/components/dashboards/apps/broadcast/DashboardAppsBroadcast.vue'
import dashboardAppsTwitter from '@/components/dashboards/apps/twitter/DashboardAppsTwitter.vue'
import dashboardAppsFacebook from '@/components/dashboards/apps/facebook/DashboardAppsFacebook.vue'
import dashboardAppsInstagram from '@/components/dashboards/apps/instagram/DashboardAppsInstagram.vue'
import dashboardAppsLinkedin from '@/components/dashboards/apps/linkedin/DashboardAppsLinkedin.vue'
import dashboardAppsAroundUs from '@/components/dashboards/apps/around-us/DashboardAppsAroundUs.vue'
import dashboardAppsAroundUsSingle from '@/components/dashboards/apps/around-us/DashboardAppsAroundUsSingle.vue'
import dashboardAppsBlog from '@/components/dashboards/apps/blog/DashboardAppsBlog.vue'
import dashboardAppsBlogSingle from '@/components/dashboards/apps/blog/DashboardAppsBlogSingle.vue'
// import dashboardAppsBroadcast from '@/components/dashboards/apps/broadcast/DashboardAppsBroadcast.vue'
// import dashboardAppsBroadcastSingle from '@/components/dashboards/apps/broadcast/DashboardAppsBroadcastSingle.vue'

import dashboardAppsContacts from '@/components/dashboards/apps/contacts/DashboardAppsContacts.vue'
import dashboardAppsContactsSingle from '@/components/dashboards/apps/contacts/DashboardAppsContactsSingle.vue'

import dashboardAppsDirectionView from '@/components/dashboards/apps/direction-view/DashboardAppsDirectionView.vue'
import dashboardAppsDirectionViewSingle from '@/components/dashboards/apps/direction-view/DashboardAppsDirectionViewSingle.vue'

import dashboardAppsDocuments from '@/components/dashboards/apps/documents/DashboardAppsDocuments.vue'
import dashboardAppsDocumentsSingle from '@/components/dashboards/apps/documents/DashboardAppsDocumentsSingle.vue'

import dashboardAppsDrawingBoard from '@/components/dashboards/apps/drawing-board/DashboardAppsDrawingBoard.vue'
import dashboardAppsDrawingBoardSingle from '@/components/dashboards/apps/drawing-board/DashboardAppsDrawingBoardSingle.vue'

import dashboardAppsEcommerce from '@/components/dashboards/apps/ecommerce/DashboardAppsEcommerce.vue'
import dashboardAppsEcommerceSingle from '@/components/dashboards/apps/ecommerce/DashboardAppsEcommerceSingle.vue'

import dashboardAppsEvents from '@/components/dashboards/apps/events/DashboardAppsEvents.vue'
import dashboardAppsEventsSingle from '@/components/dashboards/apps/events/DashboardAppsEventsSingle.vue'

import dashboardAppsFanwall from '@/components/dashboards/apps/fanwall/DashboardAppsFanwall.vue'
import dashboardAppsFanwallSingle from '@/components/dashboards/apps/fanwall/DashboardAppsFanwallSingle.vue'

import dashboardAppsGolf from '@/components/dashboards/apps/golf/DashboardAppsGolf.vue'
import dashboardAppsGolfSingle from '@/components/dashboards/apps/golf/DashboardAppsGolfSingle.vue'

import dashboardAppsImageGallery from '@/components/dashboards/apps/image-gallery/DashboardAppsImageGallery.vue'
import dashboardAppsImageGallerySingle from '@/components/dashboards/apps/image-gallery/DashboardAppsImageGallerySingle.vue'

import dashboardAppsInfoTier from '@/components/dashboards/apps/info-tier/DashboardAppsInfoTier.vue'
import dashboardAppsInfoTierSingle from '@/components/dashboards/apps/info-tier/DashboardAppsInfoTierSingle.vue'

import dashboardAppsLoyalty from '@/components/dashboards/apps/loyalty/DashboardAppsLoyalty.vue'
import dashboardAppsLoyaltySingle from '@/components/dashboards/apps/loyalty/DashboardAppsLoyaltySingle.vue'

import dashboardAppsMailingList from '@/components/dashboards/apps/mailing-list/DashboardAppsMailingList.vue'
import dashboardAppsMailingListSingle from '@/components/dashboards/apps/mailing-list/DashboardAppsMailingListSingle.vue'

import dashboardAppsMusic from '@/components/dashboards/apps/music/DashboardAppsMusic.vue'
import dashboardAppsMusicSingle from '@/components/dashboards/apps/music/DashboardAppsMusicSingle.vue'

import dashboardAppsProjectManagement from '@/components/dashboards/apps/project-management/DashboardAppsProjectManagement.vue'
import dashboardAppsProjectManagementSingle from '@/components/dashboards/apps/project-management/DashboardAppsProjectManagementSingle.vue'

import dashboardAppsRadio from '@/components/dashboards/apps/radio/DashboardAppsRadio.vue'
import dashboardAppsRadioSingle from '@/components/dashboards/apps/radio/DashboardAppsRadioSingle.vue'

import dashboardAppsRealEstate from '@/components/dashboards/apps/real-estate/DashboardAppsRealEstate.vue'
import dashboardAppsRealEstateSingle from '@/components/dashboards/apps/real-estate/DashboardAppsRealEstateSingle.vue'

import dashboardAppsReservation from '@/components/dashboards/apps/reservation/DashboardAppsReservation.vue'
import dashboardAppsReservationSingle from '@/components/dashboards/apps/reservation/DashboardAppsReservationSingle.vue'

import dashboardAppsReservationPerson from '@/components/dashboards/apps/reservation-person/DashboardAppsReservationPerson.vue'
import dashboardAppsReservationPersonSingle from '@/components/dashboards/apps/reservation-person/DashboardAppsReservationPersonSingle.vue'

import dashboardAppsVideoCall from '@/components/dashboards/apps/video-call/DashboardAppsVideoCall.vue'
import dashboardAppsVideoCallSingle from '@/components/dashboards/apps/video-call/DashboardAppsVideoCallSingle.vue'

import dashboardAppsVideos from '@/components/dashboards/apps/videos/DashboardAppsVideos.vue'
import dashboardAppsVideosSingle from '@/components/dashboards/apps/videos/DashboardAppsVideosSingle.vue'

// Apps
import email from '@/components/apps/email/Email.vue'
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
    dashboardHumanResource,
    dashboardAnalytics,
    dashboardLearn,
    dashboardSupport,
    dashboardRequest,
    dashboardClients,
    email,
    dashboardAppsTwitter,
    dashboardAppsFacebook,
    dashboardAppsInstagram,
    dashboardAppsLinkedin,
    dashboardSocialMedia,
    dashboardAppsAroundUs,
    dashboardAppsAroundUsSingle,
    dashboardAppsBlog,
    dashboardAppsBlogSingle,
    dashboardAppsBroadcast,
    dashboardAppsBroadcastSingle,
    dashboardAppsContacts,
    dashboardAppsContactsSingle,
    dashboardAppsDirectionView,
    dashboardAppsDirectionViewSingle,
    dashboardAppsDocuments,
    dashboardAppsDocumentsSingle,
    dashboardAppsDrawingBoard,
    dashboardAppsDrawingBoardSingle,
    dashboardAppsEcommerce,
    dashboardAppsEcommerceSingle,
    dashboardAppsEvents,
    dashboardAppsEventsSingle,
    dashboardAppsFanwall,
    dashboardAppsFanwallSingle,
    dashboardAppsGolf,
    dashboardAppsGolfSingle,
    dashboardAppsImageGallery,
    dashboardAppsImageGallerySingle,
    dashboardAppsInfoTier,
    dashboardAppsInfoTierSingle,
    dashboardAppsLoyalty,
    dashboardAppsLoyaltySingle,
    dashboardAppsMailingList,
    dashboardAppsMailingListSingle,
    dashboardAppsMusic,
    dashboardAppsMusicSingle,
    dashboardAppsProjectManagement,
    dashboardAppsProjectManagementSingle,
    dashboardAppsRadio,
    dashboardAppsRadioSingle,
    dashboardAppsRealEstate,
    dashboardAppsRealEstateSingle,
    dashboardAppsReservation,
    dashboardAppsReservationSingle,
    dashboardAppsReservationPerson,
    dashboardAppsReservationPersonSingle,
    dashboardAppsVideoCall,
    dashboardAppsVideoCallSingle,
    dashboardAppsVideos,
    dashboardAppsVideosSingle,
    // videoChat
  },
}
</script>

<style></style>
