<template>
  <div>
    <row type="flex" justify="center">
      <i-col span="14">
        <Select
          ref="select"
          v-model="tempValue"
          :multiple="true"
          :remote="true"
          :remote-method="search"
          :filterable="true"
          :loading="loading"
          :placeholder="$t('global.search.placeholder.keyword')">
          <div class="serachResult">已找到<span>{{ allSearchCount }}</span>条记录</div>
          <div v-show="allSearchCount > 50">
            <Alert type="warning" show-icon>
              {{ $t('global.search.tip.searchPrecisionWarning') }}
            </Alert>
          </div>
          <Option class="alignMiddle" v-for="option in data" :value="option.uuid" :key="option.uuid" :label="option.name">
            <Avatar size="small" style="background-color: #87d068" icon="md-person"></Avatar>
            &nbsp;{{ option.code }}&nbsp;{{ option.name }}&nbsp;{{ option.department }}
          </Option>
        </Select>
      </i-col>
      <i-col span="2" offset="1">
        <Button @click="add">{{ $t('global.button.ok') }}</Button>
      </i-col>
    </row>
    <h3>
      {{ $t('user.fields.user') }}
      <Tooltip placement="top-start" :content="$t('global.tip.showCode')">
        <Icon type="ios-help-circle"></Icon>
        <i-switch v-model="showCode" size="small">
        </i-switch>
      </Tooltip>
    </h3>
    <div class="clearfix">
      <div v-for="user in currValue" class="alignMiddle" style="float: left;margin-left: 10px;">
        <Avatar style="background-color: #87d068" icon="md-person"></Avatar>
        <Tag type="border" closable @on-close="remove(user.userUuid)">
          <template v-if="showCode">{{ user.userCode }}</template>&nbsp;{{ user.userName }}
        </Tag>
      </div>
    </div>
  </div>
</template>
<script>
  import * as api from 'api'
  export default {
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
        tempValue: [],
        tempValueData: [],
        currValue: this.value,
        showCode: false,
        loading: false,
        data: [],
        allSearchCount: 0
      }
    },
    watch: {
      value (val) {
        this.currValue = val
      },
      tempValue (val) {
        if (val) {
          for (let uuid of val) {
            let userObj = this.tempValueData.find((user) => user.uuid === uuid)
            if (!userObj) {
              this.tempValueData.push(this.data.find((user) => user.uuid === uuid))
            }
          }
        }
      }
    },
    methods: {
      removeArrItem (uuid) {
        let arr = this.currValue
        for (let i = arr.length - 1; i >= 0; i--) {
          if (arr[i].userUuid === uuid) {
            arr.splice(i, 1)
            return arr
          }
        }
      },
      search (query) {
        if (query !== '') {
          this.loading = true
          api.select.userTagModeSelect({
            data: {
              'pars.query': query
            }
          }).then(res => {
            const body = res.data
            this.loading = false
            if (body.success) {
              this.data = body.pars.datas.data
              this.allSearchCount = body.pars.datas.pager.allhits
            }
          }).catch((res) => {
          })
        } else {
          this.allSearchCount = 0
          this.data = []
        }
      },
      add () {
        for (let uuid of this.tempValue) {
          if (this.currValue.findIndex((user) => user.userUuid === uuid) === -1) {
            let userObj = this.tempValueData.find((user) => user.uuid === uuid)
            let userObj1 = {}
            userObj1.userUuid = userObj.uuid
            userObj1.userName = userObj.name
            userObj1.userCode = userObj.code
            this.currValue.push(userObj1)
          }
        }
//        this.tempValue.splice(0, this.tempValue.length)
        this.tempValue = []
        this.$refs.select.selectedMultiple = []
        this.$emit('input', this.currValue)
      },
      remove (uuid) {
        this.removeArrItem(uuid)
        this.$emit('input', this.currValue)
      }
    }
  }
</script>
<style scoped lang="scss">
  @import '../../styles/index';

  .serachResult {
    text-align: center;
    font-weight:bold;
    span {
      color: $error;
    }
  }
</style>
