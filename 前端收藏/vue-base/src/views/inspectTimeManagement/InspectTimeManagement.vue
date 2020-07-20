<template>
  <Card>
    <detail-modal ref="detailModal" @on-ok="search"></detail-modal>
    <row type="flex">
      <!--删除ip-->
      <i-col span="15">
        <delete-modal ref="deleteModal" @on-delete="deleteSelected"></delete-modal>
        <div class="tableButton">
          <Button type="success"  icon="md-add" @click="handleNew" :loading="loading">
            {{$t('global.button.new')}}
          </Button>
          <Button type="error" icon="md-remove" @click="handleDelete"> {{$t('global.button.delete')}}</Button>
          <Button type="primary" @click="handleOpenAll" :loading="loading">
            <span>{{$t('global.button.openAll')}}</span>
            <!--<span v-if="openAll">{{$t('global.button.openAll')}}</span>-->
            <!--<span v-if="!openAll">{{$t('global.button.closeAll')}}</span>-->
          </Button>
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
            <template slot-scope="{ row, index }" slot="ips">
              <div v-for="(item, index) in row.list" :key="index">
                {{ item.protocol}}://{{ item.ip}}
              </div>
            </template>
            <template slot-scope="{ row, index }" slot="ifOpen">
              <!--<i-Switch size="large"-->
                        <!--true-value='OPEN'-->
                        <!--false-value='CLOSE'-->
                        <!--v-model="row.status"-->
                        <!--@on-change="changeStatus(row.status, row.id, index)">-->
                <!--<span slot="open">开启</span>-->
                <!--<span slot="close">关闭</span>-->
              <!--</i-Switch>-->
              <!--用自定义开关组件，解决当后台报错时，开关状态也被修改的问题-->
              <Tooltip content="可直接在此开启或关闭当前模板" placement="top">
                <custom-switch :value="row.status === 'OPEN' ? true : false"
                               @on-change="changeStatus(row.status, row.id, index)">
                  <span slot="open">开启</span>
                  <span slot="close">关闭</span>
                </custom-switch>
              </Tooltip>
            </template>
            <template slot-scope="{ row, index }" slot="checkWeek">
              <Tooltip content="若要修改此状态，请点击模板名称进入表单修改！"
                       max-width="150"
                       :transfer=true
                       placement="top">
                <i-Switch size="large"
                          :disabled=true
                          v-model="row.checkWeek === 'true' ? true : false">
                  <span slot="open">开启</span>
                  <span slot="close">关闭</span>
                </i-Switch>
              </Tooltip>
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
  import DetailModal from '@/views/inspectTimeManagement/modal/DetailModal'
  import SearchInput from '@/components/search/SearchInput'
  import TablePage from '@/components/page/TablePage'
  import DeleteModal from '@/components/modal/DeleteModal'
  import CustomSwitch from '@/components/switch/CustomSwitch'

  export default {
    name: 'InspectTimeManagement',
    components: {
      DetailModal,
      SearchInput,
      TablePage,
      DeleteModal,
      CustomSwitch
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
            title: this.$t('inspectTimeManagement.field.name'),
            // key: 'template',
            // width: 100,
            render: (h, params) => {
              return h('span', {
                class: {
                  tableLink: true
                },
                on: {
                  click: () => {
                    this.goDetail(params.row.id)
                  }
                }
              }, params.row.template)
            }
          },
          {
            title: this.$t('inspectTimeManagement.field.startTime'),
            key: 'startTime',
            width: 80
          },
          {
            title: this.$t('inspectTimeManagement.field.endTime'),
            key: 'endTime',
            width: 80
          },
          {
            title: this.$t('inspectTimeManagement.field.rate'),
            key: 'frequency',
            width: 100
          },
          {
            title: this.$t('inspectTimeManagement.field.ips'),
            slot: 'ips',
            width: 150
          },
          {
            title: this.$t('inspectTimeManagement.field.isdefault'),
            slot: 'ifOpen',
            width: 100
          },
          {
            title: this.$t('inspectTimeManagement.field.isWeekend'),
            slot: 'checkWeek',
            width: 120
          }
        ],
        openAll: true // 开启全部的按钮
      }
    },
    methods: {
      // 删除
      selectedData (selection) {
        this.selectedList = selection
      },
      handleDelete () {
        let selectedListLength = this.selectedList.length
        if (selectedListLength === 0) {
          this.$Message.error(this.$t('global.validate.chooseAtLeastOne'))
        } else {
          let deleteData = []
          for (let selectedListItem of this.selectedList) {
            deleteData.push(selectedListItem.template)
          }
          this.$refs.deleteModal.show(deleteData)
        }
      },
      deleteSelected (deleteModal) {
        api.inspectTimeManagement.inspectTimeManagement.delete({
          data: {
            'strTemplate': deleteModal.data.join(',')
          }
        }).then(res => {
          if (res.data.message === 'SUCCESS') {
            this.resetPageLoad()
            this.selectedList = []
            deleteModal.success()
          } else {
            deleteModal.error()
          }
        }).catch((res) => {
        })
      },
      // 开启全部
      handleOpenAll () {
        // this.openAll = false
        this.loading = true
        api.inspectTimeManagement.inspectTimeManagement.openAll({
          data: {}
        }).then(res => {
          this.loading = false
          if (res.data.message === 'SUCCESS') {
            this.$Message.success({
              content: this.$t('global.tip.openAllSuccess'),
              duration: 5
            })
          } else {
            this.$Message.error(this.$t('global.tip.openAllError'))
          }
          this.search()
        }).catch((res) => {
          this.loading = false
          this.$Message.error(this.$t('global.tip.openAllError'))
        })
      },
      // 新建
      handleNew () {
        this.$refs.detailModal.show('new')
      },
      // 点击模板名进入详情
      goDetail (uuid) {
        this.$refs.detailModal.show(uuid)
      },
      // 暂停任务
      pauseTemplate (id, index) {
        this.loading = true
        api.inspectTimeManagement.inspectTimeManagement.pauseTemplate({
          data: {
            'id': id
          }
        }).then(res => {
          this.loading = false
          console.log(res)
          if (res.data.message === 'SUCCESS') {
            this.datas.data[index].status = 'CLOSE'
            this.$Message.success(this.$t('inspectTimeManagement.tip.closeSuccess'))
          } else {
            this.datas.data[index].status = 'OPEN'
            this.$Message.error(this.$t('inspectTimeManagement.tip.closeError'))
          }
        }).catch((res) => {
          this.datas.data[index].status = 'OPEN'
          this.$Message.error(this.$t('inspectTimeManagement.tip.closeError'))
          this.loading = false
        })
      },
      // 重启任务
      restartTemplate (id, index) {
        this.loading = true
        api.inspectTimeManagement.inspectTimeManagement.openTemplate({
          data: {
            'id': id
          }
        }).then(res => {
          this.loading = false
          console.log(res)
          if (res.data.message === 'SUCCESS') {
            this.datas.data[index].status = 'OPEN'
            this.$Message.success(this.$t('inspectTimeManagement.tip.openSuccess'))
          } else {
            this.datas.data[index].status = 'CLOSE'
            if (res.data.data === 'error: 结束时间不能小于当前时间 ') {
              this.$Message.error({
                content: this.$t('inspectTimeManagement.tip.timeoutOpenError'),
                duration: 5
              })
            } else {
              this.$Message.error(this.$t('inspectTimeManagement.tip.openError'))
            }
          }
        }).catch((res) => {
          this.loading = false
          this.datas.data[index].status = 'CLOSE'
          this.$Message.error(this.$t('inspectTimeManagement.tip.openError'))
        })
      },
      // 自定义开关点击回调
      changeStatus (value, id, index) {
        if (value === 'OPEN') {
          this.pauseTemplate(id, index)
        } else {
          this.restartTemplate(id, index)
        }
      },
      // 查列表
      search (page = this.datas.page, limit = this.datas.limit) {
        this.loading = true
        api.inspectTimeManagement.inspectTimeManagement.findList({
          data: {
            'page': page, // 要去的页码
            'pageSize': limit // 每页的条数
            // 'name': this.searchValue
          }
        }).then(res => {
          this.loading = false
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
      },
//      执行搜索后重置分页
      handleSearch () {
        this.resetPageLoad()
      }
    },
    activated: function () {
      this.resetPageLoad()
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
