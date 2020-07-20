<template>
  <div :style="{width:uploadListWidth}">
    <office-editor-modal ref="officeEditorModal" :fileId="fileId"
                         :editable="officeModalEditable" @on-close="onWordsClose"></office-editor-modal>
    <pdf-modal ref="pdfModal" :url="url"></pdf-modal>
    <!--<Button type="primary"-->
            <!--class="downloadByGroup"-->
            <!--v-if="files.length > 2 || files.length === 2">-->
      <!--{{$t('global.button.downloadByGroup')}}-->
    <!--</Button>-->
    <ul>
      <li v-for="file in files" :class="fileCls(file)">
        <div class="attachmentItem" :class="iconType(file)">
          <row class="defaultContainer" v-if="size === 'default'">
            <i-col span="16">
              <div class="content">
                <div class="name"> {{file.name}}</div>
                <div class="size">
                  {{$t('global.upload.attachmentSize')}}：{{formatFileSize(file.size)}}
                </div>
              </div>
            </i-col>
            <i-col span="7" offset="1" v-if="file.status === 'finished'">
              <div class="buttons">
                <Button @click="handleDownload(file.fileUuid)"
                        class="operatorButton"
                        shape="circle"
                        type="success"
                        icon="md-cloud-download"></Button>
                <Button v-if="previewable(file)"
                        @click="handlePreOrEdit(false, file)"
                        class="operatorButton"
                        shape="circle"
                        type="info"
                        icon="md-eye"></Button>
                <Button v-if="finalEditable (file)"
                        @click="handlePreOrEdit(true, file)"
                        type="warning"
                        shape="circle"
                        icon="md-create"
                        class="operatorButton"></Button>
                <Button v-if="deleteAble"
                        type="error"
                        shape="circle"
                        icon="md-trash"
                        class="operatorButton"
                        @click.native="handleRemove(file)"></Button>
              </div>
            </i-col>
          </row>
          <row class="smallContainer" v-else>
            <i-col span="13">
              <div class="content">
                <div class="name"> {{file.name}}</div>
                <div class="size">
                  {{$t('global.upload.attachmentSize')}}：{{formatFileSize(file.size)}}
                </div>
              </div>
            </i-col>
            <i-col span="11" v-if="file.status === 'finished'">
              <div class="buttons">
                <Button @click="handleDownload(file.fileUuid)"
                        class="operatorButton"
                        shape="circle"
                        type="success"
                        size="small"
                        icon="md-cloud-download"></Button>
                <Button v-if="previewable(file)"
                        @click="handlePreOrEdit(false, file)"
                        class="operatorButton"
                        shape="circle"
                        type="info"
                        size="small"
                        icon="md-eye"></Button>
                <Button v-if="finalEditable (file)"
                        @click="handlePreOrEdit(true, file)"
                        type="warning"
                        shape="circle"
                        icon="md-create"
                        size="small"
                        class="operatorButton"></Button>
                <Button v-if="deleteAble"
                        type="error"
                        shape="circle"
                        icon="md-trash"
                        size="small"
                        class="operatorButton"
                        @click.native="handleRemove(file)"></Button>
              </div>
            </i-col>
          </row>
        </div>
        <transition name="fade">
          <i-progress
            v-if="file.showProgress"
            :stroke-width="2"
            :percent="parsePercentage(file.percentage)"
            :status="file.status === 'finished' && file.showProgress ? 'success' : 'normal'"></i-progress>
        </transition>
      </li>
    </ul>
  </div>
