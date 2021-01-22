<template>
  <div>
    <div class="absolute z-40 flex p-3 bg-gray-200">
      <div v-for="(component, index) in components" :key="index">
        <vs-radio v-model="comp" vs-name="comp" :vs-value="component.name">{{
          component.name
        }}</vs-radio>
      </div>
      <div v-for="(component, index) in components1" :key="index">
        <vs-radio v-model="comp" vs-name="comp" :vs-value="component.name">{{
          component.name
        }}</vs-radio>
      </div>
    </div>
    <client-only>
      <component :is="comp" />
    </client-only>
  </div>
</template>

<script>
// import basicPrimitive from '@/components/examples/aframe/BasicprimitivesandHTMLattributes/index.vue'
// import positionAndRelativePosition from '@/components/examples/aframe/L05 - Position and relative positioning CODE v1.0.4/index.vue'
// import multipleEntitiesComponent from '@/components/examples/aframe/MultipleEntitiesComponent/index.vue'
// import multiUser from '@/components/examples/aframe/multiUser/index.vue'
// import soundAndPositionalNoise from '@/components/examples/aframe/SoundAndPositionalNoise/index.vue'
// import formKeyboardCustom from '@/components/examples/aframe/formKeyboard/custom.vue'
// import formKeyboardBasic from '@/components/examples/aframe/formKeyboard/basic.vue'
import skyAnd360Image from '@/components/examples/aframe/SkyAnd360Image/index.vue'
// import blinkTeleportation from '@/components/examples/aframe/BlinkTeleportation/index.vue'
// import entitySpawner from '@/components/examples/aframe/EntitySpawnerComponent/index.vue'
// import Video360 from '@/components/examples/aframe/360Video/index.vue'
// import addingLightsAndShadows from '@/components/examples/aframe/AddingLightsAndShadows/index.vue'
// import animatingObjects from '@/components/examples/aframe/AnimatingObjects/index.vue'
// import animationComponent from '@/components/examples/aframe/AnimationComponent/index.vue'
// import antialiasing from '@/components/examples/aframe/Antialiasing/index.vue'
// import basicPrimitivesAndHtmlAttributes from '@/components/examples/aframe/BasicprimitivesandHTMLattributes/index.vue'
// import blinkTeleport from '@/components/examples/aframe/BlinkTeleport/index.vue'
// import joystick from '@/components/examples/aframe/screen-control/joystick.vue'
// import dualJoystick from '@/components/examples/aframe/screen-control/dual-joystick.vue'
// import soundPlay from '@/components/examples/aframe/soundPlay/index.vue'
// import sharedSpaces from '@/components/examples/aframe/sharedSpaces/index.vue'
import scene from '@/components/examples/aframe/Scene/index.vue'
import avatar from '@/components/examples/aframe/Avatar/index.vue'

// import firebaseNetwork from '@/components/examples/aframe/firebaseNetwork/index.vue'
import videoChat from '@/components/examples/aframe/videoChat/index.vue'

import test from '@/components/examples/aframe/test/index.vue'

// import indexhtml from '@/components/examples/aframe/firebaseNetwork/indexhtml.vue'

// import game from '@/components/examples/aframe/game/index.vue'
export default {
  components: {
    // basicPrimitive,
    // positionAndRelativePosition,
    // multipleEntitiesComponent,
    // multiUser,
    // soundAndPositionalNoise,
    // formKeyboardCustom,
    // formKeyboardBasic,
    skyAnd360Image,
    // blinkTeleportation,
    // entitySpawner,
    // addingLightsAndShadows,
    // Video360,
    // animatingObjects,
    // animationComponent,
    // antialiasing,
    // basicPrimitivesAndHtmlAttributes,
    // joystick,
    // dualJoystick,
    // soundPlay,
    // sharedSpaces,
    // firebaseNetwork,
    // indexhtml
    // sharedSpace
    videoChat,
    scene,
    // avatar
    test,
    // game
    // blinkTeleport
  },
  data() {
    return {
      comp: 'sharedSpaces',
      components: [
        // multipleEntitiesComponent,
        // multiUser
        // soundAndPositionalNoise,
        // formKeyboardCustom,
        // formKeyboardBasic,
        skyAnd360Image,
        videoChat,
        // avatar
        test,

        // blinkTeleportation,
        // entitySpawner,
        // soundPlay

        // blinkTeleport
      ],
      components1: [
        // Video360,
        // addingLightsAndShadows,
        // animatingObjects,
        // animationComponent,
        // antialiasing,
        // basicPrimitivesAndHtmlAttributes,
        // joystick,
        // dualJoystick,
        // sharedSpaces,
        // firebaseNetwork,
        // indexhtml
        // sharedSpace
        // videoChat
        scene,
        // test
        // game
      ],
    }
  },
}
</script>

<style></style>
