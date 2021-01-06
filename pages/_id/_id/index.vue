<template>
  <div>
    <component :is="feature" :id="$route.params.id" />
  </div>
</template>

<script>
import myMiddleware from '@/middleware/index'
import { ref, useContext, computed, onMounted } from '@nuxtjs/composition-api'
import station from '@/components/apps/station-player/StationReceiver.vue'
import dashboardAppsBroadcast from '@/components/dashboards/apps/broadcast/DashboardAppsBroardcastStation.vue'
import dashboardAppsAroundUs from '@/components/dashboards/apps/around-us/DashboardAppsAroundUsSingle.vue'
import dashboardAppsBlog from '@/components/dashboards/apps/blog/DashboardAppsBlogSingle.vue'
import dashboardAppsContacts from '@/components/dashboards/apps/contacts/DashboardAppsContactsSingle.vue'
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
  },
  setup() {
    const { store, route } = useContext()
    const feature = ref({})
    onMounted(() => {
      console.log('mounted!', route)
      console.log('mounted!', route.value.path)
      console.log('mounted!', route.value.path.split('/'))
      feature.value = route.value.path.split('/')[1]
    })
    // const feature = computed(() => store.state.app.feature)

    return { feature }
  },
}
</script>

<style></style>
