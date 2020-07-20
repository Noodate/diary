<template>
  <Modal v-model="isShow"
         :title="title"
         :transfer="false"
         :loading="loading"
         width="600">
    <Form :label-width="80" ref="form" :model="form" :rules="validate">
      <field-row :span="24">
        <field :label="$t('report.reportCenterManage.workflowMsg.disposeAdvice')" prop="comment" :span="24">
          <Input v-model="form.comment"
                 type="textarea"
                 :rows="6"
                 :placeholder="$t('global.placeholder.input')"></Input>
        </field>
      </field-row>
      <field-row :span="24">
        <field :label="$t('global.upload.uploadFiles')" :span="24">
          <file-upload
             ref="fileUpload"
             :multiple="true"
             :fileList="finishedFileList"
             size="small"></file-upload>
        </field>
      </field-row>
      <field-row :span="24">
        <span  style="color:#F00;font-size:14px">{{ $t('confirmation.modal.title.promptmsg') }}</span>
      </field-row>
    </Form>
    <div slot="footer">
      <Button type="text"
              size="large"
              :loading="loading"
              @click="cancel">{{ $t('global.button.cancel') }}
      </Button>
      <Button type="primary"
              size="large"
              :loading="loading"
              @click="ok"> {{ $t('global.button.ok') }}
      </Button>
    </div>
  </Modal>
</template>
<script>
  import FieldRow from '@/components/form/FieldRow.vue'
  import Field from '@/components/form/Field.vue'
  import FileUpload from '@/components/upload/FileUpload.vue'
  import UploadListDisplay from '@/components/upload/UploadListDisplay.vue'
  import Util from '@/libs/util'
  import * as api from 'api'
  export default {
    components: {
      FieldRow,
      Field,
      FileUpload,
      UploadListDisplay
    },
    props: {
      action: {
        validator (value) {
          return Util.oneOf(value, ['return'])
        },
        default: 'return' // submit unsubmit approve reject
      }
    },
    data () {
      return {
        title: this.$t(`confirmation.modal.title.${this.action}`),
        loading: false,
        isShow: false,
        form: {
          comment: ''
        },
        validate: {
          comment: [
            {type: 'string', required: true, message: this.$t('confirmation.projectGroupWorkManage.validate.disposeAdviceRequired'), trigger: 'blur'}
          ]
        },
        finishedFileList: [],
        fielUuidList: []
      }
    },
    computed: {
    },
    methods: {
      show () {
        this.finishedFileList = []
        this.fielUuidList = []
        this.form.comment = ''
        this.isShow = true
        this.loading = false
      },
      hide () {
        this.isShow = false
        this.loading = false
      },
      initData () {
      },
      ok () {
        this.$refs['form'].validate((valid) => {
          if (valid) {
            this.fielUuidList = this.$refs.fileUpload.uploadList
            this.loading = true
            if (this.action === 'return') {
              this.$emit('returnOk', this)
            }
          } else {
            this.$Message.error(this.$t('global.validate.validateError'))
          }
        })
      },
      cancel () {
        this.loading = false
        this.isShow = false
        this.fielUuidList = this.$refs.fileUpload.uploadList
        for (let file of this.fielUuidList) {
          api.file.delete({
            data: {
              fileUuid: file.fileUuid
            }
          }).then(res => {
          }).catch((res) => {
          })
        }
      },
      success () {
        this.loading = false
        this.isShow = false
        this.$Message.success(this.$t('global.tip.sendBackSuccess'))
      },
      error () {
        this.loading = false
        this.$Message.error(this.$t('global.tip.sendBackError'))
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../styles/index';
</style>
