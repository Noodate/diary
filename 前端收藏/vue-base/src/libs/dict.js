import Vue from 'vue'
import Util from '@/libs/util'

const keyValue = {
  global: {
    DISABLE_ENABLE_STATUS: {
      0: () => Vue.t('global.dict.disableEnableStatus.disable'),
      1: () => Vue.t('global.dict.disableEnableStatus.enable')
    },
    LOCK_STATUS: {
      0: () => Vue.t('global.dict.lockStatus.unlocked'),
      1: () => Vue.t('global.dict.lockStatus.locked')
    },
    WFSTEP_ACTION: {
      0: () => Vue.t('global.dict.wfStepAction.summitted'),
      1: () => Vue.t('global.dict.wfStepAction.recalled'),
      2: () => Vue.t('global.dict.wfStepAction.waitApproval'),
      3: () => Vue.t('global.dict.wfStepAction.rejected'),
      4: () => Vue.t('global.dict.wfStepAction.approved')
    },
    BUDGETVARIATION_STATUS: {
      0: () => Vue.t('global.dict.budgetVariationStatus.unsubmit'),
      1: () => Vue.t('global.dict.budgetVariationStatus.waitApproval'),
      2: () => Vue.t('global.dict.budgetVariationStatus.approved'),
      3: () => Vue.t('global.dict.budgetVariationStatus.rejected')
    },
    DATE_FORMAT: {
      'yyyy-MM-dd': () => Vue.t('global.dict.dateFormat.yyyyMMdd'),
      'yyyy-MM-dd HH:mm:ss': () => Vue.t('global.dict.dateFormat.yyyyMMddHHmmss'),
      'yyyy': () => Vue.t('global.dict.dateFormat.yyyy'),
      'yyyy-MM': () => Vue.t('global.dict.dateFormat.yyyyMM'),
      'yyyy年MM月dd日': () => Vue.t('global.dict.dateFormat.yearMonthDay'),
      'yyyy/MM/dd': () => Vue.t('global.dict.dateFormat.yyyyMmdd')
    },
    NUMBER_FORMAT: {
      '0': () => Vue.t('global.dict.numberFormat.General'),
      '0.00': () => Vue.t('global.dict.numberFormat.twoDecimal'),
      '#,##0': () => Vue.t('global.dict.numberFormat.thousands'),
      '#,##0.00': () => Vue.t('global.dict.numberFormat.thousandsTwoDecimal'),
      '0%': () => Vue.t('global.dict.numberFormat.percent'),
      '0.00%': () => Vue.t('global.dict.numberFormat.percentTwoDecimal'),
      '0.00E+00': () => Vue.t('global.dict.numberFormat.scientificNotation')
    }
  },
  confirmation: {
    WDPLAN_STATUS: {
      0: () => Vue.t('global.dict.wdplanStatus.unsubmit'),
      1: () => Vue.t('global.dict.wdplanStatus.waitApproval'),
      2: () => Vue.t('global.dict.wdplanStatus.approved'),
      3: () => Vue.t('global.dict.wdplanStatus.rejected')
    },
    SHOW_TESNO: {
      0: () => Vue.t('global.dict.isShow.hide'),
      1: () => Vue.t('global.dict.isShow.show')
    },
    LIST_HZ_STATUS: {
      0: () => Vue.t('global.dict.hzListStatus.noCreateAll'),
      1: () => Vue.t('global.dict.hzListStatus.createAll')
    },
    SCJOBAPPLICATION_STATUS: {
      0: () => Vue.t('global.dict.hzWorkStatus.unsubmit'),
      1: () => Vue.t('global.dict.hzWorkStatus.waitApproval'),
      2: () => Vue.t('global.dict.hzWorkStatus.waitNotarize'),
      3: () => Vue.t('global.dict.hzWorkStatus.sensBack'),
      4: () => Vue.t('global.dict.hzWorkStatus.underway'),
      5: () => Vue.t('global.dict.hzWorkStatus.finish')
    },
    SCCONFIRMATION_STAMP: {
      0: () => Vue.t('global.dict.stamp.no'),
      1: () => Vue.t('global.dict.stamp.yes')
    },
    SCCONFIRMATION_STATUS: {
      16: () => Vue.t('global.dict.hzStatus.unSubmit'), // 未提交
      15: () => Vue.t('global.dict.hzStatus.waitApproval'), // 待审批
      14: () => Vue.t('global.dict.hzStatus.rejected'), // 已拒绝
      0: () => Vue.t('global.dict.hzStatus.unDispatch'), // 未派工
      1: () => Vue.t('global.dict.hzStatus.waitingLetter'), // 待生成函证
      2: () => Vue.t('global.dict.hzStatus.finalletter'), // 待生成最终函证
      3: () => Vue.t('global.dict.hzStatus.auditHz'), // 待收客户签章函证
      4: () => Vue.t('global.dict.hzStatus.dueOutHz'), // 待发函证
      5: () => Vue.t('global.dict.hzStatus.sentHz'), // 待回函
      6: () => Vue.t('global.dict.hzStatus.reply'), // 待核对
      7: () => Vue.t('global.dict.hzStatus.checkFinish'), // 已核对
      8: () => Vue.t('global.dict.hzStatus.declareinvalid'), // 已作废
      9: () => Vue.t('global.dict.hzStatus.finish'), // 已完成
      10: () => Vue.t('global.dict.hzStatus.return'), // 已退回
      11: () => Vue.t('global.dict.hzStatus.unreplyfinish'), // 不回函关闭
      12: () => Vue.t('global.dict.hzStatus.nextSend'), // 再次发函待确认
      13: () => Vue.t('global.dict.hzStatus.nextDueOutHz') // 待再次发函
    },
    TRACK_STATUS: {
      0: () => Vue.t('global.dict.track.approve'), // 批准
      1: () => Vue.t('global.dict.track.dispatch'), // 派工
      2: () => Vue.t('global.dict.track.createWord'), // 生成函证
      3: () => Vue.t('global.dict.track.createPDF'), // 生成最终函证
      4: () => Vue.t('global.dict.track.customerStamp'), // 客户签章
      5: () => Vue.t('global.dict.track.transmit'), // 发函
      6: () => Vue.t('global.dict.track.replyLetter'), // 回函
      7: () => Vue.t('global.dict.track.check'), // 核对
      8: () => Vue.t('global.dict.track.giveUp'), // 作废
      9: () => Vue.t('global.dict.track.close'), // 关闭
      10: () => Vue.t('global.dict.track.return'), // 退回
      11: () => Vue.t('global.dict.track.noReplyLetterClose'), // 不回函关闭
      12: () => Vue.t('global.dict.track.applyNextSend'), // 申请再次发函
      13: () => Vue.t('global.dict.track.nextSendOk'), // 确认再次发函
      14: () => Vue.t('global.dict.track.nextSend'), // 再次发函
      15: () => Vue.t('global.dict.track.giveUpAndCreate'), // 作废并创建
      16: () => Vue.t('global.dict.track.create'), // 创建
      17: () => Vue.t('global.dict.track.open'), // 开启
      18: () => Vue.t('global.dict.track.collection'), // 催收
      19: () => Vue.t('global.dict.track.cancelNextSend'), // 取消再次发函
      99: () => Vue.t('global.dict.track.adjustDispatch') // 派工调整
    },
    SCCOLLECTIONMSG_RESULTS: {
      0: () => Vue.t('global.dict.results.noTsign'),
      1: () => Vue.t('global.dict.results.signed'),
      2: () => Vue.t('global.dict.results.process'),
      3: () => Vue.t('global.dict.results.inTransit'),
      4: () => Vue.t('global.dict.results.refuseToReplyAffirm'),
      5: () => Vue.t('global.dict.results.SentLetterBack'),
      6: () => Vue.t('global.dict.results.sending'),
      7: () => Vue.t('global.dict.results.projectGroupFeedback'),
      8: () => Vue.t('global.dict.results.refuseToReply'),
      9: () => Vue.t('global.dict.results.refuseToReplyNoPass'),
      10: () => Vue.t('global.dict.results.rests')
    },
    SCPROBLEM_STATUS: {
      1: () => Vue.t('global.dict.problemHzStatus.noneProcess'), // 未处理
      2: () => Vue.t('global.dict.problemHzStatus.alreadyProcess') // 已处理
    }
  },
  team: {
    track: {
      0: () => Vue.t('team.dict.track.join'),
      1: () => Vue.t('team.dict.track.quit'),
      2: () => Vue.t('team.dict.track.lendOut'),
      3: () => Vue.t('team.dict.track.lendIn'),
      4: () => Vue.t('team.dict.track.lendOver')
    },
    type: {
      'doc': () => Vue.t('team.dict.type.doc'),
      'report': () => Vue.t('team.dict.type.report')
    },
    loanStatus: {
      0: () => Vue.t('team.dict.loanStatus.noLoan'),
      1: () => Vue.t('team.dict.loanStatus.loaning'),
      2: () => Vue.t('team.dict.loanStatus.endLoan')
    },
    doc: {
      role: {
        0: () => Vue.t('team.dict.doc.role.businessManager'),
        1: () => Vue.t('team.dict.doc.role.docManager'),
        2: () => Vue.t('team.dict.doc.role.docMailManager'),
        3: () => Vue.t('team.dict.doc.role.collector'),
        4: () => Vue.t('team.dict.doc.role.superviso')
      }
    },
    report: {
      role: {
        0: () => Vue.t('team.dict.report.role.businessManager'),
        2: () => Vue.t('team.dict.report.role.editor'),
        3: () => Vue.t('team.dict.report.role.auditor'),
        4: () => Vue.t('team.dict.report.role.superviso'),
        5: () => Vue.t('team.dict.report.role.composingUser')
      }
    }
  },
  report: {
    SCRPTWDPLAN_STATUS: {
      0: () => Vue.t('global.dict.wdplanStatus.unsubmit'),
      1: () => Vue.t('global.dict.wdplanStatus.waitApproval'),
      2: () => Vue.t('global.dict.wdplanStatus.approved'),
      3: () => Vue.t('global.dict.wdplanStatus.rejected')
    },
    SCRPTPRJGROUPWD_ACTION: {
      0: () => Vue.t('global.dict.reportAction.projectGroup'),
      1: () => Vue.t('global.dict.reportAction.authorized'),
      2: () => Vue.t('global.dict.reportAction.checkOut'),
      3: () => Vue.t('global.dict.reportAction.compose'),
      4: () => Vue.t('global.dict.reportAction.audit'),
      5: () => Vue.t('global.dict.reportAction.authorizedSendBack'),
      6: () => Vue.t('global.dict.reportAction.checkOutSendBack'),
      7: () => Vue.t('global.dict.reportAction.composeSendBack'),
      8: () => Vue.t('global.dict.reportAction.auditSendBack'),
      9: () => Vue.t('global.dict.reportAction.projectGroupSendBack'),
      10: () => Vue.t('global.dict.reportAction.auditSuccess'),
      11: () => Vue.t('global.dict.reportAction.dispatch')
    },
    SCRPTPRJGROUPWD_STATUS: {
      0: () => Vue.t('global.dict.groupWDStatus.unsubmit'),
      1: () => Vue.t('global.dict.groupWDStatus.waitApproval'),
      2: () => Vue.t('global.dict.groupWDStatus.unDispatch'),
      3: () => Vue.t('global.dict.groupWDStatus.rejected'),
      4: () => Vue.t('global.dict.groupWDStatus.authorizeding'),
      5: () => Vue.t('global.dict.groupWDStatus.checkOuting'),
      6: () => Vue.t('global.dict.groupWDStatus.composing'),
      7: () => Vue.t('global.dict.groupWDStatus.auditReport'),
      8: () => Vue.t('global.dict.groupWDStatus.unLook'),
      9: () => Vue.t('global.dict.groupWDStatus.affirm'),
      10: () => Vue.t('global.dict.groupWDStatus.rptGroupSend'),
      11: () => Vue.t('global.dict.groupWDStatus.close')
    },
    PMBUSUTAKE: {
      0: () => Vue.t('global.dict.pmbusutake.pmbusutake0'),
      1: () => Vue.t('global.dict.pmbusutake.pmbusutake1'),
      2: () => Vue.t('global.dict.pmbusutake.pmbusutake2')
    },
    PMRISKCATE: {
      'A': () => Vue.t('report.dict.pmriskcateType.A'),
      'B': () => Vue.t('report.dict.pmriskcateType.B'),
      'C': () => Vue.t('report.dict.pmriskcateType.C'),
      'D': () => Vue.t('report.dict.pmriskcateType.D'),
      'E': () => Vue.t('report.dict.pmriskcateType.E'),
      'F': () => Vue.t('report.dict.pmriskcateType.F')
    },
    ISMAINRPT: {
      0: () => Vue.t('global.dict.ismainrpt.ismainrpt0'),
      1: () => Vue.t('global.dict.ismainrpt.ismainrpt1')
    },
    SCRPTTEMPLATES_TYPE: {
      // 0、封面：FM 1、审计报告：BG 2、财务报表： BB 3、财务报表附注： FZ
      'FM': () => Vue.t('report.dict.reprtTemplatesType.cover'),
      'BG': () => Vue.t('report.dict.reprtTemplatesType.auditReport'),
      'BB': () => Vue.t('report.dict.reprtTemplatesType.financialStatements'),
      'FZ': () => Vue.t('report.dict.reprtTemplatesType.financialStatementsNotes')
    },
    REPORT_LEVAL: {
      'A': () => Vue.t('report.dict.reportLeval.A'),
      'B': () => Vue.t('report.dict.reportLeval.B'),
      'C': () => Vue.t('report.dict.reportLeval.C')
    },
    REPORTSERVICE_TYPE: {
      0: () => Vue.t('report.dict.reportServiceType.ALL'),
      1: () => Vue.t('report.dict.reportServiceType.SOME'),
      2: () => Vue.t('report.dict.reportServiceType.ONE')
    },
    DISPOSEADVICE_TYPE: {
      0: () => Vue.t('report.dict.disposeAdviceType.sendBack'),
      1: () => Vue.t('report.dict.disposeAdviceType.disPatch'),
      2: () => Vue.t('report.dict.disposeAdviceType.overTash')
    },
    SOMEONE_TYPE: {
      0: () => Vue.t('report.reportCenterManage.workflowMsg.personnel'),
      1: () => Vue.t('report.reportCenterManage.workflowMsg.checkMan'),
      2: () => Vue.t('report.reportCenterManage.workflowMsg.typographicMan')
    },
    SOMEONE_TYPE1: {
      1: () => Vue.t('report.reportCenterManage.workflowMsg.checkMan'),
      2: () => Vue.t('report.reportCenterManage.workflowMsg.typographicMan')
    },
    SOMEONE_TYPE2: {
      2: () => Vue.t('report.reportCenterManage.workflowMsg.typographicMan')
    }
  },
  personCard: {
    PERSONCARD_STATUS: {
      0: () => Vue.t('global.dict.personCardStatus.waitApproval'), // 待审批
      1: () => Vue.t('global.dict.personCardStatus.approved'), // 已通过
      2: () => Vue.t('global.dict.personCardStatus.rejected'), // 已拒绝
      3: () => Vue.t('global.dict.personCardStatus.unsubmit') // 未提交-更名为暂存待办
    }
  }
}

let format = function (type, key) {
  if (key === undefined || key === null || key === '') {
    return ''
  }
  return Util.getObjectValueByPath(type + '.' + key, keyValue)()
}

let getDict = function (type) {
  const dictObj = Util.getObjectValueByPath(type, keyValue)
  let dictArr = []
  Object.keys(dictObj).forEach(key => {
    dictArr.push({
      id: key,
      name: dictObj[key]()
    })
  })
  return dictArr
}
export {
  format,
  getDict
}
