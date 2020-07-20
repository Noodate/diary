<template>
  <i-col :xs="24" :sm="12" :md="12" :lg="span" class="itemContent">
    <div @mouseover="showButton" @mouseleave="hideButton">
      <row type="flex" align="middle" justify="center">
        <i-col span="24">
          <div class="itemLabel">
            <slot name="label">{{ label }}</slot>
          </div>
          <div class="item">：</div>
          <div class="itemValue clearfix">
            <row type="flex" align="middle">
              <i-col span="20">
                <div class="valueInput" v-if="editableInput">
                  <input class="editableInput"
                         :class="{'fieldRequiredError' : !fieldValidate }"
                         v-model="currentField"
                         :placeholder="$t('global.placeholder.input')"
                         @blur="save"
                         v-focus="true"/>
                </div>
                <div class="valueText" v-if="!editableInput">
                  <Tooltip trigger="hover" :content="$t('profile.tip.edit')" placement="top">
                    <span v-if="currentField === ''">----</span>
                    <span v-else>{{currentField}}</span>
                  </Tooltip>
                </div>
              </i-col>
              <i-col span="3" offset="1">
                <div class="editButton fr" @click="edit" v-if="editable && !editableInput">
                  <Icon type="md-create"></Icon>
                </div>
              </i-col>
            </row>
          </div>
        </i-col>
      </row>
    </div>
  </i-col>
</template>

<script>
  export default {
    name: 'EditableFieldDisplay',
    props: {
      label: {
        type: String,
        default: ''
      },
      span: {
        type: Number,
        default: 8
      },
      field: {
        type: String,
        default: ''
      },
      value: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        editable: false,
        editableInput: false,
        currentField: this.value,
        fieldValidate: true
      }
    },
    watch: {
      value (val) {
        this.currentField = val
      },
      currentField (val) {
//        this.$emit('input', val)
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
    methods: {
      showButton () {
        this.editable = true
      },
      hideButton () {
        this.editable = false
      },
      edit () {
        this.editableInput = true
//        this.$emit('on-edit')
      },
      save () {
        if (!this.currentField) {
          this.fieldValidate = false
        } else {
          if (this.currentField === this.value) {
            this.editableInput = false
          } else {
            this.editableInput = false
            this.$emit('on-save', {field: this.field, value: this.currentField})
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../styles/index';

  .itemContent {
    margin: 10px 0;
    cursor: pointer;
    .item {
      display: table-cell;
    }
    .itemLabel {
      display: table-cell;
      white-space: nowrap;
    }
    .itemValue {
      display: table-cell;
      .valueText {
        width: 100%;
      }
      .editButton {
        display: inline-block;
        padding-left: 5px;
        color: $default-font-color;
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
        border: 1px solid red;
      }
    }
  }


</style>
