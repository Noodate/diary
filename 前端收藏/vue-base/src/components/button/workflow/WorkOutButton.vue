<template>
  <Button type="success" @click="handleBack" :loading="loading" :disable="disable">
    <work-out-modal ref="modal"
                action="workOut" :type= 0 :uuid="this.uuid"
                @on-ok="doWorkOut"></work-out-modal>
    {{ $t('global.button.authorized') }}
  </Button>
</template>

<script>
  import WorkOutModal from '@/components/modal/WorkOutModal.vue'
  import * as api from 'api'
  export default {
    components: {
      WorkOutModal
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
      }
    },
    data () {
      return {
        loading: false
      }
    },
    methods: {
      handleBack () {
        this.$refs.modal.dataInit()
        this.$refs.modal.show()
      },
      doWorkOut (form) {
        this.loading = true
        api.report.reportCenterManage.doWorkOut({
          data: {
            'pars.dataJson': JSON.stringify(form)
          }
        }).then(res => {
          const body = res.data
          this.loading = false
          if (body.success) {
            this.$refs.modal.hide()
            this.$Message.success(this.$t('report.reportCenterManage.tip.workOutSuccess'))
            this.$emit('on-success')
          } else {
            this.$Message.success(this.$t('report.reportCenterManage.tip.workOutError'))
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
