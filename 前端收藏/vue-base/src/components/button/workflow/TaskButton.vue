<template>
  <Button type="info" @click="handleBack" :loading="loading" :disable="disable">
    <task-modal ref="modal"
                     :action="this.action" :uuid="this.uuid"
                     @on-task="doTask" @on-nextTask="doNextask"></task-modal>
    {{this.title}}
  </Button>
</template>

<script>
  import TaskModal from '@/components/modal/TaskModal.vue'
  import * as api from 'api'
  import Util from '@/libs/util'
  export default {
    components: {
      TaskModal
    },
    props: {
      action: {
        validator (value) {
          return Util.oneOf(value, ['task', 'nextTask'])
        },
        default: 'task'
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
    computed: {
      title () {
        return this.action === 'task' ? this.$t(`workflow.actionModal.title.task`) : this.$t(`workflow.actionModal.title.nextTask`)
      }
    },
    data () {
      return {
//        title: this.$t(`workflow.actionModal.title.${this.action}`),
        loading: false
      }
    },
    methods: {
      handleBack () {
        this.$refs.modal.taskInit()
        this.$refs.modal.show()
      },
      doNextask (form) {
        this.loading = true
        api.report.reportCenterManage.doNextTask({
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
