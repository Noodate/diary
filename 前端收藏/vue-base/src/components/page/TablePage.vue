<template>
  <div>
    <div v-if="size === 'small'" class="clearfix alignMiddle">
      <div class="fl" v-if="simple">
        {{ $t('global.message.itemNumber', {number: total}) }}
      </div>
      <div class="fl">
        <Page :size="size"
              :total="total"
              :current.sync="currentPage"
              placement="top"
              :simple="simple"
              :page-size="currentPageSize"
              @on-change="handlePageChange"
              @on-page-size-change="handlePageSizeChange"
              show-total show-elevator show-sizer></Page>
      </div>
    </div>
    <div v-else>
      <Page :total="total"
            :current.sync="currentPage"
            placement="top"
            :simple="simple"
            :page-size="currentPageSize"
            @on-change="handlePageChange"
            @on-page-size-change="handlePageSizeChange"
            show-total show-elevator show-sizer></Page>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      current: {
        type: Number,
        default: 1
      },
      total: {
        type: Number,
        default: 0
      },
      size: { // 此处default默认值为假想，其实iview没有默认值说法
        type: String,
        default: 'default'
      },
      pageSize: {
        type: Number,
        default: -1
      },
      simple: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        currentPage: this.current,
        currentPageSize: this.pageSize === -1 ? this.$store.getters.userPageSize : this.pageSize
      }
    },
    watch: {
      current (val) {
        this.currentPage = val
      },
      currentPage (val) {
        this.$emit('update:current', val)
      }
    },
    methods: {
      handlePageChange (page) {
        this.$emit('on-page-change', page)
      },
      handlePageSizeChange (pageSize) {
        this.$emit('on-page-size-change', pageSize)
      }
    }
  }
</script>
<style scoped lang="scss">
  @import '../../styles/index';
</style>
