<template>
  <Button type="error" @click="handleBack" :loading="loading" :disable="disable">
    <doc-task-modal ref="modal"
                     action="task" :uuid="this.uuid"
                     @on-task="doTask"></doc-task-modal>
    {{ $t('global.button.task') }}
  </Button>
</template>

<script>
  import DocTaskModal from '@/components/modal/DocTaskModal.vue'
  import * as api from 'api'
  export default {
    components: {
      DocTaskModal
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
        this.$refs.modal.taskInit()
        this.$refs.modal.show()
      },
      doTask (form) {
        this.loading = true
        api.report.reportCenterManage.doTask({
          data: {
            'pars.dataJson': JSON.stringify(form)
          }
        }).then(res => {
          const body = res.data
          this.loading = false
          if (body.success) {
            this.$refs.modal.hide()
            this.$Message.success(this.$t('report.reportCenterManage.tip.patchSuccess'))
            this.$emit('on-success')
          } else {
            this.$Message.success(this.$t('report.reportCenterManage.tips.patchError'))
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
