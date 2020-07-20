<template>
  <Modal v-model="isShow"
         width="1250"
         class="officeEditorModal"
         class-name="modalIndex"
         :closable="false"
         :styles="{top: '10px'}"
         :mask-closable="false">
    <office-editor ref="officeEditor" :fileId="currentFileId"
                   :editable="editable"
                   :copyable="copyable"
                   @on-close="hide"></office-editor>
    <div slot="footer">
    </div>
  </Modal>
</template>

<script>
  import OfficeEditor from '@/components/editor/office/OfficeEditor'

  export default {
    components: {
      OfficeEditor
    },
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
      }
    },
    data () {
      return {
        isShow: false,
        currentFileId: this.fileId
      }
    },
    watch: {
      fileId (val) {
        this.currentFileId = this.fileId
      },
      isShow (val) {
        if (val) {
          this.$refs.officeEditor.loadFile()
        }
      }
    },
    methods: {
      show () {
        this.isShow = true
      },
      hide (ifsaveFileWord) {
        this.$emit('on-close', ifsaveFileWord)
        this.isShow = false
      }
    }
  }
</script>

<style lang="scss">
  .officeEditorModal{
    .modalIndex {
      z-index: 1001;
    }
  }

</style>
