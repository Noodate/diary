<template>
  <Card>
    <mail-detail-modal ref="ipDetailModal" @on-ok="search"></mail-detail-modal>
    <row type="flex">
      <!--删除ip-->
      <i-col span="15">
        <delete-modal ref="deleteModal" @on-delete="deleteSelected"></delete-modal>
        <div class="tableButton">
          <Button type="success"  icon="md-add" @click="handleNew" :loading="loading">
            {{$t('global.button.new')}}
          </Button>
          <Button type="error" icon="md-remove" @click="handleDelete"> {{$t('global.button.delete')}}</Button>
        </div>
      </i-col>
      <!--搜索-->
      <!--<i-col :lg="6" :offset="3">-->
        <!--<search-input v-model="searchValue" @on-search="handleSearch"></search-input>-->
      <!--</i-col>-->
      <i-col span="24">
        <div class="tableContent">
          <Table border
                 @on-selection-change="selectedData"
                 :loading="loading"
                 :columns="ipColumns"
                 :data="datas.data">
            <template slot-scope="{ row, index }" slot="ip">
              {{ row.protocol }}://{{ row.ip }}
            </template>
            <template slot-scope="{ row, index }" slot="roleList">
              <CheckboxGroup v-model="row.roleId">
                <Checkbox v-for="(item, index) in roleList"
                          :label="item.uuid"
                          disabled
                          :key="index">
                  <span>{{ item.name }}</span>
                </Checkbox>
              </CheckboxGroup>
            </template>
          </Table>
        </div>
        <div class="fr">
          <table-page :total="datas.count"
                      :current.sync="datas.page"
                      @on-page-change="pageChange"
                      @on-page-size-change="pageSizeChange"></table-page>
        </div>
      </i-col>
    </row>
  </Card>
</template>

<script>
  import * as api from 'api'
  import MailDetailModal from '@/views/mailManagement/modal/MailDetailModal'
  import SearchInput from '@/components/search/SearchInput'
  import TablePage from '@/components/page/TablePage'
  import DeleteModal from '@/components/modal/DeleteModal'

  export default {
    name: 'MailManagement',
    components: {
      MailDetailModal,
      SearchInput,
      TablePage,
      DeleteModal
    },
    data () {
      return {
        loading: false,
        searchValue: '', // 搜索关键字
        selectedList: [],
        datas: {
          count: 0, // 总记录数
          page: 1,
          limit: this.$store.getters.userPageSize, // page size
          data: []
        },
        ipColumns: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: this.$t('ipManagement.field.code'),
            key: 'id',
            width: 100
          },
          {
            title: this.$t('ipManagement.field.ipAddress'),
            slot: 'ip',
            width: 150
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
            key: 'memo'
          }
        ],
        allTemplate: [] // 全部巡检时间配置
      }
    },
    methods: {
      selectedData (selection) {
        this.selectedList = selection
      },
      // 查全部数据，用于删除ip时检验被选中的ip不能被删除
      searchAllList () {
        api.inspectTimeManagement.inspectTimeManagement.findAllList({
          data: {}
        }).then(res => {
          this.loading = false
          console.log(res)
          this.allTemplate = res.data.data.list
        }).catch((res) => {
          this.loading = false
        })
      },
      // 删除-提示框
      handleDelete () {
        let selectedListLength = this.selectedList.length
        if (selectedListLength === 0) {
          this.$Message.error(this.$t('global.validate.chooseAtLeastOne'))
        } else {
          let deleteData = []
          let templateIpId = []
          for (let item1 of this.allTemplate) {
            for (let item2 of item1.list) {
              templateIpId.push(item2.id)
            }
          }
          let type = 0
          let objArrayId = []
          let objArrayIp = []
          for (let selectedListItem of this.selectedList) {
            objArrayId.push(selectedListItem.id)
            objArrayIp.push(selectedListItem.ip)
          }
          for (let item3 of templateIpId) {
            if (objArrayId.indexOf(item3) > -1) {
              type = 1
            } else {
              console.log('2')
              deleteData = objArrayIp
            }
          }
          if (type === 1) {
            this.$Message.error({
              content: this.$t('ipManagement.tip.noDelete'),
              duration: 2
            })
          } else {
            this.$refs.deleteModal.show(deleteData)
          }
          // for (let selectedListItem of this.selectedList) {
          //   deleteData.push(selectedListItem.ip)
          // }
          // this.$refs.deleteModal.show(deleteData)
        }
      },
      // 真正的删除
      deleteSelected (deleteModal) {
        api.ipManagement.ipManagement.delete({
          data: {
            'strIP': deleteModal.data.join(',')
          }
        }).then(res => {
          if (res.data.message === 'SUCCESS') {
            this.resetPageLoad()
            this.selectedList = []
            deleteModal.success()
          } else {
            this.$Message.error({
              content: this.$t('ipManagement.tip.noDelete'),
              duration: 5
            })
            deleteModal.error()
          }
        }).catch((res) => {
        })
      },
      // 新建
      handleNew () {
        this.$refs.ipDetailModal.show()
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
          console.log(res)
          this.datas.data = res.data.data.list
          this.datas.count = Number(res.data.data.count)
        }).catch((res) => {
          this.loading = false
        })
      },
//      跳页
      pageChange (page) {
        this.search(page)
      },
//      更改每页条数
      pageSizeChange (pageSize) {
        this.datas.limit = pageSize
        this.resetPageLoad()
      },
//      重置分页
      resetPageLoad () {
        this.datas.page = 1
        this.search()
        this.searchAllList()
      },
//      执行搜索后重置分页
      handleSearch () {
        this.resetPageLoad()
      }
    },
    activated: function () {
      // this.resetPageLoad()
    }
  }
</script>

<style scoped lang="scss">

  .tableContent {
    margin: 10px 0 40px 0;
  }

  .tableButton {
    margin-bottom: 10px;
  }

</style>
