import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import user from './modules/user'
import message from './modules/message'
import todo from './modules/todo'
import * as getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 使 Vuex store 进入严格模式，在严格模式下，任何 mutation 处理函数以外修改 Vuex state 都会抛出错误。
  strict: false,  // process.env.NODE_ENV !== 'production',
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    app,
    user,
    message,
    todo
  },
  getters
})

export default store
