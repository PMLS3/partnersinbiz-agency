AFRAME.registerComponent("messageOpen", {
  init: function() {
    let anonElement = this.el;
    let anonState = window.$nuxt.$store.state.auth.anonymous;
    let themeMode = window.$nuxt.$store.state.theme;
    let canSubmit = true;
    let message = "You are in Stealth mode";
    anonElement.setAttribute("material", "color", "white");

    let anonymousSet = () => {
      if (canSubmit) {
        if (themeMode == "dark") {
          themeMode = "light";
          anonElement.setAttribute("material", "color", "white");
          message = "You are talking as yourself";
        } else {
          themeMode = "dark";
          anonElement.setAttribute("material", "color", "black");
          message = "You are in Stealth mode";
        }
        let payload = !anonState;

        window.$nuxt.$store.commit("auth/UPDATE_ANON", anonState);
        window.$nuxt.$store.commit("UPDATE_THEME", themeMode);
        anonState = payload;
        canSubmit = false;
        setTimeout(() => (canSubmit = true), 1000);
        setTimeout(() => alert(message), 1010);
      }
    };

    this.el.addEventListener("click", anonymousSet);
  }
});
