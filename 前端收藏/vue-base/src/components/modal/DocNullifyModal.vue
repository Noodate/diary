<template>
  <Modal class="docNullifyModal" class-name="modalIndex" v-model="isShow" width="360">
    <p slot="header" style="color:#f60;text-align:center">
      <Icon type="ios-information-circle"></Icon>
      <span>{{ $t('confirmation.modal.title.prompt') }}</span>
    </p>
    <slot name="content">
      <p>{{ $t('confirmation.modal.message.creatTask') }}</p>
    </slot>
    <div slot="footer">
      <slot name="footer">
        <Button type="text" size="large" @click="cancel">
          {{ $t('global.button.notCreate') }}
        </Button>
        <Button type="primary" size="large" :loading="loading" @click="ok">
          {{ $t('global.button.create') }}
        </Button>
      </slot>
    </div>
  </Modal>
</template>
<script>
  export default {
    name: 'DocNullifyModal',
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
      ok () {
        this.loading = true
        this.$emit('on-create', this)
      },
      cancel () {
        this.loading = true
        this.$emit('on-notCreate', this)
      },
      show (data) {
        this.data = data
        this.isShow = true
        this.loading = false
      },
      success () {
        this.loading = false
        this.isShow = false
        this.$Message.success(this.$t('global.tip.nullifySuccess'))
      },
      error () {
        this.loading = false
        this.$Message.error(this.$t('global.tip.nullifyError'))
      }
    }
  }
</script>
<style lang="scss">
  .docNullifyModal{
    .modalIndex {
      z-index: 1001;
    }
  }

</style>
