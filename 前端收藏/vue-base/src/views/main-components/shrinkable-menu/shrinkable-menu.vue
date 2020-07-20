<template>
  <div :style="{background: bgColor}">
    <slot name="top"></slot>
    <transition name="siderbarMenu" mode="out-in">
      <sidebar-menu
        :menu-list="menuList"
        @on-change="handleChange"></sidebar-menu>
    </transition>

  </div>
</template>

<script>
  import sidebarMenu from './components/sidebarMenu.vue'

  export default {
    name: 'shrinkableMenu',
    components: {
      sidebarMenu
    },
    props: {
      menuList: {
        type: Array,
        default: () => []
      }
    },
    computed: {
      bgColor () {
        return this.theme === 'dark' ? '#002140' : '#fff'
      }
    },
    methods: {
      handleChange (name) {
        this.$router.push({
          name: name
        })
      }
    }
  }
</script>
<style scoped lang="scss">
  @import '../../../styles/index';

  .siderbarMenu-enter-to, .siderbarMenu-leave-active, .siderbarMenu-leave {
    transition: all .1s ease;
  }

  .siderbarMenu-leave-to, .siderbarMenu-enter-active, .siderbarMenu-enter {
    transition: all .1s ease;
  }
</style>
