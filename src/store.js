
import { createStore } from 'vuex'

export default createStore({
  state: {
    darkMode: true
  },
  mutations: {
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode
    },
    setTheme(state, mode) {
      state.darkMode = mode;
    }
  }
})