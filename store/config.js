export const state = () => ({
  twitter: {},
  twitter_user: {},
  instagram: {
    username: 'one_person_empire',
    password: 'MPStander@3',
  },
})

export const mutations = {
  TWITTER_UPDATE(state, payload) {
    state.twitter = payload
  },
  TWITTER_UPDATE_USER(state, payload) {
    state.twitter_user = payload
  },

  INSTAGRAM_UPDATE(state, payload) {
    state.instagram = payload
  },
}

export const actions = {}

export const getters = {}

export const strict = false
