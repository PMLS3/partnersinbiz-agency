export const state = () => ({
  cartItems: [],
  wishList: [],
  selectedItem: {},
  shopType: 'resells',
  transaction: {},
})

export const mutations = {
  TOGGLE_ITEM_IN_WISH_LIST(state, item) {
    const index = state.wishList.findIndex((i) => i.objectID == item.objectID)
    if (index < 0) {
      state.wishList.push(item)
    } else {
      state.wishList.splice(index, 1)
    }
  },
  REMOVE_ITEM_FROM_CART(state, item) {
    const index = state.cartItems.findIndex((i) => i.objectID == item.objectID)
    if (index > -1) {
      state.cartItems.splice(index, 1)
    }
  },
  ADD_ITEM_IN_CART(state, item) {
    state.cartItems.push(Object.assign({}, item))
  },
  UPDATE_ITEM_QUANTITY(state, payload) {
    state.cartItems[payload.index].quantity = payload.quantity
  },
  SELECTED_ITEM(state, payload) {
    state.selectedItem = payload
  },
  UPDATE_TRANSACTION(state, payload) {
    state.transaction = payload
  },
}

export const actions = {
  selectedItem({ commit }, item) {
    commit('SELECTED_ITEM', item)
  },
  toggleItemInWishList({ commit }, item) {
    commit('TOGGLE_ITEM_IN_WISH_LIST', item)
  },
  toggleItemInCart({ getters, commit, dispatch }, item) {
    getters.isInCart(item.objectID)
      ? commit('REMOVE_ITEM_FROM_CART', item)
      : dispatch('additemInCart', item)
  },
  additemInCart({ commit }, item) {
    // Below properties should be added as per requirement from back-end
    // This is added just for demo purpose
    item['quantity'] = 1
    item['discount_in_percentage'] = Math.floor(Math.random() * 20) + 4
    item['offers_count'] = Math.floor(Math.random() * 4) + 1
    item['delivery_date'] = new Date(
      new Date().getTime() + Math.random() * 10 * 24 * 60 * 60 * 1000
    )
      .toDateString()
      .slice(0, -4)

    commit('ADD_ITEM_IN_CART', item)
  },
  updateItemQuantity({ commit }, payload) {
    commit('UPDATE_ITEM_QUANTITY', payload)
  },
}

export const getters = {
  isInCart: (state) => (itemId) => {
    return state.cartItems.some((item) => item.objectID == itemId)
  },
  isInWishList: (state) => (itemId) => {
    return state.wishList.some((item) => item.objectID == itemId)
  },
  getCartItem: (state) => (itemId) => {
    const result = state.cartItems.filter((item) => item.objectID == itemId)
    return result.length ? result.pop() : []
  },
  selectedItem: (state) => state.selectedItem,
}
