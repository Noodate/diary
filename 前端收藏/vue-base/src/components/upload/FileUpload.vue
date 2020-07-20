<template>
  <div>
    <Upload
      v-show="!this.readOnly"
      ref="upload"
      :multiple="this.multiple"
      :name="name"
      :with-credentials="true"
      :default-file-list="fileList"
      :show-upload-list="showUploadList"
      :max-size="maxSize"
      :action="action"
      :before-upload="beforeUpload"
      :on-success="onSuccess"
      :on-exceeded-size="onExceededSize"
      :on-error="onError"
      :on-format-error="onFormat"
      :format="format">
      <Button icon="ios-cloud-upload-outline" v-if=!this.readOnly>
        {{ $t('global.upload.uploadFiles')}}
      </Button>
    </Upload>
    <upload-list-custom
      v-if="!showUploadList"
      :size="size"
      :editable="editable"
      :deleteAble="deleteAble"
      :files="uploadList"
      @on-file-download="handleDownload"
      @on-file-remove="handleRemove">
    </upload-list-custom>
  </div>
</template>
<script>
  import config from '@/config/config'
  import DeleteModel from '@/components/modal/DeleteModal'
  import UploadListCustom from '@/components/upload/UploadListCustom'
  import Emitter from '@/mixins/emitter'
  import * as api from 'api'

  export default {
    mixins: [Emitter],
    props: {
      fileList: {
        type: Array,
        default () {
          return []
        }
      },
      readOnly: {
        type: Boolean,
        default: false
      },
      multiple: {
        type: Boolean,
        default: true
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
//      附件样式大小
      size: {
        type: String,
        default: 'default'
      },
      format: {
        type: Array,
        default () {
          return []
        }
      }
    },
    components: {
      DeleteModel,
      UploadListCustom
    },
    data () {
      return {
        name: 'files',
        showUploadList: false, // 是否显示默认的已上传列表
        action: `${config.api.url}/file/uploadFile!upload.action`,
        waitDeleteId: '',
        waitDeleteFile: () => {},
        maxSize: 1073741824, // 1G
        uploadList: []
      }
    },
    watch: {
      fileList (val) {
        this.$nextTick(function () {
          this.uploadList = this.$refs.upload.fileList
        })
      }
    },
    methods: {
      validate () {
        let fileList = this.$refs.upload.fileList
        for (let file of fileList) {
          if (file.status !== 'finished') {
            this.$Notice.warning({
              title: this.$t('message.warn'),
              desc: this.$t('message.fileUploading')
            })
            return false
          }
        }
        return true
      },
      getFileList () {
        let cuurFileList = []
        for (let file of this.$refs.upload.fileList) {
          if (file.status === 'finished') {
            cuurFileList.push({fileUuid: file.fileUuid})
          }
        }
        return cuurFileList
      },
      beforeUpload () {
        if (!this.multiple) {
          if (this.getFileList().length >= 1) {
            this.$Message.error(this.$t('report.reprtTemplates.message.onlyOne'))
            return false
          }
        }
      },
      onSuccess (response, file, fileList) {
        file.fileUuid = response.fileUuid
        this.dispatch('FormItem', 'on-form-change')
      },
      onError (errInfo, file, fileList) {
        this.$Notice.error({
          title: this.$t('message.tip.error'),
          desc: this.$t('message.tip.fileUploadError')
        })
      },
      onExceededSize (file, fileList) {
        this.$Notice.error({
          title: this.$t('message.tip.error'),
          desc: this.$t('message.tip.fileMaxSizeError')
        })
      },
      onFormat (file) {
        this.$Message.error(this.$t('message.tip.fileFormatDocxMust'))
      },
      onRemove (fileUuid) {
        api.file.delete({
          data: {
            fileUuid: fileUuid
          }
        }).then(res => {
          const body = res.data
          if (body.success) {
            this.dispatch('FormItem', 'on-form-change')
            this.$Message.success({
              content: this.$t('global.tip.deleteSuccess')
            })
          }
        }).catch((res) => {
        })
      },
      handleRemove (file) {
        const fileList = this.uploadList
        fileList.splice(fileList.indexOf(file), 1)
        this.onRemove(file, fileList)
      },
      handleDownload (fileUuid) {
        window.open(`${config.api.url}/file/downloadFile!downloadFile.action?fileUuid=${fileUuid}`, '_self', 'features', true)
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.uploadList = this.$refs.upload.fileList
      })
    }
  }
</script>
<style scoped lang="scss">
</style>
