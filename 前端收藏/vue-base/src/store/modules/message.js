// import * as types from '../mutation-types'
import * as api from 'api'

export default {
  namespaced: true,
  state: {
    loading: false,
    datas: {
      count: 0, // 总记录数
      start: 0, // 开始
//          limit: this.$store.getters.userPageSize, // page size
      limit: 5,
      defaultSortName: 'senderDate',
      defaultSortMode: 'desc',
      sortName: 'senderDate',
      sortMode: 'desc',
      data: []
    }
  },
  mutations: {
    SET_VALUE (state, {data, count, start}) {
      state.datas.data = data
      state.datas.count = count
      state.datas.start = start
    },
    SET_LOADING (state, val) {
      state.loading = val
    }
  },
  actions: {
    LOAD_DATA ({ commit, state }) {
      const start = 0
      commit('SET_LOADING', true)
      api.message.message.getMessageList({
        data: {
          'pars.start': start,
          'pars.limit': state.datas.limit,
          'pars.sortName': state.datas.sortName,
          'pars.sortMode': state.datas.sortMode,
          'pars.readed': 1
        }
      }).then(res => {
        commit('SET_LOADING', false)
        const body = res.data
        if (body.success) {
          const data = body.pars.datas.data
          const count = body.pars.datas.pager.allhits
          commit('SET_VALUE', {data, count, start})
        }
      }).catch((res) => {
      })
    }
  }
}
