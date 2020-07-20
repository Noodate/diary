<template>
  <div :class="{item: true, divider: divider}">
    <row type="flex" align="middle" :gutter="8">
      <i-col span="1">
        <div class="icon">
          <icon size="30" :type="iconType"></icon>
        </div>
      </i-col>
      <i-col span="4">
        <div class="title">
          <slot name="title"></slot>
        </div>
      </i-col>
      <i-col span="10">
        <slot name="content"></slot>
      </i-col>
      <i-col span="4" offset="5">
        <slot name="other"></slot>
      </i-col>
    </row>
  </div>
</template>

<script>
  export default {
    name: 'IconListItem',
    props: {
      iconType: {
        type: String,
        default: ''
      },
      divider: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
      }
    },
    computed: {
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/index';

  .item {
    padding: 12px 0;
    height: 78px;
    width: 100%;
    .icon {
      i {
        width: 100%;
        height: auto;
      }
    }
    .title {
      font-size: 14px;
    }

  }

  .divider {
    border-bottom: 1px solid #E3E3E3;
  }
</style>
