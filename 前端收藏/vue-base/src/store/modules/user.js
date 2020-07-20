import * as api from 'api'
// import Cookies from 'js-cookie'
// import { instance } from '@/libs/instance'

const user = {
  namespaced: true,
  state: {
    inited: false,
    login: false,
    uuid: '',
    code: '',
    name: '',
    status: 0,
    job: '',
    jobName: '',
    email: '',
    mobile: '',
    fax: '',
    phone: '',
    department: '',
    departmentName: '',
    pageSize: 10,
    locale: 'zh-CN', // 未启用
    officePreviewMode: 'office', // pdf office
    dateFormat: 'yyyy-mm-dd', // 未启用
    managerAuth: false, // 控制初始化时部分菜单的显示权限
    auth: { // 权限控制
      menu: localStorage.menu ? JSON.parse(localStorage.menu) : [], // 菜单权限
      features: [] // 功能权限
    },
    menuList: [],
    role: [],
    clientManager: false,
    approver: false,
    bussinessManager: false
  },
  mutations: {
    SET_VALUE (state, user) {
      if (user.userInfo.check_id) {
        state.login = true
      } else {
        state.login = false
        // const browserPrompt = localStorage.browserPrompt
        // localStorage.clear()
        // localStorage.browserPrompt = browserPrompt
      }
      state.menuList = user.menus
      // state.menuList = [
      //   {
      //     name: '待我审批',
      //     uuid: 'approver'
      //   },
      //   {
      //     name: '开户业务',
      //     uuid: 'openingAccountBusiness'
      //   },
      //   {
      //     name: '数据档案',
      //     uuid: 'dataDocument'
      //   },
      //   {
      //     name: '用户管理',
      //     uuid: 'userManager'
      //   }
      // ]
      state.uuid = user.userInfo.check_id
      state.name = user.userInfo.realName
      state.role = user.userInfo.roleId
      state.departmentName = user.userInfo.departmentId
      if (state.role && state.role.length > 0) {
        for (let item of state.role) {
          if (item === '0') {
            state.clientManager = true
          } else if (item === '1') {
            state.approver = true
          } else {
            state.bussinessManager = true
          }
        }
      } else {
        state.clientManager = false
        state.approver = false
        state.bussinessManager = false
      }
    },
    SET_INITED (state, val) {
      state.inited = val
    }
  },
  actions: {
    LOAD_USER ({ dispatch, commit, state }) {
      return new Promise((resolve, reject) => {
        return api.u.getCurrentUserInfo({
        }).then((res) => {
          commit('SET_INITED', true)
          if (res.data.message === 'SUCCESS') {
            console.log(res.data.data)
            commit('SET_VALUE', res.data.data || {})
            if (res.data.data.userInfo) {
              console.log('拿到用户登录信息')
              resolve(res)
            } else {
              reject(new Error('error'))
            }
          } else {
            console.log('没拿到用户登录信息，让用户去登陆')
            reject(new Error('error'))
          }
        })
      })
    },
    REFRESH_MESSAGE ({ dispatch, commit, state }) {
      dispatch('message/LOAD_DATA', null, { root: true })
      dispatch('todo/LOAD_DATA', null, { root: true })
    }
  }
}

export default user
