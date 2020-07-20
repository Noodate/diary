<template>
  <div class="importFileUpload">
    <error-modal ref="errorModal" :tableData="tableData"></error-modal>
    <next-send-modal ref="nextSendModal" :tableData="tableData"></next-send-modal>
    <Upload
      ref="upload"
      :name="name"
      :with-credentials="true"
      :default-file-list="fileList"
      :show-upload-list="showUploadList"
      :max-size="maxSize"
      :action="action + this.url +this.params"
      :before-upload="beforeUpload"
      :on-success="onSuccess"
      :on-exceeded-size="onExceededSize"
      :on-format-error="onFormat"
      :format="format"
      :on-error="onError">
      <Button icon="ios-cloud-upload-outline"
              :disabled=this.disabled
              :class="{'importFileButton' : buttonAbsolute}"
              :style="{left: left + 'px', top: top + 'px'}">
        {{this.buttonName}}
      </Button>
    </Upload>
    <div v-for="(file, index) in uploadList" :key="index">
      <transition name="fade">
        <i-progress
          v-if="file.showProgress"
          :stroke-width="2"
          :status="file.status === 'finished' && file.showProgress ? 'success' : 'normal'"></i-progress>
      </transition>
    </div>
  </div>
</template>
<script>
  import config from '@/config/config'
  import ErrorModal from '@/components/modal/ErrorModal'
  import NextSendModal from '@/components/modal/NextSendModal'

  export default {
    props: {
      params: { // 暂未对object的参数进行实现
        type: [String, Object],
        default: ''
      },
      buttonName: {
        type: String,
        default: 'default'
      },
//      附件样式大小
      size: {
        type: String,
        default: 'default'
      },
      url: {
        type: String,
        default: ''
      },
      disabled: { // 是否禁用
        type: Boolean,
        default: false
      },
      format: { // 导入格式
        type: Array,
        default () {
          return ['xlsx', 'zip', 'docx']
        }
      },
      left: {
        type: Number,
        default: 0
      },
      top: {
        type: Number,
        default: 0
      },
      buttonAbsolute: {
        type: Boolean,
        default: false
      }
    },
    components: {
      ErrorModal,
      NextSendModal
    },
    data () {
      return {
        name: 'files',
        action: `${config.api.url}`,
        maxSize: 1073741824, // 1G
        showUploadList: false, // 不显示已上传的文件列表
        multiple: false, // 一次只能上传一个文件
        fileList: [],
        uploadList: [],
        tableData: []
      }
    },
    methods: {
      beforeUpload (file) {
      },
      onSuccess (response, file, fileList) {
        this.fileList = []
        if (response.errorList && response.errorList.length > 0) {
          this.tableData = response.errorList
          this.$refs.errorModal.show()
          this.$emit('on-error') // 导入失败
        } else if (response.alertList && response.alertList.length > 0) {
          this.tableData = response.alertList
          this.$refs.nextSendModal.show()
        } else {
          this.$emit('on-success', response) // 导入成功
        }
      },
      onError (errInfo, file, fileList) {
        this.fileList = []
        this.$Notice.error({
          title: this.$t('message.tip.error'),
          desc: this.$t('message.tip.fileUploadError')
        })
        this.$emit('on-error') // 导入失败
      },
      onExceededSize () {
        this.$Notice.error({
          title: this.$t('message.tip.error'),
          desc: this.$t('message.tip.fileMaxSizeError')
        })
      },
      onFormat (file) {
        this.$Message.error(this.$t('message.tip.fileFormatXlsxMust'))
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
  .importFileUpload {
    position: relative;
    left: 0;
    top: 0;
    .importFileButton {
      position: absolute;
    }
  }


</style>
