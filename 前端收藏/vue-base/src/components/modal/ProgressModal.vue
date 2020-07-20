<template>
  <Modal
    v-model="isShow"actual
    :closable="false"
    :mask-closable="false"
    :title="$t('global.tip.taskProgress')">
    <Progress :percent="percent" :stroke-width="20" :status="status"></Progress>
    <div slot="footer">
      <template v-if="status === 'wrong'">
        <Button size="large" type="text"
                @click="close">
          {{ $t('global.button.close') }}
        </Button>
      </template>
      <template v-if="status === 'active'">
        <Button size="large" type="error" :disabled="true"
                :loading="cancelTaskLoading"
                @click="handleCancel">
          {{ $t('global.button.cancelTask') }}
        </Button>
      </template>
    </div>
  </Modal>
</template>
<script>
  export default {
    name: 'ProgressModal',
    props: {
      height: {
      }
    },
    data () {
      return {
        isShow: false,
        cancelTaskLoading: false,
        percent: 0,
        status: 'active', // normal、active、wrong、success
        timer: null
      }
    },
    methods: {
      clearTimer () {
        if (this.timer) {
          clearInterval(this.timer)
          this.timer = null
        }
      },
      start () {
        this.status = 'active'
        this.isShow = true
        this.percent = 0
        this.timer = setInterval(() => {
          this.percent += Math.floor(Math.random() * 3 + 5)
          if (this.percent > 85) {
            this.clearTimer()
          }
        }, 200)
      },
      success () {
        this.clearTimer()
        this.percent = 100
        this.status = 'success'
        this.isShow = false
        this.$Message.success(this.$t('global.tip.operationSuccess'))
      },
      error () {
        this.clearTimer()
        this.status = 'wrong'
        this.$Message.error(this.$t('global.tip.operationError'))
      },
      close () { // 只能内部调用，错误时显示错误框，用户手动点击关闭
        this.isShow = false
      }
    },
    destroy () {
      this.clearTimer()
    }
  }
</script>
<style scoped lang="scss">
  @import '../../styles/index';

</style>
