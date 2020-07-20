<template>
  <Button type="error" @click="handleBack" :loading="loading" :disable="disable">
    <send-back-modal ref="modal"
                    action="sendBack" :uuid="this.uuid" :flag="this.flag"
                    @on-sendBack="sendBack"></send-back-modal>
    {{ $t('global.button.sendBack') }}
  </Button>
</template>

<script>
  import SendBackModal from '@/components/modal/SendBackModal.vue'
  import * as api from 'api'
  export default {
    components: {
      SendBackModal
    },
    props: {
      uuid: {
        type: String,
        default: '',
        required: true
      },
      disable: {
        type: Boolean,
        default: false
      },
      flag: {
        type: Boolean,
        default: false,
        required: true
      }
    },
    data () {
      return {
        loading: false
      }
    },
    methods: {
      handleBack () {
        this.$refs.modal.initData()
        this.$refs.modal.show()
      },
      sendBack (form) {
        this.loading = true
        api.report.reportCenterManage.doSendBack({
          data: {
            'pars.dataJson': JSON.stringify(form)
          }
        }).then(res => {
          const body = res.data
          this.loading = false
          if (body.success) {
            this.$refs.modal.hide()
            this.$Message.success(this.$t('report.reportCenterManage.tip.sendBackSuccess'))
            this.$emit('on-success')
          } else {
            this.$Message.success(this.$t('report.reportCenterManage.tip.sendBackError'))
            this.$emit('on-error')
          }
        }).catch((res) => {
        })
      }
    }
  }
</script>

<style scoped lang="scss">
</style>
