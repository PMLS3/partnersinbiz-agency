AFRAME.registerComponent("test", {
  init: function() {
    let sideChatState = window.$nuxt.$store.state.app.side_chat.active;

    let canSubmit = true;

    let anonymousSet = () => {
      if (canSubmit) {
        let payload = !sideChatState;
        window.$nuxt.$store.commit("app/SET_SIDE_CHAT_ACTIVE", payload);
        sideChatState = payload;
        canSubmit = false;
        setTimeout(() => (canSubmit = true), 1000);
      }
    };

    this.el.addEventListener("click", anonymousSet);
  }
});