</template>
<script>
  import OfficeEditorModal from '@/components/editor/office/OfficeEditorModal'
  import PdfModal from '@/components/preview/pdf/PdfModal'
  import Util from '@/libs/util'
  import config from '@/config/config'

  export default {
    name: 'UploadListCustom',
    components: {
      OfficeEditorModal,
      PdfModal
    },
    props: {
      files: {
        type: Array,
        default () {
          return []
        }
      },
      //      权限上是否可编辑
      editable: {
        type: Boolean,
        default: false
      },
      deleteAble: {
        type: Boolean,
        default: true
      },
      size: {
        type: String,
        default: 'default',
        validator (value) {
          return Util.oneOf(value, ['default', 'small'])
        }
      }
    },
    data () {
      return {
        url: '',
        fileId: '',
        ifsaveFileWord: false,
        officeModalEditable: this.editable // officeModal是否可编辑
      }
    },
    computed: {
      userOfficePreviewMode () {
        return this.$store.getters.userOfficePreviewMode
      },
      uploadListWidth () {
        if (this.size === 'small') {
          return '100%'
        } else {
          return '800px'
        }
      }
    },
    methods: {
      fileCls (file) {
        return [
          `upload-list-file`,
          {
            [`upload-list-file-finish`]: file.status === 'finished'
          }
        ]
      },
      handleClick (file) {
        this.$emit('on-file-click', file)
      },
      onWordsClose (ifsaveFileWord) {
        // 修改后的关闭
        if (ifsaveFileWord) {
          this.ifsaveFileWord = ifsaveFileWord
        }
      },
      handlePreOrEdit (value, file) {
//        this.$emit('on-file-preview', file)
        const format = file.name.split('.').pop().toLocaleLowerCase() || ''
        let fileType = 'default'
        if (['doc', 'docx', 'xls', 'xlsx'].indexOf(format) > -1) {
          if (value) { // true为编辑，只能office
            this.fileId = file.fileUuid
            this.officeModalEditable = value
            fileType = 'officeEditorModal'
          } else { // false则为预览，按照用户设置
            if (this.userOfficePreviewMode === 'office' || ['xls', 'xlsx'].indexOf(format) > -1) {
              this.fileId = file.fileUuid
              this.officeModalEditable = value
              fileType = 'officeEditorModal'
            } else {
              fileType = 'pdfModal'
              this.url = this.getPdfPreviewFileUrl(format, file.fileUuid)
            }
          }
        }
        if (['pdf'].indexOf(format) > -1) {
          fileType = 'pdfModal'
          this.url = this.getPdfPreviewFileUrl(format, file.fileUuid)
        }
        this.$nextTick(function () {
          this.$refs[fileType].show()
        })
      },
      handleRemove (file) {
        this.$emit('on-file-remove', file)
      },
      handleDownload (fileUuid) {
        window.open(`${config.api.url}/file/downloadFile!downloadFile.action?fileUuid=${fileUuid}`, '_self', 'features', true)
      },
      iconType (file) {
        const format = file.name.split('.').pop().toLocaleLowerCase() || ''
        let Icontype = 'default'
        if (['gif', 'jpg', 'jpeg', 'png', 'bmp', 'webp'].indexOf(format) > -1) {
          Icontype = 'image'
        }
        if (['mp4', 'm3u8', 'rmvb', 'avi', 'swf', '3gp', 'mkv', 'flv', 'wmv'].indexOf(format) > -1) {
          Icontype = 'film'
        }
        if (['mp3', 'wav', 'wma', 'ogg', 'aac', 'flac'].indexOf(format) > -1) {
          Icontype = 'music'
        }
        if (['doc', 'docx', 'pages', 'epub', 'wps'].indexOf(format) > -1) {
          Icontype = 'word'
        }
        if (['txt'].indexOf(format) > -1) {
          Icontype = 'txt'
        }
        if (['pdf'].indexOf(format) > -1) {
          Icontype = 'pdf'
        }
        if (['numbers', 'csv', 'xls', 'xlsx', 'et'].indexOf(format) > -1) {
          Icontype = 'excel'
        }
        if (['keynote', 'ppt', 'pptx', 'dps'].indexOf(format) > -1) {
          Icontype = 'ppt'
        }
        if (['zip', 'rar', '7z'].indexOf(format) > -1) {
          Icontype = 'zip'
        }
        return `attachment-icon-${Icontype}`
      },
      parsePercentage (val) {
        return parseInt(val, 10)
      },
      previewable (file) {
        const format = file.name.split('.').pop().toLocaleLowerCase() || ''
        if (['doc', 'docx', 'xls', 'xlsx', 'pdf'].indexOf(format) > -1) {
          return true
        }
      },
      finalEditable (file) {
        if (this.editable) {
          const format = file.name.split('.').pop().toLocaleLowerCase() || ''
          if (['doc', 'docx', 'xls', 'xlsx'].indexOf(format) > -1) {
            return true
          }
        } else {
          return false
        }
      },
      getPdfPreviewFileUrl (format, fileUuid) {
        if (['doc', 'docx', 'xls', 'xlsx'].indexOf(format) > -1) {
          var ts = new Date().getTime()
          if (this.ifsaveFileWord) {
            return `${config.api.url}/file/downloadFile!downloadPdfFile.action?fileUuid=${fileUuid}&time=${ts}`
          } else {
            return `${config.api.url}/file/downloadFile!downloadPdfFile.action?fileUuid=${fileUuid}`
          }
        } else {
          return `${config.api.url}/file/downloadFile!downloadFile.action?fileUuid=${fileUuid}`
        }
      },
      formatFileSize (size) {
        if (size === null || size === '') {
          return '0 bytes'
        }
        if (typeof size === 'string') {
          return size
        }
        let unitArr = ['bytes', 'KB', 'MB', 'GB']
        let srcsize = parseFloat(size)
        let index = Math.floor(Math.log(srcsize) / Math.log(1024))
        let finalSize = srcsize / Math.pow(1024, index)
        //  保留的小数位数
        finalSize = finalSize.toFixed(2)
        return finalSize + unitArr[index]
      }
    }
  }
