<template>
  <div class="popAlert">
    <Poptip trigger="hover"
            :placement="placement"
            :width="width"
            class="popTip"
            :class="classes(type)">
      <slot name="trigger"></slot>
      <div slot="content">
        <Alert :type="type" show-icon>
          <span slot="desc">
           <slot name="alertContent"></slot>
         </span>
        </Alert>
      </div>
    </Poptip>
  </div>


</template>

<script>
  /* eslint-disable semi */
  export default {
    name: 'PopAlert',
    props: {
      placement: {
        type: String,
        default: 'top'
      },
      width: {
        type: String,
        default: '150'
      },
      type: {
        type: String,
        default: 'info'
      }
    },
    methods: {
      classes (type) {
        let alertType = ''
        if (type === 'info') {
          alertType = 'info'
        }
        if (type === 'success') {
          alertType = 'success'
        }
        if (type === 'warning') {
          alertType = 'warning'
        }
        if (type === 'error') {
          alertType = 'error'
        }
        return `${alertType}`
      }
    }
  }
</script>

<style lang="scss">
  @import '../../styles/index';

  .popAlert {
    .popTip {
      .ivu-poptip-body {
        padding: 0;
        .ivu-alert-with-desc, .ivu-alert {
          margin-bottom: 0;
          border-radius: 0;
        }
        .ivu-alert-with-desc .ivu-alert-icon {
          left: 6px;
          top: 30%;
        }
        .ivu-alert-with-desc.ivu-alert-with-icon {
          padding: 10px 10px 10px 40px;
        }
      }
    }
    .warning {
      .ivu-poptip-popper .ivu-poptip-arrow::after {
        border-right-color: #ffebcc;
      }
    }
    .info {
      .ivu-poptip-popper .ivu-poptip-arrow::after {
        border-right-color: #d5e8fc;
      }
    }
    .success {
      .ivu-poptip-popper .ivu-poptip-arrow::after {
        border-right-color: #d1f2e1;
      }
    }
    .error {
      .ivu-poptip-popper .ivu-poptip-arrow::after {
        border-right-color: #fbd9d0;
      }
    }
  }

</style>
