export const state = () => ({
  twitter: {},
  instagram: {
    username: 'one_person_empire',
    password: 'MPStander@3',
  },
})

export const mutations = {
  TWITTER_UPDATE(state, payload) {
    state.twitter = payload
  },

  INSTAGRAM_UPDATE(state, payload) {
    state.instagram = payload
  },
}

export const actions = {}

export const getters = {}

export const strict = false
