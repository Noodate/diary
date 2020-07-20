<template>
  <Modal v-model="isShow"
         :title="$t('menu.inspectTimeManagement.display')"
         width="600">
    <finder-modal ref="finderModal" @on-select="handleSelect" v-model="selectedData"></finder-modal>
    <ip-detail-modal ref="ipDetailModal"></ip-detail-modal>
    <Alert show-icon v-if="templateId !== 'new'">
      关闭状态的模板内容不可以修改哦！修改后，记得点“确认”按钮进行保存哦！
    </Alert>
    <Form :label-width="70"
          :model="inspectTimeForm"
          :rules="ruleValidate"
          ref="inspectTimeForm">
      <field-row :span="24">
        <!--<field :span="22"-->
               <!--prop="isdefault"-->
               <!--:label="$t('inspectTimeManagement.field.isdefault')">-->
          <!--<i-Switch size="large" v-model="inspectTimeForm.ifOpen">-->
            <!--<span slot="open">开启</span>-->
            <!--<span slot="close">关闭</span>-->
          <!--</i-Switch>-->
        <!--</field>-->
        <field :span="22"
               prop="name"
               :label="$t('inspectTimeManagement.field.name')">
          <i-input :placeholder="$t('inspectTimeManagement.placeholder.name')"
                   v-model="inspectTimeForm.name" :disabled="disabled"></i-input>
        </field>
        <field :span="22"
               prop="startTime"
               :label="$t('inspectTimeManagement.field.startTime')">
            <DatePicker type="datetime"
                        :disabled="disabled"
                        :placeholder="$t('inspectTimeManagement.placeholder.startTime')"
                        v-model="inspectTimeForm.startTime"
                        style="width: 200px"></DatePicker>
        </field>
        <field :span="22"
               prop="endTime"
               :label="$t('inspectTimeManagement.field.endTime')">
          <DatePicker type="datetime"
                      :disabled="disabled"
                      :placeholder="$t('inspectTimeManagement.placeholder.endTime')"
                      v-model="inspectTimeForm.endTime"
                      style="width: 200px"></DatePicker>
        </field>
        <field :span="22"
               prop="rate"
               :label="$t('inspectTimeManagement.field.rate')">
          <Select v-model="inspectTimeForm.rate" style="width:200px" :disabled="disabled">
            <Option v-for="item in rateList"
                    :value="item.value"
                    :key="item.value">
              {{ item.label }}
            </Option>
          </Select>
          <!--<TimePicker-->
                      <!--:placeholder="$t('inspectTimeManagement.placeholder.rate')"-->
                      <!--v-model="inspectTimeForm.rate"-->
                      <!--style="width: 200px"></TimePicker>-->
          <!--<InputNumber :min="0" :step="0.1" v-model="inspectTimeForm.rate">-->
          <!--</InputNumber> 小时-->
          <!--<i-input type="text" v-model="inspectTimeForm.rate">-->
          <!--</i-input>-->
        </field>
        <field :span="22" prop="isWeekend" :label="$t('inspectTimeManagement.field.isWeekend')">
          <i-Switch size="large" v-model="inspectTimeForm.isWeekend" :disabled="disabled" >
            <span slot="open">开启</span>
            <span slot="close">关闭</span>
          </i-Switch>
        </field>
        <field :span="22"
               prop="ips"
               :label="$t('inspectTimeManagement.field.ips')">
          <ButtonGroup style="margin-bottom:10px;" v-if="!disabled">
            <Button type="success"
                    :loading="loading"
                    :disabled="disabled"
                    @click="selectIps">
              {{ $t('global.button.select') }}
            </Button>
            <Button type="primary"
                    :loading="loading"
                    :disabled="disabled"
                    @click="addIps">
              没找到想要的ip组？去添加
            </Button>
            <Button type="error"
                    v-if="inspectTimeForm.ips"
                    :loading="loading"
                    :disabled="disabled"
                    @click="clearIps">
              {{ $t('global.button.clear')}}
            </Button>
          </ButtonGroup>
          <i-input  type="textarea"
                    style="display:none"
                    v-model="inspectTimeForm.ips"></i-input>
          <div v-if="inspectTimeForm.ips">
            <Alert type="success" show-icon style="width:285px;">
              您选择了 {{ inspectTimeForm.ips.split(',').length }} 个 ip
            </Alert>
            <Tag color="warning"
                 type="dot"
                 :key="index"
                 v-for="(item, index) in selectedData">
              {{ item.protocol }}://{{item.ip}}
            </Tag>
          </div>
        </field>
      </field-row>
    </Form>
    <div slot="footer">
      <Button size="large"
              type="primary"
              :loading="loading"
              :disabled="disabled"
              @click="save('inspectTimeForm')">
        {{ $t('global.button.ok') }}
      </Button>
    </div>
  </Modal>
