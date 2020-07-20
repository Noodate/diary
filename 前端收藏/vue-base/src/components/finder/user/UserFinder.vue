<template>
  <finder-window v-model="isShow"
                 :multiple="multiple"
                 :from="from"
                 :where="where"
                 :sort="sort"
                 :columns="columns"
                 @on-select="handleSelect">
  </finder-window>
</template>

<script>
  import FinderWindow from '@/components/finder/FinderWindow'

  export default {
    name: 'UserFinder',
    components: {
      FinderWindow
    },
    props: {
      docId: {
        type: String,
        required: true,
        default: ''
      },
      value: {
        type: Array,
        default: () => []
      }
    },
    data () {
      return {
        isShow: false,
        multiple: true,
        from: 'HREMP LEFT JOIN ASORG ON ASORG_ORGID = HREMP_ORG LEFT JOIN HRJOB ON HRJOB_JOBID = HREMP_JOBID',
        where: this.getWhere,
        sort: 'HREMP_CODE asc',
        columns: [
          {
            key: 'HREMP_EMPID',
            primaryKey: true,
            hidden: true
          },
          {
            title: this.$t('profile.fields.userCode'),
            width: 120,
            search: true,
            key: 'HREMP_CODE'
          },
          {
            title: this.$t('profile.fields.userName'),
            width: 120,
            search: true,
            key: 'HREMP_NAME'
          },
          {
            title: this.$t('profile.fields.userDepartmentName'),
            width: 240,
            search: true,
            key: 'ASORG_ORGNAME'
          },
          {
            title: this.$t('profile.fields.userJobName'),
            width: 130,
            search: true,
            key: 'HRJOB_JOBNAME'
          }
        ]
      }
    },
    methods: {
      getWhere () {
        return ` HREMP_STATUS IN (1,7,9)  AND HREMP_EMPID NOT IN (SELECT SCTEAMMEMBER_EMPID FROM SCTEAMMEMBER WHERE  SCTEAMMEMBER_STATUS IN (0,2,3) AND SCTEAMMEMBER_HID IN (SELECT SCTEAMUSER_UUID FROM SCTEAMUSER WHERE SCTEAMUSER_TEAM = (SELECT SCTEAMUSER_TEAM FROM SCTEAMUSER WHERE SCTEAMUSER_UUID = '` + this.docId + `')) )`
      },
      handleSelect (selection) {
        for (let data of selection) {
          this.value.push(data.HREMP_EMPID)
        }
        this.$emit('on-select', this.value)
      },
      show () {
        this.isShow = true
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../../styles/index';
</style>
