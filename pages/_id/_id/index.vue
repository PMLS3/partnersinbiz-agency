<template>
  <div>
    <component :is="feature" :id="$route.params.id" />
  </div>
</template>

<script>
import myMiddleware from '@/middleware/index'
import { ref, useContext, computed, onMounted } from '@nuxtjs/composition-api'
import station from '@/components/apps/station-player/StationReceiver.vue'
import dashboardAppsEvents from '@/components/dashboards/apps/events/DashboardAppsEventsSingle.vue'

import dashboardAppsBroadcast from '@/components/dashboards/apps/broadcast/DashboardAppsBroardcastStation.vue'
export default {
  layout: myMiddleware,
  components: { dashboardAppsBroadcast, station, dashboardAppsEvents },
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
