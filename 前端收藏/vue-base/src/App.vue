<template>
  <div id="app" class="app-main">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    computed: {}
  }
</script>

<style lang="scss">
  @import 'styles/index';

  html, body {
    width: 100%;
    height: 100%;
    background: #f0f0f0;
  }

  .app-main {
    width: 100%;
    height: 100%;
    background: #f0f0f0;
  }
  /* 表格链接样式 */
  .tableLink {
    cursor: pointer;
    color: $default-font-color;
  }
  /*表格元素左右距离调整*/
  .ivu-table-cell {
    padding-left: 10px !important;
    padding-right: 5px !important;
  }
  .ivu-table{
    font-size:12px;
  }
  .ivu-form .ivu-form-item-label {
    font-size: 12px;
  }
  .ivu-form-item-required .ivu-form-item-label:before{
    font-size:12px;
  }
</style>
