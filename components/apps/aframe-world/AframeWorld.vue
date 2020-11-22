<template>
  <div class="relative w-screen h-screen">
    <!-- <VideoChat /> -->

    <!-- <AframeGame :player="player" :room="room" /> -->
    <Aframe />

    <!-- <UiMiscAnon :player="player" class="absolute inset-x-0 z-50" /> -->
  </div>
</template>

<script>
import {
  ref,
  useContext,
  computed,
  onBeforeMount
} from "@nuxtjs/composition-api";
export default {
  name: "AframeWorld",
  head: {
    script: [
      { src: "https://aframe.io/releases/1.0.4/aframe.min.js" },
      {
        src:
          "https://cdn.jsdelivr.net/gh/donmccurdy/aframe-extras@v6.1.1/dist/aframe-extras.min.js"
      },
      {
        src:
          "https://unpkg.com/aframe-environment-component@1.1.0/dist/aframe-environment-component.min.js"
      },
      {
        src:
          "https://samsunginternet.github.io/a-frame-components/dist/ocean-plane.js"
      },
      {
        src:
          "https://rawgit.com/fernandojsg/aframe-teleport-controls/master/dist/aframe-teleport-controls.min.js"
      },
      {
        src:
          "https://unpkg.com/aframe-event-set-component@^4.0.0/dist/aframe-event-set-component.min.js"
      }
    ]
  },
  setup() {
    const { store } = useContext();
    const user = computed(() => store.state.auth.main_user);
    const character = computed(() => store.state.aframe.character);
    const anonState = computed(() => store.state.auth.anonymous);
    const navbarTypeAnon = ref({
      type: "anon",
      bool: true
    });
    const navbarTypeSpeed = ref({
      type: "speed",
      bool: true
    });
    const navbarTypeChat = ref({
      type: "chat",
      bool: true
    });
    const navbarTypeVideo = ref({
      type: "video",
      bool: true
    });

    const navbarTypeNav = ref({
      type: "totalNav",
      bool: false
    });
    let playerReal = ref({
      disp_name: user.value.disp_name,
      avatar: user.value.avatar,
      uid: user.value.uid,
      type: user.value.role,
      name: character.value.name,
      character: character.value.character,
      url: character.value.url,
      animation: character.value.animation
    });

    let playerSecret = ref({
      disp_name: "Anon",
      uid: user.value.uid,
      avatar: user.value.avatar,

      type: user.value.role,
      name: character.value.name,
      character: character.value.character,
      url: character.value.url,
      animation: character.value.animation
    });
    onBeforeMount(async () => {
      // store.commit("navbar/SET_NAV_TYPE", navbarTypeAnon.value);
      // store.commit("navbar/SET_NAV_TYPE", navbarTypeSpeed.value);
      // store.commit("navbar/SET_NAV_TYPE", navbarTypeChat.value);
      // store.commit("navbar/SET_NAV_TYPE", navbarTypeVideo.value);
      store.commit("navbar/SET_NAV_TYPE", navbarTypeNav.value);
    });

    let player = computed(() =>
      anonState.value ? playerSecret.value : playerReal.value
    );
    let room = ref({
      room: "HomeBase"
    });

    // store.dispatch('myAction')

    return { player, user, room };
  }
};
</script>

<style></style>
