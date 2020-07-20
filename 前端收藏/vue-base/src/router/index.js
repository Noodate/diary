import Vue from 'vue'
// import iView from 'iview'
import ViewUI from 'view-design'
// import Util from '../libs/util'
import VueRouter from 'vue-router'
// import Cookies from 'js-cookie'
// import { routers, otherRouter, appRouter } from './router'
import {routers} from './router'
// import store from '@/store'

Vue.use(VueRouter)
// 路由配置
const RouterConfig = {
  mode: 'history',
  routes: routers
}

export const router = new VueRouter(RouterConfig)

// const goHomePage = function (to, from, next) {
//   next({
//     name: 'home'
//   })
// }

// const goLoginPage = function (to, from, next) {
//   if (to.name === 'login') {
//     next()
//   } else {
//     next({
//       name: 'login'
//     })
//   }
// }

// const accessCheck = function (to, from, next) {
//   if (to.name === 'login') {
//     goHomePage(to, from, next)
//   } else {
//     let accessCode = store.getters.userRole
//     console.log(accessCode)
//     if (to.path.indexOf('/approverList') !== -1) {
//       console.log('我要去审批人才有权限看的页面')
//       if (store.getters.userApprover) {
//         next()
//       } else {
//         next({
//           replace: true,
//           name: 'error-403'
//         })
//       }
//     }
//     if (to.path.indexOf('/dataDocument') !== -1) {
//       console.log('我要去业务经理才有权限看的页面')
//       if (store.getters.userBussinessManager) {
//         next()
//       } else {
//         next({
//           replace: true,
//           name: 'error-403'
//         })
//       }
//     }
//     if (to.path.indexOf('/openingAccountBusiness') !== -1) {
//       console.log('我要去客户经理才有权限看的页面')
//       if (store.getters.userClientManager) {
//         next()
//       } else {
//         next({
//           replace: true,
//           name: 'error-403'
//         })
//       }
//     }
//     next()
//   }
// }

router.beforeEach((to, from, next) => {
  // iView.LoadingBar.start()
  ViewUI.LoadingBar.start()
  next()
  // if (to.name === 'version' || to.name === 'temporaryHome') {
  //   next()
  // } else {
  //   console.log(store.state.user.uuid)
  //   if (store.state.user.uuid) { // store.state.user.uuid = store.state.user.uuid && store.state.user.inited
  //     console.log('登陆进去一开始应该走这里、正常跳页面走这里')
  //     accessCheck(to, from, next)
  //   } else if (!store.state.user.inited) { // 只要刷新页面，无论是都登录，都走这里
  //     store.dispatch('user/LOAD_USER').then(res => { // 拉取user_info
  //       accessCheck(to, from, next)
  //     }).catch(() => { // err 错误信息
  //       console.log('让用户去登陆')
  //       goLoginPage(to, from, next)
  //     })
  //   } else {
  //     goLoginPage(to, from, next)
  //   }
  // }
})

router.afterEach(() => {
  // iView.LoadingBar.finish()
  ViewUI.LoadingBar.finish()
})