</script>
<style scoped lang="scss">
  @import '../../styles/index';
  /*批量下载按钮*/
  /*.downloadByGroup {*/
  /*margin-top: 10px;*/
  /*}*/
  .upload-list-file {
    border-radius: 4px;
    transition: background-color .2s ease-in-out;
    margin:4px 0;
    &:hover {
      .attachmentItem {
        .buttons {
          opacity: 1;
          cursor: pointer;
        }
      }
      background: #f3f3f3;
    }
    .defaultContainer {
      font-size: $contentSize;
      color: $content-color;
      border: 1px solid $gray;
      padding: 5px 8px 0 8px;
      .content {
        padding: 0 0 0 45px;
        line-height:20px;
        .name {
          @include Ellipsis(95%);
        }
        .size {
          color: $font-gray-light;
          @include Ellipsis(95%);
        }
      }
      .buttons {
        transition: opacity .4s ease-in-out;
        opacity: 0;
        text-align: center;
        .operatorButton {
          margin: 0 3px;
        }
      }

    }
    .smallContainer {
      font-size: 12px;
      padding:3px;
      border: 1px solid $gray;
      .content {
        padding: 0 0 0 40px;
        line-height: 16px;
        .name {
          @include Ellipsis(95%);
        }
        .size {
          color: $font-gray-light;
          @include Ellipsis(95%);
        }
      }
      .buttons {
        transition: opacity .4s ease-in-out;
        opacity: 0;
        text-align: center;
        margin-top: -2px;
        .operatorButton {
          margin: 0 1px;
        }
      }
    }
  }

  .attachment-icon-default {
    background: url('../../../static/upload/default.png') no-repeat 5px center;
  }

  .attachment-icon-zip {
    background: url('../../../static/upload/zip.png') no-repeat 5px center;
  }

  .attachment-icon-pdf {
    background: url('../../../static/upload/pdf.png') no-repeat 5px center;
  }

  .attachment-icon-word {
    background: url('../../../static/upload/word.png') no-repeat 5px center;
  }

  .attachment-icon-image {
    background: url('../../../static/upload/jpg.png') no-repeat 5px center;
  }

  .attachment-icon-excel {
    background: url('../../../static/upload/excel.png') no-repeat 5px center;
  }

  .attachment-icon-ppt {
    background: url('../../../static/upload/ppt.png') no-repeat 5px center;
  }

  .attachment-icon-txt {
    background: url('../../../static/upload/txt.png') no-repeat 5px center;
  }

  .attachment-icon-music {
    background: url('../../../static/upload/music.png') no-repeat 5px center;
  }

  .attachment-icon-film {
    background: url('../../../static/upload/film.png') no-repeat 5px center;
  }


</style>
