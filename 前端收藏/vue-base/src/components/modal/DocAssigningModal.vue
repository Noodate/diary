<template>
  <div>
    <doc-collection-finder v-model="taskForm.show" :typeNumber="3" :uuid="this.uuid" @on-select="empFinderOk"></doc-collection-finder>
    <Modal v-model="isShow" :title="$t('global.button.task')" :loading="loading">
      <Form ref="taskForm" :model="taskForm" :rules="taskFormValidate">
        <p slot="header" style="text-align:left">
          <span>{{ $t('global.button.task') }} </span>
        </p>
        <slot name="content">
          <div class="taskFinder">
            <field-row :span="24">
              <field :label="$t('confirmation.projectGroupWorkManage.fields.principal')" prop="personnelLeader:id"
                     :span="24">
                <doc-emp-finder-select v-model="taskForm.personnelLeader" :uuid="this.uuid" :typeNumber="1">
                </doc-emp-finder-select>
              </field>
            </field-row>
          </div>
          <row type="flex" justify="end">
            <i-col span="10">
              <div style="float:right;margin-bottom:5px;">
                <Button type="info" @click="batchTask">{{ $t('global.button.taskAll') }}</Button>
              </div>
            </i-col>
          </row>
          <Table border
                 height="250"
                 :loading="taskForm.tabLoading"
                 :columns="taskForm.columns"
                 :data="taskForm.dataList">
          </Table>
        </slot>
      </Form>
      <div slot="footer">
        <Button type="text" size="large" @click="cancel">
          {{ $t('global.button.cancel') }}
        </Button>
        <Button type="primary" size="large" :loading="loading" @click="ok('taskForm')">
          {{ $t('global.button.ok') }}
        </Button>
      </div>
    </Modal>
  </div>
</template>
<script>
  import * as api from 'api'
  import DocEmpFinderSelect from '@/views/finder/DocEmpFinderSelect'
  import DocCollectionFinder from '@/views/finder/DocCollectionFinder'
  import FieldRow from '@/components/form/FieldRow.vue'
  import Field from '@/components/form/Field.vue'

  export default {
    name: 'DocAssigningModal',
    components: {
      DocEmpFinderSelect,
      DocCollectionFinder,
      FieldRow,
      Field
    },
    props: {
      uuid: {
        type: String,
        default: '',
        required: true
      }
    },
    data () {
      return {
        isShow: false,
        selectShow: false,
        loading: false,
        taskForm: {
          tabLoading: false,
          index: -1,
          show: false,
          personnelLeader: {
            id: '',
            name: ''
          },
          columns: [
            {
              title: this.$t('confirmation.projectGroupWorkManage.fields.hzCode'),
              key: 'code',
              width: 140
            },
            {
              title: this.$t('confirmation.projectGroupWorkManage.fields.collection'),
              key: 'collection',
              width: 100
            },
            {
              title: this.$t('confirmation.projectGroupWorkManage.fields.item'),
              key: 'item',
              width: 100
            },
            {
              title: this.$t('confirmation.modal.fields.collectionSelect'),
              key: 'action',
              align: 'center',
              width: 120,
              render: (h, params) => {
                return h('div', {
                  class: {
                    tableLink: true
                  },
                  on: {
                    click: () => {
                      this.taskForm.show = true
                      this.taskForm.index = params.index
                    }
                  }
                }, this.$t('confirmation.modal.title.select'))
              }
            }
          ],
          dataList: []
        },
        taskFormValidate: {
          'personnelLeader:id': [
            {
              required: true,
              message: this.$t('confirmation.projectGroupWorkManage.validate.personnelRequired'),
              trigger: 'change'
            }
          ]
        }
      }
    },
    watch: {},
    methods: {
      ok () {
        this.loading = true
        this.$refs['taskForm'].validate((valid) => {
          if (valid) {
            this.$emit('on-ok', this)
          } else {
            this.$Message.error(this.$t('global.validate.validateError'))
          }
        })
      },
      empFinderOk (val) {
        if (this.taskForm.index !== -1) {
          this.taskForm.dataList[this.taskForm.index].collection = val.HREMP_NAME
          this.taskForm.dataList[this.taskForm.index].empUuid = val.HREMP_EMPID
        } else {
          for (let index in this.taskForm.dataList) {
            this.taskForm.dataList[index].collection = val.HREMP_NAME
            this.taskForm.dataList[index].empUuid = val.HREMP_EMPID
          }
        }

        this.taskForm.index = -1
        this.taskForm.show = false
      },
      cancel () {
        this.$refs['taskForm'].resetFields()
        this.isShow = false
      },
      show () {
        this.isShow = true
        this.loading = false
        this.search()
      },
      search () {
        this.tabLoading = true
        api.confirmation.workManage.searchHzList({
          data: {
            'pars.jobUuid': this.$route.params.prjWorkManageUid
          }
        }).then(res => {
          const body = res.data
          this.tabLoading = false
          if (body.success) {
            this.taskForm.dataList = body.pars.dataList
            this.taskForm.personnelLeader = body.pars.principalMap
          }
        }).catch((res) => {
        })
      },
      success () {
        this.loading = false
        this.isShow = false
        this.selectShow = false
        this.$Message.success(this.$t('global.tip.taskSuccess'))
      },
      error () {
        this.loading = false
        this.$Message.error(this.$t('global.tip.taskError'))
      },
      batchTask () {
        this.taskForm.show = true
      }
    },
    created: function () {
    }
  }
</script>
<style lang="scss">
  .docAssignSecond {
    .ivu-modal-mask {
      z-index: 1001;
    }
    .modalIndex {
      z-index: 1002;
    }
  }

  .taskFinder {
    .ivu-form-item{
      margin-bottom:10px;
      .ivu-form-item-content {
        width: 80%;
        float: left;
      }
    }

  }


</style>
