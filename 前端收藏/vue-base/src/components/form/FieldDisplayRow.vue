<template>
  <row type="flex" justify="center">
    <i-col :xs="24" :sm="24" :md="getMdSpan" :lg="span">
      <row v-if="this.show" type="flex" :justify="justify">
        <slot></slot>
      </row>
    </i-col>
  </row>
</template>

<script>
  export default {
    name: 'FieldDisplayRow',
    props: {
      justify: {
        type: String,
        default: 'start'
      },
      show: {
        type: Boolean, // 0显示1隐藏
        default: true
      },
      span: {
        type: Number,
        default: 22
      }
    },
    computed: {
      getMdSpan () {
        return this.span <= 23 ? this.span + 1 : this.span
      }
    }
  }
</script>
