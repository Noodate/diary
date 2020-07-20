<template>
  <Modal v-model="isShow"
         :title="title"
         :loading="loading"
         @on-ok="ok"
         @on-cancel="cancel" width="600">
    <Form :label-width="80" ref="form" :model="form" :rules="validate">
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
      <Button type="primary" size="large" :loading="loading" @click="ok">
        {{ $t('global.button.ok') }}
      </Button>
    </div>
  </Modal>
</template>
<script>
  import FieldRow from '@/components/form/FieldRow.vue'
  import Field from '@/components/form/Field.vue'
  import Util from '@/libs/util'
//  import * as api from 'api'
  export default {
    components: {
      FieldRow,
      Field
    },
    props: {
      action: {
        validator (value) {
          return Util.oneOf(value, ['sendBack'])
        },
        default: 'sendBack' // submit unsubmit approve reject
      }
    },
    data () {
      return {
        title: this.$t(`workflow.actionModal.title.${this.action}`),
        loading: false,
        isShow: false,
        form: {
          comment: ''
        },
        validate: {
          comment: [
            {type: 'string', required: true, message: this.$t('confirmation.projectGroupWorkManage.validate.disposeAdviceRequired'), trigger: 'blur'}
          ]
        }
      }
    },
    computed: {
    },
    methods: {
      show () {
        this.isShow = true
      },
      hide () {
        this.isShow = false
      },
      initData () {
      },
      ok () {
        this.$refs['form'].validate((valid) => {
          if (valid) {
            if (this.action === 'sendBack') {
              this.$emit('on-sendBack', this.form)
            }
          } else {
            this.$Message.error(this.$t('global.validate.validateError'))
          }
        })
      },
      cancel () {
        this.isShow = false
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../styles/index';
</style>
