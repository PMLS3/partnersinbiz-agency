<template>
  <div>
    <h1>Hello</h1>
    <p>{{ feature.feature }}</p>
    <component :is="feature.feature" :id="$route.params.id" />
  </div>
</template>

<script>
import myMiddleware from "@/middleware/index";
import { ref, useContext, computed, onMounted } from "@nuxtjs/composition-api";

import dashboardAppsBroadcast from "@/components/dashboards/apps/broadcast/DashboardAppsBroadcastStation.vue";
export default {
  layout: myMiddleware,
  components: { dashboardAppsBroadcast },
  setup() {
    const { store } = useContext();

    const feature = computed(() => store.state.app.feature);

    return { feature };
  }
};
</script>

<style></style>
