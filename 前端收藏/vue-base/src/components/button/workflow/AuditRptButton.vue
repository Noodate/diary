<template>
  <Button type="success" @click="handleBack" :loading="loading" :disable="disable">
    <audit-end-modal ref="modal" :type= this.type :uuid="this.uuid"
                     @on-ok="handleEndAudit"></audit-end-modal>
    {{ $t('global.button.endAudit') }}
  </Button>
</template>

<script>
  import AuditEndModal from '@/components/modal/AuditEndModal.vue'
  import * as api from 'api'
  export default {
    components: {
      AuditEndModal
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
      type: {
        type: Number,
        default: 0,
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
        this.$refs.modal.show()
      },
      handleEndAudit (form) {
        this.loading = true
        api.report.reportCenterManage.doEndAudit({
          data: {
            'pars.dataJson': JSON.stringify(form)
          }
        }).then(res => {
          const body = res.data
          this.loading = false
          if (body.success) {
            this.$refs.modal.hide()
            this.$Message.success(this.$t('report.reportCenterManage.tip.auditSuccess'))
            this.$emit('on-success')
          } else {
            this.$Message.success(this.$t('report.reportCenterManage.tip.auditError'))
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
