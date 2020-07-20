<template>
  <div :class="wrapClasses" :style="styles">
    <div :class="[prefixCls + '-tail']"><i></i></div>
    <div :class="[prefixCls + '-head']">
      <div v-if="comment">
        <Poptip trigger="hover" placement="top" transfer>
          <div :class="[prefixCls + '-head-inner']">
            <span v-if="!icon && currentStatus != 'finish' && currentStatus != 'error'">{{ stepNumber }}</span>
            <span v-else :class="iconClasses"></span>
          </div>
          <div slot="content">
            {{comment}}
          </div>
        </Poptip>
      </div>
      <div v-else :class="[prefixCls + '-head-inner']">
        <span v-if="!icon && currentStatus != 'finish' && currentStatus != 'error'">{{ stepNumber }}</span>
        <span v-else :class="iconClasses"></span>
      </div>
    </div>
    <div :class="[prefixCls + '-main']">
      <div :class="[prefixCls + '-title']">{{ title }}</div>
      <div :class="[prefixCls + '-content']">
        <slot name="content">
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
  import Emitter from '@/mixins/emitter'
  import Util from '@/libs/util'

  const prefixCls = 'ivu-steps'
  const iconPrefixCls = 'ivu-icon'
  export default {
    name: 'ScStep',
    mixins: [Emitter],
    props: {
      status: {
        validator (value) {
          return Util.oneOf(value, ['wait', 'process', 'finish', 'error'])
        }
      },
      title: {
        type: String,
        default: ''
      },
//      content: {
//        type: String
//      },
      icon: {
        type: String
      },
      comment: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        prefixCls: prefixCls,
        stepNumber: '',
        nextError: false,
        total: 1,
        currentStatus: ''
      }
    },
    computed: {
      wrapClasses () {
        return [
          `${prefixCls}-item`,
          `${prefixCls}-status-${this.currentStatus}`,
          {
            [`${prefixCls}-custom`]: !!this.icon,
            [`${prefixCls}-next-error`]: this.nextError
          }
        ]
      },
      iconClasses () {
        let icon = ''
        if (this.icon) {
          icon = this.icon
        } else {
          if (this.currentStatus === 'finish') {
            icon = 'ios-checkmark-empty'
          } else if (this.currentStatus === 'error') {
            icon = 'ios-close-empty'
          }
        }
        return [
          `${prefixCls}-icon`,
          `${iconPrefixCls}`,
          {
            [`${iconPrefixCls}-${icon}`]: icon !== ''
          }
        ]
      },
      styles () {
        return {
          width: `${1 / this.total * 100}%`
        }
      }
    },
    watch: {
      status (val) {
        this.currentStatus = val
        if (this.currentStatus === 'error') {
          this.$parent.setNextError()
        }
      }
    },
    created () {
      this.currentStatus = this.status
    },
    mounted () {
      this.dispatch('Steps', 'append')
    },
    beforeDestroy () {
      this.dispatch('Steps', 'remove')
    }
  }
</script>
