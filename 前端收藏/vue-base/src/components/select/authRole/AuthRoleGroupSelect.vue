<template>
  <div>
    <field-group :title="$t('team.title.doc')" :border="true">
      <auth-role-select :data="docRoleData" v-model="value.doc"></auth-role-select>
    </field-group>
    <field-group :title="$t('team.title.report')">
      <auth-role-select :data="reportRoleData" v-model="value.report"></auth-role-select>
    </field-group>
  </div>
</template>
<script>
  import FieldGroup from 'components/form/FieldGroup'
  import AuthRoleSelect from 'components/select/authRole/AuthRoleSelect'
  export default {
    components: {
      FieldGroup,
      AuthRoleSelect
    },
    props: {
      value: {
        type: Object,
        default: function () {
          return {
            doc: [],
            report: []
          }
        }
      }
    },
    data () {
      return {
        docRoleData: this._getDict('team.doc.role'),
        reportRoleData: this._getDict('team.report.role')
      }
    },
    methods: {
    }
  }
</script>
