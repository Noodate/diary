<template>
    <div class="switch"
         @click="toggleStatus"
         :class="{'checked' : value === true}">
      <span class="switchInner">
        <slot name="open" v-if="value === true"></slot>
        <slot name="close" v-else></slot>
      </span>
    </div>
</template>

<script>
  export default {
    name: 'CustomSwitch',
    data () {
      return {

      }
    },
    props: {
      value: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      value (val) {
        console.log('ppp')
      }
    },
    methods: {
      toggleStatus () {
        this.$emit('on-change')
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../styles/index';
  .switch{
    display: inline-block;
    height: 22px;
    line-height: 20px;
    border-radius: 22px;
    vertical-align: middle;
    border: 1px solid #ccc;
    background-color: #ccc;
    position: relative;
    cursor: pointer;
    user-select: none;
    transition: all .2s ease-in-out;
    width: 56px;
    &::after {
      content: '';
      width: 18px;
      height: 18px;
      border-radius: 18px;
      background-color: #fff;
      position: absolute;
      left: 1px;
      top: 1px;
      cursor: pointer;
      transition: left .2s ease-in-out,width .2s ease-in-out;
    }
    .switchInner{
      color: #fff;
      font-size: 12px;
      position: absolute;
      left: 23px;
    }
  }
  .checked{
    border-color: #2d8cf0;
    background-color: #2d8cf0;
    &::after {
      left: 35px;
    }
    .switchInner{
      left: 7px;
    }
  }

</style>
