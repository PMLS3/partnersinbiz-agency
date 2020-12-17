export const state = () => ({
  playlist: [],
  currentPlay: {},
  playID: null,
  skipID: null,
  setStop: false,
  setPause: false,
  setPlay: false
})

export const mutations = {
  SET_PLAYLIST(state, payload) {
    state.playlist = payload
  },
  SET_CURRENT_PLAY(state, payload) {
    state.currentPlay = payload
  },
  SET_PLAY(state, payload) {
    state.setPlay = payload
  },
  SET_PLAY_ID(state, payload) {
    state.playID = payload
  },
  SET_STOP(state, payload) {
    state.setStop = payload
  },
  SET_PAUSE(state, payload) {
    state.setPause = payload
  },
  SET_SKIP_TO(state, payload) {
    state.skipID = payload
  }
}

export const actions = {
  isMobile({ commit }, payload) {
    console.log(payload)
  }
}

export const getters = {}

export const strict = false
