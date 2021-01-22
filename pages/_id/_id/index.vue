<template>
  <div>
    <component :is="feature" :id="$route.params.id" />
  </div>
</template>

<script>
import { ref, useContext, computed, onMounted } from '@nuxtjs/composition-api'
import station from '@/components/apps/station-player/StationReceiver.vue'
import dashboardAppsBroadcast from '@/components/dashboards/apps/broadcast/DashboardAppsBroardcastStation.vue'
import dashboardAppsAroundUs from '@/components/dashboards/apps/around-us/DashboardAppsAroundUsSingle.vue'
import dashboardAppsBlog from '@/components/dashboards/apps/blog/DashboardAppsBlogSingle.vue'
import dashboardAppsContacts from '@/components/dashboards/apps/contacts/DashboardAppsContactsSingle.vue'
import dashboardAppsEmailPhoto from '@/components/dashboards/apps/email-photo/DashboardAppsEmailPhotoSingle.vue'

import dashboardAppsDirectionView from '@/components/dashboards/apps/direction-view/DashboardAppsDirectionViewSingle.vue'
import dashboardAppsDocuments from '@/components/dashboards/apps/documents/DashboardAppsDocumentsSingle.vue'
import dashboardAppsDrawingBoard from '@/components/dashboards/apps/drawing-board/DashboardAppsDrawingBoardSingle.vue'
import dashboardAppsEcommerce from '@/components/dashboards/apps/ecommerce/DashboardAppsEcommerceSingle.vue'
import dashboardAppsEvents from '@/components/dashboards/apps/events/DashboardAppsEventsSingle.vue'
import dashboardAppsFanwall from '@/components/dashboards/apps/fanwall/DashboardAppsFanwallSingle.vue'
import dashboardAppsGolf from '@/components/dashboards/apps/golf/DashboardAppsGolfSingle.vue'
import dashboardAppsImageGallery from '@/components/dashboards/apps/image-gallery/DashboardAppsImageGallerySingle.vue'
import dashboardAppsInfoTier from '@/components/dashboards/apps/info-tier/DashboardAppsInfoTierSingle.vue'
import dashboardAppsLoyalty from '@/components/dashboards/apps/loyalty/DashboardAppsLoyaltySingle.vue'
import dashboardAppsMailingList from '@/components/dashboards/apps/mailing-list/DashboardAppsMailingListSingle.vue'
import dashboardAppsMusic from '@/components/dashboards/apps/music/DashboardAppsMusicSingle.vue'
import dashboardAppsProjectManagement from '@/components/dashboards/apps/project-management/DashboardAppsProjectManagementSingle.vue'
import dashboardAppsRadio from '@/components/dashboards/apps/radio/DashboardAppsRadioSingle.vue'
import dashboardAppsRealEstate from '@/components/dashboards/apps/real-estate/DashboardAppsRealEstateSingle.vue'
import dashboardAppsReservation from '@/components/dashboards/apps/reservation/DashboardAppsReservationSingle.vue'
import dashboardAppsReservationPerson from '@/components/dashboards/apps/reservation-person/DashboardAppsReservationPersonSingle.vue'
import dashboardAppsVideoCall from '@/components/dashboards/apps/video-call/DashboardAppsVideoCallSingle.vue'
import dashboardAppsVideos from '@/components/dashboards/apps/videos/DashboardAppsVideosSingle.vue'

import AppsAlertButton from '@/components/apps/alert-button/AppsAlertButton.vue'
import AppsAroundUs from '@/components/apps/around-us/AppsAroundUs.vue'
import AppsBlog from '@/components/apps/blog/AppsBlog'
import AppsBroadcaster from '@/components/apps/broadcaster/AppsBroadcaster'
import AppsContacts from '@/components/apps/contacts/AppsContacts'

import AppsCalendar from '@/components/apps/calendar/AppsCalendar'
import AppsEcommerce from '@/components/apps/eCommerce/AppsEcommerce'
import AppsEmailPhoto from '@/components/apps/email-photo/AppsEmailPhoto'
import AppsEvents from '@/components/apps/events/AppsEvents'
import AppsFanwall from '@/components/apps/fanwall/AppsFanwall'
import AppsGolf from '@/components/apps/golf/AppsGolf'
import AppsImageGallery from '@/components/apps/image-gallery/AppsImageGallery'
import AppsInfoTier from '@/components/apps/info-tier/AppsInfoTier'
import AppsLoyalty from '@/components/apps/loyalty/AppsLoyalty'
import AppsMailingList from '@/components/apps/mailing-list/AppsMailingList'
import AppsProjectManagement from '@/components/apps/project-management/AppsProjectManagement'
import AppsRadio from '@/components/apps/radio/AppsRadio'
import AppsRealEstate from '@/components/apps/real-estate/AppsRealEstate'
import AppsVideo from '@/components/apps/videos/AppsVideos'
import AppsVideoChat from '@/components/apps/video-chat/AppsVideoChat'

import myMiddleware from '@/middleware/index'

export default {
  layout: myMiddleware,
  components: {
    dashboardAppsBroadcast,
    station,
    dashboardAppsAroundUs,
    dashboardAppsBlog,
    dashboardAppsContacts,
    dashboardAppsDirectionView,
    dashboardAppsDocuments,
    dashboardAppsDrawingBoard,
    dashboardAppsEcommerce,
    dashboardAppsEmailPhoto,
    dashboardAppsEvents,
    dashboardAppsFanwall,
    dashboardAppsGolf,
    dashboardAppsImageGallery,
    dashboardAppsInfoTier,
    dashboardAppsLoyalty,
    dashboardAppsMailingList,
    dashboardAppsMusic,
    dashboardAppsProjectManagement,
    dashboardAppsRadio,
    dashboardAppsRealEstate,
    dashboardAppsReservation,
    dashboardAppsReservationPerson,
    dashboardAppsVideoCall,
    dashboardAppsVideos,
    AppsAlertButton,
    AppsAroundUs,
    AppsBlog,
    AppsBroadcaster,
    AppsContacts,
    AppsCalendar,
    AppsEcommerce,
    AppsEmailPhoto,
    AppsEvents,
    AppsFanwall,
    AppsGolf,
    AppsImageGallery,
    AppsInfoTier,
    AppsLoyalty,
    AppsMailingList,
    AppsProjectManagement,
    AppsRadio,
    AppsRealEstate,
    AppsVideo,
    AppsVideoChat,
  },
  setup() {
    const { store, route } = useContext()
    const feature = ref({})
    onMounted(() => {
      feature.value = route.value.path.split('/')[1]
    })
    // const feature = computed(() => store.state.app.feature)

    return { feature }
  },
}
</script>
