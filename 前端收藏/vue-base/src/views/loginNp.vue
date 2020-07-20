<template>
  <div>
    <div class="login" @keydown.enter="handleSubmit" :style="{height : screenHeight + 'px'}">
      <div class="companyMsg">
        <div class="logo">
          <img :src="companyLogoUrl">
        </div>
        <div>
          <span class="intro">{{$t('login.message.introduce')}}</span>
        </div>
      </div>
      <div class="login-form">
        <div class="intro">{{$t('login.message.login')}}</div>
        <i-form ref="formLogin" :model="formLogin">
          <FormItem prop="username" class="login-form-input">
            <i-input type="text"
                     v-model="formLogin.username"
                     :placeholder="$t('login.message.username')"
                     key="username"
                     @on-blur="validateUsername">
              <span slot="prepend">
                <Icon :size="14" type="ios-person"></Icon>
              </span>
            </i-input>
            <span class="loginError" v-show="formLoginValidate.usernameError">
              {{ formLoginValidate.usernameError}}
            </span>
          </FormItem>
          <FormItem prop="password" class="login-form-input">
            <i-input type="password"
                     v-model="formLogin.password"
                     :placeholder="$t('login.message.password')"
                     key="password"
                     @on-blur="validatePassword">
              <span slot="prepend">
                <Icon :size="14" type="md-lock"></Icon>
              </span>
            </i-input>
            <span class="loginError" v-show="formLoginValidate.passwordError">
              {{ formLoginValidate.passwordError}}
            </span>
          </FormItem>
          <FormItem prop="checkbox" class="login-form-input clearfix">
            <div class="fl">
              <Checkbox v-model="rememberPswd">记住密码</Checkbox>
            </div>
          </FormItem>
          <FormItem>
            <Button @click="handleSubmit" type="primary" long size="large" :loading="loginLoading">
              {{$t('global.button.login')}}
            </Button>
          </FormItem>
        </i-form>
      </div>
      <!--<div class="login-footer">-->
        <!--<div class="login-con-footer-message">-->
          <!--{{ $t('global.copyright') }}-->
        <!--</div>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
  import * as api from 'api'
  import chrome from '@/assets/browser/chrome.png'
  import firefox from '@/assets/browser/firefox.png'
  import ie from '@/assets/browser/ie.png'
  import companyLogo from '@/assets/logo/logo.png'
  import Prompt from '@/components/prompt/Prompt'
  import Cookies from 'js-cookie'

  export default {
    name: 'login',
    components: {
      Prompt
    },
    data () {
      return {
        chromeSrc: chrome,
        ffSrc: firefox,
        ieSrc: ie,
        companyLogoUrl: companyLogo,
        screenHeight: document.body.clientHeight,
        formLogin: {
          username: '',
          password: ''
        },
        formLoginValidate: {
          usernameError: '',
          passwordError: ''
        },
        loginLoading: false,
        // localeBrowserPrompt: localStorage.browserPrompt === 'false',
        rememberPswd: false
      }
    },
    methods: {
      validateUsername () {
        this.formLoginValidate.usernameError = this.formLogin.username ? '' : this.$t('login.validate.username')
      },
      validatePassword () {
        this.formLoginValidate.passwordError = this.formLogin.password ? '' : this.$t('login.validate.password')
      },
      handleSubmit () {
        this.validateUsername()
        this.validatePassword()
        if (this.formLogin.username && this.formLogin.password) {
          this.login()
        } else {
          this.$Message.error(this.$t('global.validate.validateError'))
        }
      },
      login () {
        this.loginLoading = true
        api.u.login({
          data: {
            username: this.formLogin.username,
            password: this.formLogin.password
          }
        }).then(res => {
          const body = res.data
          this.loginLoading = true
          if (body.message === 'SUCCESS') {
            this.$store.commit('user/SET_VALUE', body.data)
            this.$router.push({
              name: 'home'
            })
            if (this.rememberPswd) {
              // Cookies.set('account', this.formLogin.username, { expires: 7 })
              // Cookies.set('password', this.formLogin.password, { expires: 7 })
              Cookies.set('account', this.formLogin.username)
              Cookies.set('password', this.formLogin.password)
            } else {
              Cookies.set('account', '')
              Cookies.set('password', '')
            }
          } else {
            this.formLoginValidate.usernameError = '账号密码不匹配'
            // if (message === 'noUsername') {
            //   this.formLoginValidate.usernameError = this.$t('login.validate.noUsername')
            // } else if (message === 'passwordError') {
            //   this.formLoginValidate.passwordError = this.$t('login.validate.passwordError')
            // } else if (message === 'usernameDisable') {
            //   this.formLoginValidate.usernameError = this.$t('login.validate.usernameDisable')
            // }
            this.loginLoading = false
          }
        }).catch((res) => {
        })
      }
      // promptClose () {
      //   localStorage.browserPrompt = 'false'
      // }
    },
    mounted () {
      this.$nextTick(function () {
        // if (!this.localeBrowserPrompt) {
        //   this.$refs.prompt.show()
        // }
        let account = Cookies.get('account')
        let password = Cookies.get('password')
        // 如果存在赋值给表单，并且将记住密码勾选
        if (account) {
          this.formLogin.username = account
          this.formLogin.password = password
          this.rememberPswd = true
        }
      })
    }
  }
</script>

<style lang="scss">
  @import '../styles/index';
  @import './login.scss';

  .promptWrap {
    text-align: center;
    .title {
      font-size: 24px;
      font-weight: bold;
    }
    .content {
      margin: 5px auto;
      text-align: left;
    }
    img {
      width: 50px;
      height: 50px;
      margin: 0 10px;
    }
  }
</style>
