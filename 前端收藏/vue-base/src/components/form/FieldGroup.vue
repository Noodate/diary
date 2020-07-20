<template>
  <div class="group" :class="{ borderBottom: border}">
    <div class="groupTitle">{{title}}</div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'FieldGroup',
    props: {
      border: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../styles/index';

  .borderBottom {
    border-bottom: 1px solid #e8e8e8;
  }

  .group {
    padding: 10px 0;
    margin: 20px 0px;

    .groupTitle {
      margin-bottom: 10px;
      font-size: 16px;
    }
  }


</style>
