<template>
  <div class="editorField">
    <i-col :xs="24" :sm="12" :md="12" :lg="span" class="item">
      <row type="flex" align="middle">
        <i-col span="24" v-if="editable" class="editorItem">
          <div class="button">
            <slot name="button"></slot>
          </div>
          <div class="editableLabel" :style="{'width': currentField.width + 'px'}">
            <Tooltip :content="tipByType(currentField.type)" placement="top">
              <div class="inputWrap" v-if="currentField.editing">
                <input class="editableInput"
                       :class="{'fieldRequiredError' : !currentField.fieldValidate }"
                       v-model="currentField.name"
                       ref="input"
                       @blur="save"
                       v-focus="true"/>
              </div>
              <span v-else @dblclick="edit">
                  {{currentField.name}}
                </span>
            </Tooltip>
          </div>
          <div class="editableFormItem" :style="{'margin-left': currentField.width + 'px'}">
            <FormItem :prop="prop" :rules="rules" class="content">
              <slot></slot>
            </FormItem>
          </div>
        </i-col>
        <i-col span="24" v-else>
          <FormItem :prop="prop" :rules="rules">
            <span slot="label">
              <slot name="label">{{currentField.name}}</slot>
            </span>
            <slot></slot>
          </FormItem>
        </i-col>
      </row>
    </i-col>
  </div>
</template>

<script>
  import EditModal from '@/views/confirmation/template/modal/EditModal.vue'
  import Emitter from '@/mixins/emitter'

  export default {
    components: {
      EditModal
    },
    mixins: [Emitter],
    props: {
      value: {
        type: Object,
        default: () => {}
      },
      editable: {
        type: Boolean,
        default: false
      },
      span: {
        type: Number,
        default: 8
      },
      label: {
        type: String,
        default: ''
      },
      prop: {
        type: String,
        default: ''
      },
      rules: {
        type: [Object, Array]
      }
    },
    data () {
      return {
        currentField: this.getField(this.value),
        focusBorder: false
      }
    },
    directives: {
      focus: {
        // 指令的定义
        inserted: function (el) {
          el.focus()
        }
      }
    },
    watch: {
      value (val) {
        this.currentField = this.getField(val)
      },
      currentField (val) {
        this.$emit('input', val)
      }
    },
    methods: {
      tipByType (type) {
        if (type === 'text') {
          return this.$t('confirmation.template.tip.dbEditTextFieldName')
        } else if (type === 'date') {
          return this.$t('confirmation.template.tip.dbEditDateFieldName')
        } else if (type === 'number') {
          return this.$t('confirmation.template.tip.dbEditNumberFieldName')
        } else {
          return this.$t('confirmation.template.tip.dbEditTextareaFieldName')
        }
      },
      getField (value) {
        if (value.editing === undefined) {
          this.$set(this.value, 'fieldValidate', true)
          this.$set(this.value, 'editing', false)
        } else {
        }
        return value
      },
      edit () {
        this.currentField.editing = true
      },
      save () {
        let _this = this
        this.dispatch('DragGroup', 'on-field-validate', function (success) {
          if (!success) {
            _this.$Message.error(_this.$t('global.validate.validateError'))
          }
        })
      }
    }
  }
</script>
<style lang="scss">
  @import '../../styles/index';

  .editorField {
    .item {
      .editorItem {
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 10px;
        margin: 5px 0;
        position: relative;
        left: 0;
        top: 0;
        .button {
          opacity: 0;
          transition: all 500ms ease;
          position: absolute;
          right: 5px;
          top: 3px;
          z-index: 9;
        }
        .editableLabel {
          width: 100px;
          text-align: right;
          vertical-align: middle;
          float: left;
          font-size: 12px;
          color: #495060;
          line-height: 1;
          box-sizing: border-box;
          cursor: pointer;
          position: relative;
          left: -6px;
          top: 20px;
          .inputWrap {
            border: 1px solid transparent;
          }
          span {
            display: inline-block;
            height: 32px;
            line-height: 32px;
            cursor: pointer;
            padding: 0 2px;
            border-radius: 4px;
            overflow: hidden;
          }
          .focusBorder {
            box-shadow: 0 0 0 2px rgba(45, 140, 240, .2);
          }
          .editableInput {
            display: inline-block;
            width: 100%;
            height: 32px;
            line-height: 1.5;
            padding: 4px 7px;
            font-size: 12px;
            border: 1px solid #dddee1;
            border-radius: 4px;
            color: #495060;
            background-color: #fff;
            background-image: none;
            position: relative;
            cursor: text;
            transition: border .2s ease-in-out, background .2s ease-in-out, box-shadow .2s ease-in-out;
            top: 1px;
          }
          .fieldRequiredError {
            border: 2px solid $error;
          }
        }
        .editableFormItem {
          position: relative;
          top: 20px;
          line-height: 32px;
          font-size: 12px;
          margin-left: 100px;
          .ivu-form-item-content {
            margin-left: 0 !important;
            position: relative;
            left: 0;
            top: 0;
          }
        }
        &:hover {
          .button {
            opacity: 1;
          }
        }
      }
    }

  }


</style>
