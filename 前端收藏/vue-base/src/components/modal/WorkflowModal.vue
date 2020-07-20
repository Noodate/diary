<template>
  <Modal v-model="isShow"
         :title="title"
         :loading="loading"
         @on-ok="ok"
         @on-cancel="cancel">
    <ul class="clearfix usualCommentBox"
        v-if="usualApproveComments && usualApproveComments.length > 0">
      <li v-for="(item, index) in usualApproveComments"
          class="fl usualComment"
          @click="handleComment(index, 'success')"
          :key="index">
        {{ item.title }}
      </li>
    </ul>
    <ul class="clearfix usualCommentBox"
        v-if="usualRejectComments && usualRejectComments.length > 0">
      <li v-for="(item, index) in usualRejectComments"
          class="fl usualComment error"
          @click="handleComment(index, 'error')"
          :key="index">
        {{ item.title }}
      </li>
    </ul>
    <Form ref="form" :model="form" :rules="validate">
      <field-row :span="24">
        <field prop="comment" :span="24" :rules="commentRules">
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
      <Button type="primary" size="large" :loading="loading" @click="ok">
        {{ $t('global.button.ok') }}
      </Button>
    </div>
  </Modal>
</template>
<script>
  import FieldRow from '@/components/form/FieldRow.vue'
  import Field from '@/components/form/Field.vue'
  import Prompt from '@/components/prompt/Prompt'
  import Util from '@/libs/util'
  export default {
    name: 'WorkflowModal',
    components: {
      FieldRow,
      Field,
      Prompt
    },
    props: {
      action: {
        validator (value) {
          return Util.oneOf(value, ['submit', 'unsubmit', 'approve', 'reject'])
        },
        default: 'submit' // submit unsubmit approve reject
      },
      loading: {
        type: Boolean,
        default: false
      },
      usualApproveComments: {
        type: Array,
        default: () => []
      },
      usualRejectComments: {
        type: Array,
        default: () => []
      }
    },
    data () {
      return {
        title: this.$t(`workflow.actionModal.title.${this.action}`),
        isShow: false,
        form: {
          comment: ''
        },
        validate: {
          basicComment: [
            {type: 'string', min: 2, max: 128, message: this.$t('workflow.actionModal.validate.commentRange'), trigger: 'blur'}
          ],
          rejectComment: [
            {required: true, message: this.$t('workflow.actionModal.validate.commentRequired'), trigger: 'blur'},
            {type: 'string', min: 2, max: 128, message: this.$t('workflow.actionModal.validate.commentRange'), trigger: 'blur'}
          ]
        }
      }
    },
    computed: {
      commentRules () {
        return this.action === 'reject' ? this.validate.rejectComment : this.validate.basicComment
      }
    },
    methods: {
      show () {
        console.log(this.usualApproveComments)
        this.form.comment = ''
        this.isShow = true
      },
      hide () {
        this.isShow = false
      },
      handleComment(index, type) {
        let commentArry = []
        type === 'success' ?  commentArry =  this.usualApproveComments : commentArry =  this.usualRejectComments
        if( this.form.comment) {
          this.form.comment =  this.form.comment + '，' + commentArry[index].title
        } else {
          this.form.comment = commentArry[index].title
        }
      },
      ok () {
        this.$refs['form'].validate((valid) => {
          if (valid) {
            if (this.action === 'submit') {
              this.$emit('on-submit', this.form.comment)
            } else if (this.action === 'unsubmit') {
              this.$emit('on-unsubmit', this.form.comment)
            } else if (this.action === 'approve') {
              this.$emit('on-approve', this.form.comment)
            } else if (this.action === 'reject') {
              this.$emit('on-reject', this.form.comment)
            }
          } else {
            this.$Message.error(this.$t('global.validate.validateError'))
          }
        })
      },
      cancel () {
        this.$refs['form'].resetFields()
        this.isShow = false
        // this.$emit('on-cancel', this)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../styles/index';
  .usualCommentBox{
    margin:-10px 0 10px 0;
    .usualComment{
      display: inline-block;
      height: 30px;
      line-height: 30px;
      margin: 2px 4px 2px 0;
      padding: 0 8px;
      border: none;
      border-radius: 3px;
      background: #f7f7f7;
      font-size: 12px;
      vertical-align: middle;
      opacity: 1;
      overflow: hidden;
      cursor: pointer;
      color:#fff;
      background:$success;
    }
    .error{
      background-color:$error;
    }
  }

</style>
