<template>
  <div>
    <row v-if="fileId !== ''">
      <i-col span="22">
        <div>
          <Alert type="error" show-icon v-if="errorMessage !== ''">
            {{ $t('global.tip.error') }}
            <span slot="desc">
              {{ errorMessage }}
            </span>
          </Alert>
          <iframe width="100%"
                  frameborder="0"
                  border="0"
                  marginwidth="0"
                  marginheight="0"
                  scrolling="no"
                  height="768">
          </iframe>
        </div>
      </i-col>
      <i-col span="2" style="text-align: center">
        <ButtonGroup vertical>
          <Button size="large" @click="handleClose">{{ $t('global.button.close') }}</Button>
          <Button size="large" type="primary" @click="handleSave" :loading="saveLoading" v-if="editable">{{ $t('global.button.save') }}</Button>
        </ButtonGroup>
      </i-col>
    </row>
  </div>
</template>

<script>
  import getInstance from '@/components/editor/office/OfficeEditorInstance.js'
  import * as api from 'api'
  export default {
    props: {
      fileId: {
        type: String,
        required: true
      },
      editable: {
        type: Boolean,
        default: false
      },
      copyable: {
        type: Boolean,
        default: true
      },
      autoLoadFile: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        inited: false, // 是否已初始化
        loading: false,
        saveLoading: false,
        ifsaveFileWord: false,
        errorMessage: '',
        options: {},
        editorObj: {}
      }
    },
    watch: {
      fileId () {
        // 切换文件
        if (this.autoLoadFile) {
          this.inited = false
          this.init()
        } else {
          this.inited = false
        }
      },
      editable () {
        if (this.autoLoadFile) {
          this.inited = false
          this.init()
        } else {
          this.inited = false
        }
      }
    },
    methods: {
      setErrorMessage (message) {
        this.errorMessage = message
      },
      clearErrorMessage () {
        this.errorMessage = ''
      },
      init () {
        this.inited = true
        this.loading = true
        api.file.getOfficeEditorOptions({
          data: {
            'pars.fileId': this.fileId
          }
        }).then(res => {
          const body = res.data
//          由iframe中onload事件回写
//          this.loading = false
          if (body.success) {
            this.options = body.pars.data
            this.createView()
          } else {
            this.$Message.error(this.$t('global.upload.tip.notFoundFile'))
          }
        }).catch((res) => {
        })
      },
      createView () {
        this.options.editable = this.editable
        this.options.copyable = this.copyable
        this.editorObj = getInstance(this.options)
        let iframe = document.createElement('iframe')
        iframe.setAttribute('frameborder', '0')
        iframe.setAttribute('width', '100%')
        iframe.setAttribute('border', '0')
        iframe.setAttribute('marginwidth', '0')
        iframe.setAttribute('marginheight', '0')
        iframe.setAttribute('scrolling', 'no')
        iframe.setAttribute('height', '768')
        iframe.setAttribute('src', '../../../../static/plugins/office/officeEditor.html')
//        没有使用div上套用id或者其他标识属性，防止出现对象错乱的情况；也可以通过唯一id来实现；
        const iframeObj = this.$el.getElementsByTagName('iframe')[0]
        const parentNode = iframeObj.parentNode
        parentNode.removeChild(iframeObj)
        parentNode.appendChild(iframe)
//        混合对象进入iframe
        iframe.contentWindow.editorVm = this
        iframe.contentWindow.editorObj = this.editorObj
//        for (let item of this.$el.getElementsByTagName('div')) {
//          if (item.id === 'test') {
//            item.appendChild(iframe)
//          }
//        }
      },
      loadFile () {
        if (!this.inited) {
          this.init()
        }
      },
      handleSave () {
        this.saveLoading = true
        if (this.editorObj.saveFile()) {
          this.ifsaveFileWord = true
          this.$Message.success(this.$t('global.tip.saveSuccess'))
        } else {
          this.$Message.error(this.$t('global.tip.saveError'))
        }
        this.saveLoading = false
      },
      handleClose () {
        this.$emit('on-close', this.ifsaveFileWord)
        this.ifsaveFileWord = false
      }
    },
    mounted: function () {
      if (this.autoLoadFile) {
        this.$nextTick(function () {
          this.init()
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../../styles/index';
</style>
