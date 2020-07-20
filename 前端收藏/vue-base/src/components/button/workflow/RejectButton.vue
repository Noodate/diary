<template>
  <Button type="error" @click="handleReject" :loading="loading" :disable="disable">
    <workflow-modal ref="modal"
                    action="reject"
                    :loading="loading"
                    :usualRejectComments="usualRejectComments"
                    @on-cancel="cancel"
                    @on-reject="reject">
      <div v-if="isUploadDisable" slot="uploadFiles">
        <field-row :span="24">
          <field :label="$t('global.upload.uploadFiles')" :span="24">
            <file-upload
              ref="fileUpload"
              :multiple="true"
              :fileList="finishedFileList"
              size="small"></file-upload>
          </field>
        </field-row>
      </div>
    </workflow-modal>
    {{ $t('global.button.reject') }}
  </Button>
</template>

<script>
  import WorkflowModal from '@/components/modal/WorkflowModal'
  import FieldRow from '@/components/form/FieldRow.vue'
  import Field from '@/components/form/Field.vue'
  import FileUpload from '@/components/upload/FileUpload.vue'
  import * as api from 'api'
  import Emitter from '@/mixins/emitter'
  export default {
    name: 'RejectButton',
    components: {
      WorkflowModal,
      FileUpload,
      FieldRow,
      Field
    },
    mixins: [Emitter],
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
      disable: {
        type: Boolean,
        default: false
      },
      isUploadDisable: {
        type: Boolean,
        default: false
      },
      usualRejectComments: {
        type: Array,
        default: () => []
      }
    },
    data () {
      return {
        loading: false,
        finishedFileList: []
      }
    },
    methods: {
      handleReject () {
        this.finishedFileList = []
        this.$refs.modal.show()
      },
      reject (comment) {
        this.loading = true
        // let _this = this
        api.workflow.updateStatus({
          data: {
            recordState: '2',
            recordId: this.uuid,
            recordOpinion: comment,
            people_card_core_second: this.confidence,
            reviewResult: this.operaterConfidence
          }
        }).then(res => {
          console.log(res)
          // const body = res.data
          this.loading = false
          this.$refs.modal.hide()
          this.$Message.success(this.$t('global.tip.rejectSuccess'))
          this.$emit('on-success')
          // if (body.success) {
          //   this.$refs.modal.hide()
          //   this.$Message.success(this.$t('global.tip.rejectSuccess'))
          //   this.$emit('on-success')
          //   this.$emit('on-uploadReject', _this.$refs.fileUpload.uploadList, _this.uuid, comment)
          //   this.dispatch('ApproveLayout', 'on-refresh')
          // } else {
          //   this.$Message.error(this.$t('global.tip.rejectError'))
          //   this.$emit('on-error')
          // }
        }).catch((res) => {
        })
      },
      cancel () {
        this.$emit('on-cancel', this.$refs.fileUpload.uploadList, this.uuid)
      }
    }
  }
</script>

<style scoped lang="scss">
</style>
