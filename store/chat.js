/*=========================================================================================
  File Name: chat.js
  Description: Chat Module
  ----------------------------------------------------------------------------------------

==========================================================================================*/
// import axios from '@/plugins/axios.js'
let axios = {};
export const state = () => ({
  // Chat Search Query
  chatSearchQuery: "",

  // Stores All Contacts
  contacts: [],

  // Stores Chat Contacts
  chatContacts: [],

  // Stores Chat data(log)
  chats: {}
});

export const mutations = {
  UPDATE_ABOUT_CHAT(state, obj) {
    obj.rootState.AppActiveUser.about = obj.value;
  },
  UPDATE_STATUS_CHAT(state, obj) {
    obj.rootState.AppActiveUser.status = obj.value;
  },

  // API AFTER
  SEND_CHAT_MESSAGE(state, payload) {
    if (payload.chatData) {
      // If there's already chat. Push msg to existing chat
      state.chats[
        Object.keys(state.chats).find(key => Number(key) === payload.id)
      ].msg.push(payload.msg);
    } else {
      // Create New chat and add msg
      const chatId = payload.id;
      Vue.set(state.chats, [chatId], {
        isPinned: payload.isPinned,
        msg: [payload.msg]
      });
    }
  },
  UPDATE_CONTACTS(state, contacts) {
    state.contacts = contacts;
  },
  UPDATE_CHAT_CONTACTS(state, chatContacts) {
    state.chatContacts = chatContacts;
  },
  UPDATE_CHATS(state, chats) {
    state.chats = chats;
  },
  SET_CHAT_SEARCH_QUERY(state, query) {
    state.chatSearchQuery = query;
  },
  MARK_SEEN_ALL_MESSAGES(state, payload) {
    payload.chatData.msg.forEach(msg => {
      msg.isSeen = true;
    });
  },
  TOGGLE_IS_PINNED(state, payload) {
    state.chats[
      Object.keys(state.chats).find(key => Number(key) === payload.id)
    ].isPinned = payload.value;
  }
};

export const actions = {
  setChatSearchQuery({ commit }, query) {
    commit("SET_CHAT_SEARCH_QUERY", query);
  },
  updateAboutChat({ commit, rootState }, value) {
    commit("UPDATE_ABOUT_CHAT", {
      rootState,
      value
    });
  },
  updateStatusChat({ commit, rootState }, value) {
    commit("UPDATE_STATUS_CHAT", {
      rootState,
      value
    });
  },

  // API CALLS
  sendChatMessage({ getters, commit, dispatch }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post("/api/apps/chat/msg", { payload })
        .then(response => {
          payload.chatData = getters.chatDataOfUser(payload.id);
          if (!payload.chatData) {
            dispatch("fetchChatContacts");
          }
          commit("SEND_CHAT_MESSAGE", payload);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  // Get contacts from server. Also change in store
  fetchContacts({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/api/apps/chat/contacts", { params: { q: "" } })
        .then(response => {
          commit("UPDATE_CONTACTS", response.data);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  // Get chat-contacts from server. Also change in store
  fetchChatContacts({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/api/apps/chat/chat-contacts", { params: { q: "" } })
        .then(response => {
          commit("UPDATE_CHAT_CONTACTS", response.data);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  // Get chats from server. Also change in store
  fetchChats({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/api/apps/chat/chats")
        .then(response => {
          commit("UPDATE_CHATS", response.data);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  markSeenAllMessages({ getters, commit }, id) {
    return new Promise((resolve, reject) => {
      axios
        .post("/api/apps/chat/mark-all-seen", { id })
        .then(response => {
          commit("MARK_SEEN_ALL_MESSAGES", {
            id,
            chatData: getters.chatDataOfUser(id)
          });
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  toggleIsPinned({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post("/api/apps/chat/set-pinned/", {
          contactId: payload.id,
          value: payload.value
        })
        .then(response => {
          commit("TOGGLE_IS_PINNED", payload);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};

export const getters = {
  chatDataOfUser: state => id => {
    return state.chats[
      Object.keys(state.chats).find(key => Number(key) === id)
    ];
  },
  chatContacts: (state, getters) => {
    const chatContacts = state.chatContacts.filter(contact =>
      contact.displayName
        .toLowerCase()
        .includes(state.chatSearchQuery.toLowerCase())
    );

    chatContacts.sort((x, y) => {
      const timeX = getters.chatLastMessaged(x.uid).time;
      const timeY = getters.chatLastMessaged(y.uid).time;
      return new Date(timeY) - new Date(timeX);
    });

    return chatContacts.sort((x, y) => {
      const chatDataX = getters.chatDataOfUser(x.uid);
      const chatDataY = getters.chatDataOfUser(y.uid);
      if (chatDataX && chatDataY)
        return chatDataY.isPinned - chatDataX.isPinned;
      else return 0;
    });
  },
  contacts: state =>
    state.contacts.filter(contact =>
      contact.displayName
        .toLowerCase()
        .includes(state.chatSearchQuery.toLowerCase())
    ),
  contact: state => contactId =>
    state.contacts.find(contact => contact.uid === contactId),
  chats: state => state.chats,
  chatUser: (state, getters, rootState) => id =>
    state.contacts.find(contact => contact.uid === id) ||
    rootState.auth.active_user,

  chatLastMessaged: (state, getters) => id => {
    if (getters.chatDataOfUser(id))
      return getters.chatDataOfUser(id).msg.slice(-1)[0];
    else return false;
  },
  chatUnseenMessages: (state, getters) => id => {
    let unseenMsg = 0;
    const chatData = getters.chatDataOfUser(id);
    if (chatData) {
      chatData.msg.map(msg => {
        if (!msg.isSeen && !msg.isSent) unseenMsg++;
      });
    }
    return unseenMsg;
  }
};

export const strict = false;
