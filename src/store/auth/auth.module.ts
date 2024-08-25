import { Module } from 'vuex'
import { api, SessionInterface } from '@/libs/api'
import LocalStorage from '@/libs/local-storage-class'

const _localStorage = new LocalStorage()

export interface SessionState {
  auth: SessionInterface | null
}

export const authModule = <Module<SessionState, any>>{
  state: {
    auth: <SessionInterface>{
      access: '',
      refresh: '',
    },
  },
  getters: {
    session: (state: SessionState) => state.auth,
  },
  mutations: {
    SET_SESSION(state, session) {
      state.auth = session
    },
  },
  actions: {
    async INIT(store) {
      try {
        const session = _localStorage.get<SessionInterface>('session')
        if (session) {
          store.commit('SET_SESSION', session)
        }
      } catch (error: any) {
        store.commit('SHOW_TOASTER', {
          message: error.message,
          color: 'warning',
          error,
        })
        location.href = '/'
      }
    },
    async SIGNIN(store, auth) {
      return api(store)
        .post('/token/', {
          username: auth.username,
          password: auth.password,
        })
        .then((resp: any) => {
          store.commit('SET_SESSION', resp.data)
          return resp.data
        })
        .catch((error: any) => {
          store.commit('SHOW_TOASTER', {
            message: error.message,
            color: 'danger',
            error,
          })
        })
    },
  },
}
