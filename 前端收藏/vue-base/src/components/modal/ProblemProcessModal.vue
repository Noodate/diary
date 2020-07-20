<template>
  <Modal v-model="isShow"
         :title="title"
         :loading="loading"
         @on-ok="ok"
         @on-cancel="cancel">
    <Form ref="form" :model="form" :rules="validate">
      <field-row :span="24">
        <field prop="comment" :span="24">
          <Input v-model="form.comment"
                 type="textarea"
                 :rows="6"
                 :placeholder="$t('global.placeholder.input')"></Input>
        </field>
      </field-row>
      <div>
        <slot name="uploadFiles"></slot>
      </div>
    </Form>
    <div slot="footer">
      <Button type="text" size="large" @click="cancel">
        {{ $t('global.button.cancel') }}
      </Button>
      <Button type="primary" size="large" :loading="saveLoading" @click="ok">
        {{ $t('global.button.ok') }}
      </Button>
    </div>
  </Modal>
</template>
<script>
  import FieldRow from '@/components/form/FieldRow.vue'
  import Field from '@/components/form/Field.vue'
  import Prompt from '@/components/prompt/Prompt'
  export default {
    components: {
      FieldRow,
      Field,
      Prompt
    },
    props: {
      loading: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        title: this.$t(`confirmation.projectGroupWorkManage.title.problemProcessTitle`),
        isShow: false,
        saveLoading: false,
        form: {
          comment: ''
        },
        validate: {
          comment: [
            {required: true, message: this.$t('workflow.actionModal.validate.commentRequired'), trigger: 'blur'},
            {type: 'string', min: 2, max: 128, message: this.$t('workflow.actionModal.validate.commentRange'), trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      show () {
        this.form.comment = ''
        this.saveLoading = false
        this.isShow = true
      },
      hide () {
        this.saveLoading = false
        this.isShow = false
      },
      ok () {
        this.saveLoading = true
        this.$refs['form'].validate((valid) => {
          if (valid) {
            this.$emit('on-process', this.form.comment)
          } else {
            this.saveLoading = false
            this.$Message.error(this.$t('global.validate.validateError'))
          }
        })
      },
      cancel () {
        this.isShow = false
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../styles/index';
</style>
