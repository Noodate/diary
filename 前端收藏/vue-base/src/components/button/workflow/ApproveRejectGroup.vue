<template>
  <ButtonGroup>
    <approve-button ref="approveButton"
                    :uuid="uuid"
                    :confidence="confidence"
                    :operaterConfidence="operaterConfidence"
                    :disable="approveButtonStatus"
                    :usualApproveComments="usualApproveComments"
                    @on-success="handleSuccess"></approve-button>
    <reject-button ref="rejectButton"
                   :uuid="uuid"
                   :confidence="confidence"
                   :operaterConfidence="operaterConfidence"
                   :isUploadDisable="isUploadDisable"
                   :disable="rejectButtonStatus"
                   :usualRejectComments="usualRejectComments"
                   @on-cancel="cancel"
                   @on-uploadReject="handleUploadReject"
                   @on-success="handleSuccess"></reject-button>
  </ButtonGroup>
</template>

<script>
  import ApproveButton from '@/components/button/workflow/ApproveButton'
  import RejectButton from '@/components/button/workflow/RejectButton'
  export default {
    name: 'ApproveRejectGroup',
    components: {
      ApproveButton,
      RejectButton
    },
    props: {
      uuid: {
        type: String,
        default: '0',
        required: true
      },
      confidence: {
        type: String,
        default: ''
      },
      operaterConfidence: {
        type: String,
        default: ''
      },
      isUploadDisable: {
        type: Boolean,
        default: false
      },
      usualApproveComments: {
        type: Array,
        default: () => []
      },
      usualRejectComments: {
        type: Array,
        default: () => []
      }
    },
    data () {
      return {
      }
    },
    computed: {
      approveButtonStatus () {
//        return this.$refs.rejectButton.loading
        return false
      },
      rejectButtonStatus () {
//        return this.$refs.approveButton.loading
        return false
      }
    },
    methods: {
      handleSuccess () {
        this.$emit('on-success')
      },
      handleUploadReject (uploadList, uid, comment) {
        this.$emit('on-uploadReject', uploadList, uid, comment)
      },
      cancel (uploadList, uid) {
        this.$emit('on-cancel', uploadList, uid)
      }
    }
  }
</script>

<style scoped lang="scss">
</style>
