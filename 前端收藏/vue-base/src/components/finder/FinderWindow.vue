<template>
  <div>
    <Modal
      class="finderWindow"
      class-name="modalIndex"
      v-model="isShow"
      width="768"
      @on-ok="ok"
      @on-cancel="cancel">
      <div slot="close"></div>
      <row  type="flex" justify="end" class="finderSearch">
        <i-col :xs="16" :sm="13" :md="10" :lg="8" span="8">
          <search-input class="searchInput" v-model="searchValue" @on-search="resetPageLoad"></search-input>
        </i-col>
      </row>
      <Table border
             ref="table"
             height="300"
             size="small"
             :loading="loading"
             :columns="tableColumns"
             :data="datas.data"
             @on-selection-change="handleSelect"
             @on-row-click="handleClick"
             @on-row-dblclick="handleDbClick"></Table>
      <div class="clearfix finderPage">
        <div class="fr">
          <table-page size="small" :total="datas.count" @on-page-change="pageChange" @on-page-size-change="pageSizeChange"></table-page>
        </div>
      </div>
      <div v-if="!multiple" slot="footer"></div>
    </Modal>
  </div>

</template>
<script>
  import SearchInput from '@/components/search/SearchInput'
  import TablePage from '@/components/page/TablePage'
  import * as api from 'api'
  export default {
    name: 'FinderWindow',
    components: {
      SearchInput,
      TablePage
    },
    props: {
      value: {
        type: Boolean,
        default: false
      },
      from: {
        type: [String, Function],
        default: '',
        required: true
      },
      where: {
        type: [String, Function],
        default: ''
      },
      ignoreData: {
        type: Array,
        default: () => []
      },
      sort: {
        type: String,
        default: '',
        required: true
      },
      columns: {
        type: Array,
        default: () => [],
        required: true
      },
      multiple: {
        type: Boolean,
        default: false
      },
      distinct: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        loading: false,
        isShow: this.value,
        searchValue: '', // 待搜索内容
        primaryKey: '', // 主键
        tableColumns: [],
        searchKeys: [], // 需要模糊搜索的列
        fields: [],
        selection: [],
        datas: {
          count: 0, // 总记录数
          start: 0, // 开始
          limit: this.$store.getters.userPageSize, // page size
          data: []
        }
      }
    },
    watch: {
      value (val) {
        this.isShow = val
        if (val) { // 模糊框显示时进行数据加载
          this.handleSelect([])
          this.search()
        }
      },
      isShow (val) {
        this.$emit('input', val)
      }
    },
    methods: {
      init () {
        let tableColumns = []
        let primaryKey = ''
        let searchKeys = [] // 需要模糊搜索的列
        let fields = []
        if (this.multiple) {
          tableColumns.push({
            type: 'selection',
            width: 60,
            align: 'center'
          })
        } else {
          tableColumns.push({
            type: 'index',
            width: 60,
            align: 'center'
          })
        }
        for (let column of this.columns) {
          fields.push(column.key) // 需要查找的列
          if (column.primaryKey) { // 主键
            primaryKey = column.key
          }
          if (column.hidden) { // 是否需要显示得列
          } else {
            tableColumns.push(column)
          }
          if (column.search) { // 是否需要like搜索的列
            searchKeys.push(column.key)
          }
        }
        this.tableColumns = tableColumns
        this.primaryKey = primaryKey
        this.searchKeys = searchKeys
        this.fields = fields
      },
      ok () {
        if (this.selection && this.selection.length > 0) {
          this.$emit('on-select', this.selection)
        }
      },
      cancel () {
      },
      handleSelect (selection) {
        this.selection = selection
      },
      pageChange (page) {
        this.datas.start = (page - 1) * this.datas.limit
        this.search()
      },
      pageSizeChange (pageSize) {
        this.datas.limit = pageSize
        this.resetPageLoad()
      },
      resetPageLoad () {
        this.datas.start = 0
        this.search()
      },
      handleSearch () {
        this.resetPageLoad()
      },
      handleClick (rowData, index) {
        const _this = this.$refs.table
        const checked = _this.objData[index]._isChecked
        if (_this.objData[index]._isDisabled) {
        } else {
          _this.objData[index]._isChecked = !checked
        }
        _this.$emit('on-selection-change', _this.getSelection())
      },
      handleDbClick (rowData, index) {
        // 如果为单选，则可直接选择数据
        if (!this.multiple) {
          this.isShow = false
          this.$emit('on-select', rowData)
        }
      },
      handleSelectAll (status) {
        this.$refs.selection.selectAll(status)
      },
      search () {
        this.loading = true
        api.finder.baseFinder({
          data: {
            from: typeof this.from === 'string' ? this.from : this.from(),
            where: typeof this.where === 'string' ? this.where : this.where(),
            searchValue: this.searchValue,
            primaryKey: this.primaryKey, // 主键
            searchKeys: this.searchKeys.join(','), // 需要模糊搜索的列
            ignoreData: this.ignoreData.join(','),
            sort: this.sort,
            distinct: this.distinct,
            start: this.datas.start,
            limit: this.datas.limit,
            fields: this.fields.join(',')
          }
        }).then(res => {
          const body = res.data
          this.loading = false
          if (body.success) {
            this.datas.data = body.pars.datas.data
            this.datas.count = body.pars.datas.pager.allhits
          } else {
          }
        }).catch((res) => {
        })
      }
    },
    created () {
      this.init()
    }
  }
</script>

<style lang="scss">
  @import '../../styles/index';
  .finderWindow{
    .finderSearch {
      background-color: $bg-gray;
      .searchInput {
        margin-bottom: 5px;
        margin-top: 5px;
      }
    }
    .finderPage {
      margin-top: 5px;
    }
    .ivu-modal-mask{
      z-index:1010;
    }
    .modalIndex {
      z-index: 1011;
    }
  }
</style>

