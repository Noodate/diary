<template>
  <Modal v-model="isShow"
         width="1000"
         class="pdfModal"
         class-name="modalIndex"
         :styles="{top: '10px'}">
    <pdf :url="url"></pdf>
    <div slot="footer">
      <Button @click="hide">
        {{$t('global.button.close')}}
      </Button>
    </div>
  </Modal>
</template>

<script>
  import Pdf from '@/components/preview/pdf/Pdf'

  export default {
    name: 'PdfModal',
    components: {
      Pdf
    },
    props: {
      url: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        isShow: false
      }
    },
    methods: {
      show () {
        this.isShow = true
      },
      hide () {
        this.isShow = false
      }
    }
  }
</script>

<style lang="scss">
  .pdfModal {
    .ivu-modal-close {
      right: 14px;
      top: 3px;
    }
    .ivu-modal-body {
      padding: 30px;
    }
    .modalIndex {
      z-index: 1002;
    }
    .ivu-modal-mask{
      z-index: 1001;
    }
  }


</style>
