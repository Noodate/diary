<template>
  <div class="uploadListContainer">
    <h4>{{title}}</h4>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'UploadListDisplayContainer',
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>
<style scoped lang="scss">
  @import '../../styles/index';

  /*附件容器*/
  .uploadListContainer {
    h4 {
      margin-bottom: 5px;
    }
    margin-bottom: 10px;
  }


</style>

