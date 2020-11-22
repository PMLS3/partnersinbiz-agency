export const state = () => ({
  characters: [
    {
      name: "Remy",
      character: "Remy",
      url:
        "https://cdn.glitch.com/859cd3da-93fb-49c2-90cb-c5eccceb20b9%2Fremy.glb?v=1603657429801",
      animation: "idle"
    }
  ],
  actions: ["idle", "jump", "run", "walk", "walk_back"],
  character: {
    name: "Remy",
    character: "Remy",
    url:
      "https://cdn.glitch.com/859cd3da-93fb-49c2-90cb-c5eccceb20b9%2Fremy.glb?v=1603657429801",
    animation: "idle"
  },
  insideAframe: false,
  feature: {},
  teaching: {},
  location: "0 0.8 0",
  myAvatar: {
    location: "0 0.8 0",
    rotation: "0 0 0",
    color: "FF00FF",
    name: "Peet",
    surname: "Stander",
    height: "1.6",
    id: "1"
  },
  speed: 10
});

export const mutations = {
  SET_ANIMATION(state, payload) {
    console.log("animation", payload);
    state.character.animation = payload;
  },
  SET_INSIDE_AFRAME(state, payload) {
    state.insideAframe = payload;
  },
  SET_LOCATION(state, payload) {
    state.myAvatar.location = payload;
    state.location = payload;
  },
  SET_AVATAR(state, payload) {
    state.myAvatar.location = payload.user.location;
    state.myAvatar.color = payload.user.color;
    state.myAvatar.name = payload.user.name;
    state.myAvatar.surname = payload.user.surname;
    state.myAvatar.height = payload.user.height;
    state.myAvatar.id = payload.user.id;
    state.myAvatar.room = payload.user.room;
    state.myAvatar.rotation = payload.user.rotation;
  },
  SET_SPEED(state, payload) {
    state.speed = payload;
  }
};

export const actions = {};

export const getters = {};

export const strict = false;
