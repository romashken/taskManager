import { createApp } from 'vue'
import { createStore } from 'vuex/types/index.js'
// Create a new store instance.
export const store = createStore({
  state: {
    item: []
  },
  mutations: {
    addItem(state: any, newItem: any) {
      state.item.push(newItem)
    }
  },
  actions: {
    addItem(context, payload) {
      context.commit('addItem', payload)
    }
  },
  getters: {
    allItems(state) {
      return state.item
    }
  }
})

const app = createApp({
  /* your root component */
})

// Install the store instance as a plugin
app.use(store)
