<template>
  <div>
    <Modal
      class="finderWindow"
      class-name="modalIndex"
      v-model="isShow"
      width="768">
      <div slot="close"></div>
      <!--<row  type="flex" justify="end" class="finderSearch">-->
        <!--<i-col :xs="16" :sm="13" :md="10" :lg="8" span="8">-->
          <!--<search-input class="searchInput" v-model="searchValue" @on-search="resetPageLoad"></search-input>-->
        <!--</i-col>-->
      <!--</row>-->
      <!--@on-selection-change="handleSelect"-->
      <Table border
             ref="finderTable"
             height="300"
             size="small"
             :loading="loading"
             :columns="tableColumns"
             :data="datas.data">
        <template slot-scope="{ row, index }" slot="selection">
          <Checkbox v-model="row.ifCheck" @on-change="handleCheck(row.ifCheck, index)"></Checkbox>
        </template>
        <template slot-scope="{ row, index }" slot="ip">
          {{ row.protocol }}://{{ row.ip }}
        </template>
      </Table>
      <div class="clearfix finderPage">
        <div class="fr">
          <table-page size="small" :total="datas.count"
                      @on-page-change="pageChange"
                      @on-page-size-change="pageSizeChange"></table-page>
        </div>
      </div>
      <div slot="footer">
        <Button size="large"
                type="primary"
                :loading="loading"
                @click="handleSave">
          {{ $t('global.button.ok') }}
        </Button>
      </div>
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
        type: Array,
        default: () => []
      }
    },
    data () {
      return {
        loading: false,
        isShow: false,
        searchValue: '', // 待搜索内容
        ifCheckAll: false,
        tableColumns: [
          {
            slot: 'selection',
            width: 60,
            align: 'center',
            renderHeader: (h, params) => {
              return h('div', [
                h('Checkbox', {
                  props: {
                    value: this.ifCheckAll
                  },
                  on: {
                    'on-change': () => {
                      this.ifCheckAll = !this.ifCheckAll
                      if (this.ifCheckAll) {
                        for (let item of this.datas.data) {
                          this.$set(item, 'ifCheck', true)
                        }
                        // 深拷贝----如果用简单的赋值，删除拷贝数组的元素的同时也会删除原本数组元素
                        this.currentSelectedData = JSON.parse(JSON.stringify(this.datas.data))
                        // this.currentSelectedData = this.datas.data
                      } else {
                        for (let item of this.datas.data) {
                          this.$set(item, 'ifCheck', false)
                        }
                        this.currentSelectedData = []
                      }
                    }
                  }
                })
              ])
            }
          },
          {
            title: this.$t('ipManagement.field.code'),
            key: 'id',
            width: 100
          },
          {
            title: this.$t('ipManagement.field.ipAddress'),
            slot: 'ip'
          },
          {
            title: this.$t('ipManagement.field.port'),
            key: 'port',
            width: 100
          },
          {
            title: this.$t('ipManagement.field.department'),
            key: 'depart',
            width: 100
          },
          {
            title: this.$t('ipManagement.field.desc'),
            key: 'memo',
            width: 100
          }
        ],
        fields: [],
        // selection: [],
        currentSelectedData: this.value,
        datas: {
          count: 0, // 总记录数
          page: 1,
          limit: this.$store.getters.userPageSize, // page size
          data: []
        }
      }
    },
    watch: {
      value (val) {
        this.currentSelectedData = val
        if (this.currentSelectedData.length === this.datas.data.length && this.currentSelectedData.length !== 0) {
          this.ifCheckAll = true
        } else {
          this.ifCheckAll = false
        }
      },
      currentSelectedData (val) {
        this.$emit('input', val)
      }
    },
    methods: {
      show () {
        this.isShow = true
        this.search()
      },
      handleSave () {
        // if (this.selection && this.selection.length > 0) {
        //   this.$emit('on-select', this.selection)
        // }
        this.$emit('on-select', this.currentSelectedData)
        this.isShow = false
      },
      // 勾选框-单独选某个
      handleCheck (ifCheck, index) {
        let ids = []
        for (let item of this.currentSelectedData) {
          ids.push(item.id)
        }
        if (ifCheck && ids.indexOf(this.datas.data[index].id) <= -1) {
          this.$set(this.datas.data[index], 'ifCheck', true)
          let obj = this.datas.data[index]
          this.currentSelectedData.push(obj)
        } else {
          console.log(this.datas.data)
          this.$set(this.datas.data[index], 'ifCheck', false)
          for (let [index1, item] of this.currentSelectedData.entries()) {
            if (item.id === this.datas.data[index].id) {
              this.currentSelectedData.splice(index1, 1)
            }
          }
          console.log(this.datas.data)
          console.log(this.currentSelectedData)
        }
      },
      // handleSelect (selection) {
      //   this.selection = selection
      // },
      pageChange (page) {
        this.search(page)
      },
      pageSizeChange (pageSize) {
        this.datas.limit = pageSize
        this.resetPageLoad()
      },
      resetPageLoad () {
        this.datas.page = 1
        this.search()
      },
      search (page = this.datas.page, limit = this.datas.limit) {
        this.loading = true
        api.ipManagement.ipManagement.findList({
          data: {
            'page': page, // 要去的页码
            'pageSize': limit // 每页的条数
            // 'name': this.searchValue
          }
        }).then(res => {
          this.loading = false
          let array = res.data.data.list
          for (let item of array) {
            this.$set(item, 'ifCheck', false)
          }
          console.log(this.currentSelectedData)
          if (this.currentSelectedData && this.currentSelectedData.length > 0) {
            for (let item1 of this.currentSelectedData) {
              for (let item2 of array) {
                if (item1.id === item2.id) {
                  this.$set(item2, 'ifCheck', true)
                }
              }
            }
            this.datas.data = array
          } else {
            this.datas.data = array
          }
          this.datas.count = Number(res.data.data.count)
        }).catch(() => {
          this.loading = false
        })
      }
    },
    created () {
      console.log(this.value)
    }
  }
</script>

<style lang="scss">
  @import '../../../styles/index';
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

