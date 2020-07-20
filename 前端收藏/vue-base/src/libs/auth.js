import Vue from 'vue'
import store from '@/store'

const dataResList = {
  0: () => Vue.t('auth.dataType.all'),
  1: () => Vue.t('auth.dataType.creater'),
  2: () => Vue.t('auth.dataType.department'),
  3: () => Vue.t('auth.dataType.region'),
  4: () => Vue.t('auth.dataType.projectTeam'),
  5: () => Vue.t('auth.dataType.partner'),
  6: () => Vue.t('auth.dataType.docChargeRegion'),
  7: () => Vue.t('auth.dataType.reportChargeRegion'),
  8: () => Vue.t('auth.dataType.teamManager'),
  9: () => Vue.t('auth.dataType.teamSupervisor')
}

/**
 * 同指令v-auth
 */
const auth = function (value) {
  if (value) {
    const features = store.getters.userAuth.features
    const hasPermission = features.includes(value)
    return hasPermission
  } else {
    return false
  }
}

/**
 *
 * 用于规范权限定义，避免重复以及层级变量标准化
 */
const featureAuth = {
  team: {
    add: 'team.add',
    setting: 'team.setting'
  },
  baseData: {
    workSet: {
      tab: {
        doc: 'baseData.workSet.tab.doc',
        report: 'baseData.workSet.tab.report'
      }
    }
  },
  doc: {
    workRequest: {
      button: {
        new: 'doc.workRequest.button.new',
        delete: 'doc.workRequest.button.delete'
      }
    }
  }
}

export {
  dataResList,
  featureAuth,
  auth
}
