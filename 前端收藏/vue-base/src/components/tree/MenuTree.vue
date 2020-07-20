<template>
  <Tree :data="menuTree"
        ref="tree"
        @on-select-change="handleSelect">
  </Tree>
</template>

<script>
  import { getMenuData, setExpand } from '@/views/auth/auth-group/MenuService'

  export default {
    name: 'MenuTree',
    data () {
      return {
        menuTree: []
      }
    },
    mounted () {
      this.loadData()
    },
    methods: {
      loadData () {
        this.menuTree = getMenuData({
          expand: true,
          vm: this.$refs.tree,
          checked: false
        })
      },
      setExpand (expand) {
        setExpand(this.menuTree, expand)
      },
      handleSelect (node) {
        if (node && node.length !== 0) {
          this.$emit('on-select', node)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
</style>
