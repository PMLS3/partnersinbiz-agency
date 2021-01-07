// <!-- =========================================================================================
//     File Name: app.js
//     Description: Handles client authentication
//     ----------------------------------------------------------------------------------------
// TODO get branches once in the beginning
// ========================================================================================== -->

export const state = () => ({
  app_type: 'aframe',
  authorization_type: {
    email: true,
    phone: false,
    facebook: false,
    twitter: false,
    google: false,
    github: false,
  },
  side_chat: {
    active: false,
    backgroundColor: '#ffffff',
  },
  feature: '',
  entity: 'business',
  teaching: {},
  categories: [],
  selected_branch: 'Company',
  current_branch_details: {},
})

export const mutations = {
  CURRENT_BRANCH(state, payload) {
    state.current_branch_details = payload
  },
  SELECTED_BRANCH(state, payload) {
    state.selected_branch = payload
  },
  SET_SIDE_CHAT_ACTIVE(state, payload) {
    state.side_chat.active = payload
  },
  SET_FEATURE(state, payload) {
    state.feature = payload
  },
  CATEGORIES_SET(state, payload) {
    state.categories = payload
  },
  SET_TEACHING(state, payload) {
    state.teaching = payload
  },
}

export const actions = {
  isMobile({ commit }, payload) {
    console.log('payloadfdasfd')
  },
}

export const getters = {}

export const strict = false
