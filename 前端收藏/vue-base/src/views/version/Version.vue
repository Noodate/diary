<template>
  <div>
    <div class="masthead">
      <h1 class="title">{{ $t('global.version.title') }}</h1>
      <p class="subtitle">{{ $t('global.version.subtitle') }}</p>
    </div>
    <Row type="flex" justify="center">
      <i-col span="18">
        <Card class="versionCard">
          <p slot="title">
            <Icon type="ios-grid-outline"></Icon>
            {{title}}
          </p>
          <Timeline>
            <TimelineItem v-for="(timeLineItem, index) in timeLineItems" :key="index" :id="timeLineItem.version">
              <p class="version" @mouseenter="timeLineItem.ifAnchor = true" @mouseleave="timeLineItem.ifAnchor = false">
                {{timeLineItem.version}}
                <a v-if="timeLineItem.ifAnchor" @click="goAnchor('#' + timeLineItem.version )">#</a>
              </p>
              <p class="time">{{timeLineItem.time}}</p>
              <ul class="content">
                <li v-for="contentItem in timeLineItem.contentItems" class="contentItem">
                  <p class="contentItemIcon" :class="contentItem.type" v-html="contentItem.content"></p>
                </li>
              </ul>
            </TimelineItem>
          </Timeline>
        </Card>
      </i-col>
    </Row>
  </div>
</template>
<script>
  import { VersionData } from 'views/version/VersionData' // 注意路径
  export default {
    name: 'Version',
    data () {
      return {
        title: VersionData.title,
        timeLineItems: VersionData.timeLineItems
      }
    },
    methods: {
      goAnchor (selector) {
//        alert(selector)
        let anchor = this.$el.querySelector(selector)
        document.body.scrollTop = anchor.offsetTop
      }
    }
  }
</script>
<style scoped lang="scss">
  .masthead {
    background-color: #5bc4c7;
    color: #fff;
    text-align: center;
    padding: 150px 0 100px 0;
    .title {
      position: relative;
      font-size: 44px;
      font-weight: 600;
      &::before {
        content: '';
        position: absolute;
        top: -120px;
        right: 0;
        left: 0;
        margin: auto;
        width: 120px;
        height: 120px;
        background-image: url(../../assets/version/bg.png);
        background-repeat: no-repeat;
      }
    }
    .subtitle {
      color: #fff;
      font-size: 20px;
      margin-top: 10px;

    }

  }

  .versionCard {
    margin-top: 10px;
    .version {
      font-size: 20px;
      font-weight: bold;
      color: rgba(0, 0, 0, .8)
    }

    .time {
      background: #f7f7f7;
      padding: 2px 0;
      border-radius: 3px;
      font-size: 12px;
      border: 1px solid #eee;
      width: 80px;
      text-align: center;
      margin: 10px 0;
    }

    .contentItem {
      list-style-type: circle;
      .contentItemIcon {
        padding: 10px 28px;
      }
      .isBugFixes {
        background: url('../../assets/version/fixBug.png') no-repeat 0 center;

      }
      .isNewFeatures {
        background: url('../../assets/version/newFeature.png') no-repeat 0 center;
      }
      .isRefactorings {
        background: url('../../assets/version/Refactorings.png') no-repeat 0 center;
      }
    }

    .content {
      padding-left: 5px;
    }
  }
</style>
