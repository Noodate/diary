<template>
  <Modal v-model="isShow"
         :title="title"
         :loading="loading"
         @on-ok="ok"
         class="docItvmsgModal"
         class-name="modalIndex"
         @on-cancel="cancel" width="900">
    <Form :label-width="80" ref="dataMap" :model="dataMap" :rules="validate">
      <field-row :span="24">
        <field :label="$t('confirmation.projectGroupWorkManage.fields.company')" prop="company" :span="8">
          <Input v-model="dataMap.company"
                 :placeholder="$t('global.placeholder.input')"></Input>
        </field>
        <field :label="$t('confirmation.projectGroupWorkManage.fields.name')" prop="name" :span="8">
          <Input v-model="dataMap.name"
                 :placeholder="$t('global.placeholder.input')"></Input>
        </field>
        <field :label="$t('confirmation.projectGroupWorkManage.fields.phone')" prop="phone" :span="8">
          <Input v-model="dataMap.phone"
                 :placeholder="$t('global.placeholder.input')"></Input>
        </field>
      </field-row>
      <field-row :span="24">
        <field :label="$t('confirmation.projectGroupWorkManage.fields.dept')" prop="dept" :span="8">
          <Input v-model="dataMap.dept"
                 :placeholder="$t('global.placeholder.input')"></Input>
        </field>
        <field :label="$t('confirmation.projectGroupWorkManage.fields.job')" prop="job" :span="8">
          <Input v-model="dataMap.job"
                 :placeholder="$t('global.placeholder.input')"></Input>
        </field>
        <field :label="$t('confirmation.projectGroupWorkManage.fields.fax')" prop="fax" :span="8">
          <Input v-model="dataMap.fax"
                 :placeholder="$t('global.placeholder.input')"></Input>
        </field>
      </field-row>
      <field-row :span="24">
        <field :label="$t('confirmation.projectGroupWorkManage.fields.address')" prop="address" :span="24">
          <Input v-model="dataMap.address"
                 :placeholder="$t('global.placeholder.input')"></Input>
        </field>
        <field :label="$t('confirmation.projectGroupWorkManage.fields.email')" prop="email" :span="16">
          <Input v-model="dataMap.email"
                 :placeholder="$t('global.placeholder.input')"></Input>
        </field>
        <field :label="$t('confirmation.projectGroupWorkManage.fields.status')" prop="status" :span="8">
          <i-switch size="large" v-model="dataMap.status">
            <span slot="open">{{ $t('global.button.enable') }}</span>
            <span slot="close">{{ $t('global.button.disable') }}</span>
          </i-switch>
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
  import Util from '@/libs/util'
  export default {
    components: {
      FieldRow,
      Field
    },
    props: {
      action: {
        validator (value) {
          return Util.oneOf(value, ['interviewee'])
        },
        default: 'interviewee' // submit unsubmit approve reject
      }
    },
    data () {
      return {
        title: this.$t(`confirmation.projectGroupWorkManage.fieldsReportTitle.${this.action}`),
        loading: false,
        saveLoading: false,
        isShow: false,
        dataMap: {status: true},
        validate: {
          company: [
            {type: 'string', required: true, message: this.$t('confirmation.projectGroupWorkManage.validate.companyRequired'), trigger: 'blur'}
          ],
          name: [
            {type: 'string', required: true, message: this.$t('confirmation.projectGroupWorkManage.validate.companyRequired'), trigger: 'blur'}
          ],
          address: [
            {type: 'string', required: true, message: this.$t('confirmation.projectGroupWorkManage.validate.companyRequired'), trigger: 'blur'}
          ],
          phone: [
            {type: 'string', required: true, message: this.$t('confirmation.projectGroupWorkManage.validate.companyRequired'), trigger: 'blur'}
          ]
        }
      }
    },
    computed: {
    },
    methods: {
      show () {
        this.$refs['dataMap'].resetFields()
        this.isShow = true
      },
      hide () {
        this.isShow = false
        this.loading = false
        this.saveLoading = false
      },
      ok () {
        let _this = this
        this.loading = true
        _this.saveLoading = true
        this.$refs['dataMap'].validate((valid) => {
          if (valid) {
            if (this.action === 'interviewee') {
              this.$emit('on-itvmsg', _this.dataMap)
            }
          } else {
            this.loading = false
            _this.saveLoading = false
            this.$Message.error(this.$t('global.validate.validateError'))
          }
        })
      },
      cancel () {
        this.$refs['dataMap'].resetFields()
        this.isShow = false
      }
    }
  }
</script>
<style lang="scss">
  .docItvmsgModal{
    .ivu-modal-mask{
      z-index:1001;
    }
    .modalIndex {
      z-index: 1002;
    }
  }

</style>
