<template>
  <div :style="{width:uploadListWidth}">
    <office-editor-modal ref="officeEditorModal" :fileId="fileId"
                         :editable="officeModalEditable"></office-editor-modal>
    <pdf-modal ref="pdfModal" :url="url"></pdf-modal>
    <ul>
      <li v-for="file in files" :class="fileCls(file)" v-bind:key="file.SCDOCSCAN_UUID">
        <div class="attachmentItem" :class="iconType(file)" @click="changeTag(file)">
          <row class="defaultContainer" v-if="size === 'default'">
            <i-col span="16">
              <div class="content">
                <div class="name">
                  <div>{{file.name}}</div>
                  <div v-if="file.iseffective === 1 && type === 1" style="margin-left:10px;">
                    <slot  v-bind:file="file"></slot>
                  </div>
                </div>
                <div class="size">
                 {{$t('global.upload.attachmentDate')}}： {{ file.date | formatDate}}
                </div>
              </div>
            </i-col>
            <i-col span="7" offset="1">
              <div class="buttons">
                      <Button @click="handleDownload(file)"
                              class="operatorButton"
                              shape="circle"
                              type="success"
                              icon="md-cloud-download"></Button>
                      <Button v-if="previewable (file)"
                              @click="handlePreview(file)"
                              class="operatorButton"
                              shape="circle"
                              type="info"
                              icon="md-eye"></Button>
              </div>
            </i-col>
          </row>
          <row class="smallContainer" v-else>
            <i-col span="13">
              <div class="content">
                <div class="name"> {{file.name}}</div>
                <div class="size">
                  {{$t('global.upload.attachmentSize')}}：{{file.size}}
                </div>
              </div>
            </i-col>
            <i-col span="11">
              <div class="buttons">
                <Button @click="handleDownload(file)"
                        class="operatorButton"
                        shape="circle"
                        type="success"
                        icon="md-cloud-download"></Button>
                <Button v-if="previewable (file)"
                        @click="handlePreview(file)"
                        class="operatorButton"
                        shape="circle"
                        type="info"
                        icon="md-eye"></Button>
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
    name: 'UploadListDisplayDueOut',
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
      editeffective: {
        type: Number,
        default: 0
      },
      type: {
        type: Number,
        default: 0
      },
      size: {
        type: String,
        default: 'default',
        validator (value) {
          return Util.oneOf(value, ['default', 'small'])
        }
      }
    },
    watch: {
    },
    data () {
      return {
        url: '',
        fileId: '',
        officeModalEditable: false // officeModal是否可编辑
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
      changeTag (file) {
        if (this.editeffective === 1) {
          if (file.iseffective === 0) {
            for (let filedf of this.files) {
              filedf.iseffective = 0
            }
            file.iseffective = 1
          } else {
            file.iseffective = 0
          }
        }
        if (this.type === 1) {
          this.$emit('changeTag', file.SCDOCSCAN_UUID)
        }
      },
      fileCls (file) {
        return [
          `upload-list-file`,
          {
            [`upload-list-file-finish`]: file.status === 'finished'
          }
        ]
      },
      handlePreview (file) {
//        this.$emit('on-file-preview', file)
        const format = file.name.split('.').pop().toLocaleLowerCase() || ''
        let fileType = 'default'
        if (['doc', 'docx', 'xls', 'xlsx'].indexOf(format) > -1) {
          if (this.userOfficePreviewMode === 'office' || ['xls', 'xlsx'].indexOf(format) > -1) {
            this.fileId = file.fileUuid
            this.officeModalEditable = false
            fileType = 'officeEditorModal'
          } else {
            fileType = 'pdfModal'
            this.url = `${config.api.url}/file/downloadFile!downLoadFromUrl.action?pars.fileUrl=${file.url}&pars.fileUuid=${file.fileUuid}`
          }
        }
        if (['pdf'].indexOf(format) > -1) {
          fileType = 'pdfModal'
          this.url = `${config.api.url}/file/downloadFile!downLoadFromUrl.action?pars.fileUrl=${file.url}&pars.fileUuid=${file.fileUuid}`
        }
        this.$nextTick(function () {
          this.$refs[fileType].show()
        })
      },
      handleDownload (file) {
        window.open(`${config.api.url}/file/downloadFile!downLoadFromUrl.action?pars.fileUrl=${file.url}&pars.fileUuid=${file.fileUuid}`, '_self', 'features', true)
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
      }
    },
    activated () {
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
          display:inline-flex;
          height: 30px;
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
