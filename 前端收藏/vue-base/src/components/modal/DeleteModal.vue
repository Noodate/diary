<template>
  <Modal class="deleteModal" class-name="modalIndex" v-model="isShow" width="360">
    <p slot="header" style="color:#f60;text-align:center">
      <Icon type="ios-information-circle"></Icon>
      <span>{{ $t('global.message.confirmDel') }}</span>
    </p>
    <slot name="content">
      <p>{{ $t('global.message.confirmDelContent') }}</p>
    </slot>
    <div slot="footer">
      <Button type="error"
              size="large"
              long
              :loading="loading"
              @click="handleDelete">{{ $t('global.button.delete') }}
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
        this.$emit('on-delete', this)
      },
      show (data) {
        this.data = data
        this.isShow = true
        this.loading = false
      },
      success () {
        this.loading = false
        this.isShow = false
        this.$Message.success(this.$t('global.tip.deleteSuccess'))
      },
      error () {
        this.loading = false
        this.$Message.error(this.$t('global.tip.deleteError'))
      }
    }
  }
</script>
<style lang="scss">
  .deleteModal{
    .modalIndex {
      z-index: 1001;
    }
  }
</style>
