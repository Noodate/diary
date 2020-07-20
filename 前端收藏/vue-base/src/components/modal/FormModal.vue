<template>
  <Modal
    :width="modalWidth"
    :styles="{top: paddingTop + 'px'}"
    v-model="isShow">
    <p slot="header">
      {{$t(header)}}
    </p>
    <slot name="form"></slot>
    <div slot="footer">
      <template v-if="mode === 'edit'">
        <Button size="large" type="text" @click="close">
          {{ $t('global.button.cancel') }}
        </Button>
        <Button size="large" type="primary" :loading="saveLoading" @click="handleSubmit">
          {{ $t('global.button.ok') }}
        </Button>
      </template>
      <template v-else>
        <Button size="large" type="text" @click="close">
          {{ $t('global.button.close') }}
        </Button>
      </template>
    </div>
  </Modal>
</template>
<script>
  import Util from '@/libs/util'
  export default {
    name: 'FormModal',
    props: {
      mode: {
        type: String,
        validator (value) {
          return Util.oneOf(value, ['edit', 'display'])
        },
        default: 'edit'
      },
      header: {
        type: String,
        default: ''
      },
      modalWidth: {
        type: String,
        default: '520'
      },
      paddingTop: {
        type: String,
        default: '100'
      },
      saveLoading: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        isShow: false
      }
    },
    methods: {
      handleSubmit () {
        this.$emit('on-submit')
      },
      show () {
        this.isShow = true
      },
      close () {
        this.isShow = false
      },
      success () {
        this.isShow = false
        this.$Message.success(this.$t('global.tip.saveSuccess'))
      },
      error () {
        this.$Message.error(this.$t('global.tip.saveError'))
      }
    }
  }
</script>
