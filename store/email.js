/*=========================================================================================
  File Name: email.js
  Description: Email Module
  ----------------------------------------------------------------------------------------

==========================================================================================*/
import axios from '@/plugins/axios.js'

export const state = () => ({
  mails: [],
  mail_filter: 'inbox',
  mailTags: [],
  meta: {},
  mailSearchQuery: '',
})

export const mutations = {
  SET_EMAIL_SEARCH_QUERY(state, query) {
    state.mailSearchQuery = query
  },
  SET_MAILS(state, mails) {
    state.mails = mails
  },
  SET_TAGS(state, tags) {
    state.mailTags = tags
  },
  SET_META(state, meta) {
    state.meta = meta
  },
  UPDATE_MAIL_FILTER(state, filterName) {
    state.mail_filter = filterName
  },
  UPDATE_LABELS(state, payload) {
    payload.mails.forEach((mailId) => {
      const mailIndex = state.mails.findIndex((mail) => mail.id === mailId)
      const index = state.mails[mailIndex].labels.indexOf(payload.label)

      if (index === -1) state.mails[mailIndex].labels.push(payload.label)
      else state.mails[mailIndex].labels.splice(index, 1)
    })
  },
  SET_LABELS(state, payload) {
    state.mails.find((mail) => mail.id === payload.mailId).labels =
      payload.labels
  },
  SET_UNREAD(state, payload) {
    payload.emailIds.forEach((mailId) => {
      const mailIndex = state.mails.findIndex((mail) => mail.id === mailId)
      if (mailIndex !== -1) state.mails[mailIndex].unread = payload.unreadFlag
    })
  },

  MOVE_MAILS_TO(state, payload) {
    payload.emailIds.forEach((mailId) => {
      const mailIndex = state.mails.findIndex((mail) => mail.id === mailId)

      // Update draft meta
      // If moving from draft mailFolder decrease draft meta by removing mailId
      if (state.mails[mailIndex].mailFolder === 'draft') {
        state.meta.draftMails.splice(
          state.meta.draftMails.findIndex((i) => i === mailId),
          1
        )
      }
      // Else increase by pushing mailId
      if (payload.to === 'draft') {
        state.meta.draftMails.push(mailId)
      }

      state.mails[mailIndex].mailFolder = payload.to
    })
  },

  TOGGLE_IS_MAIL_STARRED(state, payload) {
    state.mails.find((mail) => mail.id === payload.mailId).isStarred =
      payload.value
  },

  // If your process of fetching is different than ours. Please update action and mutation
  // Maybe this mutation is redundant for you. Feel free to remove it.
  UPDATE_UNREAD_META(state, payload) {
    // Loop over email meta
    for (const folder in state.meta.unreadMails.folder) {
      // If folder is same as current filter
      if (folder === state.mail_filter) {
        if (payload.unreadFlag) {
          // If unread flag is true - increase count
          payload.emailIds.forEach((mailId) => {
            if (state.meta.unreadMails.folder[folder].indexOf(mailId) === -1)
              state.meta.unreadMails.folder[folder].push(mailId)
          })
        } else {
          // else reduce unread mails count
          payload.emailIds.forEach((mailId) => {
            const mailIdIndex = state.meta.unreadMails.folder[folder].indexOf(
              mailId
            )
            if (mailIdIndex !== -1)
              state.meta.unreadMails.folder[folder].splice(mailIdIndex, 1)
          })
        }
      }
    }
  },
  UPDATE_UNREAD_META_ON_MOVE(state, payload) {
    // Updating Draft meta is handled by "MOVE_MAILS_TO" mutation

    payload.emailIds.forEach((mailId) => {
      const mail = state.mails.find((mail) => mail.id === mailId)

      if (mail.unread) {
        const cf_unread_mails = state.meta.unreadMails.folder[state.mail_filter]
        if (cf_unread_mails) {
          cf_unread_mails.splice(cf_unread_mails.indexOf(mailId), 1)
        }
        if (state.meta.unreadMails.folder[payload.to])
          state.meta.unreadMails.folder[payload.to].push(mailId)
      }
    })
  },
}

export const actions = {
  setEmailSearchQuery({ commit }, query) {
    commit('SET_EMAIL_SEARCH_QUERY', query)
  },

  // Fetch emails
  fetchEmails({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .get('/api/apps/email/mails', { params: { filter: payload.filter } })
        .then((response) => {
          commit('SET_MAILS', response.data)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  // Fetch Tags
  fetchTags({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get('/api/apps/email/tags')
        .then((response) => {
          commit('SET_TAGS', response.data)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  // Fetch Email Meta
  fetchMeta({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get('/api/apps/email/meta')
        .then((response) => {
          commit('SET_META', response.data)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  // Move mails to another folder
  moveMailsTo({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post('/api/apps/email/move-mails', {
          emailIds: payload.emailIds,
          mailFolder: payload.to,
        })
        .then((response) => {
          commit('MOVE_MAILS_TO', payload)
          commit('UPDATE_UNREAD_META_ON_MOVE', payload)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  // Update Mails label
  updateLabels({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post('/api/apps/email/update-labels', {
          emailIds: payload.mails,
          label: payload.label,
        })
        .then((response) => {
          commit('UPDATE_LABELS', payload)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  setLabels({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post('/api/apps/email/set-labels', {
          mailId: payload.mailId,
          labels: payload.labels,
        })
        .then((response) => {
          commit('SET_LABELS', payload)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  // Set mails flag unread to true
  setUnread({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post('/api/apps/email/mark-unread', {
          emailIds: payload.emailIds,
          unreadFlag: payload.unreadFlag,
        })
        .then((response) => {
          commit('SET_UNREAD', payload)

          // Remove this if you are getting meta like us
          // Use your own method to update email meta if you are fetching email meta
          commit('UPDATE_UNREAD_META', payload)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  // Toggle isStarred flag in mail
  toggleIsMailStarred({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post('/api/apps/email/set-starred', {
          mailId: payload.mailId,
          value: payload.value,
        })
        .then((response) => {
          commit('TOGGLE_IS_MAIL_STARRED', payload)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
}

export const getters = {
  filteredMails: (state) =>
    state.mails.filter((mail) => {
      return (
        (state.mail_filter === 'starred'
          ? mail.isStarred
          : state.mail_filter === mail.mailFolder ||
            mail.labels.includes(state.mail_filter)) &&
        (mail.sender_name
          .toLowerCase()
          .includes(state.mailSearchQuery.toLowerCase()) ||
          mail.sender
            .toLowerCase()
            .includes(state.mailSearchQuery.toLowerCase()) ||
          mail.subject
            .toLowerCase()
            .includes(state.mailSearchQuery.toLowerCase()) ||
          mail.message
            .toLowerCase()
            .includes(state.mailSearchQuery.toLowerCase()))
      )
    }),
  getMail: (state) => (emailId) =>
    state.mails.find((email) => email.id === emailId),
}

export const strict = false
