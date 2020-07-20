<template>
  <div class="FooterAffix clearfix" :style="{width: footerAffixWidth}">
    <div class="fr buttonGroup">
      <Button class="buttonItem" @click="$store.commit('closeCurrentPage')">{{ $t('global.button.close') }}
      </Button>
      <Button type="primary" class="buttonLoading" :loading="loading" @click="handleSave">
        {{$t('global.button.save')}}
      </Button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ButtonAffix',
    props: {
      loading: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        screenWidth: document.body.clientWidth
      }
    },
    computed: {
      opened () {
        return this.$store.state.app.sidebar.opened
      },
      footerAffixWidth () {
        if (this.opened) {
          return this.screenWidth - 236 + 'px'
        } else {
          return this.screenWidth - 60 + 'px'
        }
      }
    },
    watch: {
      opened (val) {
        if (val) {
          return this.screenWidth - 236 + 'px'
        } else {
          return this.screenWidth - 60 + 'px'
        }
      }
    },
    methods: {
      handleSave () {
        this.$emit('on-save')
      }
    }
  }
</script>

<style lang="scss">
  @import '../../styles/index';

  .FooterAffix {
    position: fixed;
    width: 100%;
    bottom: 0;
    right: 0;
    height: 56px;
    line-height: 56px;
    -webkit-box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.03);
    box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.03);
    background: #fff;
    border-top: 1px solid #e8e8e8;
    padding: 0 24px;
    z-index: 10;
    .buttonGroup {
      margin-right: 20px;
      .buttonItem {
        margin-right: 20px;
      }
      .ivu-btn.ivu-btn-loading {
        width: 70px;
      }
      .buttonLoading {
        width: 56px;
        transition: width .5s;
      }
    }


  }
</style>
