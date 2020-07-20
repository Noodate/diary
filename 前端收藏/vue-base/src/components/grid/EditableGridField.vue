<template>
  <li class="tableHeader" :style="{'width': currentField.width + 'px'}">
    <div v-if="editable">
      <div class="button">
        <slot name="button"></slot>
      </div>
      <Tooltip :content="tipByType(currentField.type)" placement="bottom">
        <input class="editableInput"
               :class="{'fieldRequiredError' : !currentField.fieldValidate }"
               v-if="currentField.editing"
               v-model="currentField.name"
               ref="input"
               @blur="save"
               v-focus="true"/>
        <span v-else @dblclick="edit" class="tipSpan">{{currentField.name}}</span>
      </Tooltip>
    </div>
    <div v-else>
      <span>{{currentField.name}}</span>
    </div>
  </li>
</template>

<script>
  import Emitter from '@/mixins/emitter'

  export default {
    name: 'EditableGridField',
    mixins: [Emitter],
    props: {
      value: {
        type: Object,
        default: () => {}
      },
      editable: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        currentField: this.getField(this.value)
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
        this.currentField = val
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
<style scoped lang="scss">
  @import '../../styles/index';

  .tableHeader {
    float: left;
    white-space: nowrap;
    background-color: #f8f8f9;
    color: #495060;
    border: 1px solid #e9eaec;
    padding: 3px 10px 15px;
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
      top: 4px;
    }
    .fieldRequiredError {
      border: 2px solid $error;
    }
    .tipSpan {
      white-space: pre-wrap;
    }
    .button {
      opacity: 0;
      margin-bottom: 2px;
      transition: all 500ms ease;
    }
    &:hover {
      .button {
        opacity: 1;
      }
    }
  }
</style>

