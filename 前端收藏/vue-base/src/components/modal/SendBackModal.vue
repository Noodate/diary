<template>
  <Modal v-model="isShow"
         :title="title"
         :loading="loading"
         @on-ok="ok"
         @on-cancel="cancel" width="600">
    <Form :label-width="80" ref="form" :model="form" :rules="validate">
      <field-row :span="24">
        <field v-if="this.flag" :span="8" :label="$t('report.reportCenterManage.workflowMsg.sendSomeOne')" prop="sendSomeOne">
          <Select v-model="form.sendSomeOne">
            <Option v-if="form.serviceType == 0" v-for="item in sendSomeOneList" :value="item.id" :key="item.id">{{ item.name }}
            </Option>
            <Option v-if="form.serviceType == 1" v-for="item in sendSomeOneList1" :value="item.id" :key="item.id">{{ item.name }}
            </Option>
            <Option v-if="form.serviceType == 2" v-for="item in sendSomeOneList2" :value="item.id" :key="item.id">{{ item.name }}
            </Option>
          </Select>
        </field>
        <field :span="16" :label="$t('report.reprtTemplates.fields.uploading')" prop="finishedFileList">
          <file-upload ref="fileUpload"
                       :fileList="form.finishedFileList"
                       :editable="false"
                       size="small"></file-upload>
        </field>
      </field-row>
      <field-row :span="24">
        <field :label="$t('report.reportCenterManage.workflowMsg.disposeAdvice')" prop="comment" :span="24" :rules="commentRules">
          <Input v-model="form.comment"
                 type="textarea"
                 :rows="6"
                 :placeholder="$t('global.placeholder.input')"></Input>
        </field>
      </field-row>
    </Form>
    <div slot="footer">
      <Button type="text" size="large" @click="cancel">
        {{ $t('global.button.cancel') }}
      </Button>
      <Button type="primary" size="large" :loading="saveLoading" @click="ok">
        {{ $t('global.button.ok') }}
      </Button>
    </div>
  </Modal>
</template>
<script>
  import FieldRow from '@/components/form/FieldRow.vue'
  import Field from '@/components/form/Field.vue'
  import Prompt from '@/components/prompt/Prompt'
  import FileUpload from '@/components/upload/FileUpload.vue'
  import Util from '@/libs/util'
  import * as api from 'api'
  export default {
    components: {
      FieldRow,
      FileUpload,
      Field,
      Prompt
    },
    props: {
      action: {
        validator (value) {
          return Util.oneOf(value, ['sendBack'])
        },
        default: 'sendBack' // submit unsubmit approve reject
      },
      uuid: {
        type: String,
        default: '',
        required: true
      },
      flag: {
        type: Boolean,
        default: false,
        required: true
      }
    },
    watch: {
      uuid (val) {
        this.form.uuid = val
      }
    },
    data () {
      const validateFileUpload = (rule, value, callback) => {
        if (this.$refs.fileUpload.getFileList().length <= 0) {
          return callback(new Error(this.$t('report.reportCenterManage.validate.fileUploadRequired')))
        } else {
          callback()
        }
      }
      return {
        title: this.$t(`workflow.actionModal.title.${this.action}`),
        loading: false,
        saveLoading: false,
        isShow: false,
        sendSomeOneList: this._getDict('report.SOMEONE_TYPE'),
        sendSomeOneList1: this._getDict('report.SOMEONE_TYPE1'),
        sendSomeOneList2: this._getDict('report.SOMEONE_TYPE2'),
        disposeadviceTypeList: this._getDict('report.DISPOSEADVICE_TYPE'),
        form: {
          uuid: '',
          comment: '',
          sendSomeOne: '',
          disposeTime: '',
          disposeDept: '',
          disposeEmployee: '',
          disposePhases: '',
          disposeType: '',
          disposeAdvice: '',
          finishedFileList: [],
          finishedFileLists: ''
        },
        validate: {
          basicComment: [
            {type: 'string', min: 2, max: 128, message: this.$t('workflow.actionModal.validate.commentRange'), trigger: 'blur'}
          ],
          sendBackComment: [
            {required: true, message: this.$t('workflow.actionModal.validate.commentRequired'), trigger: 'blur'},
            {type: 'string', min: 2, max: 128, message: this.$t('workflow.actionModal.validate.commentRange'), trigger: 'blur'}
          ],
          sendSomeOne: [
            {
              required: true,
              message: this.$t('report.projectGroupWorkManage.validate.someOneRequired'),
              trigger: 'change'
            }
          ],
          finishedFileList: [
            {validator: validateFileUpload, trigger: 'change'}
          ]
        }
      }
    },
    computed: {
      commentRules () {
        return this.action === 'sendBack' ? this.validate.sendBackComment : this.validate.basicComment
      }
    },
    methods: {
      show () {
        this.saveLoading = false
        this.loading = false
        this.isShow = true
      },
      hide () {
        this.saveLoading = false
        this.loading = false
        this.isShow = false
      },
      initData () {
        this.loading = true
        api.report.reportCenterManage.sendBackInit({
          data: {
            'pars.uuid': this.uuid
          }
        }).then(res => {
          const body = res.data
          this.loading = false
          if (body.success) {
            this.form = body.pars.sendBackData
          }
        }).catch((res) => {
        })
      },
      ok () {
        this.saveLoading = true
        this.$refs['form'].validate((valid) => {
          if (valid) {
            if (this.action === 'sendBack') {
              this.form.finishedFileLists = JSON.stringify(this.$refs.fileUpload.getFileList())
              this.$emit('on-sendBack', this.form)
            }
          } else {
            this.saveLoading = false
            this.$Message.error(this.$t('global.validate.validateError'))
          }
        })
      },
      cancel () {
//        this.$refs['form'].resetFields()
        this.isShow = false
//        this.$emit('on-cancel', this)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../styles/index';
</style>
