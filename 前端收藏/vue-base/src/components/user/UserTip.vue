<template>
  <div class="userTip">
    <div class="basic clearfix">
      <div class="avator fl"><img :src="avatorSrc"></div>
      <div class="user fl">
        <div>
          <div>
            <span class="separator">|</span>
            <span class="name">用户名：{{user.username}}</span>
          </div>
         <div v-if="user.departmentId">
           <span class="separator">|</span>
           <span class="departName">所在处室：{{user.departmentId}}</span>
         </div>
        </div>
      </div>
    </div>
    <div class="detail">
      <CheckboxGroup v-model="user.roleId">
        <Checkbox v-for="(item, index) in roleList"
                  :label="item.uuid"
                  disabled
                  :key="index">
          <span>{{ item.name }}</span>
        </Checkbox>
      </CheckboxGroup>
    </div>
    <!--<div class="detail">-->
      <!--<div class="detailItem">-->
        <!--<span class="key">{{ $t('profile.fields.userMobile') }}</span>-->
        <!--<span class="value mobile">{{getMobile}} </span>-->
      <!--</div>-->
      <!--<div class="detailItem">-->
        <!--<span class="key">{{ $t('profile.fields.userMail') }}</span>-->
        <!--<span class="value">{{getEmail}}</span>-->
      <!--</div>-->
    <!--</div>-->
  </div>


</template>
<script>
  import avator from '@/assets/avator/avator.png'

  export default {
    name: 'UserTip',
    props: {
      user: {
        type: Object,
        default: () => {}
      }
    },
    computed: {
      // getMobile () {
      //   return this.user.mobile === '' ? '--- ---- ----' : this.user.mobile
      // },
      // getEmail () {
      //   return this.user.email === '' ? '-------' : this.user.email
      // }
    },
    data () {
      return {
        avatorSrc: avator,
        roleList: [
          {
            uuid: '0',
            name: '客户经理'
          },
          {
            uuid: '1',
            name: '审核人'
          },
          {
            uuid: '2',
            name: '业务管理员'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../styles/index';

  .userTip {
    .basic {
      border: 14px solid transparent;
      .avator {
        margin-right: 10px;
        img {
          width: 50px;
          height: 50px;
        }
      }
      .user {
        .name {
          font-weight: 600;
        }
        .code {
          font-weight: 600;
          padding-right: 10px;
          font-size: 14px;
          color: #259;
        }
        .jobName, .departName {
          line-height: 34px;
          display: inline-block;
          vertical-align: top;
        }
      }
    }
    .detail {
      background-color: #fafafa;
      border: 14px solid transparent;
      .detailItem {
        margin-bottom: 5px;
        .value {
          height: 30px;
          font-size: 15px;
          font-weight: 700;
          padding: 5px 0;
        }
        .key {
          color: #999;
          font-size: 14px;
          margin-right: 10px;
        }
      }
    }
    .separator {
      font-weight: bold;
      font-size: 20px;
      color: $default-font-color;
    }

  }


</style>

