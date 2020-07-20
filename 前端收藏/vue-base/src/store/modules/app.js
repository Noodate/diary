import * as types from '@/store/mutation-types'
const app = {
  state: {
    config: {
      windowMatchSizeLg: '(min-width: 992px)'
    },
    mobileMode: false,
    isFullScreen: false
  },
  mutations: {
    [types.MOBILE_MODE] (state, opened) {
      state.mobileMode = opened
    }
  },
  actions: {
    openMobileMode ({commit}, opened) {
      commit(types.MOBILE_MODE, opened)
    }
  }
}

export default app
