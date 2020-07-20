import config from '@/config/config'

const file = {}

file.downLoadFile = function (fileUuid) {
  window.open(`${config.api.url}/file/downloadFile!downloadFile.action?fileUuid=${fileUuid}`, '_self', 'features', true)
}

file.getFileUrl = function (fileUuid) {
  if (fileUuid) {
    return `${config.api.url}/file/downloadFile!downloadFile.action?fileUuid=${fileUuid}`
  }
}

export default file
