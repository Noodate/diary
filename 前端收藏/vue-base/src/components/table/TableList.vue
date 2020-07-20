<template>
  <row type="flex" justify="center">
    <i-col span="24" class="tableButton">
      <slot name="button"></slot>
    </i-col>
    <i-col span="24">
      <div class="tableContent">
        <slot name="table"></slot>
      </div>
      <div class="fr">
        <slot name="page"></slot>
      </div>
    </i-col>
  </row>
</template>

<script>
  export default {
    name: 'TableList',
    data () {
      return {
      }
    }
  }
</script>

<style lang="scss">
  @import '../../styles/index';

  .tableContent {
    margin-bottom: 40px;
  }

  .tableButton {
    margin-bottom: 20px;
  }

</style>
