export const state = () => ({
  twitter: {},
})

export const mutations = {
  TWITTER_UPDATE(state, payload) {
    state.twitter = payload
  },
}

export const actions = {}

export const getters = {}

export const strict = false
