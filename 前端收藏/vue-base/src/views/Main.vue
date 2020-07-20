<template>
  <div class="main">
    <Layout>
      <Header :style="{padding: 0, background: '#113F67'}"
              :class="{mobileMode: mobileMode}"
              class="layout-header-bar">
          <div class="main-header">
            <div class="logo">
              <img class="logo" :src="logoSrc"/>
            </div>
            <div class="text">
               <span class="text" >
                  摄像头监控系统
               </span>
            </div>
            <div class="header-avator-con">
              <Row type="flex" justify="end" :gutter="16">
                <i-col :xs="24" :sm="24" :md="24" :lg="14">
                  <div class="user-dropdown-menu-con">
                    <Row type="flex" justify="end" align="middle" class="user-dropdown-innercon">
                      <Dropdown trigger="click" @on-click="handleClickUserDropdown">
                        <a href="javascript:void(0)">
                          <!--<span class="main-user-name">{{ userName }}</span>-->
                          <span class="main-user-name">测试用户</span>
                          <Icon type="md-arrow-dropdown"></Icon>
                        </a>
                        <DropdownMenu slot="list">
                          <DropdownItem name="home">{{ $t('main.home') }}</DropdownItem>
                          <DropdownItem name="loginout" divided>{{ $t('main.userNav.loginout') }}</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                      <Avatar :src="avatorPath" style="background: #619fe7;margin-left: 10px;"></Avatar>
                    </Row>
                  </div>
                </i-col>
              </Row>
            </div>
          </div>
      </Header>
      <Layout>
        <Sider ref="sider"
               :width="256"
               class="sider">
          <div>
            <shrinkable-menu :menu-list="menuList"></shrinkable-menu>
          </div>
        </Sider>
        <div class="main-container">
          <div class="main-message-con">
            <div class="single-page-con" :style="{minHeight: screenHeight - 140 + 'px'}">
              <div class="single-page">
                <transition name="fade-transverse" mode="out-in">
                  <keep-alive>
                    <router-view></router-view>
                  </keep-alive>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Layout>
  </div>
</template>
<script>
  import shrinkableMenu from './main-components/shrinkable-menu/shrinkable-menu.vue'
  import logo from '@/assets/logo/bannerLogo.png'
  import photo from '@/assets/avator/avator.png'
  import * as api from 'api'

  export default {
    name: 'Main',
    components: {
      shrinkableMenu
    },
    data () {
      return {
        logoSrc: logo,
        menuList: [
          {uuid: 'ipManagement', name: 'Ip管理'},
          {uuid: 'inspectTimeManagement', name: '巡检时间管理'}
          // {uuid: 'mailManagement', name: '邮箱管理'}
        ]
      }
    },
    computed: {
      screenHeight () {
        if (this.isFullScreen) {
          return window.screen.height
        } else {
          return document.body.clientHeight
        }
      },
      // menuList () {
      //   return this.$store.state.user.menuList
      // },
      avatorPath () {
        return photo
      },
      userName () {
        return this.$store.getters.userName
      },
      mobileMode () {
        return this.$store.state.app.mobileMode
      }
    },
    methods: {
      handleClickUserDropdown (name) {
        if (name === 'home') {
          this.$router.push({
            name: 'home'
          })
        } else if (name === 'loginout') {
          // 退出登录
          api.u.userLogout({
            params: {}
          }).then((res) => {
            console.log(res)
            if (res.data.message === 'SUCCESS') {
              let user = {
                userInfo: {
                  menuList: [],
                  check_id: '',
                  username: '',
                  roleId: []
                }
              }
              this.$store.commit('user/SET_VALUE', user)
              this.$router.push({
                name: 'login'
              })
            } else {
              this.$Message.error('退出失败！')
            }
          })
        }
      }
    },
    watch: {},
    mounted () {
      console.log(this.mobileMode)
    },
    created () {}
  }
</script>
<style lang="scss">
  @import '../styles/index';
  @import "./main.scss";
</style>
