<template>
  <div>
    <Modal
      v-model="ifAddAuth"
      :title="$t('authSelect.message.title')"
      @on-ok="add">
      <div class="selectAuth">
        <Select ref="select"
                v-model="tempValue"
                :placeholder="$t('authSelect.placeholder.authKeyword')"
                style="width:300px"
                :multiple="true"
                :filterable="true">
          <Option v-for="(authItem, index) in authList"
                  :value="authItem.id"
                  :key="authItem.index">
            {{ authItem.name }}
          </Option>
        </Select>
      </div>
    </Modal>
    <row type="flex" justify="center" class="buttons">
      <i-col span="24">
        <Button type="primary" icon="md-add" @click="showModal">
          {{$t('global.button.new')}}
        </Button>
        <Button type="error" icon="md-remove" @click="deleteSelected(selectedList)">
          {{$t('global.button.delete')}}
        </Button>
      </i-col>
    </row>
    <row type="flex" justify="center" class="table">
      <i-col span="24">
        <Table border
               :columns="selectedAuthTableColumns"
               :data="currValue"
               @on-selection-change="selectedData">
        </Table>
      </i-col>
    </row>
  </div>
</template>

<script>
  export default {
    name: 'AuthSelect',
    props: {
      value: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    data () {
      return {
        ifAddAuth: false, // 模糊框
        tempValue: [], // 多选框选中的数组
        tempValueData: [],
        currValue: this.value, // 最终已选的数组
        selectedAuthTableColumns: [
          {
            type: 'selection',
            align: 'center',
            width: 60
          },
          {
            title: this.$t('auth.authGroup.fields.code'),
            key: 'code',
            width: 200
          },
          {
            title: this.$t('auth.authGroup.fields.name'),
            width: 250,
            key: 'name'
          },
          {
            title: this.$t('auth.authGroup.fields.desc'),
            key: 'desc'
          }
        ],
        authList: [ // 全部选项
          {
            id: '001',
            code: 'a1',
            name: '人力',
            desc: '人力部门',
            status: true,
            statusColor: 'green',
            statusText: '已启用'
          },
          {
            id: '002',
            code: 'a2',
            name: '行政',
            desc: '行政部门',
            status: true,
            statusColor: 'green',
            statusText: '已启用'
          },
          {
            id: '003',
            code: 'a3',
            name: 'IT',
            desc: 'IT部门',
            status: true,
            statusColor: 'green',
            statusText: '已启用'
          },
          {
            id: '004',
            code: 'a4',
            name: '审计',
            desc: '审计部门',
            status: true,
            statusColor: 'green',
            statusText: '已启用'
          },
          {
            id: '005',
            code: 'a5',
            name: '后勤',
            desc: '后勤部门',
            status: true,
            statusColor: 'green',
            statusText: '已启用'
          },
          {
            id: '006',
            code: 'a6',
            name: '董事会',
            desc: '董事会部门',
            status: true,
            statusColor: 'green',
            statusText: '已启用'
          }
        ],
        selectedList: [] // 已被选择等着被删的对象数组
      }
    },
    watch: {
      value (val) {
        this.currValue = val
      },
      tempValue (val) {
        if (val) {
          for (let id of val) {
            let authObj = this.tempValueData.find((auth) => auth.id === id)
            if (!authObj) {
              this.tempValueData.push(this.authList.find((auth) => auth.id === id))
            }
          }
        }
      }
    },
    methods: {
      showModal () {
        this.ifAddAuth = true
      },
      add () {
        for (let id of this.tempValue) {
          if (this.currValue.findIndex((auth) => auth.id === id) === -1) {
            let authObj = this.tempValueData.find((auth) => auth.id === id)
            let authObj1 = {}
            authObj1.id = authObj.id
            authObj1.code = authObj.code
            authObj1.name = authObj.name
            authObj1.desc = authObj.desc
            this.currValue.push(authObj1)
          }
        }
        this.tempValue = []
        this.$refs.select.selectedMultiple = []
        this.$emit('input', this.currValue)
      },
      selectedData (selection) {
        this.selectedList = selection
      },
      deleteSelected (selectedList) {
        let selectedListLength = selectedList.length
        if (selectedListLength === 0) {
          this.$Message.error(this.$t('global.validate.chooseAtLeastOne'))
        } else {
          for (let selectedListItem of selectedList) {
            for (let [index, currValueItem] of this.currValue.entries()) {
              if (currValueItem.id === selectedListItem.id) {
                this.currValue.splice(index, 1)
              }
            }
          }
        }
        this.selectedList = []
        this.$emit('input', this.currValue)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../styles/index';

  .buttons {
    margin-bottom: 20px;
  }
</style>
