<template>
  <component :is="$route.params.id" />
</template>

<script>
import DemoAframeShowRoom from '@/components/demo/aframe/DemoAframeShowRoom.vue'
import DemoAframeApartment from '@/components/demo/aframe/DemoAframeApartment.vue'
import DemoAframeSmall from '@/components/demo/aframe/DemoAframeSmall.vue'
import DemoAframeModernApartment from '@/components/demo/aframe/DemoAframeModernApartment.vue'

import DemoAR from '@/components/demo/aframe/DemoAR.vue'

// import videoChat from "@/components/apps/videoChat/VideoChat.vue";
import myMiddleware from '@/middleware/index'
export default {
  layout: myMiddleware,
  components: {
    DemoAframeShowRoom,
    DemoAframeApartment,
    DemoAframeSmall,
    DemoAframeModernApartment,
    DemoAR
  }
}
</script>

<style></style>
