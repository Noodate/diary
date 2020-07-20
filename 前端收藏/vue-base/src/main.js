// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
// import iView from 'iview'
import ViewUI from 'view-design';
import { router } from './router/index'
// import { appRouter } from './router/router'
import store from './store'
import 'view-design/dist/styles/iview.css'
import App from './App.vue'
import '@/locale/index'
// import util from '@/libs/util'
import { init } from '@/libs/instance'
import * as filters from '@/filters' // 全局filter
import { format, getDict } from '@/libs/dict'
import { getStart } from '@/mixins/index'
import math from '@/plugins/math.js'
import permission from '@/directive/permission'
import _fml from '@/libs/formatMachineLanguage'
import uploader from 'vue-simple-uploader'
Vue.use(uploader)
// Vue.use(iView)
Vue.use(ViewUI)
Vue.use(math)
Vue.use(permission)

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.mixin({
  methods: {
    _fd: format,
    _getDict: getDict,
    _getStart: getStart,
    _fml
  }
})

Vue.config.productionTip = false

init(Vue, router)

let mediaHandler = () => {
  if (window.matchMedia(store.state.app.config.windowMatchSizeLg).matches) {
    store.dispatch('openMobileMode', false)
  } else {
    store.dispatch('openMobileMode', true)
  }
}

let modal = Vue.component('Modal')
modal.options.methods.removeScrollEffect = function () {
  document.body.style.overflow = ''
  this.resetScrollBar()
}
modal.options.mixins[2].methods.removeScrollEffect = function () {
  document.body.style.overflow = ''
  this.resetScrollBar()
}
let modalOptions = modal.options
Vue.component('Modal', modalOptions)
Vue.prototype.$Modal = modalOptions
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App),
  data: {
    currentPageName: ''
  },
  mounted () {},
  created () {
    mediaHandler()
  }
})
