<template>
  <row type="flex" justify="center">
    <i-col :xs="24" :sm="24" :md="getMdSpan" :lg="span">
      <row>
        <slot></slot>
      </row>
    </i-col>
  </row>
</template>

<script>
  export default {
    name: 'FieldRow',
    props: {
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
