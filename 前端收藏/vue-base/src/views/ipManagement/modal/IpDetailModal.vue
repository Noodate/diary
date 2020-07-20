<template>
  <Modal v-model="isShow"  :title="$t('menu.ipManagement.display')"
         width="600">
    <Form :label-width="80"
          :model="ipForm"
          :rules="ruleValidate"
          ref="ipForm">
      <field-row :span="24">
        <field :span="22"
               prop="ip"
               :label="$t('ipManagement.field.ipAddress')">
          <i-Input v-model="ipForm.ip" :placeholder="$t('ipManagement.placeholder.ipAddress')">
            <Select v-model="ipForm.prepend" slot="prepend" style="width: 80px">
              <Option value="http">http://</Option>
              <Option value="https">https://</Option>
            </Select>
          </i-Input>
        </field>
        <field :span="22"
               prop="port"
               :label="$t('ipManagement.field.port')">
          <i-Input v-model="ipForm.port" :placeholder="$t('ipManagement.placeholder.port')">
          </i-Input>
        </field>
        <field :span="22"
               prop="department"
               :label="$t('ipManagement.field.department')">
          <i-Input v-model="ipForm.department" :placeholder="$t('ipManagement.placeholder.department')">
          </i-Input>
        </field>
        <field :span="22"
               prop="name"
               :label="$t('ipManagement.field.name')">
          <i-Input v-model="ipForm.name" :placeholder="$t('ipManagement.placeholder.name')">
          </i-Input>
        </field>
        <field :span="22"
               prop="project"
               :label="$t('ipManagement.field.project')">
          <i-Input v-model="ipForm.project" :placeholder="$t('ipManagement.placeholder.project')">
          </i-Input>
        </field>
        <field :span="22"
               prop="desc"
               :label="$t('ipManagement.field.desc')">
          <i-Input v-model="ipForm.desc" :placeholder="$t('ipManagement.placeholder.desc')">
          </i-Input>
        </field>
      </field-row>
    </Form>
    <div slot="footer">
      <Button size="large"
              type="primary"
              :loading="loading"
              @click="save('ipForm')">
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
    name: 'IpDetailModal',
    components: {
      FieldRow,
      Field,
      config,
      FileUpload
    },
    data () {
      const validateIpAddress = (rule, value, callback) => {
        // 四段0-255
        if (/^(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/.test(value)) {
          callback()
        } else {
          callback(new Error('Ip地址不合法'))
        }
      }
      const validateRepeatIp = (rule, value, callback) => {
        console.log(this.allIp)
        console.log(value)
        let flag = 0
        for (let item of this.allIp) {
          if (value !== item.ip) { // 判断ip不能重复，ip重复就算重复，并没有校验协议
            flag++
          }
        }
        console.log(flag)
        if (flag === this.allIp.length) {
          callback()
        } else {
          callback(new Error('巡检时间模板名称不能重复'))
        }
      }
      const validatePort = (rule, value, callback) => {
        // 0-65535
        if (/^([0-9]|[1-9]\d{1,3}|[1-5]\d{4}|6[0-4]\d{4}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/.test(value)) {
          callback()
        } else {
          callback(new Error('端口不合法'))
        }
      }
      return {
        isShow: false,
        loading: false,
        single: true,
        ipForm: {
          ip: '',
          prepend: 'http',
          port: '',
          department: '',
          desc: '',
          name: '',
          project: ''
        },
        ruleValidate: {
          ip: [
            { required: true, type: 'string', message: '请输入Ip地址', trigger: 'blur' },
            { validator: validateIpAddress, trigger: 'blur' },
            { validator: validateRepeatIp, trigger: 'blur' }
          ],
          department: [
            { required: true, type: 'string', message: '请输入所属分行', trigger: 'blur' },
          ],
          name: [
            { required: true, type: 'string', message: '请输入摄像头名称', trigger: 'blur' },
          ],
          project: [
            { required: true, type: 'string', message: '请输入分行所属项目名称', trigger: 'blur' },
          ],
          port: [
            { validator: validatePort, trigger: 'blur' }
          ],
          allIp: [] // 全部ip
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
        this.$refs['ipForm'].resetFields()
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
                'protocol': this.ipForm.prepend,
                'ip': this.ipForm.ip,
                'port': this.ipForm.port,
                'depart': this.ipForm.department,
                'memo': this.ipForm.desc,
                'name': this.ipForm.name,
                'project': this.ipForm.project
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
        this.$refs['ipForm'].resetFields()
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
