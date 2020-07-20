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
      },
      hzDataList: {
        type: Array,
        default: [],
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
        if (this.hzDataList.length > 0) {
          this.loading = true
          api.confirmation.workManage.submitCheckout({ // 需要校验一下是否有被询证者信息
            data: {
              'pars.uuid': this.uuid
            }
          }).then(res => {
            const body = res.data
            if (body.success) {
              if (body.pars.type === 0 && body.pars.errorCode.length <= 0) {
                this.loading = false
                this.$refs.modal.show()
              } else if (body.pars.type === 1) {
                this.$Message.error(this.$t('confirmation.validate.submitCheckoutMsg'))
                this.loading = false
              } else if (body.pars.errorCode.length > 0) {
                let errorCode = body.pars.errorCode
                let desc = ''
                errorCode.forEach(function (item, index, array) {
                  desc += item + '<br/>'
                })
                this.$Notice.error({
                  desc: desc,
                  title: this.$t('confirmation.projectGroupWorkManage.title.interviewOnlyOne')
                })
                this.loading = false
              }
            } else {
            }
          }).catch((res) => {
          })
        } else {
          this.$Message.error(this.$t('confirmation.validate.pleasedonotempty'))
        }
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
