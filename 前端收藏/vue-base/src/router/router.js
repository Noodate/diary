import Main from '@/views/Main.vue'
// import access from '@/router/ACCESS'

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: 'Login - 登录'
  },
  component: resolve => { require(['@/views/loginNp.vue'], resolve) }
}

export const page404 = {
  path: '/*',
  name: 'error-404',
  meta: {
    title: '404-页面不存在'
  },
  component: resolve => { require(['@/views/error-page/404.vue'], resolve) }
}

export const page403 = {
  path: '/403',
  meta: {
    title: '403-权限不足'
  },
  name: 'error-403',
  component: resolve => { require(['@//views/error-page/403.vue'], resolve) }
}

export const page500 = {
  path: '/500',
  meta: {
    title: '500-服务端错误'
  },
  name: 'error-500',
  component: resolve => { require(['@/views/error-page/500.vue'], resolve) }
}

export const version = {
  path: '/version',
  meta: {
    title: '版本更新日志'
  },
  name: 'version',
  component: resolve => { require(['@/views/version/Version.vue'], resolve) }
}
// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
  path: '/',
  name: 'otherRouter',
  redirect: '/ipManagement',
  component: Main,
  children: []
}

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
  // ip管理
  {
    path: '/ipManagementParent',
    name: 'ipManagementParent',
    component: Main,
    children: [
      {
        path: '/ipManagement',
        name: 'ipManagement',
        meta: {
          cacheCompName: 'IpManagement'
        },
        component: resolve => { require(['@/views/ipManagement/IpManagement.vue'], resolve) }
      }
    ]
  },
  // 巡检时间管理
  {
    path: '/inspectTimeManagementParent',
    name: 'inspectTimeManagementParent',
    component: Main,
    children: [
      {
        path: '/inspectTimeManagement',
        name: 'inspectTimeManagement',
        meta: {
          cacheCompName: 'InspectTimeManagement'
        },
        component: resolve => { require(['@/views/inspectTimeManagement/InspectTimeManagement.vue'], resolve) }
      }
    ]
  },
  // 巡检时间管理
  {
    path: '/mailManagementParent',
    name: 'mailManagementParent',
    component: Main,
    children: [
      {
        path: '/mailManagement',
        name: 'mailManagement',
        meta: {
          cacheCompName: 'MailManagement'
        },
        component: resolve => { require(['@/views/mailManagement/MailManagement.vue'], resolve) }
      }
    ]
  }
]

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
  loginRouter,
  version,
  otherRouter,
  ...appRouter,
  page500,
  page403,
  page404
]
