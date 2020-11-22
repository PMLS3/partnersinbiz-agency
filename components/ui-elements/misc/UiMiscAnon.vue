<template>
  <vs-button @click="changeState()" :icon="icon" type="flat"> </vs-button>
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

    const anonState = computed(() => store.state.auth.anonymous);

    const themeMode = computed(() => store.state.theme);

    let themePayload = ref("dark");

    let icon = computed(() => (anonState.value ? "account_circle" : "face"));

    function changeState() {
      let payload = !anonState.value;

      if (themeMode.value == "dark") {
        themePayload.value = "light";
      } else {
        themePayload.value = "dark";
      }

      store.commit("auth/UPDATE_ANON", payload);
      store.commit("UPDATE_THEME", themePayload.value);
    }

    return { anonState, icon, changeState };
  }
};
</script>
