<template>
  <div class="wdPlanSearch">
    <row v-show="ifSenior">
      <i-col span="24">
        <div class="seniorSearch fr">
          <slot name="seniorSearch">
            <a type="text" class="seniorSearchBtn"
               :class="{active: !unfold}" @click="toggle">
              <Icon type="ios-funnel"></Icon>
              {{$t('global.button.seniorSearch')}}
              <span class="arrow-icon"></span>
            </a>
          </slot>
        </div>
      </i-col>
    </row>
    <row>
      <i-col span="24">
        <slot name="basicContent"></slot>
        <collapse-transition>
          <div v-show="!unfold" :class="{dashTop:!unfold}">
            <slot name="seniorContent"></slot>
          </div>
        </collapse-transition>
      </i-col>
    </row>
    <row>
      <i-col span="24">
        <div class="button fr">
          <slot name="button">
            <Button type="primary" @click="search">{{ $t('global.button.search') }}</Button>
            <Button @click="reset">{{ $t('global.button.reset') }}</Button>
          </slot>
        </div>
      </i-col>
    </row>
  </div>

</template>

<script>
  import CollapseTransition from '@/libs/collapse-transition'

  export default {
    name: 'SearchPanel',
    components: {
      CollapseTransition
    },
    props: {
      ifSenior: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        unfold: true
      }
    },
    methods: {
      toggle () {
        this.unfold = !this.unfold
      },
      reset () {
        this.$emit('on-reset')
      },
      search () {
        this.$emit('on-search')
      }
    }
  }
</script>

<style  lang="scss">
  @import '../../styles/index';

  .wdPlanSearch {
    .ivu-form-item {
      margin: 10px 0;
    }
    /*.ivu-date-picker {*/
      /*display: block;*/
      /*background: rgba(255, 255, 255, 0);*/
    /*}*/
  }

  .button {
    margin-top: 10px;
  }

  .dashTop {
    @include dashTop
  }

  .seniorSearch {
    margin-bottom: 10px;
    .seniorSearchBtn {
      color: #6d7380;
      line-height: 10px;
      font-size: 12px;
      .arrow-icon {
        width: 9px;
        height: 5px;
        display: inline-block;
        transform: rotate(180deg);
        background: url(../../assets/common/dropdown_arrow_up.png) no-repeat 0 0;
        background-size: cover;
        transition: transform .2s ease;
        vertical-align: middle;
        margin: -2px 4px 0 2px;
      }
    }
    .seniorSearchBtn.active .arrow-icon {
      transform: rotate(0);
    }
  }

</style>
