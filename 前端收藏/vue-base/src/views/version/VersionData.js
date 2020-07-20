// let getUrl = (code) => `<a href="http://172.30.100.124:8080/browse/${code}">${code}</a>`

let VersionData = {
  title: '更新日志',
  timeLineItems: [
    // {
    //   version: '1.1.12',
    //   time: '2019-03-08',
    //   contentItems: [
    //     {content: '新增函证作废后带入被询证者信息。', type: 'isNewFeatures'},
    //     {content: '修复特殊类函证作废后没有原始函证附件的问题。', type: 'isBugFixes'},
    //     {content: '修复导入发件信息没计入轨迹的问题。', type: 'isBugFixes'},
    //     {content: '修复函证重复关闭的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.1.11',
    //   time: '2019-03-07',
    //   contentItems: [
    //     {content: '优化函证的操作轨迹。', type: 'isRefactorings'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.1.10',
    //   time: '2019-03-06',
    //   contentItems: [
    //     {content: '修改不回函关闭时不会将催收次数清零，重新开启后无需再次催收三次，就可以进行不回函关闭操作。', type: 'isNewFeatures'},
    //     {content: '修改人员借调中填写多位预计借调天数时，输入框失去焦点的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.1.9',
    //   time: '2019-03-04',
    //   contentItems: [
    //     {content: '发函信息查询报表新增工作申请单编号、函证负责人字段。', type: 'isNewFeatures'},
    //     {content: '修复发函信息查询中数据权限不正确的问题。', type: 'isBugFixes'},
    //     {content: '重构函证编号生成规则，修复函证编号偶现重复的问题。', type: 'isRefactorings'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.1.8',
    //   time: '2019-02-28',
    //   contentItems: [
    //     {content: '修复函证工作申请单预算工时偶现超出的问题。', type: 'isBugFixes'},
    //     {content: '修复函证工作申请单修改后保存报错的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.1.7',
    //   time: '2019-02-27',
    //   contentItems: [
    //     {content: '新增发函信息查询报表。', type: 'isNewFeatures'},
    //     {content: '修复函证退回按钮显示不正确的问题。', type: 'isBugFixes'},
    //     {content: '修复报告模板关系设置中点击新建弹框后，遮罩失效的问题。', type: 'isBugFixes'},
    //     {content: '调整主菜单，当子菜单只有一个二级菜单时，父级菜单也进行显示。', type: 'isRefactorings'},
    //     {content: '优化生成最终函证项目组邮件提醒内容。', type: 'isRefactorings'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.1.6',
    //   time: '2019-02-22',
    //   contentItems: [
    //     {content: '增加生成函证和生成最终函证前的附件校验功能。', type: 'isNewFeatures'},
    //     {content: '增加特殊类函证上传附件提示。', type: 'isNewFeatures'},
    //     {content: '增加函证导入未拆分文件时标题字体校验提示。', type: 'isNewFeatures'},
    //     {content: '增加函证未提交、待审批、已拒绝状态，同工作申请单保持一致。', type: 'isNewFeatures'},
    //     {content: '增加函证不回函关闭的轨迹记录。', type: 'isNewFeatures'},
    //     {content: '增加生成最终函证失败后的错误提示。', type: 'isNewFeatures'},
    //     {content: '优化收发室信息收件人信息导出，新增状态列。', type: 'isNewFeatures'},
    //     {content: '修复函证日工作报表催收人页签未催收一列数据不正确的问题。', type: 'isBugFixes'},
    //     {content: '修复函证已完成后还可继续派工的问题。', type: 'isBugFixes'},
    //     {content: '优化生成函证和生成最终函证容错率。', type: 'isRefactorings'},
    //     {content: '优化生成函证和生成最终函证时的进度条样式。', type: 'isRefactorings'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.1.5',
    //   time: '2019-02-19',
    //   contentItems: [
    //     {content: '增加取消再次发件按钮。', type: 'isNewFeatures'},
    //     {content: '修复函证收件人信息导出待再次发函数据没有扫描批次号的问题。', type: 'isBugFixes'},
    //     {content: '修复导入拆分由于函证标题字体导致拆分失败的问题。', type: 'isBugFixes'},
    //     {content: '修复导入拆分函证提示数量不正确的问题。', type: 'isBugFixes'},
    //     {content: '修复函证可以重复派工的问题。', type: 'isBugFixes'},
    //     {content: '修复函证可以重复核对的问题。', type: 'isBugFixes'},
    //     {content: '修复特殊函证由于附件过长导致保存失败的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.1.4',
    //   time: '2019-02-16',
    //   contentItems: [
    //     {content: '提高服务器负载性能。', type: 'isNewFeatures'},
    //     {content: '扫描已发函过的待发客户签章函证时，系统自动发起二次发函确认申请。', type: 'isNewFeatures'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.1.3',
    //   time: '2019-02-15',
    //   contentItems: [
    //     {content: '修复函证工作申请单保存按钮没有loading的问题。', type: 'isBugFixes'},
    //     {content: '修复收发室管理菜单排序不正确的问题。', type: 'isBugFixes'},
    //     {content: '修复报告工作申请单点击修改附件不显示的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.1.2',
    //   time: '2019-02-14',
    //   contentItems: [
    //     {content: '调整批量作废按钮位置。', type: 'isRefactorings'},
    //     {content: '函证作废功能优化。', type: 'isRefactorings'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.1.1',
    //   time: '2019-02-01',
    //   contentItems: [
    //     {content: '新增函证批量作废的功能。', type: 'isNewFeatures'},
    //     {content: '提高函证导入修改处理效率。', type: 'isNewFeatures'},
    //     {content: '修复函证作废时必须创建新单据的问题。', type: 'isBugFixes'},
    //     {content: '修复报告相关轨迹重复的问题。', type: 'isBugFixes'},
    //     {content: '修复催收人页面页签不正确的问题。', type: 'isBugFixes'},
    //     {content: '修复函证日工作报表数据不正确的问题。', type: 'isBugFixes'},
    //     {content: '修复发件信息部分状态函证不能导入的问题。', type: 'isBugFixes'},
    //     {content: '修复下载合并修改函证时，pdf附件被删除的问题。', type: 'isBugFixes'},
    //     {content: '修复导入函证清单时，系统不能正确提示字符上限的问题。', type: 'isBugFixes'},
    //     {content: '修复函证详情弹窗中，关闭符号位置不合理的问题。', type: 'isBugFixes'},
    //     {content: '修复报告相关操作生效到其他单据的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.1.0 基于1.2开发文档',
    //   time: '2019-01-20',
    //   contentItems: [
    //     {content: '新增人员借调申请功能。', type: 'isNewFeatures'},
    //     {content: '新增函证模块二次发函业务处理流程。', type: 'isNewFeatures'},
    //     {content: '新增函证导出后修改，导入自动拆分替换的功能。', type: 'isNewFeatures'},
    //     {content: '新增项目组特殊函证菜单，单个文件自动拆分批量导入功能。', type: 'isNewFeatures'},
    //     {content: '新增函证问题件业务处理流程。', type: 'isNewFeatures'},
    //     {content: '新增函证模块拒绝回函业务处理流程。', type: 'isNewFeatures'},
    //     {content: '新增多个回函函证，有效核对业务处理流程。', type: 'isNewFeatures'},
    //     {content: '新增下载批量合并函证PDF功能。', type: 'isNewFeatures'},
    //     {content: '新增函证是否已修改标识。', type: 'isNewFeatures'},
    //     {content: '新增已拒绝流程单据显示功能。', type: 'isNewFeatures'},
    //     {content: '重新规划设计了催收人管理、收发室管理、核对函证菜单。', type: 'isNewFeatures'},
    //     {content: '更新系统链接为安全的https地址。', type: 'isNewFeatures'},
    //     {content: 'v1.2文档其他内容及大量优化调整。', type: 'isNewFeatures'},
    //     {content: '修复函证内容及二维码同单据不匹配的问题。', type: 'isBugFixes'},
    //     {content: '其他：大量BUG修复。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.31',
    //   time: '2019-01-15',
    //   contentItems: [
    //     {content: '更新函证二维码生成时的纠错级别。', type: 'isNewFeatures'},
    //     {content: '修复待回函作废时，不能同时创建新函证的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.30',
    //   time: '2019-01-14',
    //   contentItems: [
    //     {content: '函证编号现在财年内使用统一流水号。', type: 'isNewFeatures'},
    //     {content: '收发室管理收件人信息导出中增加扫描批次号。', type: 'isNewFeatures'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.29',
    //   time: '2019-01-12',
    //   contentItems: [
    //     {content: '修复函证生成时负数的数字格式化不正确的问题。', type: 'isBugFixes'},
    //     {content: '修复函证修改时表格无法删除的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.28',
    //   time: '2019-01-10',
    //   contentItems: [
    //     {content: '修复函证审批时全部函证导出不正确的问题。', type: 'isBugFixes'},
    //     {content: '优化生成最终函证项目组邮件提醒内容。', type: 'isRefactorings'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.27',
    //   time: '2019-01-09',
    //   contentItems: [
    //     {content: '修复函证工作申请单编号重复的问题。', type: 'isBugFixes'},
    //     {content: '优化函证导入时数字日期相关提示。', type: 'isRefactorings'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.26',
    //   time: '2019-01-08',
    //   contentItems: [
    //     {content: '修复函证项目组数据权限错误的问题。', type: 'isBugFixes'},
    //     {content: '修复进度追踪菜单翻页后数据错乱的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.25',
    //   time: '2019-01-07',
    //   contentItems: [
    //     {content: '收发室收件人信息导出按钮增加不勾选单据则默认导出当前列表功能。', type: 'isNewFeatures'},
    //     {content: '修复函证状态为不回函关闭不能回函的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.24',
    //   time: '2019-01-04',
    //   contentItems: [
    //     {content: '修复函证字段是否关键函证及是否加盖共享专用章不能正确导入的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.23',
    //   time: '2018-12-27',
    //   contentItems: [
    //     {content: '修复函证工作申请单浏览器前台报错的问题。', type: 'isBugFixes'},
    //     {content: '修复函证退回后无法生成函证的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.22',
    //   time: '2018-12-24',
    //   contentItems: [
    //     {content: '函证催收结果增加“发函在途”、“待项目组反馈信息”下拉选项。', type: 'isNewFeatures'},
    //     {content: '修复函证模板生成函证后，数字不能正确显示的问题。', type: 'isBugFixes'},
    //     {content: '修复函证相关菜单分页不正确的问题。', type: 'isBugFixes'},
    //     {content: '修复函证模板选择函证类型时样式错误的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.21',
    //   time: '2018-12-21',
    //   contentItems: [
    //     {content: '修复生成最终函证报错的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.20',
    //   time: '2018-12-20',
    //   contentItems: [
    //     {content: '修复特殊类函证进度追踪明细无法查看附件的问题。', type: 'isBugFixes'},
    //     {content: '修复生成最终函证时待发送邮件电话显示不正确的问题。', type: 'isBugFixes'},
    //     {content: '修复函证需求计划填写预算工时，总数计算不正确的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.19',
    //   time: '2018-12-18',
    //   contentItems: [
    //     {content: '修复核对函证回函时间取值错误的问题。', type: 'isBugFixes'},
    //     {content: '修复发函和回函附件日期格式显示错误的问题。', type: 'isBugFixes'},
    //     {content: '修复函证进度追踪轨迹不正确的问题。', type: 'isBugFixes'},
    //     {content: '修复审批时导出所有函证不正确的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.18',
    //   time: '2018-12-13',
    //   contentItems: [
    //     {content: '修复二次发函扫描失败的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.17',
    //   time: '2018-12-11',
    //   contentItems: [
    //     {content: '函证工作管理详情中操作轨迹增加退回原因。', type: 'isNewFeatures'},
    //     {content: '修复催收人工作管理排序不正确的问题。', type: 'isBugFixes'},
    //     {content: '修复函证归档管理区域不正确的问题。', type: 'isBugFixes'},
    //     {content: '重构用户查看发函及回函文档规则，使用公共账户进行预览及下载。', type: 'isRefactorings'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.16',
    //   time: '2018-12-06',
    //   contentItems: [
    //     {content: '修复退回的工作申请单不能生成函证的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.15',
    //   time: '2018-12-06',
    //   contentItems: [
    //     {content: '修改个人中心文档预览默认模式为Office。', type: 'isRefactorings'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.14',
    //   time: '2018-12-04',
    //   contentItems: [
    //     {content: '修复函证项目组人员看不到函证附件的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.13',
    //   time: '2018-11-30',
    //   contentItems: [
    //     {content: '修复函证表格信息修改时不能保存的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.12',
    //   time: '2018-11-29',
    //   contentItems: [
    //     {content: '修复作废时，创建新单据在特殊情况下报错的问题。', type: 'isBugFixes'},
    //     {content: '修复扫描系统接口响应提示信息不正确的问题。', type: 'isBugFixes'},
    //     {content: '修复IE浏览器下，模糊框组件关闭后页面滚动条不显示的问题。', type: 'isBugFixes'},
    //     {content: '修复函证负责人日工作量报表部分数据不正确的问题。', type: 'isBugFixes'},
    //     {content: '修复函证最终审批后没有发送给提交人邮件的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.11',
    //   time: '2018-11-28',
    //   contentItems: [
    //     {content: '基于v1.0.11中beta0、beta1版本，但不包含函证催收次数与回函率报表。', type: 'isNewFeatures'},
    //     {content: '函证清单排序规则修改为编号、临时编号组合排序。', type: 'isNewFeatures'},
    //     {content: '修复锁定页面解锁按钮显示不正确的问题。', type: 'isBugFixes'},
    //     {content: '修复IE浏览器下，保存栏造成页面抖动的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.11-beta.1',
    //   time: '2018-11-28',
    //   contentItems: [
    //     {content: '函证催收次数与回收率报表增加明细导出功能', type: 'isNewFeatures'},
    //     {content: '生成的函证表格行现在可以继承原表格最小高度及段落行距样式。', type: 'isNewFeatures'},
    //     {content: '修复工作申请单函证清单翻页不正确的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.11-beta.0',
    //   time: '2018-11-22',
    //   contentItems: [
    //     {content: '函证催收次数与回函率报表重构。', type: 'isNewFeatures'},
    //     {content: '增加待发函证、待回函函证附件日期。', type: 'isNewFeatures'},
    //     {content: '修复进度追踪权限设置未成功生效的问题。', type: 'isBugFixes'},
    //     {content: '修复已核对函证还能进行扫描接口调用的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.10',
    //   time: '2018-11-21',
    //   contentItems: [
    //     {content: '基于v1.0.10中beta0、beta1、beta2版本。', type: 'isNewFeatures'},
    //     {content: '上线已预置的函证日工作量报表。', type: 'isNewFeatures'},
    //     {content: '上线已预置的报告日工作量报表。', type: 'isNewFeatures'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.10-beta.2',
    //   time: '2018-11-21',
    //   contentItems: [
    //     {content: '修复单据撤回仍存在对应代办的问题。', type: 'isBugFixes'},
    //     {content: '修复拒绝回函单据在相关菜单不显示的问题。', type: 'isBugFixes'},
    //     {content: '优化函证日工作量报表和报告日工作量报表样式。', type: 'isRefactorings'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.10-beta.1',
    //   time: '2018-11-20',
    //   contentItems: [
    //     {content: '修复函证工作管理详情页前台报错问题。', type: 'isBugFixes'},
    //     {content: '优化函证明细附件的权限控制。', type: 'isRefactorings'},
    //     {content: '优化进度追踪轨迹样式。', type: 'isRefactorings'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.10-beta.0',
    //   time: '2018-11-19',
    //   contentItems: [
    //     {content: '升级基本组件UI库，更新图标和部分样式。', type: 'isNewFeatures'},
    //     {content: '新增函证模板迁移功能。', type: 'isNewFeatures'},
    //     {content: '修复函证导入表格中存在公式造成导入失败的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.9',
    //   time: '2018-11-15',
    //   contentItems: [
    //     {content: '基于v1.0.9中beta0、beta1版本。', type: 'isNewFeatures'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.9-beta.1',
    //   time: '2018-11-15',
    //   contentItems: [
    //     {content: '收发室和催收人工作管理列表新增是否加盖共享中心专用章列。', type: 'isNewFeatures'},
    //     {content: '修复函证工作申请单是否完全生成函证字段存在没有包含已退回状态逻辑的问题。', type: 'isBugFixes'},
    //     {content: '修复函证工作申请单函证负责人传真不显示的问题。', type: 'isBugFixes'},
    //     {content: '修复审批流程批注前缀都是审批意见的问题。', type: 'isBugFixes'},
    //     {content: '修复函证工作申请单明细函证负责人标签显示不正确的问题。', type: 'isBugFixes'},
    //     {content: '监控页菜单修改名称为报表统计管理。', type: 'isRefactorings'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.9-beta.0',
    //   time: '2018-11-09',
    //   contentItems: [
    //     {content: '修复函证项目组工作申请单明细点击修改，翻页不刷新的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.8',
    //   time: '2018-11-09',
    //   contentItems: [
    //     {content: '基于v1.0.8中beta0、beta1、beta3版本，不包括beta2、beta4。', type: 'isNewFeatures'},
    //     {content: '新增函证归档管理功能。', type: 'isNewFeatures'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.8-beta.4',
    //   time: '2018-11-09',
    //   contentItems: [
    //     {content: '函证新增催收人日工作报表。', type: 'isNewFeatures'},
    //     {content: '监控页相关报表增加进度条。', type: 'isRefactorings'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.8-beta.3',
    //   time: '2018-11-08',
    //   contentItems: [
    //     {content: '修复函证工作管理申请单函证列表不显示问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.8-beta.2',
    //   time: '2018-11-07',
    //   contentItems: [
    //     {content: '监控页报表增加权限控制。', type: 'isNewFeatures'},
    //     {content: '修复函证主管工作量报表函证数量不是依据工作申请单数量的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.8-beta.1',
    //   time: '2018-11-05',
    //   contentItems: [
    //     {content: '增加函证自定义表及中间表索引，提高查询效率。', type: 'isNewFeatures'},
    //     {content: '修复函证中心工作管理下载函证文件失败的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.8-beta.0',
    //   time: '2018-11-02',
    //   contentItems: [
    //     {content: '工作管理函证清单，增加分页功能，并优化查询效率。', type: 'isNewFeatures'},
    //     {content: '优化函证模板、函证明细页面缓存。', type: 'isNewFeatures'},
    //     {content: '修复函证附件在线修改后，pdf预览时没有显示修改后内容的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.7',
    //   time: '2018-10-31',
    //   contentItems: [
    //     {content: '增加下载全部原始函证的功能。', type: 'isNewFeatures'},
    //     {content: '修复报告模板关系设置列表字段显示错误的问题。', type: 'isBugFixes'},
    //     {content: '修复个别函证没有操作轨迹的问题。', type: 'isBugFixes'},
    //     {content: '修复函证已拒绝但审批流程显示已完成的问题。', type: 'isBugFixes'},
    //     {content: '修复特殊函证生成二维码没有前缀的问题。', type: 'isBugFixes'},
    //     {content: '修复生成函证进度条卡死的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.6',
    //   time: '2018-10-31',
    //   contentItems: [
    //     {content: '增加会计主体数据同步，更改个人资料为不可编辑，同时调整函证传真数据来源。', type: 'isNewFeatures'},
    //     {content: '报告模板关系设置客户类型及经济性质更改为多选。', type: 'isNewFeatures'},
    //     {content: '函证附件显示调整，项目组现在只能看到格式为pdf的原始函证。', type: 'isNewFeatures'},
    //     {content: '修复函证回函后待办发送错误的问题。', type: 'isBugFixes'},
    //     {content: '修复审批处理中预算变更单据之间切换显示不能跳转的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.5',
    //   time: '2018-10-29',
    //   contentItems: [
    //     {content: '修复函证需求计划保存失败的问题。', type: 'isBugFixes'},
    //     {content: '修复预算变更审批时明细中总计显示数字的问题。', type: 'isBugFixes'},
    //     {content: '修复函证模板点击预览生成函证后的空白行没有替换的问题。', type: 'isBugFixes'},
    //     {content: '修复生成函证后的空白行没有替换的问题。', type: 'isBugFixes'},
    //     {content: '修复生成函证和生成最终函证超过一定数量时，显示进度不正确。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.4',
    //   time: '2018-10-26',
    //   contentItems: [
    //     {content: '基于v1.0.4中beta1、beta2、beta3版本，不包括beta0、beta4。', type: 'isNewFeatures'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.4-beta.4',
    //   time: '2018-10-25',
    //   contentItems: [
    //     {content: '监控页报表增加导出功能。', type: 'isNewFeatures'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.4-beta.3',
    //   time: '2018-10-25',
    //   contentItems: [
    //     {content: '函证负责人生成最终函证时，新增对项目组邮件提醒功能。', type: 'isNewFeatures'},
    //     {content: '报告最终审核时，新增对项目组邮件提醒功能。', type: 'isNewFeatures'},
    //     {content: '修改登录界面背景图片。', type: 'isNewFeatures'},
    //     {content: '进度跟踪列表增加被询证者单位/个人名称字段和查询条件。', type: 'isNewFeatures'},
    //     {content: '修复使用催收人工作管理点击催收报错。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.4-beta.2',
    //   time: '2018-10-23',
    //   contentItems: [
    //     {content: '函证/报告工作需求计划明细增加风险分类字段。', type: 'isNewFeatures'},
    //     {content: '进度跟踪列表增加被询证者单位/个人名称字段和查询条件。', type: 'isNewFeatures'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.4-beta.1',
    //   time: '2018-10-23',
    //   contentItems: [
    //     {content: '修复函证工作申请单列表状态不正确的问题。', type: 'isBugFixes'},
    //     {content: '优化删除收件人信息，增加校验至少保留一条有效信息。', type: 'isRefactorings'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.4-beta.0',
    //   time: '2018-10-23',
    //   contentItems: [
    //     {content: '新增函证日工作量报表报表。', type: 'isNewFeatures'},
    //     {content: '新增报告日工作量报表报表。', type: 'isNewFeatures'},
    //     {content: '新增函证催收次数与回函率报表。', type: 'isNewFeatures'},
    //     {content: '新增函证归档功能。', type: 'isNewFeatures'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.3',
    //   time: '2018-10-23',
    //   contentItems: [
    //     {content: '修复作废后直接创建的新函证，编号中缺少区域编码。', type: 'isBugFixes'},
    //     {content: '修复员工个人信息更改后，系统缓存没有刷新的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.2',
    //   time: '2018-10-18',
    //   contentItems: [
    //     {content: '修改函证工作需求计划菜单合伙人权限不正确的问题。', type: 'isBugFixes'},
    //     {content: '优化批量生成函证校验规则，工作申请单处于函证生成过程中时不能再次操作。', type: 'isRefactorings'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.1',
    //   time: '2018-10-16',
    //   contentItems: [
    //     {content: '基于beta0~beta2。', type: 'isNewFeatures'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.1-beta.2',
    //   time: '2018-10-16',
    //   contentItems: [
    //     {content: '函证模板增加函证类型。', type: 'isNewFeatures'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.1-beta.1',
    //   time: '2018-10-09',
    //   contentItems: [
    //     {content: '催收日期改为默认当前日期。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.1-beta.0',
    //   time: '2018-10-08',
    //   contentItems: [
    //     {content: '修复函证导入没有提示格式错误的问题。', type: 'isBugFixes'},
    //     {content: '修复函证导入时，没有提示被询证者信息地址有且只能启用一个。', type: 'isBugFixes'},
    //     {content: '修复函证项目组工作管理菜单，预算工时剩余为负数的情况。', type: 'isBugFixes'},
    //     {content: '修复生成的函证附件名称带前缀的问题。', type: 'isBugFixes'},
    //     {content: '优化审批轨迹的样式。', type: 'isRefactorings'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.0',
    //   time: '2018-09-29',
    //   contentItems: [
    //     {content: '基于beta0~beta40。', type: 'isNewFeatures'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.0-beta.40',
    //   time: '2018-09-29',
    //   contentItems: [
    //     {content: '函证明细列表,增加被询证者单位字段。', type: 'isNewFeatures'},
    //     {content: '核对函证增加回函附件下载预览功能。', type: 'isNewFeatures'},
    //     {content: '添加审批流程、资源管理、权限定义吊顶功能。', type: 'isNewFeatures'},
    //     {content: '修复生成函证部分字段替换失败的问题。', type: 'isBugFixes'},
    //     {content: '修复特殊类函证临时编号重复问题。', type: 'isBugFixes'},
    //     {content: '优化审批轨迹样式。', type: 'isRefactorings'},
    //     {content: '优化函证被询证者信息导入导出按钮。', type: 'isRefactorings'},
    //     {content: '优化特殊类函证被询证者信息的添加。', type: 'isRefactorings'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.0-beta.39',
    //   time: '2018-09-28',
    //   contentItems: [
    //     {content: '优化附件导入按钮样式。', type: 'isRefactorings'},
    //     {content: '优化函证导出导入的提示。', type: 'isRefactorings'},
    //     {content: '优化工作需求计划预算工时选择类型个数的填写。', type: 'isRefactorings'},
    //     {content: '优化函证收发室管理、催收人工作管理、进度追踪、项目组工作管理的表格宽度。', type: 'isRefactorings'},
    //     {content: '优化函证发件、催收、核对的模糊框位置。', type: 'isRefactorings'},
    //     {content: '优化报告附件审批轨迹样式。', type: 'isRefactorings'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.0-beta.38',
    //   time: '2018-09-27',
    //   contentItems: [
    //     {content: '修复函证中函证负责人传真不显示的问题。', type: 'isBugFixes'},
    //     {content: '去掉新建特殊类函证时，生成临时编号的.docx后缀。', type: 'isBugFixes'},
    //     {content: '优化工作申请单基本信息字段(删除拒绝原因)。', type: 'isRefactorings'},
    //     {content: '优化函证扫描接口错误提示信息。', type: 'isRefactorings'},
    //     {content: '当重新导入被询证者信息时，同一函证编号会覆盖原有信息。', type: 'isRefactorings'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.0-beta.37',
    //   time: '2018-09-27',
    //   contentItems: [
    //     {content: '增加批量生成特殊类函证的功能。', type: 'isNewFeatures'},
    //     {content: '重构附件导入失败提示界面。', type: 'isNewFeatures'},
    //     {content: '修复函证被询证者信息启用无效的问题。', type: 'isRefactorings'},
    //     {content: '优化派工效率。', type: 'isRefactorings'},
    //     {content: '优化审批轨迹页面。', type: 'isRefactorings'},
    //     {content: '优化函证催收页面。', type: 'isRefactorings'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.0-beta.36',
    //   time: '2018-09-26',
    //   contentItems: [
    //     {content: '增加报告所有操作附件必填的校验。', type: 'isNewFeatures'},
    //     {content: '函证明细基本信息中增加函证负责人相关信息。', type: 'isNewFeatures'},
    //     {content: '修复报告明细的报告信息中鉴证属性带不出的问题。', type: 'isBugFixes'},
    //     {content: '修复生成函证时传真替换失败的问题。', type: 'isBugFixes'},
    //     {content: '修复函证催收时间不正确的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.0-beta.35',
    //   time: '2018-09-25',
    //   contentItems: [
    //     {content: '函证催收人管理菜单的催收状态增加一个其它类型。', type: 'isNewFeatures'},
    //     {content: '修复函证清单导入被询证者信息多条启用没有提示的问题。', type: 'isBugFixes'},
    //     {content: '修复函证清单导入Excel提示位置不正确的问题。', type: 'isBugFixes'},
    //     {content: '优化报告附件的展示。', type: 'isRefactorings'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.0-beta.34',
    //   time: '2018-09-21',
    //   contentItems: [
    //     {content: '修复退回函证附件在进度跟踪不显示问题。', type: 'isBugFixes'},
    //     {content: '修复回函后点击作废按钮重新创建失败问题。', type: 'isBugFixes'},
    //     {content: '修复函证生成word、pdf时，进度条偶尔出现突然关闭情况。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.0-beta.33',
    //   time: '2018-09-20',
    //   contentItems: [
    //     {content: '核对函证时，当该函证的催收次数>=3 且超过预计完成时间，标记黄色。', type: 'isNewFeatures'},
    //     {content: '新增催收人管理菜单根据颜色排序。', type: 'isNewFeatures'},
    //     {content: '催收弹窗页面，新增字段 被审计单位名称、被询证方名称、被询证方联系人姓名、被询证方电话、被询证方地址。', type: 'isNewFeatures'},
    //     {content: '修复点击催收按钮无效问题。', type: 'isBugFixes'},
    //     {content: '修复函证清单由于输入信息长度过长导入失败没有提示的问题。', type: 'isBugFixes'},
    //     {content: '修复函证导入发件人电话格式不对的问题。', type: 'isBugFixes'},
    //     {content: '修复点击代办后台报错的问题。', type: 'isBugFixes'},
    //     {content: '优化团队借出人员相关信息。', type: 'isRefactorings'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.0-beta.32',
    //   time: '2018-09-19',
    //   contentItems: [
    //     {content: '新增函证发件信息可以删除的功能。', type: 'isNewFeatures'},
    //     {content: '新增函证发件快递单号不能为空的校验。', type: 'isNewFeatures'},
    //     {content: '新增函证催收三次给函证主管发待办的功能。', type: 'isNewFeatures'},
    //     {content: '增加校验催收日期范围不可大于预计完成时间。', type: 'isBugFixes'},
    //     {content: '修复催收日期超过三次并且大于预计完成时间时，在核对菜单不显示此单据问题。', type: 'isBugFixes'},
    //     {content: '修复催收三次后不可以再催收问题。', type: 'isBugFixes'},
    //     {content: '修复函证退回没有给函证负责人发待办的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.0-beta.31',
    //   time: '2018-09-19',
    //   contentItems: [
    //     {content: '在点击批量生成函证、生成PDF时，增加进度条可查看处理进度，并解决无限延长超时时间loading加载转圈的问题。', type: 'isRefactorings'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.0-beta.30',
    //   time: '2018-09-18',
    //   contentItems: [
    //     {content: '新增函证发件时发件时间不可选择的校验。', type: 'isNewFeatures'},
    //     {content: '新增函证作废原因的显示。', type: 'isNewFeatures'},
    //     {content: '新增核对函证核对时间字段。', type: 'isNewFeatures'},
    //     {content: '新增核对函证默认回函时间。', type: 'isNewFeatures'},
    //     {content: '修复权限定义菜单新建报错的问题。', type: 'isBugFixes'},
    //     {content: '优化进度跟踪权限(新增项目组权限)。', type: 'isRefactorings'},
    //     {content: '优化核对函证查询条件(只保留待回函和待核对)。', type: 'isRefactorings'},
    //     {content: '优化进度追踪相关角色名称。', type: 'isRefactorings'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.0-beta.29',
    //   time: '2018-09-17',
    //   contentItems: [
    //     {content: '新增核对函证回函时间不能小于当前时间的校验。', type: 'isNewFeatures'},
    //     {content: '修复函证派工通知和代办错误的问题。', type: 'isBugFixes'},
    //     {content: '修复函证待回函时作废按钮不显示的问题。', type: 'isBugFixes'},
    //     {content: '修复函证进度追踪名称显示错误的问题。', type: 'isBugFixes'},
    //     {content: '修复函证工作需求计划保存后页面处于遮挡的问题。', type: 'isBugFixes'},
    //     {content: '修复函证数字百分百格式不生效的问题。', type: 'isBugFixes'},
    //     {content: '修复导出函证失败的问题。', type: 'isBugFixes'},
    //     {content: '优化函证导入失败提示(需要手动关闭提示)。', type: 'isRefactorings'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.0-beta.28',
    //   time: '2018-09-14',
    //   contentItems: [
    //     {content: '新增工作申请单工作提交不能为空的校验。', type: 'isNewFeatures'},
    //     {content: '新增工作申请单预算工时不能为0的校验。', type: 'isNewFeatures'},
    //     {content: '新增工作需求计划完成工作时间不能为空的校验。', type: 'isNewFeatures'},
    //     {content: '修复没有按格式导出函证的问题。', type: 'isBugFixes'},
    //     {content: '修复函证数字百分百格式不生效的问题。', type: 'isBugFixes'},
    //     {content: '修复工作需求计划填预算工时明细时类型个数可以填小数的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.0-beta.27',
    //   time: '2018-09-13',
    //   contentItems: [
    //     {content: '增加团队存在借调人员不可删除的校验。', type: 'isNewFeatures'},
    //     {content: '增加预算变更相同需求计划在未批准前不能重复建立的校验。', type: 'isNewFeatures'},
    //     {content: '修复团队借调人员存在重复的问题。', type: 'isBugFixes'},
    //     {content: '修复生成函证存在多行空白行的问题。', type: 'isBugFixes'},
    //     {content: '修复导入函证造成的内存溢出的问题。', type: 'isBugFixes'},
    //     {content: '修复全屏时，系统滚动条消失的问题。', type: 'isBugFixes'},
    //     {content: '修复全屏时，系统菜单部分背景白色的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.0-beta.26',
    //   time: '2018-09-13',
    //   contentItems: [
    //     {content: '函证被询证者信息状态添加启用/禁用校验。', type: 'isNewFeatures'},
    //     {content: '催收人管理菜单催收日期添加日期校验。', type: 'isNewFeatures'},
    //     {content: '修复函证收件信息有时显示被询证方，有时不显示的问题。', type: 'isBugFixes'},
    //     {content: '修复催收人工作管理菜单催收按钮失效问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.0-beta.25',
    //   time: '2018-09-11',
    //   contentItems: [
    //     {content: '修复报告通知报告负责人的问题。', type: 'isBugFixes'},
    //     {content: '修复报告派工时不能选择审核人的问题。', type: 'isBugFixes'},
    //     {content: '修复团队借调时可以选择其他团队主管的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.0-beta.24',
    //   time: '2018-09-11',
    //   contentItems: [
    //     {content: '修复报告预算调整存在小数精度不正确的问题。', type: 'isBugFixes'},
    //     {content: '修复报告状态为项目组已退回时派工信息不全的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.0-beta.23',
    //   time: '2018-09-10',
    //   contentItems: [
    //     {content: '报告模板关系设置新建时更改默认状态为已启用。', type: 'isNewFeatures'},
    //     {content: '修复报告模板库新建时状态不显示的问题。', type: 'isBugFixes'},
    //     {content: '优化函证模板库列表字段宽度。', type: 'isRefactorings'},
    //     {content: '优化报告模板关系设置菜单模板附件查询器中字段的宽度。', type: 'isRefactorings'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.0-beta.22',
    //   time: '2018-09-10',
    //   contentItems: [
    //     {content: '修复预算变更选择需求计划带出小数的问题。', type: 'isBugFixes'},
    //     {content: '修复函证模板再次预览被询证者信息列表没有清空的问题。', type: 'isBugFixes'},
    //     {content: '修复导出函证时电话显示为科学计数法的问题。', type: 'isBugFixes'},
    //     {content: '修复IE下分组设置明细右侧弹出框按钮显示不全的问题。', type: 'isBugFixes'},
    //     {content: '修复无故自动展开菜单栏的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.0-beta.21',
    //   time: '2018-09-08',
    //   contentItems: [
    //     {content: '取消了函证催收时备注为空的校验。', type: 'isNewFeatures'},
    //     {content: '修复生成的函证表格由于数据为空造成没有空行的问题。', type: 'isBugFixes'},
    //     {content: '修复了函证明细催收人不显示的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.0-beta.20',
    //   time: '2018-09-07',
    //   contentItems: [
    //     {content: '修复函证文件上没有函证负责人信息的问题。', type: 'isBugFixes'},
    //     {content: '修复生成函证小数点显示不正确问题。', type: 'isBugFixes'},
    //     {content: '修复导入被询证者信息状态提示只能启用一个的问题。', type: 'isBugFixes'},
    //     {content: '修复函证工作管理页面控制台报错的问题。', type: 'isBugFixes'},
    //     {content: '修复函证退回没有给函证负责人发通知的问题。', type: 'isBugFixes'},
    //     {content: '修复函证退回后附件无法预览的问题。', type: 'isBugFixes'},
    //     {content: '修复所有审批流程审批人顺序不正确的问题。', type: 'isBugFixes'},
    //     {content: '修复函证导入后没有替换先前函证的问题。', type: 'isBugFixes'},
    //     {content: '修复团队列表高度不统一的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.0-beta.19',
    //   time: '2018-09-06',
    //   contentItems: [
    //     {content: '系统LOGO修改。', type: 'isNewFeatures'},
    //     {content: '修复函证项目组审批流程审批人名称错误的问题。', type: 'isBugFixes'},
    //     {content: '修复函证预算调整工时没有保留2位小数的问题。', type: 'isBugFixes'},
    //     {content: '修复生成函证格式没有居左居右的问题。', type: 'isBugFixes'},
    //     {content: '修复新增函证页面校验失败的问题。', type: 'isBugFixes'},
    //     {content: '修复收发室导出收件人无法用MicrosoftOffice打开的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.0-beta.18',
    //   time: '2018-09-05',
    //   contentItems: [
    //     {content: '修复权限定义删除时未能删除关联信息的问题。', type: 'isBugFixes'},
    //     {content: '修复函证工作申请单个别单据导出函证不成功的问题。', type: 'isBugFixes'},
    //     {content: '修复导入函证时被询证者信息提示错误的问题。', type: 'isBugFixes'},
    //     {content: '修复函证中数据为空却存在数据的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.0-beta.17',
    //   time: '2018-09-04',
    //   contentItems: [
    //     {content: '修复函证编号重复的问题。', type: 'isBugFixes'},
    //     {content: '修复函证项目组工作管理审批流程中没有现场负责人的问题。', type: 'isBugFixes'},
    //     {content: '修复相应菜单数据权限不正确的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.0-beta.16',
    //   time: '2018-09-04',
    //   contentItems: [
    //     {content: '团队成员明细个人信息前新增图标。', type: 'isNewFeatures'},
    //     {content: '系统LOGO修改。', type: 'isNewFeatures'},
    //     {content: '修复报告预算变更审批流程选不到审批人的问题。', type: 'isBugFixes'},
    //     {content: '修复版本管理样式错误。', type: 'isBugFixes'},
    //     {content: '修复报告项目组工作管理单据审批报错的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.0-beta.15',
    //   time: '2018-09-01',
    //   contentItems: [
    //     {content: '文档：基于<<审计业务共享处理系统补充需求文档-20180721>>一期上线内容。', type: 'isNewFeatures'},
    //     {content: `JIRA：以下issue已做处理。
    //     ${getUrl('ASSC-16')} | ${getUrl('ASSC-17')}
    //     ${getUrl('ASSC-52')} | ${getUrl('ASSC-70')}
    //     ${getUrl('ASSC-73')} | ${getUrl('ASSC-74')} | ${getUrl('ASSC-75')}`,
    //       type: 'isNewFeatures'},
    //     {content: '个人中心增加联系信息卡片及修改功能。', type: 'isNewFeatures'},
    //     {content: '函证模板管理菜单增加预览功能。', type: 'isNewFeatures'},
    //     {content: '团队菜单新增功能并重构。', type: 'isNewFeatures'},
    //     {content: '添加资源管理菜单，用于管理菜单、数据及功能权限选项。', type: 'isNewFeatures'},
    //     {content: '权限定义添加数据权限以及功能权限配置。', type: 'isNewFeatures'},
    //     {content: '后台权限重构，以便支持数据及功能权限。', type: 'isNewFeatures'},
    //     {content: 'Office文档默认预览模式从Office更改为PDF。', type: 'isNewFeatures'},
    //     {content: '优化函证模板管理待选字段组卡片结构及样式。', type: 'isNewFeatures'},
    //     {content: '修复函证报告标准工时设置表格未对齐的问题。', type: 'isBugFixes'},
    //     {content: '修复函证报告建立预算变更时选择工作需求计划权限不对的问题。', type: 'isBugFixes'},
    //     {content: '修复函证报告标准工时设置表格小数位数不正确的问题。', type: 'isBugFixes'},
    //     {content: '修复函证报告标准工时设置表格点击取消依旧会保存的问题。', type: 'isBugFixes'},
    //     {content: '优化系统字段组样式。', type: 'isRefactorings'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.0-beta.14',
    //   time: '2018-08-08',
    //   contentItems: [
    //     {content: '新增菜单函证报告标准工时。', type: 'isNewFeatures'},
    //     {content: '新增菜单函证报告预算变更调整。', type: 'isNewFeatures'},
    //     {content: '新增函证报告工作需求计划可选预算工时明细的功能。', type: 'isNewFeatures'},
    //     {content: '增加报告编制人、核对人、排版人、审核人在上传附件时可批量上传的功能。', type: 'isNewFeatures'},
    //     {content: '增加报告工作申请单派工调整的功能。', type: 'isNewFeatures'},
    //     {content: '快捷消息待办移除置为已读按钮，点击操作时增加自动已读功能。', type: 'isNewFeatures'},
    //     {content: '重构菜单结构以及图标。', type: 'isRefactorings'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.0-beta.13',
    //   time: '2018-07-25',
    //   contentItems: [
    //     {content: '修复函证清单由于空白行导致导入Excel失败的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.0-beta.12',
    //   time: '2018-07-04',
    //   contentItems: [
    //     {content: '催收人管理菜单，修复催收提示颜色错误问题。', type: 'isBugFixes'},
    //     {content: '催收人管理菜单列表，增加催收日期不能小于发件日期提示信息。', type: 'isRefactorings'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.0-beta.11',
    //   time: '2018-06-29',
    //   contentItems: [
    //     {content: '催收人管理菜单的催收信息中，催收结果字段改为下拉选择、增加备注字段。', type: 'isNewFeatures'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.0-beta.10',
    //   time: '2018-06-26',
    //   contentItems: [
    //     {content: '函证中心工作管理菜单，新增批量派工功能。', type: 'isNewFeatures'},
    //     {content: '收发室工作管理菜单，新增批量发件功能。', type: 'isNewFeatures'},
    //     {content: '修复函证中心工作管理菜单，派工按钮不能点×关闭的问题。', type: 'isBugFixes'},
    //     {content: '函证中心工作管理菜单样式优化。', type: 'isRefactorings'},
    //     {content: '收发室工作管理菜单，寄件人信息排序优化。', type: 'isRefactorings'},
    //     {content: '完善函证详请页面扫描附件下载及预览功能。', type: 'isRefactorings'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.0-beta.9',
    //   time: '2018-06-21',
    //   contentItems: [
    //     {content: '增加报告模板库锁定,以及模板关系设置启用功能。', type: 'isNewFeatures'},
    //     {content: '优化函证作废时新生成的函证单据号，重新生成不在保留原单据号。', type: 'isNewFeatures'},
    //     {content: '修复函证模板中选择第一行第三个字段名称编辑会错位的问题。', type: 'isBugFixes'},
    //     {content: '修复函证模板导出时由于列数过多导致顺序出现错乱的问题。', type: 'isBugFixes'},
    //     {content: '修复作废已发件函证单据时提示单据号错误的问题(只有待回函的才可以扫描成功)。', type: 'isBugFixes'},
    //     {content: '修复firefox浏览器下，附件下载文件名乱码的问题。', type: 'isBugFixes'},
    //     {content: '修复函证模板新建时路由没有刷新的问题。', type: 'isBugFixes'},
    //     {content: '修复工作需求计划还可以选择到已建立需求计划的项目问题。', type: 'isBugFixes'},
    //     {content: '优化函证负责人更换时，上一个函证负责人通过代办还可以进入菜单操作问题，并增加消息通知原函证负责人。', type: 'isRefactorings'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.0-beta.8',
    //   time: '2018-06-14',
    //   contentItems: [
    //     {content: '修复函证导入时由于用户输入字数超出限制导致导入失败的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.0-beta.7',
    //   time: '2018-06-12',
    //   contentItems: [
    //     {content: '修复报告模板库查找点击重置不刷新的问题。', type: 'isBugFixes'},
    //     {content: '修复报告信息中排版人意见不能正常显示的问题。', type: 'isBugFixes'},
    //     {content: '修复函证工作申请菜单点击派工，函证催收人为空时校验未生效的问题。', type: 'isBugFixes'},
    //     {content: '修复IE浏览器通知内容较长时，通知显示滚动条并且出现无限滚动问题。', type: 'isBugFixes'},
    //     {content: '修复进度跟踪菜单，函证事项条件筛选无效的问题。', type: 'isBugFixes'},
    //     {content: '修复函证需求计划查找菜单，搜索客户名称时页面报错的问题。', type: 'isBugFixes'},
    //     {content: '收发室工作管理菜单移除函证作废按钮。', type: 'isRefactorings'},
    //     {content: '优化函证结果信息页签状态点样式，避免显示不清晰。', type: 'isRefactorings'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.0-beta.6',
    //   time: '2018-06-11',
    //   contentItems: [
    //     {content: '修复函证导入时偶现导入数据不正确的问题。', type: 'isBugFixes'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.0-beta.5',
    //   time: '2018-06-10',
    //   contentItems: [
    //     {content: '团队管理人员列表增加用户编号信息。', type: 'isNewFeatures'},
    //     {content: '函证详细页面合并发件、催收以及核对信息卡片，避免空间浪费。', type: 'isNewFeatures'},
    //     {content: '优化函证核对信息字段显示样式。', type: 'isRefactorings'},
    //     {content: '优化函证页面进度轨迹、回函结果、发件信息、催收信息显示权限。', type: 'isRefactorings'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.0-beta.4',
    //   time: '2018-06-09',
    //   contentItems: [
    //     {content: '个人中心消息代办增加一键已读功能。', type: 'isNewFeatures'},
    //     {content: '优化系统登录页浏览器访问建议，关闭后不再提示。', type: 'isRefactorings'}
    //   ],
    //   ifAnchor: false
    // },
    // {
    //   version: '1.0.0-beta.3',
    //   time: '2018-06-08',
    //   contentItems: [
    //     {content: '系统增加查看更新日志功能，访问时添加/version后缀即可查看。', type: 'isNewFeatures'},
    //     {content: '系统登录页增加浏览器访问建议。', type: 'isNewFeatures'},
    //     {content: '函证导入功能调整，增加函证主信息字段导入，增加批量导入，优化函证导入模板样式。' + getUrl('ASSC-45'), type: 'isNewFeatures'},
    //     {content: '报告中心工作管理增加审核人可上传多个附件功能。' + getUrl('ASSC-62'), type: 'isNewFeatures'},
    //     {content: '核对回函菜单，回函表单增加回函物流公司、物流单号、备注字段，删除回函签收时间。' + getUrl('ASSC-59'), type: 'isNewFeatures'},
    //     {content: '项目组工作申请单增加未上传报告附件提示，并增加没有附件时不可提交限制。' + getUrl('ASSC-53'), type: 'isNewFeatures'},
    //     {content: '催收室工作管理菜单改名为催收人工作管理。', type: 'isNewFeatures'},
    //     {content: '函证生成时，对应Word模板数据增加日期格式化功能。', type: 'isNewFeatures'},
    //     {content: '函证Word模板，表格内表达式增加空格以及换行容错机制。', type: 'isNewFeatures'},
    //     {content: '修复函证编辑时，表单信息校验失败窗体自动关闭的问题。' + getUrl('ASSC-68'), type: 'isBugFixes'},
    //     {content: '修复收发室工作管理字段名显示错误的问题。' + getUrl('ASSC-61'), type: 'isBugFixes'},
    //     {content: '修复报告中心工作管理数据权限错误的问题。' + getUrl('ASSC-53'), type: 'isBugFixes'},
    //     {content: '修复报告模板关系设置菜单因组件库版本导致下拉内容错乱的问题。' + getUrl('ASSC-67'), type: 'isBugFixes'},
    //     {content: '修复函证信息原始函证附件处存在空白的问题。', type: 'isBugFixes'},
    //     {content: '修复函证派工时，存在负责人但提示校验错误的问题。', type: 'isBugFixes'},
    //     {content: '修复函证核对菜单核对完成后，主信息数据未同步的问题。', type: 'isBugFixes'},
    //     {content: '修复函证工作需求预定表客户名称编辑页面时显示，但是显示页面时未成功显示的问题。', type: 'isBugFixes'},
    //     {content: '修复函证进度追踪菜单发函以及回函附件未显示的问题。', type: 'isBugFixes'},
    //     {content: '优化菜单显示动画，并调整菜单为手风琴模式。', type: 'isRefactorings'},
    //     {content: '优化函证批量下载按钮显示文本以及权限控制。', type: 'isRefactorings'},
    //     {content: '优化函证信息列表显示列顺序及排序。', type: 'isRefactorings'},
    //     {content: '优化函证作废流程及按钮控制。', type: 'isRefactorings'},
    //     {content: '重构快捷消息，删除消息、代办切换动画，优化内容不一致时，高度显示样式。', type: 'isRefactorings'},
    //     {content: '重构菜单标签，现在鼠标悬浮并滑动，页面不会随之滚动。' + getUrl('ASSC-51'), type: 'isRefactorings'}
    //   ],
    //   ifAnchor: false
    // },
    {
      version: '1.0.0-beta.3',
      time: '2019-09-18',
      contentItems: [
        {content: '实现图片，视频文件重命名功能。', type: 'isNewFeatures'},
        {content: '数据档案中，增加文件下载功能。', type: 'isNewFeatures'},
        {content: '录制视频最长限制在5分钟以内。', type: 'isNewFeatures'},
        {content: '实现审批时可选常用话术功能。', type: 'isNewFeatures'},
        {content: '实现详情页面打印功能。', type: 'isNewFeatures'},
        {content: '实现登录人部门信息展示功能。', type: 'isNewFeatures'},
        {content: '优化单据详情中，图片大小样式。', type: 'isRefactorings'}
      ],
      ifAnchor: false
    },
    {
      version: '1.0.0-beta.2',
      time: '2019-08-26',
      contentItems: [
        {content: '视频分片上传。', type: 'isNewFeatures'},
        {content: '视频上传中，以百分比进度条的形式显示上传进度。', type: 'isNewFeatures'},
        {content: '图片及视频拍摄或录制后可保存在本地。', type: 'isNewFeatures'},
        {content: '解决360浏览器，第二次录制视频画面不显示的问题。', type: 'isBugFixes'},
        {content: '解决宽视频预览时，样式不合理的问题。', type: 'isBugFixes'}
      ],
      ifAnchor: false
    },
    {
      version: '1.0.0-beta.1',
      time: '2019-07-19',
      contentItems: [
        {content: '初始版本。', type: 'isNewFeatures'}
      ],
      ifAnchor: false
    }
  ]
}
export {
  VersionData
}
