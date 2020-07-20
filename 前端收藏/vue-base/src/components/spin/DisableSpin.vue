<template>
  <Spin :fix="fix">
    <slot></slot>
  </Spin>
</template>
<script>
  /**
   * 禁用组件，禁用一段组件，并根据需要显示提示信息
   */
  export default {
    components: {
    },
    props: {
      fix: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
      }
    }
  }
</script>

<style scoped lang="scss">
</style>
