/*=========================================================================================
  File Name: calendar.js
  Description: Calendar Module
  ----------------------------------------------------------------------------------------
==========================================================================================*/
import axios from '@/plugins/axios.js'

export const state = () => ({
  // Calendar Labels
  eventLabels: [],

  // Simple Calendar State
  events: [],
})

export const mutations = {
  ADD_EVENT(state, event) {
    state.events.push(event)
  },
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_LABELS(state, labels) {
    state.eventLabels = labels
  },
  UPDATE_EVENT(state, event) {
    const eventIndex = state.events.findIndex((e) => e.id === event.id)
    Object.assign(state.events[eventIndex], event)
  },
  REMOVE_EVENT(state, eventId) {
    const eventIndex = state.events.findIndex((e) => e.id === eventId)
    state.events.splice(eventIndex, 1)
  },
}

export const actions = {
  addEvent({ commit }, event) {
    return new Promise((resolve, reject) => {
      axios
        .post('/api/apps/calendar/events/', { event })
        .then((response) => {
          commit('ADD_EVENT', Object.assign(event, { id: response.data.id }))
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  fetchEvents({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get('/api/apps/calendar/events')
        .then((response) => {
          commit('SET_EVENTS', response.data)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  fetchEventLabels({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get('/api/apps/calendar/labels')
        .then((response) => {
          commit('SET_LABELS', response.data)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  editEvent({ commit }, event) {
    return new Promise((resolve, reject) => {
      axios
        .post(`/api/apps/calendar/event/${event.id}`, { event })
        .then((response) => {
          // Convert Date String to Date Object
          const event = response.data
          event.startDate = new Date(event.startDate)
          event.endDate = new Date(event.endDate)

          commit('UPDATE_EVENT', event)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  removeEvent({ commit }, eventId) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/api/apps/calendar/event/${eventId}`)
        .then((response) => {
          commit('REMOVE_EVENT', response.data)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  eventDragged({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`/api/apps/calendar/event/dragged/${payload.event.id}`, {
          payload,
        })
        .then((response) => {
          // Convert Date String to Date Object
          const event = response.data
          event.startDate = new Date(event.startDate)
          event.endDate = new Date(event.endDate)

          commit('UPDATE_EVENT', event)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
}

export const getters = {
  getEvent: (state) => (eventId) =>
    state.events.find((event) => event.id === eventId),
}

export const strict = false