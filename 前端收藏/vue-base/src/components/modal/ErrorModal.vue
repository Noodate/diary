<template>
  <Modal
    v-model="isShow"
    :closable="false">
    <p class="errorModalTitle alignMiddle">
      <Icon type="md-close-circle" size="30" color="#ed3f14" style="margin-right:10px;"></Icon>
      <span>{{ $t('message.tip.error') }}</span>
    </p>
    <row type="flex">
      <i-col span="24">
        <i-table :columns="columns" :data="tableData" :border="true"></i-table>
      </i-col>
    </row>
    <p slot="footer">
      <Button type="primary" @click="hide">{{ $t('global.button.ok') }}</Button>
    </p>
  </Modal>
</template>
<script>
  export default {
    name: 'ErrorModal',
    data () {
      return {
        isShow: false,
        columns: [
          {
            title: '所在位置',
            key: 'sheet',
            width: 150
          },
          {
            title: '所在坐标',
            key: 'coordinate',
            width: 70
          },
          {
            title: '错误项',
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
        this.isShow = true
      },
      hide () {
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
