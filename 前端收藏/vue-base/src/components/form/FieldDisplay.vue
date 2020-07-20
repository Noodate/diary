<template>
  <i-col :xs="xsSpan" :sm="12" :md="12" :lg="span" class="itemContent">
    <row type="flex" align="middle">
      <i-col span="24">
        <div class="itemLabel">
          <slot name="label">{{ label }}</slot>
        </div>
        <div class="item">：</div>
        <div class="itemValue">
          <slot></slot>
        </div>
      </i-col>
    </row>
  </i-col>
</template>

<script>
  export default {
    name: 'FieldDisplay',
    props: {
      label: {
        type: String,
        default: ''
      },
      span: {
        type: Number,
        default: 8
      },
      xsSpan: {
        type: Number,
        default: 24
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../styles/index';

  .itemContent {
    margin: 10px 0;
    .item {
      display: table-cell;
      vertical-align:top;
    }
    .itemLabel {
      display: table-cell;
      white-space: nowrap;
      vertical-align:top;
    }
    .itemValue {
      display: table-cell;
      vertical-align:top;
    }
  }


</style>
