<template>
  <Modal class="docCloseModal" class-name="modalIndex" v-model="isShow" width="360">
    <p slot="header" style="color:#f60;text-align:center">
      <Icon type="ios-information-circle"></Icon>
      <span>{{ $t('confirmation.modal.message.affirmClose') }}</span>
    </p>
    <slot name="content">
      <p>{{ $t('confirmation.modal.message.isAffirmClose') }}</p>
    </slot>
    <div slot="footer">
      <Button type="text" size="large" @click="cancel">
        {{ $t('global.button.cancel') }}
      </Button>
      <Button type="primary" size="large" :loading="loading" @click="handleDelete">
        {{ $t('global.button.ok') }}
      </Button>
    </div>
  </Modal>
</template>
<script>
  export default {
    name: 'DeleteModal',
    props: {
    },
    data () {
      return {
        isShow: false,
        loading: false,
        data: []
      }
    },
    watch: {
    },
    methods: {
      handleDelete () {
        this.loading = true
        this.$emit('on-close', this)
      },
      cancel () {
        this.loading = true
        this.isShow = false
      },
      show (data) {
        this.data = data
        this.isShow = true
        this.loading = false
      },
      success () {
        this.loading = false
        this.isShow = false
        this.$Message.success(this.$t('global.tip.closeSuccess'))
      },
      error () {
        this.loading = false
        this.$Message.error(this.$t('global.tip.closeError'))
      }
    }
  }
</script>
<style lang="scss">
  .docCloseModal{
    .modalIndex {
      z-index: 1001;
    }
  }

</style>
