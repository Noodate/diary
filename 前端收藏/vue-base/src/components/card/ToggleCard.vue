<template>
  <div class="toggleCard">
    <Card>
      <row type="flex" justify="center">
        <i-col span="24">
          <div class="title">
            <span @click="toggle">
              {{title}}
            <Icon :type="titleIcon"></Icon>
            </span>
          </div>
        </i-col>
        <i-col span="24">
          <collapse-transition>
            <div v-show="isOpen">
              <Spin fix v-if="loading">
                <div class="toogleCardSpin">
                  <div class="loadingText">{{ loadingText }}</div>
                  <img :src="loadingIconSrc">
                </div>
                <div class="uploadProgress" v-if="percent && percent !== 0">
                  <Progress :percent="percent" />
                  <span style="font-weight:bold;"
                        v-if="percent === 100">
                    文件已上传成功，等待后台处理中，这可能需要几秒钟</span>
                </div>
              </Spin>
              <slot name="content"></slot>
            </div>
          </collapse-transition>
        </i-col>
      </row>
    </Card>
  </div>
</template>

<script>
  import CollapseTransition from '@/libs/collapse-transition.js'
  import loadingIcon from '@/assets/common/loading.gif'
  export default {
    name: 'ToggleCard',
    components: {
      CollapseTransition
    },
    props: {
      title: {
        type: String,
        default: ''
      },
      loading: {
        type: Boolean,
        default: false
      },
      loadingText: {
        type: String,
        default: ''
      },
      percent: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        isOpen: true,
        shrink: false,
        loadingIconSrc: loadingIcon
      }
    },
    computed: {
      titleIcon () {
        return this.isOpen ? 'md-arrow-dropup' : 'md-arrow-dropdown'
      }
    },
    methods: {
      toggle () {
        this.isOpen = !this.isOpen
        this.shrink = !this.shrink
        this.$emit('on-change')
      }
    }
  }
</script>

<style lang="scss">
  @import '../../styles/index';

  .toggleCard {
    margin-bottom: 3px;
    transition: width .2s ease-in-out;
    .ivu-card-body {
      padding: 16px 16px 30px;
      /*卡片标题*/
      .title {
        font-size: 16px;
        font-weight: bold;
        padding: 0 10px;
        margin-bottom: 20px;
        border-left: 4px solid $default-font-color;
        span {
          padding-right: 5px;
          cursor: pointer;
        }
      }
      .uploadProgress{
        position:absolute;
        left:-50%;
        top:60px;
        width:600px;
        margin-left:-250px;
      }
      .loadingText{
        text-align:center;
        margin-bottom:10px;
        font-weight:bold;
        font-size:16px;
      }
    }

  }
</style>
