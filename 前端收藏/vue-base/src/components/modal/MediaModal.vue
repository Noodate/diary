<template>
  <Modal
    v-model="isShow"
    width="600"
    :closable="false">
    <div class="mediaBox" :class="{'mobileMode': mobileMode}">
      <img :src="mediaSrc" v-if="mediaType === 'image'">
      <video ref="video" controls='controls' v-if="mediaType === 'video'"
             :width="mobileMode ? 200 : 480">
        <source type="video/mp4" :src="mediaSrc">
      </video>
      <div v-if="mediaType === 'audio'" class="audioBg">
        <img :src="audioBgSrc">
        <audio ref="video" controls='controls'   :width="mobileMode ? 200 : 480">
          <source type="audio/mp3" :src="mediaSrc">
        </audio>
      </div>
    </div>
    <p slot="footer">
      <Button type="primary" @click="hide">{{ $t('global.button.close') }}</Button>
    </p>
  </Modal>
</template>
<script>
  import audioBg from '@/assets/upload/audioBg.png'
  export default {
    name: 'MediaModal',
    data () {
      return {
        isShow: false,
        audioBgSrc: audioBg
      }
    },
    props: {
      mediaSrc: {
        type: String,
        default: () => ''
      },
      mediaType: {
        type: String,
        default: () => ''
      }
    },
    computed: {
      mobileMode () {
        return this.$store.state.app.mobileMode
      }
    },
    watch: {
      mediaSrc () {
        if (this.mediaType === 'video') {
          this.$nextTick(() => {
            this.$refs.video.src = this.mediaSrc
          })
        }
        if (this.mediaType === 'audio') {
          this.$nextTick(() => {
            this.$refs.audio.src = this.mediaSrc
          })
        }
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
<style scoped lang="scss">
  @import '../../styles/index';
  .mediaBox{
    text-align:center;
    img{
      max-width:500px;
      height:auto;
    }
    .audioBg{
      img{
        width:300px;
        height:147px;
      }
      margin:0 auto;
    }
  }
  .mobileMode{
    img{
      width:200px;
      height:auto
    }
  }
</style>
