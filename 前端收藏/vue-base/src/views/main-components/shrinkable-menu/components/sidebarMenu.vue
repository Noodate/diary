<template>
  <div class="sidebarMenu">
    <Menu ref="sideMenu" :active-name="$route.name"  width="auto"
          @on-select="changeMenu" class="sidebarBg" theme="light" :accordion="true">
      <!--<template>-->
        <!--<MenuItem name="home">-->
          <!--<Icon type="ios-notifications" size="20"/>-->
          <!--<span class="layout-text">首页</span>-->
        <!--</MenuItem>-->
      <!--</template>-->
      <template v-for="(item, index) in menuList">
        <MenuItem :name="item.uuid" >
          <Icon type="md-clipboard" size="20" v-if="item.uuid === 'ipManagement'"/>
          <Icon type="md-clock" size="20" v-if="item.uuid === 'inspectTimeManagement'"/>
          <Icon type="md-mail-open"  size="20" v-if="item.uuid === 'mailManagement'"/>
          <span class="layout-text">{{ item.name }}</span>
        </MenuItem>
      </template>
    </Menu>
  </div>
</template>

<script>
  export default {
    name: 'sidebarMenu',
    props: {
      menuList: {
        type: Array,
        default: () => []
      }
    },
    computed: {},
    methods: {
      changeMenu (active) {
        this.$emit('on-change', active)
      }
    },
    mounted () {
      this.$nextTick(() => {
        if (this.$refs.sideMenu) {
          this.$refs.sideMenu.updateActiveName()
        }
      })
    }

  }
</script>
<style lang="scss">
  @import '../../../../styles/index';

  .custom-menu-item {
    .ivu-dropdown {
      padding: 14px 24px;
    }
  }

</style>

