import config from '@/config/config'
import * as api from 'api'

/**
 * 构造器必要参数
 *
 fileId
 filePath
 this.recordID = options.recordId // RecordID:本文档记录编号
 this.webform = options.webform
 this.fileName
 this.fileType = options.fileType // FileType:文档类型  .doc  .xls  .wps
 this.userName = options.userName // UserName:操作用户名，痕迹保留需要 userId
 this.isHttpGetter = options.isHttpGetter // 'true'
 this.httpSaverPath = options.httpSaverPath
 * @param options
 * @returns {null}
 * @constructor
 */
function OfficeEditor (options = {}) {
  // 如果主要参数为空，则返回null对象
  // if (options.fileType || options.webform) {
  //   return null
  // }
  this.fileId = options.fileId
  this.recordID = options.recordId // RecordID:本文档记录编号 应该是docId
  this.webform = options.webform
  this.fileType = options.fileType.toLowerCase() // FileType:文档类型  .doc  .xls  .wps
  this.template = 'template' // Template:模板编号
  this.fileName = options.fileName // FileName:文档名称
  this.filePath = options.filePath
  this.userName = options.userName // UserName:操作用户名，痕迹保留需要 userId
  this.isHttpGetter = options.isHttpGetter // 'true'
  this.httpSaverPath = options.httpSaverPath
  this.webUrl = `${config.api.url}/OfficeServer.jsp`
  this.editable = options.editable
  this.copyable = options.copyable

  this.editType = this.editable ? '1,0' : (this.copyable ? '4,0' : '0,0')

  // 校验文件格式是否正确
  this.validateFileType = function () {
    let fileType = this.fileType
    if (fileType === '.doc' || fileType === '.docx' || fileType === '.xls' || fileType === '.xlsx' || fileType === '.wps') {
      return true
    } else {
      return false
    }
  }
  // 加载文件
  this.loadFile = function () {
    // loading 开始
    let webform = this.webform
    try {
      webform.webOffice.WebUrl = this.webUrl // WebUrl:系统服务器路径，与服务器文件交互操作，如保存、打开文档，重要文件
      webform.webOffice.RecordID = this.recordId // RecordID:本文档记录编号
      webform.webOffice.Template = this.template // Template:模板编号
      webform.webOffice.FileName = this.filePath // FileName:文档名称
      webform.webOffice.Compatible = 'false' // 是否同一保存为兼容模式doc xls false则按照fileType格式保存
      webform.webOffice.FileType = this.fileType // FileType:文档类型  .doc  .xls  .wps
      webform.webOffice.UserName = this.userName // UserName:操作用户名，痕迹保留需要 userId
      webform.webOffice.EditType = this.editType // EditType:编辑类型  方式一、方式二  <参考技术文档> '1' : '0'
      webform.webOffice.Language = 'CH' // Language:多语言支持显示选择   CH简体 TW繁体 EN英文
      webform.webOffice.ShowMenu = '0' // 控制整体菜单显示，此菜单没有意义
      webform.webOffice.ShowToolBar = false // 不显示快捷工具栏，只显示office工具栏
      webform.webOffice.MaxFileSize = 30 * 1024
      // webform.webOffice.ShowWindow = '1' // 打开/保存时显示进度条
      let success = webform.webOffice.WebOpen() // 是否成功打开
      // loading 结束
      webform.webOffice.ShowType = 1
      return success
    } catch (e) {
      alert(e.description) // 显示出错误信息
    }
  }
  // 关闭页面文件,如果系统的文件下载方式为httpGetter,则关闭页面时删除临时文件
  this.unLoadFile = function () {
    try {
      if (!this.webform.webOffice.WebClose()) {
      } else {
      }
    } catch (e) {
      alert(e.description)
    }
    if (this.isHttpGetter) {
      this.deleteTmpFile()
    }
  }
  // 是否保护文件:value=1保护文档;value=0解除保护文档;
  this.setProtect = function (value) {
    try {
      // webform.webOffice.WebSetProtect(value, '') // ""表示密码为空
    } catch (e) {
      alert(e.description)
    }
  }
  // 如果下载方式为httpGetter方式，则关闭页面时删除临时文件.
  this.deleteTmpFile = function () {
    api.file.deleteTmpFile({
      data: {
        'pars.tempFilePath': this.filePath
      }
    }).then(res => {
      const body = res.data
      if (body.success) {
      }
    }).catch((res) => {
    })
  }

  // 如果下载方式为httpGetter方式，保存时根据临时文件同时更新源文件.
  this.updateHttpSaverFile = function (isSaveSuccess) {
    if (isSaveSuccess && this.isHttpGetter) {
      api.file.updateHttpSaverFile({
        data: {
          'pars.httpSaverPath': this.httpSaverPath,
          'pars.tempFilePath': this.filePath
        }
      }).then(res => {
        const body = res.data
        if (body.success) {
        }
      }).catch((res) => {
      })
    }
  }
  /**
   * 保存文件
   * @param options
   * @returns {*}
   */
  this.saveFile = function () {
    let webform = this.webform
    webform.webOffice.ShowWindow = '1' // 保存时显示进度条
    var isSaveSuccess = webform.webOffice.WebSave(true) // 通过控件保存文件到服务器
    // 如果下载方式为httpGetter方式，保存时根据临时文件同时更新源文件.
    this.updateHttpSaverFile(isSaveSuccess)
    return isSaveSuccess
  }

  /**
   * 打开打印控制窗口
   */
  this.openPrintPage = function () {
    try {
      this.webform.webOffice.WebOpenPrint()
    } catch (e) {
      alert(e.description)
    }
  }
  /**
   * 判断文件是否被修改
   */
  this.validateFileModify = function () {
    return this.webform.webOffice.Modify
  }
}

const getInstance = function (options) {
  return new OfficeEditor(options)
}

export default getInstance
