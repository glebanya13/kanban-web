import { Module, MutationTree } from 'vuex'

interface GeneralState {
  isSessionExpired: boolean
  error: {
    message: string | null
    status: number | null
  }
  processing: boolean
}

interface GeneralMutations extends MutationTree<GeneralState> {
  SET_ERROR(state: GeneralState, payload: any): void

  CLEAR_ERROR(state: GeneralState): void

  START_PROCESSING(state: GeneralState): void

  STOP_PROCESSING(state: GeneralState): void
}

export const generalModule = <Module<GeneralState, any>>{
  state: {
    isSessionExpired: false,
    error: {
      message: null,
      status: null,
    },
    processing: false,
  },
  getters: {
    getProcessing: (state) => state.processing,
    getError: (state) => state.error,
    isSessionExpired: (state) => state.isSessionExpired,
  },
  mutations: {
    SET_ERROR(state, payload) {
      state.error = payload
    },
    CLEAR_ERROR(state) {
      state.error.message = null
      state.error.status = null
    },
    START_PROCESSING(state) {
      state.processing = true
    },
    STOP_PROCESSING(state) {
      state.processing = false
    },
    SET_SESSION_EXPIRED(state) {
      state.isSessionExpired = true
    },
    CLEAR_SESSION_EXPIRED(state) {
      state.isSessionExpired = false
    },
  } as GeneralMutations,
}
