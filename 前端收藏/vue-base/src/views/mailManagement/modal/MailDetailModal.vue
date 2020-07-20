<template>
  <Modal v-model="isShow"  :title="$t('menu.mailManagement.display')"
         width="600">
    <Form :label-width="80"
          :model="mailForm"
          :rules="ruleValidate"
          ref="mailForm">
      <field-row :span="24">
        <field :span="22"
               prop="mail"
               :label="$t('mailManagement.field.mail')">
          <i-Input v-model="mailForm.mail"
                   :placeholder="$t('mailManagement.placeholder.mail')">
            <Select v-model="mailForm.append" slot="append" style="width: 80px">
              <Option value="com">.com</Option>
              <Option value="cn">.cn</Option>
            </Select>
          </i-Input>
        </field>
      </field-row>
    </Form>
    <div slot="footer">
      <Button size="large"
              type="primary"
              :loading="loading"
              @click="save('mailForm')">
        {{ $t('global.button.ok') }}
      </Button>
    </div>
  </Modal>
</template>
<script>
  import * as api from 'api'
  import config from '@/config/config'
  import FieldRow from '@/components/form/FieldRow.vue'
  import Field from '@/components/form/Field.vue'
  import FileUpload from '@/components/upload/FileUpload.vue'

  export default {
    name: 'MailDetailModal',
    components: {
      FieldRow,
      Field,
      config,
      FileUpload
    },
    data () {
      const validateEMail = (rule, value, callback) => {
        if (/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)) {
          callback()
        } else {
          callback(new Error('请输入正确格式的电子邮箱'))
        }
      }
      return {
        isShow: false,
        loading: false,
        single: true,
        mailForm: {
          mail: '',
          append: 'http'
        },
        ruleValidate: {
          mail: [
            { required: true, type: 'string', message: '请输入电子邮箱地址', trigger: 'blur' },
            { validator: validateEMail, trigger: 'blur' }
          ]
        }
      }
    },
    props: {
      saveLoading: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      isShow: function (val) {
        if (val) {
          this.search()
          console.log(this.allIp)
        }
      }
    },
    methods: {
      show () {
        this.$refs['mailForm'].resetFields()
        this.search()
        this.isShow = true
      },
      // 保存
      save (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.loading = true
            api.ipManagement.ipManagement.save({
              data: {
                'mail': this.mailForm.ip + '.' + this.mailForm.append
              }
            }).then(res => {
              this.loading = false
              console.log(res)
              const body = res.data
              if (body.message === 'SUCCESS') {
                this.$Message.success(this.$t('global.tip.saveSuccess'))
                this.$emit('on-ok')
              } else {
                this.$Message.error(this.$t('global.tip.saveError'))
              }
              this.close()
            }).catch((res) => {
            })
          } else {
            this.$Message.error(this.$t('global.validate.validateError'))
          }
        })
      },
      // 关闭
      close () {
        this.$refs['mailForm'].resetFields()
        this.isShow = false
      },
      // 查全部数据，用于IP校验不能重复
      search () {
        api.ipManagement.ipManagement.findAllList({
          data: {}
        }).then(res => {
          this.loading = false
          console.log(res)
          this.allIp = res.data.data.list
        }).catch((res) => {
          this.loading = false
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../../styles/index';
</style>
