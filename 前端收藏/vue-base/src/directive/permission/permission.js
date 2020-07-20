import store from '@/store'

export default {
  inserted (el, binding, vnode) {
    const {value} = binding
    const features = store.getters.userAuth.features
    if (value) {
      const hasPermission = features.includes(value)
      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      throw new Error(`权限指令调用参数错误`)
    }
  }
}
