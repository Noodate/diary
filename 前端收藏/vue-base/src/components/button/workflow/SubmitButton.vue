<template>
  <Button type="primary" @click="handleSubmit" :loading="loading">
    <workflow-modal ref="modal"
                    action="submit"
                    :loading="loading"
                    @on-submit="submit"></workflow-modal>
    {{ $t('global.button.submit') }}
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
      handleSubmit () {
        this.$refs.modal.show()
      },
      submit (comment) {
        this.loading = true
        api.workflow.submit({
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
            this.$Message.success(this.$t('global.tip.submitSuccess'))
            this.$emit('on-success')
          } else {
            this.$Message.error(this.$t('global.tip.submitError'))
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
