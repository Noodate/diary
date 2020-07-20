import Vue from 'vue'
import Locales from './locale'
// import zhLocale from 'iview/dist/locale/zh-CN'
import zhLocale from 'view-design/dist/locale/zh-CN'
// import enLocale from 'iview/dist/locale/en-US'

// 自动设置语言
// const navLang = navigator.language
// const localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false
// const lang = window.localStorage.lang || localLang || 'zh-CN'

// 固定中文
// Vue.config.lang = lang
Vue.config.lang = 'zh-CN'

// 多语言配置
const locales = Locales
const mergeZH = Object.assign(zhLocale, locales['zh-CN'])
// const mergeEN = Object.assign(enLocale, locales['en-US'])
Vue.locale('zh-CN', mergeZH)
// Vue.locale('en-US', mergeEN)
