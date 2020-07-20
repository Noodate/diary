<template>
  <div>
    <Tree :data="menuTree"
          show-checkbox
          ref="tree"
          @on-check-change="handleCheck">
    </Tree>
  </div>
</template>

<script>
  import { getMenuData, setExpand } from '@/views/auth/auth-group/MenuService'

  export default {
    name: 'MenuSelect',
    props: {
      value: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    data () {
      return {
        show: true,
        checkdMenu: this.value,
        menuTree: []
      }
    },
    watch: {
      value (val) {
        this.checkdMenu = val
        this.loadData()
      }
    },
    mounted () {
      this.loadData()
    },
    methods: {
//      手动加载数据
      loadData () {
        this.menuTree = getMenuData({
          expand: true,
          vm: this.$refs.tree,
          checked: true,
          checkedMenuArr: this.checkdMenu
        })
      },
      setExpand (expand) {
        setExpand(this.menuTree, expand)
      },
      handleCheck (i) {
        this.checkdMenu = i
        this.$emit('input', this.checkdMenu)
      }
    }
  }
</script>

<style scoped lang="scss">
</style>
