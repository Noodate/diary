<template>
  <div class="toggleCard">
    <Card>
      <row type="flex" justify="center">
        <i-col span="24">
          <div class="title">
            <div v-if="editable" class="editableTitle">
              <Tooltip :content="tip" placement="top">
                <input class="editableInput"
                       :class="{'groupRequiredError' : !currentValue.groupValidate }"
                       v-if="currentValue.editing"
                       v-model="currentValue.name"
                       ref="input"
                       @blur="save"
                       v-focus="true"/>
                <!--@click="toggle"-->
                <span v-else @dblclick="edit" ref="button">
                  {{currentValue.name}}</span>
                <Icon :type="titleIcon"></Icon>
              </Tooltip>
              <div class="button">
                <slot name="button"></slot>
              </div>

            </div>
            <div v-else>
              <span @click="toggle">
                {{currentValue.name}} <Icon :type="titleIcon"></Icon>
              </span>
            </div>
          </div>
          <collapse-transition>
            <div v-show="isOpen">
              <Spin fix v-if="loading"></Spin>
              <slot name="content"></slot>
            </div>
          </collapse-transition>
        </i-col>
      </row>
    </Card>
  </div>
</template>

<script>
  import CollapseTransition from '@/libs/collapse-transition.js'
  import Emitter from '@/mixins/emitter'

  export default {
    name: 'EditableToggleCard',
    components: {
      CollapseTransition
    },
    mixins: [Emitter],
    props: {
      title: {
        type: String,
        default: ''
      },
      value: {
        type: Object,
        default: () => {}
      },
      editable: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        isOpen: true,
//        currentValue: Object.assign(this.value, {editing: false, groupValidate: false}),
        currentValue: this.getGroup(this.value),
        tip: this.$t('confirmation.template.tip.dbEditGroupName')
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
    computed: {
      titleIcon () {
        return this.isOpen ? 'md-arrow-dropup' : 'md-arrow-dropdown'
      }
    },
    watch: {
      value (val) {
        this.currentValue = this.getGroup(val)
      },
      currentValue (val) {
        this.$emit('input', val)
      }
    },
    methods: {
      getGroup (value) {
        if (value.editing === undefined) {
          this.$set(this.value, 'groupValidate', true)
          this.$set(this.value, 'editing', false)
        } else {
        }
        return value
      },
      toggle () {
        this.isOpen = !this.isOpen
      },
      edit () {
        this.currentValue.editing = true
      },
      save () {
        let _this = this
        this.dispatch('DragGroup', 'on-group-validate', function (success) {
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

  .toggleCard {
    margin-bottom: 3px;
    .ivu-card-body {
      padding: 16px 16px 30px;
      /*卡片标题*/
      .title {
        font-size: 16px;
        font-weight: bold;
        padding: 0 10px;
        margin-bottom: 20px;
        border-left: 4px solid $default-font-color;
        span {
          cursor: pointer;
          padding-right: 5px;
        }
      }
      .editableTitle {
        .editableInput {
          display: inline-block;
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
          top: 0;
        }
        .groupRequiredError {
          border: 2px solid $error;
        }
        /*删除组按钮*/
        .button {
          opacity: 0;
          transition: all 500ms ease;
          float: right;
        }
      }
    }
    &:hover {
      .editableTitle {
        .button {
          opacity: 1;
        }
      }
    }
  }
</style>
