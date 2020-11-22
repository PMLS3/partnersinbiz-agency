export const state = () => ({
  room: "test"
});

export const mutations = {
  ROOM_SET(state, payload) {
    state.room = payload;
  }
};

export const actions = {};

export const getters = {};

export const strict = false;
