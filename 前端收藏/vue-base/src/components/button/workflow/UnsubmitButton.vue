<template>
  <Button type="primary" @click="handleUnsubmit" :loading="loading">
    <workflow-modal ref="modal"
                    action="unsubmit"
                    :loading="loading"
                    @on-unsubmit="unsubmit"></workflow-modal>
    {{ $t('global.button.unsubmit') }}
  </Button>
</template>

<script>
  import WorkflowModal from '@/components/modal/WorkflowModal'
  import * as api from 'api'
  export default {
    components: {
      WorkflowModal
    },
    props: {
      wfType: {
        type: String,
        default: '',
        required: true
      },
      uuid: {
        type: String,
        default: '',
        required: true
      }
    },
    data () {
      return {
        loading: false
      }
    },
    methods: {
      handleUnsubmit () {
        this.$refs.modal.show()
      },
      unsubmit (comment) {
        this.loading = true
        api.workflow.unsubmit({
          data: {
            wfType: this.wfType,
            uuid: this.uuid,
            comment: comment
          }
        }).then(res => {
          const body = res.data
          this.loading = false
          if (body.success) {
            this.$refs.modal.hide()
            this.$Message.success(this.$t('global.tip.unsubmitSuccess'))
            this.$emit('on-success')
          } else {
            this.$Message.error(this.$t('global.tip.unsubmitError'))
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
