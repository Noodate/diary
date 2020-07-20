<template>
  <div class="userAvator">
    <Poptip trigger="hover" width="350" :placement="placement">
      <div class="name">{{user.username}}</div>
      <div slot="content">
        <user-tip :user="user"></user-tip>
        <Spin size="large" fix v-if="loading"></Spin>
      </div>
    </Poptip>
  </div>

</template>
<script>
  import * as api from 'api'
  import UserTip from '@/components/user/UserTip'

  export default {
    name: 'UserPoptip',
    components: {
      UserTip
    },
    props: {
      uuid: {
        type: String,
        default: ''
      },
      placement: {
        type: String,
        default: 'bottom'
      },
      value: {
        type: String,
        default: ''
      }
    },
    watch: {
      uuid (val) {
        this.getUserInfo()
      },
      departmentName (val) {
         this.$emit('input', val)
      },
      value (val) {
          this.departmentName = val
      }
    },
    data () {
      return {
        loading: false,
        user: {},
        departmentName: this.value
      }
    },
    methods: {
      getUserInfo () {
        if (this.uuid) {
          this.loading = true
          api.auth.getDetail({
            data: {
              'userId': this.uuid
            }
          }).then(res => {
            this.loading = false
            this.user = res.data.data
            this.departmentName = res.data.data.departmentId
          }).catch((res) => {
          })
        } else {
          this.user = {}
        }
      }
    },
    created () {
      this.getUserInfo()
    }
  }
</script>

<style lang="scss">
  @import '../../styles/index';

  .userAvator {
    .ivu-poptip-body {
      padding: 0;
    }
    .name {
      cursor: pointer;
      font-weight: 700;
      &:hover {
        text-decoration: underline;
      }
    }

  }


</style>

