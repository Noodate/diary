import Util from '@/libs/util'

const type = {
  ALERT_TYPE: {
    0: 'info',
    1: 'warning',
    2: 'success',
    3: 'error'
  },
  TAG_COLOR: {
    0: 'primary',
    1: 'success',
    2: 'error',
    3: 'warning',
    4: 'default'
  },
  TEAM_LOAN_STATUS: {
    0: 'primary',
    1: 'warning',
    2: 'success'
  },
  WFSTEP_STAUS: {
    0: 'wait',
    1: 'finish',
    2: 'error',
    3: 'process'
  },
  SCJOBAPPLICATION_STATUS: {
    0: 'primary',
    1: 'success',
    2: 'warning',
    3: 'error',
    4: 'default'
  },
  SCCONFIRMATION_STAMP: {
    0: 'default',
    1: 'success'
  },
  SCCONFIRMATION_STATUS: {
    0: 'primary',
    1: 'success',
    2: 'error',
    3: 'warning',
    4: 'default'
  },
  APPROVE_NAME: {
    0: 'WdPlanDisplay',
    1: 'WorkDemandsPlanDisplay',
    2: 'WorkManageDisplay',
    3: 'PrjWorkManageDisplay',
    4: 'BudgetVariationDisplay',
    5: 'BudgetVariationDisplay',
    6: 'TeamLoanDisplay'
  },
  SCCOLLECTIONMSG_RESULTS: {
    0: 'primary',
    1: 'success',
    2: 'error',
    3: 'warning',
    4: 'default'
  }
}

