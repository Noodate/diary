<template>
  <div>
    <row v-if="url !== ''">
      <i-col span="24">
        <iframe width="100%"
                frameborder="0"
                border="0"
                marginwidth="0"
                marginheight="0"
                scrolling="no"
                :src=src
                height="768">
        </iframe>
      </i-col>
    </row>
  </div>
</template>

<script>
  export default {
    name: 'Pdf',
    props: {
      url: {
        type: String,
        default: ''
      }
    },
    computed: {
      src () {
        return '../../../../static/plugins/pdf/pdf.js-gh-pages/web/viewer.html?file=' + this.url
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../../styles/index';
</style>
