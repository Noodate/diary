<template>
  <div class="blankPanel" :style="{height: height}">
    <div class="blankPanelContent">
      <div class="blankText" v-if="blankText">
        <p>{{ blankText }}</p>
        <img src="../../assets/common/noData.png" class="image">
      </div>
      <div class="blankWrap alignMiddle" v-else>
        <img src="../../assets/common/noData.png" class="image">
        <span v-if="this.isLoan" class="text">{{$t('workflow.wfStep.tip.noLoan')}}</span>
        <span v-if="!this.isLoan" class="text">{{$t('workflow.wfStep.tip.noData')}}</span>
      </div>

    </div>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'BlankPanel',
    props: {
      height: {
        type: String,
        default: 250 + 'px'
      },
      isLoan: {
        type: Boolean,
        default: false
      },
      blankText: {
        type: String,
        default: ''
      }
    }
  }
</script>
<style scoped lang="scss">
  @import '../../styles/index';

  .blankPanel {
    background-color: rgba(0, 0, 0, .01);
    position: relative;
    top: 0;
    left: 0;
    .blankPanelContent {
      position: absolute;
      left: 50%;
      top: 50%;
      margin: -25px 0 0 -25%;
      width: 50%;
      height: 50px;
      display:flex;
      align-items: center;// 子元素垂直居中
      justify-content: center;// 子元素水平居中
      .text {
        color: rgba(0, 0, 0, .25);
        font-size: 16px;
        padding: 0 5%;
        width:100px;
        text-align:center;
      }
    }
    .blankText{
      text-align:center;
      font-weight:bold;
      font-size:16px;
      p{
        margin-bottom:10px;
      }
    }

  }


</style>