const keyValue = {
  global: {
    BUDGETVARIATION_STATUS: {
      0: type.TAG_COLOR[4],
      1: type.TAG_COLOR[3],
      2: type.TAG_COLOR[1],
      3: type.TAG_COLOR[2]
    },
    DISABLE_ENABLE_STATUS: {
      0: type.TAG_COLOR[2],
      1: type.TAG_COLOR[1]
    },
    LOCK_STATUS: {
      0: type.TAG_COLOR[1],
      1: type.TAG_COLOR[3]
    },
    TEAM_TYPE: {
      'doc': type.TAG_COLOR[0],
      'report': type.TAG_COLOR[1]
    },
    TEAM_LOAN_STATUS: {
      0: type.TEAM_LOAN_STATUS[0],
      1: type.TEAM_LOAN_STATUS[1],
      2: type.TEAM_LOAN_STATUS[2]
    },
    WFSTEP_ACTION: {
      0: type.WFSTEP_STAUS[1], // 提交
      1: type.WFSTEP_STAUS[1], // 撤回
      2: type.WFSTEP_STAUS[3], // 待审批
      3: type.WFSTEP_STAUS[2], // 拒绝
      4: type.WFSTEP_STAUS[1] // 批准
    },
    SCCONFIRMATION_STATUS: {
      0: type.WFSTEP_STAUS[3],
      1: type.WFSTEP_STAUS[3],
      2: type.WFSTEP_STAUS[3],
      3: type.WFSTEP_STAUS[3],
      4: type.WFSTEP_STAUS[3],
      5: type.WFSTEP_STAUS[3],
      6: type.WFSTEP_STAUS[3],
      7: type.WFSTEP_STAUS[3],
      8: type.WFSTEP_STAUS[2],
      9: type.WFSTEP_STAUS[1]
    },
    APPROVE_TYPE: {
      'CONFIRMATIONWORKPLAN': type.APPROVE_NAME[0],
      'REPORTWORKPLAN': type.APPROVE_NAME[1],
      'PRJGROUPWORKMANAGE': type.APPROVE_NAME[2],
      'CONFIRMATIONWORKMANAGE': type.APPROVE_NAME[3],
      'REPORTBUDGETADJUST': type.APPROVE_NAME[4],
      'CONFIRMATIONBUDGETADJUST': type.APPROVE_NAME[5],
      'TEAMLOAN': type.APPROVE_NAME[6]
    }
  },
  confirmation: {
    WDPLAN_STATUS: {
      0: type.TAG_COLOR[4],
      1: type.TAG_COLOR[3],
      2: type.TAG_COLOR[1],
      3: type.TAG_COLOR[2]
    },
    SCPROBLEM_STATUS: {
      1: type.TAG_COLOR[2],
      2: type.TAG_COLOR[1]
    },
    SCJOBAPPLICATION_STATUS: {
      0: type.SCJOBAPPLICATION_STATUS[4],
      1: type.SCJOBAPPLICATION_STATUS[2],
      2: type.SCJOBAPPLICATION_STATUS[2],
      3: type.SCJOBAPPLICATION_STATUS[3],
      4: type.SCJOBAPPLICATION_STATUS[0],
      5: type.SCJOBAPPLICATION_STATUS[1]
    },
    SCCONFIRMATION_STAMP: {
      0: type.SCCONFIRMATION_STAMP[0],
      1: type.SCCONFIRMATION_STAMP[1]
    },
    SCCONFIRMATION_STATUS: {
      16: type.SCCONFIRMATION_STATUS[4],
      15: type.SCCONFIRMATION_STATUS[3],
      14: type.SCCONFIRMATION_STATUS[2],
      0: type.SCCONFIRMATION_STATUS[4],
      1: type.SCCONFIRMATION_STATUS[3],
      2: type.SCCONFIRMATION_STATUS[3],
      3: type.SCCONFIRMATION_STATUS[3],
      4: type.SCCONFIRMATION_STATUS[3],
      5: type.SCCONFIRMATION_STATUS[3],
      6: type.SCCONFIRMATION_STATUS[3],
      7: type.SCCONFIRMATION_STATUS[0],
      8: type.SCCONFIRMATION_STATUS[2],
      9: type.SCCONFIRMATION_STATUS[1],
      10: type.SCCONFIRMATION_STATUS[1],
      11: type.SCCONFIRMATION_STATUS[2],
      12: type.SCCONFIRMATION_STATUS[3],
      13: type.SCCONFIRMATION_STATUS[3]
    },
    SCCOLLECTIONMSG_RESULTS: {
      0: type.SCCOLLECTIONMSG_RESULTS[0],
      1: type.SCCOLLECTIONMSG_RESULTS[1],
      2: type.SCCOLLECTIONMSG_RESULTS[3],
      3: type.SCCOLLECTIONMSG_RESULTS[3],
      4: type.SCCOLLECTIONMSG_RESULTS[3],
      5: type.SCCOLLECTIONMSG_RESULTS[3],
      6: type.SCCOLLECTIONMSG_RESULTS[3],
      7: type.SCCOLLECTIONMSG_RESULTS[3],
      8: type.SCCOLLECTIONMSG_RESULTS[2],
      9: type.SCCOLLECTIONMSG_RESULTS[3],
      10: type.SCCOLLECTIONMSG_RESULTS[3]
    }
  },
  report: {
    SCRPTWDPLAN_STATUS: {
      0: type.TAG_COLOR[4],
      1: type.TAG_COLOR[3],
      2: type.TAG_COLOR[1],
      3: type.TAG_COLOR[2]
    },
    SCRPTPRJGROUPWD_STATUS: {
      0: type.TAG_COLOR[4],
      1: type.TAG_COLOR[3],
      2: type.TAG_COLOR[1],
      3: type.TAG_COLOR[2],
      4: type.TAG_COLOR[3],
      5: type.TAG_COLOR[3],
      6: type.TAG_COLOR[3],
      7: type.TAG_COLOR[3],
      8: type.TAG_COLOR[1],
      9: type.TAG_COLOR[1],
      10: type.TAG_COLOR[2],
      11: type.TAG_COLOR[1],
      12: type.TAG_COLOR[2]
    }
  },
  personCard: {
    PERSONCARD_STATUS: {
      0: type.TAG_COLOR[3], // 待审批
      1: type.TAG_COLOR[1], // 已通过
      2: type.TAG_COLOR[2], // 已拒绝
      3: type.TAG_COLOR[0] // 未提交-更名为暂存待办
    }
  }
}

let format = function (type, key) {
  if (key === undefined || key === null || key === '') {
    return ''
  }
  return Util.getObjectValueByPath(type + '.' + key, keyValue)
}

export default format
