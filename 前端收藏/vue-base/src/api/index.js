import axios from 'axios'
// import iView from 'iview'
import ViewUI from 'view-design'
import config from '@/config/config'
import qs from 'qs'
// 是否允许携带cookie
axios.defaults.withCredentials = false

const instance = axios.create({
  baseURL: config.api.url,
  timeout: config.api.timeout
})
// 管理axios的loading效果
const loading = {
  count: 0,
  isLoading: false,
  satrt () {
    this.count += 1
    if (!this.isLoading) {
      setTimeout(() => {
        if (!this.isLoading && this.count > 0) {
          this.isLoading = true
          this.checkLoading()
        }
      }, 1000)
    }
  },
  cancel () {
    this.count -= 1
    if (this.count <= 0) {
      this.done()
    }
  },
  done () {
    this.count = 0
    this.isLoading = false
    ViewUI.LoadingBar.finish()
  },
  error () {
    this.count -= 1
    if (this.count <= 0) {
      ViewUI.LoadingBar.error()
    }
  },
  checkLoading () {
    const el = document.querySelector('.ivu-loading-bar')
    if (this.isLoading && !el) {
      ViewUI.LoadingBar.start()
    }
  }
}

instance.interceptors.request.use((config) => {
  // 调整application/json为form提交方式
  // config.headers['content-type'] = 'application/json; charset=UTF-8'
  // config.headers['Accept'] = '*/*'
  // config.headers['Cookieaaa'] = getToken()
  loading.satrt()
  return config
}, error => Promise.reject(error))

instance.interceptors.response.use((res) => {
  loading.done()
  const body = res.data
  const resultCode = body.resultCode
  // 给调用者提供一个简单的判断方法
  body.success = resultCode === 200
  return res
}, (error) => {
  loading.error()
  Promise.reject(error)
})

// 暂时忽略post get参数，且后端get存在乱码，以后处
const createAPI = (url, method, config) => {
  config = config || {}
  // 格式化对象为url的方式
  if (method === 'post') {
    return instance.post(url, qs.stringify(config.data, {}), config.config)
  } else {
    return instance.get(url, {params: config.data}, config.config)
  }
}

const u = {
  login: config => createAPI('/user/login', 'post', config),
  getCurrentUserInfo: config => createAPI('/user/getInformation', 'post', config),
  userLogout: config => createAPI('/user/loginOut', 'post', config)
}

const message = {
  message: {
    getMessageList: config => createAPI('/message/messageList!doList.action', 'post', config)
  },
  toDo: {
    getToDoList: config => createAPI('/message/toDoList!doList.action', 'post', config)
  }
}

const finder = {
  baseFinder: config => createAPI('/finder/finder!doList.action', 'post', config)
}

const select = {
  jobTagModeSelect: config => createAPI('/select/jobTagModeSelect!findJobDataList.action', 'post', config),
  userTagModeSelect: config => createAPI('/select/userTagModeSelect!findUserDataList.action', 'post', config)
}

const workflow = {
  updateStatus: config => createAPI('/center/updateRecord', 'post', config),
  submit: config => createAPI('/workflow/workflowAction!submit.action', 'post', config),
  unsubmit: config => createAPI('/workflow/workflowAction!unsubmit.action', 'post', config),
  approve: config => createAPI('/workflow/workflowAction!approve.action', 'post', config),
  reject: config => createAPI('/workflow/workflowAction!reject.action', 'post', config)
}

const file = {
  delete: config => createAPI('/file/uploadFile!delete.action', 'post', config),
  deleteTmpFile: config => createAPI('/file/officeAction!deleteTmpFile.action', 'post', config),
  updateHttpSaverFile: config => createAPI('/file/officeAction!updateHttpSaverFile.action', 'post', config),
  getOfficeEditorOptions: config => createAPI('/file/officeEditorInitAction!getOptions.action', 'post', config)
}
const auth = {
  getDetail: config => createAPI('/userManage/getUserInfo', 'post', config)
}

const team = {
  save: config => createAPI('/team/teamAction!save.action', 'post', config),
  taskInit: config => createAPI('/team/teamAction!taskInit.action', 'post', config),
  delete: config => createAPI('/team/teamDetail!deleteTeam.action', 'post', config),
  initData: config => createAPI('/team/teamAction!initData.action', 'post', config)
}

const progress = {
  progress: {
    percent: config => createAPI('/progress/actualProgressAction!percent.action', 'post', config)
  }
}
const ipManagement = {
  ipManagement: {
    save: (config) => createAPI('/IPManage/insert', 'post', config),
    findList: (config) => createAPI('/IPManage/getAllInfo', 'post', config),
    findAllList: (config) => createAPI('/IPManage/getAllInfoNoPage', 'post', config),
    delete: (config) => createAPI('/IPManage/delete', 'post', config)
  }
}

const inspectTimeManagement = {
  inspectTimeManagement: {
    save: (config) => createAPI('/Manage/insertJob', 'post', config),
    update: (config) => createAPI('/Manage/modifyJob', 'post', config),
    findList: (config) => createAPI('/Manage/getAllJob', 'post', config),
    findAllList: (config) => createAPI('/Manage/getAllJobNoPage', 'post', config),
    delete: (config) => createAPI('/Manage/deleteJob', 'post', config),
    openAll: (config) => createAPI('/Manage/refresh/all', 'post', config),
    openTemplate: (config) => createAPI('/Manage/refresh', 'post', config),
    pauseTemplate: (config) => createAPI('/Manage/pause', 'post', config),
    getDetail: (config) => createAPI('/Manage/getOneJob', 'post', config)
  }
}
export {
  u,
  message,
  workflow,
  finder,
  select,
  auth,
  team,
  file,
  progress,
  ipManagement,
  inspectTimeManagement
}
