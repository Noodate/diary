<template>
  <Modal v-model="isShow"
         :title="title"
         :loading="loading"
         @on-ok="ok"
         @on-cancel="cancel" width="600">
    <Form :label-width="80" ref="form" :model="form" :rules="formValidate">
      <field-row :span="24">
        <field :label="$t('report.projectGroupWorkManage.rptFields.level')" :span="14">
          <Select v-model="form.initData.level" :placeholder="$t('')" disabled>
            <Option v-for="item in reportLevalList" :value="item.id" :key="item.id">{{ item.name }}
            </Option>
          </Select>
        </field>
        <field :label="$t('report.projectGroupWorkManage.rptFields.serviceType')" prop="serviceType" :span="10">
          <Select v-model="form.initData.serviceType" disabled>
            <Option v-for="item in reportServiceType" :value="item.id" :key="item.id">{{ item.name }}
            </Option>
          </Select>
        </field>
      </field-row>
      <field-row v-if="this.type === 0 " :span="24">
        <field :label="$t('report.reportCenterManage.workflowMsg.personnel')" :span="10">
          <i-input v-model="form.initData.operator" disabled>
          </i-input>
        </field>
        <field :label="$t('report.reportCenterManage.workflowMsg.personTime')" prop="personTime" :span="10">
          <InputNumber :min="0" v-model="form.initData.allTime" disabled>
          </InputNumber>
        </field>
      </field-row>
      <field-row v-if="this.type === 1 " :span="24">
        <field :label="$t('report.reportCenterManage.workflowMsg.checkMan')" :span="10">
          <i-input v-model="form.initData.operator" disabled>
          </i-input>
        </field>
        <field :label="$t('report.reportCenterManage.workflowMsg.checkTime')" prop="personTime" :span="10">
          <InputNumber :min="0" v-model="form.initData.allTime" disabled>
          </InputNumber>
        </field>
      </field-row>
      <field-row v-if="this.type === 2 " :span="24">
        <field :label="$t('report.reportCenterManage.workflowMsg.typographicMan')":span="10">
          <i-input v-model="form.initData.operator" disabled>
          </i-input>
        </field>
        <field :label="$t('report.reportCenterManage.workflowMsg.typographicTime')" prop="personTime" :span="10">
          <InputNumber :min="0" v-model="form.initData.allTime" disabled>
          </InputNumber>
        </field>
      </field-row>
      <field-row :span="24">
        <field :label="$t('report.reportCenterManage.workflowMsg.personActTime')" prop="personTime" :span="10">
          <InputNumber :min="0" v-model="form.actTime">
          </InputNumber>
        </field>
      </field-row>
      <field-row :span="24">
        <field :span="16" :label="$t('report.reprtTemplates.fields.uploading')" prop="finishedFileUpload">
          <file-upload ref="fileUpload"
                       :multiple=true
                       :fileList="form.finishedFileList"
                       size="small"></file-upload>
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
  import EmpFinderSelect from '@/views/finder/EmpFinderSelect.vue'
  import Util from '@/libs/util'
  import * as api from 'api'
  export default {
    components: {
      FieldRow,
      EmpFinderSelect,
      FileUpload,
      Field,
      Prompt
    },
    props: {
      action: {
        validator (value) {
          return Util.oneOf(value, ['workOut', 'checkUp', 'composing'])
        },
        default: 'workOut' // submit unsubmit approve reject
      },
      uuid: {
        type: String,
        default: '',
        required: true
      },
      type: {
        type: Number,
        default: 0,
        required: true
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
        reportLevalList: this._getDict('report.REPORT_LEVAL'),
        reportServiceType: this._getDict('report.REPORTSERVICE_TYPE'),
        disposeadviceTypeList: this._getDict('report.DISPOSEADVICE_TYPE'),
        form: {
          uuid: this.uuid,
          initData: {
            level: '',
            reportLeader: '',
            serviceType: '',
            operator: '',
            allTime: 0
          },
          actTime: 0,
          finishedFileList: [],
          finishedFileLists: ''
        },
        formValidate: {
          finishedFileUpload: [
              {validator: validateFileUpload, trigger: 'change'}
          ]
        }
      }
    },
    watch: {
      uuid (val) {
        this.form.uuid = val
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
      dataInit () {
        api.report.reportCenterManage.dataInit({
          data: {
            'pars.uuid': this.uuid,
            'pars.number': this.type
          }
        }).then(res => {
          const body = res.data
          if (body.success) {
            this.form.initData = body.pars.initData
          }
        }).catch((res) => {
        })
      },
      ok () {
        this.saveLoading = true
        this.$refs['form'].validate((valid) => {
          if (valid) {
            this.form.finishedFileLists = JSON.stringify(this.$refs.fileUpload.getFileList())
            this.$emit('on-ok', this.form)
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
