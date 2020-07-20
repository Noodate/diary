<template>
  <collapse-transition>
    <div class="layout clearfix" v-show="isShow">
      <div class="content">
        <slot></slot>
      </div>
      <div class="close" @click="hide">
        <Tooltip content="不再提示" placement="left">
          <Icon type="md-close" color="#fff" size="16"></Icon>
        </Tooltip>
      </div>
    </div>
  </collapse-transition>
</template>

<script>
  import CollapseTransition from '@/libs/collapse-transition'

  export default {
    name: 'Prompt',
    components: {
      CollapseTransition
    },
    data () {
      return {
        isShow: false,
        loading: false
      }
    },
    methods: {
      hide () {
        this.isShow = false
        this.$emit('on-close')
      },
      show () {
        this.isShow = true
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../styles/index';

  .layout {
    background: #ff7100;
    position: relative;
    top: 0;
    left: 0;
    padding: 10px;
    border-radius: 2px;
    .close {
      position: absolute;
      right: 20px;
      top: 10px;
      cursor: pointer;
      line-height: 23px;
    }
    .content {
      color: $font-white;
      font-size: 14px;
      line-height: 1.5;
      width: 100%;
    }

  }


</style>
