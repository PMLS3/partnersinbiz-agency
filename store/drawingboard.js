export const state = () => ({
  snapshot: '',
  redoArr: [],
  undoArr: [],
  type: '',
  toolsIndex: 0,

  lineColor: '#4D4D4D',
  lineWidth: 4,
  mouseFrom: {
    x: 0,
    y: 0
  },
  mouseTo: {
    x: 0,
    y: 0
  }
})
export const mutations = {
  SAVE_SNAPSHOT(state, payload) {
    state.snapshot = payload
  },
  SET_SNAPSHOT(state, type) {
    state.snapshot = (type === 'undo' ? state.undoArr : state.redoArr).pop()
  },
  SET_UNDO_LIST(state) {
    state.undoArr.push(state.snapshot)
  },
  SET_REDO_LIST(state) {
    state.redoArr.push(state.snapshot)
  },
  CLEAR_UNDO_LIST(state) {
    state.undoArr = []
  },
  CLEAR_REDO_LIST(state) {
    state.redoArr = []
  },
  SET_LEFT_TOOLS(state, { key, index }) {
    state.type = key
    state.toolsIndex = index
  },
  SET_DRAW_TYPE(state, payload) {
    state.type = payload
  },
  SET_LINE_COLOR(state, payload) {
    state.lineColor = payload
  },
  SET_LINE_WIDTH(state, payload) {
    state.lineWidth = payload
  },
  SET_MOUSE_FROM(state, payload) {
    state.mouseFrom = payload
  },
  SET_MOUSE_TO(state, payload) {
    state.mouseTo = payload
  }
}
