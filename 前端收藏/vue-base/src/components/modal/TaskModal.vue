<template>
  <Modal v-model="isShow"
         :title="title"
         :loading="loading"
         @on-ok="ok"
         @on-cancel="cancel" width="600">
    <Form :label-width="80" ref="form" :model="form" :rules="validate">
      <field-row :span="24">
        <field :label="$t('report.projectGroupWorkManage.rptFields.level')" :span="10">
          <Select v-model="form.initData.level"  :placeholder="$t('')" disabled>
            <Option v-for="item in reportLevalList" :value="item.id" :key="item.id" >{{ item.name }}
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
      <field-row v-if="(form.initData.serviceType === '0') && (form.status === '2' || form.status === '4' ||  form.status === '10')" :span="24">
        <field :label="$t('report.reportCenterManage.workflowMsg.personnel')" prop="personnel.id" :span="10">
          <emp-finder-select v-model="form.personnel" :uuid="this.uuid" typeNumber='2'></emp-finder-select>
        </field>
        <field :label="$t('report.reportCenterManage.workflowMsg.personTime')" prop="personTime" :span="10">
          <InputNumber :min="0" v-model="form.personTime">
          </InputNumber>
        </field>
      </field-row>
      <field-row v-if="(form.initData.serviceType === '0' || form.initData.serviceType === '1') && (form.status === '2' || form.status === '4' || form.status === '5' ||   form.status === '10')" :span="24">
        <field :label="$t('report.reportCenterManage.workflowMsg.checkMan')" prop="checkMan.id" :span="10">
          <emp-finder-select v-model="form.checkMan" :uuid="this.uuid" typeNumber='3'></emp-finder-select>
        </field>
        <field :label="$t('report.reportCenterManage.workflowMsg.checkTime')" prop="checkTime" :span="10">
          <InputNumber :min="0" v-model="form.checkTime">
          </InputNumber>
        </field>
      </field-row>
      <field-row v-if="form.status === '2' || form.status === '4' || form.status === '5' || form.status === '6' || form.status === '10'" :span="24">
        <field :label="$t('report.reportCenterManage.workflowMsg.typographicMan')" prop="typographicMan.id" :span="10">
          <emp-finder-select v-model="form.typographicMan" :uuid="this.uuid" typeNumber='5'></emp-finder-select>
        </field>
        <field :label="$t('report.reportCenterManage.workflowMsg.typographicTime')" prop="typographicTime" :span="10">
          <InputNumber :min="0" v-model="form.typographicTime">
          </InputNumber>
        </field>
      </field-row>
      <field-row :span="24">
        <field :label="$t('report.reportCenterManage.workflowMsg.auditMan')" prop="reportLeader.id" :span="10">
          <emp-finder-select v-model="form.reportLeader" :uuid="this.uuid" typeNumber='4'></emp-finder-select>
        </field>
        <field :label="$t('report.reportCenterManage.workflowMsg.auditTime')" prop="auditTime" :span="10">
          <InputNumber :min="0" v-model="form.auditTime">
          </InputNumber>
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
          return Util.oneOf(value, ['task', 'nextTask'])
        },
        default: 'task'
      },
      uuid: {
        type: String,
        default: '',
        required: true
      }
    },
    computed: {
      title () {
        return this.action === 'task' ? this.$t(`workflow.actionModal.title.task`) : this.$t(`workflow.actionModal.title.nextTask`)
      }
    },
    data () {
      return {
//        title: this.$t(`workflow.actionModal.title.${this.action}`),
        loading: false,
        saveLoading: false,
        isShow: false,
        reportLevalList: this._getDict('report.REPORT_LEVAL'),
        reportServiceType: this._getDict('report.REPORTSERVICE_TYPE'),
        disposeadviceTypeList: this._getDict('report.DISPOSEADVICE_TYPE'),
        form: {
          uuid: '',
          status: '',
          initData: {
            level: '',
            serviceType: ''
          },
          auditTime: 0,
          typographicTime: 0,
          reportLeader: {
            id: '',
            name: ''
          },
          typographicMan: {
            id: '',
            name: ''
          },
          checkTime: 0,
          checkMan: {
            id: '',
            name: ''
          },
          personTime: 0,
          personnel: {
            id: '',
            name: ''
          },
          disposeAdvice: '',
          finishedFileList: []
        },
        validate: {
          'checkMan.id': [
            {
              required: true,
              message: this.$t('report.reportCenterManage.validate.checkManRequired'),
              trigger: 'change'
            }
          ],
          'personnel.id': [
            {
              required: true,
              message: this.$t('report.reportCenterManage.validate.personnelRequired'),
              trigger: 'change'
            }
          ],
          'typographicMan.id': [
            {
              required: true,
              message: this.$t('report.reportCenterManage.validate.checkManRequired'),
              trigger: 'change'
            }
          ],
          'reportLeader.id': [
            {
              required: true,
              message: this.$t('report.reportCenterManage.validate.auditManRequired'),
              trigger: 'change'
            }
          ]
        }
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
      taskInit () {
        this.loading = true
        api.report.reportCenterManage.taskInit({
          data: {
            'pars.uuid': this.uuid,
            'pars.action': this.action
          }
        }).then(res => {
          const body = res.data
          this.loading = false
          if (body.success) {
            this.form = body.pars.dataMap
            this.form.uuid = this.uuid
          }
        }).catch((res) => {
        })
      },
      ok () {
        this.saveLoading = true
        this.$refs['form'].validate((valid) => {
          if (valid) {
            if (this.action === 'task') {
              this.$emit('on-task', this.form)
            } else if (this.action === 'nextTask') {
              this.$emit('on-nextTask', this.form)
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
