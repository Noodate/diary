<template>
  <Modal
    v-model="isShow"
    :width="deviceDisbaled ? '400' : '1000'"
    :closable="false">
    <div class="box">
      <row type="flex" v-show="deviceDisbaled">
        <i-col :span="24">
          <Alert type="warning" show-icon>
            未检测到摄像设备！
            <template slot="desc">
           IE浏览器不支持该功能，或请检查设备是否正确连接！
            </template>
          </Alert>
        </i-col>
      </row>
      <row type="flex" v-show="!deviceDisbaled">
        <i-col :span="10">
          <video src="" id="cameraScreen" ref="cameraScreen" width="400" height="400"></video>
        </i-col>
        <i-col :span="4">
            <div class="buttonBox">
              <Button type="primary"  @click="photo" style="width:50%;">拍照</Button>
            </div>
            <div class="buttonBox" v-if="photoPath">
              <Button type="success"
                      @click="upload"
                      style="width:90%"
                      :loading="loading">
                <p v-if="cameraUploadType === 'IdCard'">上传身份证正面</p>
                <p v-if="cameraUploadType === 'IdCardBack'">上传身份证反面</p>
                <p v-if="cameraUploadType === 'IdCardOperater'">上传经办人身份证正面</p>
                <p v-if="cameraUploadType === 'IdCardBackOperater'">上传经办人身份证反面</p>
                <p v-if="cameraUploadType === 'person'">上传人像</p>
                <p v-if="cameraUploadType === 'BusinessLicense'">上传营业执照</p>
                <p v-if="cameraUploadType === 'OpeningAccount'">上传开户许可证</p>
                <p v-if="cameraUploadType === 'others'">上传</p>
              </Button>
              <Button type="primary"
                      class="downloadButton"
                      style="width:80%;margin-top:10px;">
                <a :href="imgSrc" download="未知名称图片.png">
                  保存在本地
                </a>
              </Button>
            </div>
        </i-col>
        <i-col :span="10">
          <div class="previewTitle">预览图片</div>
          <div class="previewBox">
            <img class="previewImg" :src="photoPath">
            <canvas id='canvas' width="400" height="400" style="display:none;"></canvas>
          </div>

        </i-col>
      </row>
    </div>
    <p slot="footer">
      <Button type="primary" @click="hide">{{ $t('global.button.close') }}</Button>
    </p>
  </Modal>
</template>
<script>
  export default {
    name: 'CameraModal',
    data () {
      return {
        imgSrc: '',
        photoPath: '',
        isShow: false,
        deviceDisbaled: false
      }
    },
    props: {
      loading: {
        type: Boolean,
        default: false
      },
      cameraUploadType: {
        type: String,
        default: ''
      }
    },
    watch: {
      isShow (val) {
        this.photoPath = ''
        this.imgSrc = ''
        let constraints = {audio: false, video: {width: 400, height: 400}}
        let that = this
        if (!!window.ActiveXObject || 'ActiveXObject' in window) { // 判断是ie浏览器-不支持
          that.deviceDisbaled = true
        } else {
          navigator.mediaDevices.getUserMedia(constraints).then(function (mediaStream) {
            that.deviceDisbaled = false
            let video = that.$refs.cameraScreen
            // let video = document.getElementById('cameraScreen')
            video.srcObject = mediaStream
            video.onloadedmetadata = function (e) {
              if (val) {
                video.play()
                console.log('开了啊')
              } else {
                console.log('关了啊')
                mediaStream.stop()
                video.src = ''
              }
            }
          }).catch(function (err) {
            that.deviceDisbaled = true
            console.log(err.name + ': ' + err.message)
          })
        }
      }
    },
    methods: {
      photo () {
        // 使用canvas进行拍照
        let video = this.$refs.cameraScreen
        let canvas = document.getElementById('canvas')
        canvas.getContext('2d').drawImage(video, 0, 0, 400, 400)
        this.photoPath = canvas.toDataURL('image/png')
        // 把图片转换成blob网络路径以下载
        let _this = this
        canvas.toBlob(function (blobObj) {
          console.log(blobObj)
          _this.imgSrc = window.URL.createObjectURL(blobObj)
          console.log(_this.imgSrc)
        })
      },
      upload () {
        this.hide()
        this.$emit('on-uploadFromCamera', this.cameraUploadType)
      },
      show () {
        this.isShow = true
        this.photoPath = ''
        this.imgSrc = ''
      },
      hide () {
        this.isShow = false
      }
    }
  }
</script>
<style scoped lang="scss">
  @import '../../styles/index';
  .previewTitle{
    font-size:14px;
    color:#333;
    margin-bottom:5px;
  }
  .previewBox{
    border:2px dashed $default-font-color;
    width:400px;
    height:400px;
    overflow:hidden;
  }
  .buttonBox{
    text-align:center;
    margin:20px 0;
    .downloadButton{
      padding:0;
      a {
        color:$font-white;
        display:inline-block;
        padding: 5px 15px 6px;
        width:100%;
      }
    }
  }
</style>
