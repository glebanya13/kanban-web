import LocalStorage from '@/libs/local-storage-class'
import axios, { Axios } from 'axios'
import { Commit, Dispatch } from 'vuex'

const _localStorage = new LocalStorage()

const _axios = axios.create({
  baseURL: window.APP_HTTP_API,
})

export interface SessionInterface {
  access: string
  refresh: string
}

let isInterceptorsSet = false

const refreshAccessToken = async (store: {
  dispatch: Dispatch
  commit: Commit
}): Promise<string | null> => {
  const session = _localStorage.get<SessionInterface>('session')
  if (!session?.refresh) {
    return null
  }

  try {
    const response = await _axios.post('/auth/refresh', {
      refresh: session.refresh,
    })

    const newSession: SessionInterface = response.data
    _localStorage.set('session', newSession)
    store.commit('SET_SESSION', newSession)

    return newSession.access
  } catch (error) {
    store.commit('SET_SESSION_EXPIRED')
    return null
  }
}

export const api = (store: { dispatch: Dispatch; commit: Commit }): Axios => {
  if (isInterceptorsSet) {
    return _axios
  }

  // REQUEST
  _axios.interceptors.request.use(
    async (config) => {
      const session = _localStorage.get<SessionInterface>('session')
      if (session?.access) {
        config.headers.Authorization = `Bearer ${session.access}`
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    },
  )

  // RESPONSE
  _axios.interceptors.response.use(
    (response) => {
      return response
    },
    async (error) => {
      const originalRequest = error.config

      if (
        (error.response.status === 401 || error.response.status === 403) &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true
        const newAccessToken = await refreshAccessToken(store)
        if (newAccessToken) {
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
          return _axios(originalRequest)
        }
      }

      if (error.response.status === 401 || error.response.status === 403) {
        store.commit('SET_SESSION_EXPIRED')
      }

      return Promise.reject({
        message: error.response?.data?.error?.message || error.message,
        description: error.response?.data?.error?.id
          ? `Error: #${error.response?.data?.error?.id}`
          : undefined,
      })
    },
  )

  isInterceptorsSet = true

  return _axios
}
