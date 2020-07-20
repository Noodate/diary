<template>
  <Modal
    v-model="isShow"
    :closable="false" width="600px">
    <p class="errorModalTitle alignMiddle">
      <Icon type="ios-alert-outline" size="30" color="#ff9900" style="margin-right:10px;"></Icon>
      <span>{{ $t('message.tip.alert') }}</span>
    </p>
    <row type="flex">
      <i-col span="24">
        <i-table :columns="columns" :data="tableData" :border="true" @on-selection-change="selectedData"></i-table>
      </i-col>
    </row>
    <p slot="footer">
      <Button type="primary" @click="ok" :loading="saveLoading">{{ $t('global.button.ok') }}</Button>
    </p>
  </Modal>
</template>
<script>
  import * as api from 'api'
  export default {
    name: 'NextSendModal',
    data () {
      return {
        isShow: false,
        saveLoading: false,
        selectedList: [],
        columns: [
          {
            type: 'selection',
            align: 'center',
            width: 60
          },
          {
            title: '函证编号',
            key: 'code',
            width: 150
          },
          {
            title: '函证负责人',
            key: 'principal',
            width: 95
          },
          {
            width: 240,
            title: '提示项',
            key: 'item'
          }
        ]
      }
    },
    props: {
      tableData: {
        type: Array,
        default: () => []
      }

    },
    methods: {
      show () {
        this.saveLoading = false
        this.isShow = true
      },
      selectedData (selection) {
        this.selectedList = selection
      },
      ok () {
        this.saveLoading = true
        if (this.selectedList.length === 0) {
          this.hide()
        } else {
          let nextSendData = []
          for (let selectedListItem of this.selectedList) {
            nextSendData.push(selectedListItem.hzUuid)
          }
          api.confirmation.workManage.nextSend({
            data: {
              'pars.nextSendData': nextSendData.join(',')
            }
          }).then(res => {
            const body = res.data
            if (body.success) {
              this.hide()
              this.selectedList = []
              this.$Message.success(this.$t('confirmation.projectGroupWorkManage.tip.nextSendSuccess'))
            }
          }).catch((res) => {
          })
        }
      },
      hide () {
        this.saveLoading = false
        this.isShow = false
      }
    }
  }
</script>
<style scoped lang="scss">
  @import '../../styles/index';
  .errorModalTitle{
    font-size:14px;
    color:#1c2438;
    font-weight:700;
    margin-bottom:15px;
  }
</style>
