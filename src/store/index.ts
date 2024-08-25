import { createLogger, createStore } from 'vuex'
import { generalModule } from '@/store/general/general.module'
import { authModule } from '@/store/auth/auth.module'

const plugins = []
plugins.push(createLogger())

export default createStore({
  state: {
    sidebarVisible: true,
    sidebarUnfoldable: false,
  },
  mutations: {
    toggleSidebar(state) {
      state.sidebarVisible = !state.sidebarVisible
    },
    toggleUnfoldable(state) {
      state.sidebarUnfoldable = !state.sidebarUnfoldable
    },
    updateSidebarVisible(state, payload) {
      state.sidebarVisible = payload.value
    },
  },
  actions: {},
  modules: {
    generalModule,
    authModule,
  },
})
