<template>
  <i-col :xs="24" :sm="24" :md="12" :lg="span">
    <row type="flex">
      <i-col span="24">
        <div class="label content">
          <slot name="label">{{ label }}</slot>
        </div>
        <div class="value content">
          <slot></slot>
        </div>
      </i-col>
    </row>
  </i-col>
</template>

<script>
  export default {
    name: 'FieldDisplayHeaderOther',
    props: {
      span: {
        type: Number,
        default: 22
      },
      label: {
        type: String,
        defalut: ''
      },
      value: {
        type: String,
        defalut: ''
      }
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style scoped lang="scss">
  @import '../../styles/index';

  .label {
    color: rgba(0, 0, 0, .45);
    font-size: 14px;
  }

  .value {
    color: rgba(0, 0, 0, .85);
    font-size: 20px;
  }

  .content {
    text-align: right;
  }

</style>
