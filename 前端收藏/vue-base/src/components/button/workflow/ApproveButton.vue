<template>
  <Button type="success" @click="handleApprove" :loading="loading" :disable="disable">
    <workflow-modal ref="modal"
                    action="approve"
                    :loading="loading"
                    :usualApproveComments="usualApproveComments"
                    @on-approve="approve"></workflow-modal>
    {{ $t('global.button.approve') }}
  </Button>
</template>

<script>
  import WorkflowModal from '@/components/modal/WorkflowModal'
  import * as api from 'api'
  import Emitter from '@/mixins/emitter'
  export default {
    name: 'ApproveButton',
    components: {
      WorkflowModal
    },
    mixins: [Emitter],
    props: {
      uuid: {
        type: String,
        default: '0',
        required: true
      },
      disable: {
        type: Boolean,
        default: false
      },
      confidence: {
        type: String,
        default: ''
      },
      operaterConfidence: {
        type: String,
        default: ''
      },
      usualApproveComments: {
        type: Array,
        default: () => []
      }
    },
    data () {
      return {
        loading: false
      }
    },
    methods: {
      handleApprove () {
        this.$refs.modal.show()
      },
      approve (comment) {
        this.loading = true
        api.workflow.updateStatus({
          data: {
            recordState: '1',
            recordId: this.uuid,
            recordOpinion: comment,
            people_card_core_second: this.confidence,
            reviewResult: this.operaterConfidence
          }
        }).then(res => {
          // const body = res.data
          this.loading = false
          this.$refs.modal.hide()
          this.$Message.success(this.$t('global.tip.approveSuccess'))
          this.$emit('on-success')
          // if (body.success) {
          //   this.$refs.modal.hide()
          //   this.$Message.success(this.$t('global.tip.approveSuccess'))
          //   this.$emit('on-success')
          //   this.dispatch('ApproveLayout', 'on-refresh')
          // } else {
          //   this.$Message.error(this.$t('global.tip.approveError'))
          //   this.$emit('on-error')
          // }
        }).catch((res) => {
        })
      }
    }
  }
</script>

<style scoped lang="scss">
</style>
