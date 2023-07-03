// Create a new store instance.
export default {
  state: {
    item: []
  },
  mutations: {
    addItem(state: any, newItem: any) {
      state.item.push(newItem)
    }
  },
  actions: {
    addItem(context: any, payload: any) {
      context.commit('addItem', payload)
    }
  },
  getters: {
    allItems(state: any) {
      return state.item
    }
  }
}
