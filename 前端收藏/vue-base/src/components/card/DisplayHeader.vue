<template>
  <Card class="basicInfo">
    <Spin fix v-if="loading">
      <div class="loadingText">{{ loadingText }}</div>
      <img :src="loadingIconSrc">
    </Spin>
    <row type="flex">
      <i-col :sm="2" :xs="3" :lg="1" :xl="1" :xxl="1" v-if="customLogo">
        <slot name="customLogo"></slot>
      </i-col>
      <i-col :sm="2" :xs="3" :lg="1" :xl="1" :xxl="1" v-else>
        <img :src="logoSrc" class="basicInfoLogo">
      </i-col>
      <i-col :lg="$slots.buttons || $slots.other ? 17 : 23"
             :xl="$slots.buttons || $slots.other ? 17 : 23"
             :xxl="$slots.buttons || $slots.other ? 17 : 23"
             :sm="$slots.buttons || $slots.other ? 14 : 23"
             :xs="$slots.buttons || $slots.other ? 14 : 23">
        <div class="title">
          <slot name="title"></slot>
        </div>
        <div class="content">
          <slot name="content"></slot>
        </div>
      </i-col>
      <i-col :sm="7" :xs="7" :lg="6" :xl="6" :xxl="6" v-if="$slots.buttons || $slots.other">
        <row type="flex">
          <i-col span="24">
            <div class="buttons">
              <slot name="buttons"></slot>
            </div>
          </i-col>
        </row>
        <row type="flex">
          <i-col span="24">
            <div class="other">
              <slot name="other"></slot>
            </div>
          </i-col>

        </row>

      </i-col>
    </row>
    <row type="flex">
      <i-col span="24">
        <slot name="otherMainContent"></slot>
      </i-col>
    </row>
  </Card>
</template>

<script>
  import logo from '@/assets/logo/avatarLogo.png'
  import loadingIcon from '@/assets/common/loading.gif'

  export default {
    name: 'DisplayHeader',
    components: {},
    props: {
      loading: {
        type: Boolean,
        default: false
      },
      customLogo: {
        type: Boolean,
        default: false
      },
      loadingText: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        logoSrc: logo,
        loadingIconSrc: loadingIcon
      }
    },
    methods: {}
  }
</script>

<style scoped lang="scss">
  @import '../../styles/index';

  .basicInfo {
    margin-bottom: 5px;
    .loadingText{
      text-align:center;
      margin-bottom:10px;
      font-weight:bold;
      font-size:16px;
    }
    .title {
      margin: 0 0 5px 20px
    }
    .content {
      margin-left: 20px;
    }
    .basicInfoLogo {
      width: 100%;
      height: auto;
      border-radius: 4px;
    }
    .buttons {
      float: right;
      margin: 10px 0 20px 0;
    }
    .other {
      width: 100%;
    }
  }


</style>
