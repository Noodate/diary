import permission from './permission'
import {auth} from '@/libs/auth.js'

const install = function (Vue) {
  Vue.directive('auth', permission)
  Vue.$auth = auth
  Vue.prototype.$auth = auth
}

//  手动注册
// if (window.Vue) {
//   window['permission'] = permission
//   Vue.use(install) // eslint-disable-line
// }

permission.install = install
export default permission