</template>
<script>
  import * as api from 'api'
  import FieldRow from '@/components/form/FieldRow.vue'
  import Field from '@/components/form/Field.vue'
  import FinderModal from '@/views/inspectTimeManagement/modal/FinderModal'
  import IpDetailModal from '@/views/ipManagement/modal/IpDetailModal'

  export default {
    name: 'DetailModal',
    components: {
      FieldRow,
      Field,
      FinderModal,
      IpDetailModal
    },
    data () {
      const validateRepeatName = (rule, value, callback) => {
        console.log(this.allTemplate)
        console.log(value)
        console.log(this.templateId)
        let flag = 0
        if (this.templateId === 'new') {
          for (let item of this.allTemplate) {
            if (value !== item.template) {
              flag++
            }
          }
        } else {
          for (let item of this.allTemplate) {
            if (value !== item.template) {
              flag++
            } else if (value === item.template && item.id === this.templateId) {
              flag++
            }
          }
        }
        console.log(flag)
        if (flag === this.allTemplate.length) {
          callback()
        } else {
          callback(new Error('巡检时间模板名称不能重复'))
        }
      }
      const validateEndTime = (rule, value, callback) => {
        this.$nextTick(() => {
          if (this.inspectTimeForm.startTime) {
            if (this.inspectTimeForm.startTime.getTime() >= value.getTime()) {
              callback(new Error('结束时间应大于开始时间'))
            } else {
              callback()
            }
          } else {
            callback()
          }
        })
      }
      const validateStartTime = (rule, value, callback) => {
        // let nowTime = new Date()
        // if (value.getTime() < nowTime.getTime()) {
        //   callback(new Error('开始时间应大于当前时间'))
        // } else {
        //   if (this.inspectTimeForm.endTime) {
        //     if (this.inspectTimeForm.endTime.getTime() <= value.getTime()) {
        //       callback(new Error('结束时间应大于开始时间'))
        //     } else {
        //       callback()
        //     }
        //   } else {
        //     callback()
        //   }
        // }
        this.$nextTick(() => {
          if (this.inspectTimeForm.endTime) {
            if (this.inspectTimeForm.endTime.getTime() <= value.getTime()) {
              callback(new Error('结束时间应大于开始时间'))
            } else {
              callback()
            }
          } else {
            callback()
          }
        })
      }
      return {
        isShow: false,
        loading: false,
        inspectTimeForm: {
          // ifOpen: true,
          name: '',
          startTime: '',
          endTime: '',
          rate: '',
          ips: '',
          isWeekend: false
        },
        ruleValidate: {
          startTime: [
            { required: true, type: 'date', message: '请选择开始时间', trigger: 'change' },
            { validator: validateStartTime, trigger: 'change' }
          ],
          endTime: [
            { required: true, type: 'date', message: '请选择结束时间', trigger: 'change' },
            { validator: validateEndTime, trigger: 'change' }
          ],
          rate: [
            { required: true, type: 'string', message: '请输入巡检频次', trigger: 'change' }
          ],
          ips: [
            { required: true, type: 'string', message: '请选择适配ip', trigger: 'change' }
          ],
          name: [
            { required: true, type: 'string', message: '请输入模板名称', trigger: 'blur' },
            { validator: validateRepeatName, trigger: 'blur' }
          ]
        },
        selectedData: [], // 已选数据
        templateId: '',
        disabled: false,
        rateList: [], // 频率表
        allTemplate: [] // 全部数据
      }
    },
    props: {},
    watch: {
      isShow: function (val) {
        if (val) {
          this.search()
          console.log(this.allTemplate)
        }
      },
      'inspectTimeForm.startTime': function (val) {
        if (this.templateId === 'new' && val === '') {
        } else {
          this.$nextTick(() => {
            this.$refs['inspectTimeForm'].validateField('endTime')
          })
        }
      },
      'inspectTimeForm.endTime': function (val) {
        if (this.templateId === 'new' && val === '') {
        } else {
          this.$nextTick(() => {
            this.$refs['inspectTimeForm'].validateField('startTime')
          })
        }
      }
    },
    methods: {
      show (id) {
        this.disabled = false
        this.templateId = id
        this.$refs['inspectTimeForm'].resetFields()
        if (this.templateId === 'new') {
          this.selectedData = []
        } else {
          this.selectedData = []
          this.getDetail()
        }
        this.isShow = true
      },
      // GMT格式时间转换成yyyy-mm-dd hh:mm:ss
      formateDate (datetime) {
        function addDateZero (num) {
          return (num < 10 ? '0' + num : num)
        }
        let d = new Date(datetime)
        let formatdatetime = d.getFullYear() + '-' + addDateZero(d.getMonth() + 1) + '-' + addDateZero(d.getDate()) + ' ' + addDateZero(d.getHours()) + ':' + addDateZero(d.getMinutes()) + ':' + addDateZero(d.getSeconds())
        return formatdatetime
      },
      // 获取详情
      getDetail () {
        console.log(this.templateId)
        this.loading = true
        api.inspectTimeManagement.inspectTimeManagement.getDetail({
          data: {
            'id': this.templateId
          }
        }).then(res => {
          this.loading = false
          const body = res.data
          if (body.message === 'SUCCESS') {
            console.log(body)
            this.inspectTimeForm.name = body.data.template
            this.inspectTimeForm.startTime = body.data.startTime
            this.inspectTimeForm.endTime = body.data.endTime
            this.inspectTimeForm.rate = body.data.frequency
            this.inspectTimeForm.isWeekend = body.data.checkWeek === 'true' ? true : false
            // this.inspectTimeForm.ips = body.data.list.join(',')
            // this.ipsArray 这个是不带协议的数组（大对象）
            // this.ipsArray = body.data.list
            // this.selectedData = this.ipsArray
            this.selectedData = body.data.list
            let array = []
            for (let item of this.selectedData) {
              // this.inspectTimeForm.ips 这个是不带协议的字符串
              array.push(item.ip)
            }
            this.inspectTimeForm.ips = array.join(',')
            if (body.data.status === 'CLOSE') {
              this.disabled = true
            }
          } else {
            this.$Message.error(this.$t('global.tip.detailError'))
            this.close()
          }
        }).catch((res) => {
          this.loading = false
          this.$Message.error(this.$t('global.tip.detailError'))
          this.close()
        })
      },
      // 保存
      save (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.loading = true
            console.log(this.templateId)
            if (this.templateId === 'new') {
              api.inspectTimeManagement.inspectTimeManagement.save({
                data: {
                  'id': this.templateId === 'new' ? '' : this.templateId,
                  'start_time': this.formateDate(this.inspectTimeForm.startTime),
                  'end_time': this.formateDate(this.inspectTimeForm.endTime),
                  'frequency': this.inspectTimeForm.rate + '',
                  // 'isDefault': this.inspectTimeForm.ifOpen ? 'OPEN' : 'CLOSE',
                  'strConfig': this.inspectTimeForm.ips,
                  'template': this.inspectTimeForm.name,
                  'checkWeek': this.inspectTimeForm.isWeekend.toString()
                }
              }).then(res => {
                this.loading = false
                console.log(res)
                const body = res.data
                if (body.message === 'SUCCESS') {
                  this.$Message.success({
                    content: this.$t('inspectTimeManagement.tip.saveSuccessAndOpen'),
                    duration: 5
                  })
                  this.$emit('on-ok')
                } else {
                  this.$Message.error(this.$t('inspectTimeManagement.tip.saveError'))
                }
                this.close()
              }).catch((res) => {
                this.$Message.error(this.$t('inspectTimeManagement.tip.saveError'))
              })
            } else {
              api.inspectTimeManagement.inspectTimeManagement.update({
                data: {
                  'id': this.templateId,
                  'start_time': this.formateDate(this.inspectTimeForm.startTime),
                  'end_time': this.formateDate(this.inspectTimeForm.endTime),
                  'frequency': this.inspectTimeForm.rate + '',
                  // 'isDefault': this.inspectTimeForm.ifOpen ? 'OPEN' : 'CLOSE',
                  'strIPs': this.inspectTimeForm.ips,
                  'template': this.inspectTimeForm.name,
                  'checkWeek': this.inspectTimeForm.isWeekend.toString()
                }
              }).then(res => {
                this.loading = false
                console.log(res)
                const body = res.data
                if (body.message === 'SUCCESS') {
                  this.$Message.success({
                    content: this.$t('global.tip.saveSuccess'),
                    duration: 5
                  })
                  this.$emit('on-ok')
                  this.close()
                } else {
                  this.$Message.error(this.$t('inspectTimeManagement.tip.saveError'))
                }
              }).catch((res) => {
                this.$Message.error(this.$t('inspectTimeManagement.tip.saveError'))
              })
            }
          } else {
            this.$Message.error(this.$t('global.validate.validateError'))
          }
        })
      },
      // 关闭
      close () {
        this.$refs['inspectTimeForm'].resetFields()
        this.selectedData = []
        this.isShow = false
      },
      // 弹出选择ip框
      selectIps () {
        this.$refs.finderModal.show()
        if (this.templateId !== 'new') {
          console.log(this.inspectTimeForm.ips)
        }
      },
      // 选择ip后的回调
      handleSelect (value) {
        this.selectedData = value
        // this.ipsArray = value
        let obj = []
        for (let item of value) {
          obj.push(item.ip)
        }
        this.inspectTimeForm.ips = obj.join(',')
      },
      // 弹出新增ip组框
      addIps () {
        this.$refs.ipDetailModal.show()
      },
      // 清空ip
      clearIps () {
        this.inspectTimeForm.ips = ''
        this.selectedData = []
      },
      // 查全部数据，用于模板名称校验不能重复
      search () {
        api.inspectTimeManagement.inspectTimeManagement.findAllList({
          data: {}
        }).then(res => {
          this.loading = false
          console.log(res)
          this.allTemplate = res.data.data.list
        }).catch((res) => {
          this.loading = false
        })
      }
    },
    mounted () {
      let array = [
        {value: '30分钟', label: '30分钟'},
        {value: '40分钟', label: '40分钟'},
        {value: '50分钟', label: '50分钟'}
      ]
      for (let i = 1; i <= 12; i++) {
        let obj = {value: i + '小时', label: i + '小时'}
        array.push(obj)
      }
      this.rateList = array
      this.search()
    }
  }
</script>

<style scoped lang="scss">
  @import '../../../styles/index';
</style>
