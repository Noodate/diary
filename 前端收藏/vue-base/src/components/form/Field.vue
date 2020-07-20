<template>
  <i-col :xs="xsSpan" :sm="24" :md="24" :lg="span"  :xl="xlSpan" :xxl="xxlSpan" class="item">
    <row type="flex" align="middle">
      <i-col span="24">
        <FormItem :prop="prop" :rules="rules">
          <span slot="label" v-if="label !== '' || $slots.label">
            <slot name="label">{{label}}</slot>
          </span>
          <slot></slot>
        </FormItem>
      </i-col>
    </row>
  </i-col>
</template>

<script>
  export default {
    name: 'Field',
    props: {
      span: {
        type: Number,
        default: 8
      },
      xsSpan: {
        type: Number,
        default: 24
      },
      xlSpan: {
        type: Number,
        default: this.xlSpan
      },
      xxlSpan: {
        type: Number,
        default: this.xxlSpan
      },
      label: {
        type: String,
        default: ''
      },
      prop: {
        type: String,
        default: ''
      },
      rules: {
        type: [Object, Array]
      }
    }
  }
</script>
