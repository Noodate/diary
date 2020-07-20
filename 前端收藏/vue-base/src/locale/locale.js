import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
export default {
  'zh-CN': {
    menu: {
      ipManagement: {
        display: '新建Ip地址'
      },
      inspectTimeManagement: {
        display: '新建巡检时间'
      },
      mailManagement: {
        display: '新建邮箱配置'
      }
    },
    global: {
      projectName: '浙江银行审核平台',
      copyright: 'Copyright  ©2019 金融要客',
      version: {
        title: '功能日志',
        subtitle: '看看我们最近更新了什么'
      },
      button: {
        login: '登录',
        new: '新建',
        edit: '修改',
        save: '保存',
        delete: '删除',
        search: '搜索',
        ok: '确认',
        load: '加载',
        reload: '重新加载',
        reset: '重置',
        setting: '设置',
        help: '帮助',
        approve: '批准',
        reject: '拒绝',
        submit: '提交',
        expandAll: '展开全部',
        cancelExpand: '取消展开',
        create: '创建',
        notCreate: '不创建',
        close: '关闭',
        cancel: '取消',
        seniorSearch: '高级搜索',
        select: '选择',
        clear: '清空',
        viewAll: '查看全部',
        setToAllRead: '全部置为已读',
        setRead: '置为已读',
        cancelRead: '置为未读',
        more: '更多内容',
        add: '添加',
        open: '开启',
        downloadByGroup: '批量下载',
        enable: '启用',
        disable: '禁用',
        yes: '是',
        no: '否',
        modified: '已',
        unmodified: '未',
        import: '导入',
        exit: '退出',
        end: '结束',
        modification: '已修改',
        openAll: '开启全部',
        closeAll: '关闭全部'
      },
      validate: {
        validateError: '验证失败',
        fieldRequired: '{name}不能为空',
        fieldRange: '{name}应在{startNum}-{endNum}字符内',
        chooseAtLeastOne: '请至少选择一项',
        codeRepeat: '该编号已存在',
        nameRepeat: '该名称已存在'
      },
      message: {
        confirmDel: '确认删除？',
        confirmDelContent: '删除后不能撤回，是否继续执行删除操作？',
        confirmDeleteStatus: '只能删除状态为未暂存待办或已拒绝的单据',
        loading: '加载中',
        dataOver: '所有数据已加载',
        itemNumber: '共 {number} 条',
        submitOn: '提交于',
        approveOn: '批准于',
        rejectOn: '拒绝于'
      },
      tip: {
        sendBackSuccess: '退回成功',
        sendBackError: '退回失败',
        taskSuccess: '派工成功',
        taskError: '派工失败',
        nullifySuccess: '作废成功',
        nullifyError: '作废失败',
        closeSuccess: '关闭成功',
        closeError: '关闭失败',
        modifiSuccess: '修改成功',
        modifiError: '修改失败',
        saveSuccess: '保存成功',
        saveError: '保存失败',
        openSuccess: '开启成功',
        openError: '开启失败',
        sendSuccess: '发件成功',
        sendError: '发件失败',
        checkError: '核对失败',
        submitSuccess: '提交成功',
        submitError: '提交失败',
        approveSuccess: '批准成功',
        approveError: '批准失败',
        unsubmitSuccess: '撤回成功',
        unsubmitError: '撤回失败',
        deleteSuccess: '删除成功',
        deleteError: '删除失败',
        rejectSuccess: '拒绝成功',
        rejectError: '拒绝失败',
        operationSuccess: '操作成功',
        operationError: '操作失败',
        importSuccess: '导入成功',
        importError: '导入失败',
        error: '错误',
        warning: '警告',
        info: '提示',
        showCode: '显示编号',
        addSuccess: '添加成功',
        taskProgress: '任务处理中',
        openAllSuccess: '全部模板开启成功！当前时间已经超过结束时间的模板不能再开启哦！',
        openAllError: '全部模板开启失败',
        closeAllSuccess: '全部模板关闭成功',
        closeAllError: '全部模板关闭失败',
        detailError: '查看详情失败'
      },
      fields: {
        creater: '创建人',
        createDate: '创建日期',
        createDept: '提交人部门',
        status: '状态',
        operator: '操作人',
        operatorDate: '操作日期',
        rejectComment: '拒绝意见',
        code: '编号',
        name: '姓名',
        gender: '性别',
        nation: '民族',
        birth: '出生',
        address: '住址'
      },
      search: {
        search: '搜索',
        reset: '重置',
        unfold: '展开',
        packup: '收起',
        placeholder: {
          keyword: '请输入关键字',
          codeOrName: '请输入员工编号或姓名'
        },
        tip: {
          searchPrecisionWarning: '当前记录过多,未全部列示，请提高查找精度。'
        }
      },
      finder: {
        empCode: '员工编号',
        empName: '员工姓名',
        orgName: '员工部门',
        jobName: '职级'
      },
      dict: {
        personCardStatus: {
          unsubmit: '暂存待办',
          waitApproval: '待审批',
          approved: '已批准',
          rejected: '已拒绝'
        },
        wfStepAction: {
          summitted: '已提交',
          recalled: '已撤回',
          waitApproval: '待审批',
          approved: '已批准',
          rejected: '已拒绝'
        },
        dateFormat: {
          yyyyMMdd: 'yyyy-MM-dd   eg: 2018-08-08',
          yyyyMMddHHmmss: 'yyyy-MM-dd HH:mm:ss eg: 2018-08-08 18:00:00',
          yyyy: 'yyyy   eg: 2018',
          yyyyMM: 'yyyy-MM   eg: 2018-08',
          yearMonthDay: 'yyyy年MM月dd日   eg: 2018年8月8日',
          yyyyMmdd: 'yyyy/Mm/dd   eg: 2018/08/08'
        },
        numberFormat: {
          General: '整数   eg: 1',
          twoDecimal: '2位小数 eg: 1.00',
          thousands: '千分位   eg: 1,000',
          thousandsTwoDecimal: '千分位+2位小数  eg: 1,000.00',
          percent: '百分比   eg: 90%',
          percentTwoDecimal: '百分比+2位小数   eg: 90.08%',
          scientificNotation: '科学计数法   eg: 4.09E+06'
        },
        hzListStatus: {
          noCreateAll: '未完全生成最终函证',
          createAll: '已完全生成最终函证'
        },
        disableEnableStatus: {
          disable: '已禁用',
          enable: '启用中'
        },
        lockStatus: {
          unlocked: '未锁定',
          locked: '已锁定'
        },
        isShow: {
          show: '显示',
          hide: '隐藏'
        }
      },
      placeholder: {
        input: '请输入',
        inputNumber: '请输入数字',
        selectDate: '请选择日期',
        type: '请选择类型',
        select: '请选择',
        groupDescription: '简单描述该小组，便于他人理解（选填）'
      }
    },
    department: {
      fields: {
        dept: '部门'
      }
    },
    job: {
      fields: {
        job: '职级'
      }
    },
    user: {
      fields: {
        user: '员工'
      }
    },
    login: {
      message: {
        title: '摄像头监控系统',
        introdue: ' 浙江分行-开户E系统',
        username: '请输入用户名',
        password: '请输入密码',
        login: '欢迎您来到开户E系统！',
        autoLogin: '自动登录',
        forgotPassword: '忘记密码？'
      },
      fields: {},
      validate: {
        username: '用户名不能为空',
        password: '密码不能为空',
        noUsername: '用户名不存在',
        passwordError: '密码错误',
        usernameDisable: '您的账户已被禁用，请联系管理员'
      }
    },
    main: {
      home: '首页',
      userNav: {
        ownSpace: '个人中心',
        loginout: '退出登录'
      }
    },
    profile: {
      fields: {
        userCode: '员工编号',
        userName: '姓名',
        userJobName: '职级',
        userDepartmentName: '部门',
        userMail: '邮箱',
        userMobile: '手机',
        telephone: '电话',
        fax: '传真'
      },
      tip: {
        edit: '点击图标开始修改字段'
      }
    },
    workflow: {
      actionModal: {
        title: {
          submit: '提交',
          unsubmit: '撤回',
          approve: '批准',
          reject: '拒绝',
          sendBack: '退回',
          task: '派工',
          workOut: '编制',
          checkUp: '核对',
          nextTask: '重新派工',
          composing: '排版',
          endAduit: '最终审批'
        },
        validate: {
          commentRequired: '备注不能为空',
          commentRange: '备注长度应在2-128字符内'
        }
      },
      wfStep: {
        title: '审批轨迹',
        finish: '完成',
        tip: {
          noData: '暂无数据',
          noLoan: '暂无借调人员'
        }
      }
    },
    ipManagement: {
      field: {
        code: '编号',
        ipAddress: 'Ip地址',
        department: '所属分行',
        createTime: '创建时间',
        port: '端口',
        desc: '描述',
        name: '摄像头名称',
        project: '分行所属项目名称'
      },
      placeholder: {
        ipAddress: '请输入Ip地址',
        port: '请输入端口',
        department: '请输入所属分行',
        desc: '请填写描述',
        name: '请输入摄像头名称',
        project: '请输入分行所属项目名称'
      },
      tip: {
        noDelete: '所选ip已在巡检时间管理中被引用，不可删除！'
      }
    },
    inspectTimeManagement: {
      field: {
        code: '编号',
        startTime: '开始时间',
        endTime: '结束时间',
        rate: '巡检频次',
        ips: '适配ip',
        isdefault: '是否开启',
        name: '模板名称',
        isWeekend: '周末是否开启巡检'
      },
      placeholder: {
        startTime: '请选择开始时间',
        endTime: '请选择结束时间',
        rate: '请选择巡检频次',
        ips: '适配ip',
        name: '请输入模板名称'
      },
      tip: {
        saveSuccessAndOpen: '保存成功！默认为关闭状态，如有需要请手动开启！',
        saveError: '保存失败',
        openSuccess: '开启成功',
        openError: '开启失败',
        closeSuccess: '关闭成功',
        closeError: '关闭失败',
        timeoutOpenError: '开启失败！当前时间已大于结束时间，模板不能开启哦！'
      }
    },
    mailManagement: {
      field: {
        code: '编号',
        mail: '电子邮箱'
      },
      placeholder: {
        mail: '请输入电子邮箱地址',
        endTime: '请选择结束时间',
        rate: '请选择巡检频次',
        ips: '适配ip',
        name: '请输入模板名称'
      },
      tip: {
        saveSuccessAndOpen: '保存成功！默认为关闭状态，如有需要请手动开启！',
        saveError: '保存失败',
        openSuccess: '开启成功',
        openError: '开启失败',
        closeSuccess: '关闭成功',
        closeError: '关闭失败'
      }
    }
  },
  'en-US': {}
}
