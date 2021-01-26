export const state = () => ({
  // active_card: false,
  // component_show: '',
  // component_list: [],
  // index: -1,
  // active_edit_card: false,
  // edit_all: false,
  // edit_component: {},
  // pages: [],
  // place: [],
  // myComponents: [],
  // editing_page: false,
  // edited_page: {},
  list_pos: [],
  update_component: {},
  delete_component: {},
})

export const mutations = {
  LIST_UPDATE(state, payload) {
    state.list_pos = payload
  },
  UPDATE_COMPONENT(state, payload) {
    state.update_component = payload
  },
  DELETE_COMPONENT(state, payload) {
    state.delete_component = payload
  },

  ////////////////////////
  EDIT_ALL(state, payload) {
    state.edit_all = payload
  },
  PAGES(state, payload) {
    state.pages = payload
  },
  COMPONENTS(state, payload) {
    state.myComponents = payload
  },
  EDITING_PAGE(state, payload) {
    state.editing_page = payload
  },

  COMPONENTS_NEEDED(state, payload) {
    if (payload.index == -1) {
      state.active_card = payload.active_card
      state.active_edit_card = payload.active_edit_card
      state.component_show = payload.component_show
      state.index = payload.index
    } else {
      state.active_card = payload.active_card
      state.active_edit_card = payload.active_edit_card
      state.component_show = payload.component_show
      state.index = payload.index
      state.place = payload.place
    }
  },

  COMPONENTS_EDIT(state, payload) {
    state.active_edit_card = payload.active_card
    state.edit_component = payload
    state.index = payload.index
  },
  COMPONENTS_UPDATE(state, payload) {
    let index = state.index

    if (index == -1) {
      for (let i = 0; i < payload.length; i++) {
        payload[i].place = [state.component_list.length]
        state.component_list.push(payload[i])
      }
    } else {
      let build

      for (let i = 0; i < payload.place.length; i++) {
        if (i == 0) {
          build = state.component_list[payload.place[i]]
        } else {
          build = build.children[payload.place[i]]
        }
      }
      state.active_edit_card = payload.active_edit_card
      if (payload.style) {
        build.style = payload.style
      }
      if (payload.class) {
        build.class = payload.class
      }

      if (payload.inline) {
        build.inline = payload.inline
      }
      if (payload.content) {
        build.content = payload.content
      }
    }
  },
  ACTIVE_EDIT_UPDATE(state, payload) {
    state.active_edit_card = payload
  },
  COMPONENTS_LIST_SET(state, payload) {
    state.component_list = payload.component_list
    state.edited_page = payload
  },
  COMPONENTS_LIST_ADD(state, payload) {
    payload.map((i) => state.component_list.push(i))
  },
  COMPONENTS_LIST(state, payload) {
    let index = state.index
    let place = state.place

    if (index == -1) {
      for (let i = 0; i < payload.length; i++) {
        payload[i].place = [state.component_list.length]
        state.component_list.push(payload[i])
      }
    } else {
      for (let i = 0; i < payload.length; i++) {
        let build

        for (let e = 0; e < state.place.length; e++) {
          if (e == 0) {
            build = state.component_list[state.place[e]]
          } else {
            build = build.children[state.place[e]]
          }
        }
        let pos = build.children.length
        let place_cur = state.place
        let place_new = [pos]
        payload[i].place = place_cur.concat(place_new)
        build.children.push(payload[i])
      }
    }
  },
}

export const actions = {}

export const getters = {
  place: (state) => state.place,
}
