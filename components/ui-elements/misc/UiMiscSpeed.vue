<template>
  <vs-button @click="changeState()" :icon="icon" :type="type"></vs-button>
</template>

<script>
import { ref, useContext, computed } from "@nuxtjs/composition-api";

export default {
  name: "UIMiscAnon",
  props: {
    player: {
      type: Object,
      default: () => ({
        name: "Remi",
        type: "user",
        bot: "Remi"
      })
    }
  },
  setup() {
    const { store } = useContext();

    const speedState = computed(() => store.state.aframe.speed);

    let icon = computed(() =>
      speedState.value == 10 ? "directions_walk" : "directions_run"
    );
    let type = computed(() => (speedState.value == 10 ? "flat" : "line"));
    let payload = ref(100);

    function changeState() {
      if (payload.value == 10) {
        payload.value = 300;
      } else {
        payload.value = 10;
      }

      store.commit("aframe/SET_SPEED", payload.value);
    }

    return { speedState, icon, changeState, type };
  }
};
</script>
