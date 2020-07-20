<template>
  <div>
    <div class="buttonGroup">
      <Button v-if="status==0"  type="primary" class="buttonLoading" :loading="loading" @click="handleSave">
        {{$t('global.button.edit')}}
      </Button>
      <Button v-if="status==0"  type="primary" class="buttonLoading" :loading="loading" @click="handleSubmit">
        {{$t('global.button.submit')}}
      </Button>
      <Button v-if="status==1 && pageName==true"  type="primary" class="buttonLoading" :loading="loading" @click="handleRecall">
        {{$t('global.button.unsubmit')}}
      </Button>
      <Button v-if="status==1 && pageName==true"  type="primary" class="buttonLoading" :loading="loading" @click="handleApprove">
        {{$t('global.button.approve')}}
      </Button>
      <Button v-if="status==1 && pageName==true"  type="error" class="buttonLoading" :loading="loading" @click="handleReject">
        {{$t('global.button.reject')}}
      </Button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ButtonAffixUp',
    components: {
    },
    props: {
      loading: {
        type: Boolean,
        default: false
      },
      status: {
        type: Number,
        default: 0
      },
      pageName: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        // 0拒绝 1批准
        rectOrAove: 1
      }
    },
    methods: {
      handleSave () {
        this.$emit('on-edit')
      },
      handleSubmit () {
        this.$emit('on-submit')
      },
      handleRecall () {
        this.$emit('on-recall')
      },
      handleApprove () {
        this.rectOrAove = 1
        this.$refs.rejectModal.show()
      },
      handleReject () {
        this.rectOrAove = 0
        this.$refs.rejectModal.show()
      },
      handleOk (val) {
        this.$emit('on-ok', [val, this.rectOrAove])
      },
      handleCancel (val) {
        this.$emit('on-cancel', [val, this.rectOrAove])
      }
    }
  }
</script>

<style lang="scss">
  @import '../../styles/index';
</style>
