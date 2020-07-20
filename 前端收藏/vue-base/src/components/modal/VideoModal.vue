<template>
  <Modal
    v-model="isShow"
    :width="deviceDisbaled ? '400' : '700'"
    :closable="false">
    <div class="box">
      <row type="flex" v-show="deviceDisbaled">
        <i-col :span="24">
          <Alert type="warning" show-icon>
            未检测到摄像设备！
            <template slot="desc">
              IE浏览器不支持该功能,或请检查设备是否正确连接！
            </template>
          </Alert>
        </i-col>
      </row>
      <row type="flex" v-show="!deviceDisbaled">
        <i-col :span="24" >
          <div style="width:480px;height:500px;margin:0 auto;">
            <div v-if="!ifPreviewVideo">
              <video
                id="videoScreen"
                width="480"
                height="500"
                ref="videoScreen"
                v-show="!ifPreviewVideo"></video>
            </div>
            <video controls
                   ref="video"
                   id="previewVideo"
                   width="480"
                   height="500"
                   v-show="ifPreviewVideo"></video>
          </div>
        </i-col>
        <i-col :span="24">
          <div class="buttonBox alignMiddle">
            <Button @click="startRecording"
                    :disabled="videoStart"
                    type="primary"
                    size="small">开始录制</Button>
            <Button @click="stopRecording"
                    :disabled="!videoStart"
                    type="primary"
                    style="margin:0 10px;"
                    size="small">结束录制</Button>
            <div class="mytime alignMiddle">
              <span class="filming">
                <span class="icon" v-if="videoStart"></span>
                <span class="stopIcon" v-if="!videoStart && mytime !== ''"></span>
              </span>
              <span class="time">{{mytime}}</span>
              <Alert type="warning"
                     show-icon
                     style="margin:0 0 0 10px;"
                     v-if="videoTimeout && !videoStart && mytime !== ''">
                录制时间已达到5分钟上限！
              </Alert>
            </div>
          </div>
          <div class="buttonBox" v-if="videoSrc !== ''">
            <Button type="success"
                    @click="uploadVideo"
                    style="width:30%;margin-right:10px;"
                    :loading="loading">上传视频</Button>
            <Button type="primary"
                    class="downloadButton"
                    style="width:30%">
              <a :href="videoSrc" download="未知名称视频.webm">
                保存在本地
                </a>
            </Button>
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
  import RecordRTC from 'recordrtc'
  export default {
    name: 'VideoModal',
    data () {
      return {
        videoSrc: '',
        deviceDisbaled: false,
        isShow: false,
        video: null,
        videoStart: false,
        recorder: null,
        copyVideo: null,
        ifPreviewVideo: false,
        // 计时器
        // h: 0, // 定义时，分，秒，毫秒并初始化为0；
        m: 0,
        ms: 0,
        s: 0,
        time: 0,
        mytime: '',
        videoTimeout: false
      }
    },
    props: {
      loading: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      isShow (val) {
        this.videoStart = false
        this.ifPreviewVideo = false
        this.copyVideo = null
        this.recorder = null
        this.video.src = ''
        this.videoSrc = ''
        this.videoTimeout = false
        clearInterval(this.time)
        // this.h = 0
        this.m = 0
        this.ms = 0
        this.s = 0
        this.mytime = ''
        let constraints = {audio: true, video: {width: 480, height: 500}}
        let that = this
        if (!!window.ActiveXObject || 'ActiveXObject' in window) {
          that.deviceDisbaled = true
        } else {
          navigator.mediaDevices.getUserMedia(constraints).then(function (mediaStream) {
            that.deviceDisbaled = false
            let video =  that.$refs.videoScreen
            video.srcObject = mediaStream
            console.log('进没进1')
            video.onloadedmetadata = function (e) {
              console.log('进没进2')
              if (val) {
                console.log('开了啊')
                video.play()
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
      },
      mytime (val) {
        if (val === '05:00') {
          this.videoTimeout = true
          this.stopRecording()
        } else {
          this.videoTimeout = false
        }
      }
    },
    methods: {
      show () {
        this.isShow = true
        // 开启时清空上次录制的视频
        this.videoSrc = ''
        this.video.src = ''
        this.copyVideo = null
      },
      hide () {
        this.isShow = false
      },
      timer () {   // 定义计时函数
        this.ms = this.ms + 50         // 毫秒
        if (this.ms >= 1000) {
          this.ms = 0
          this.s = this.s + 1        // 秒
        }
        if (this.s >= 60) {
          this.s = 0
          this.m = this.m + 1       // 分钟
        }
        if (this.m >= 60) {
          this.m = 0
          // this.h = this.h + 1       // 小时
        }
        // this.mytime = this.toDub(this.h) + ':' + this.toDub(this.m) + ':' +
        //   this.toDub(this.s) + ''
        this.mytime =  this.toDub(this.m) + ':' + this.toDub(this.s) + ''
      },
      toDub (n) {  // 补0操作
        if (n < 10) {
          return '0' + n
        } else {
          return '' + n
        }
      },
      captureCamera (callback) {
        // {width: 510, height: 400  现在改成16比9的比例有问题
        navigator.mediaDevices.getUserMedia({audio: true, video: {width: 480, height: 500}})
          .then(function (camera) {
            callback(camera)
          }).catch(() => {
            this.deviceDisbaled = true
            // this.$message.error('未找到视频设备')
          })
      },
      stopRecordingCallback () {
        this.video.src = this.video.srcObject = null
        this.copyVideo = this.recorder.getBlob()
        this.video.src = URL.createObjectURL(this.recorder.getBlob())
        // let video = this.$refs.video
        // console.log('开始加载了')
        // let that = this
        // video.ondurationchange = function (e) {
        //   that.videoSrc = URL.createObjectURL(that.recorder.getBlob())
        //   console.log('变时长了')
        // }
        this.videoSrc = URL.createObjectURL(this.recorder.getBlob())
        this.recorder.camera.stop()
        this.recorder.destroy()
        this.recorder = null
      },
      startRecording () {
        // 录视频开启
        let constraints = {audio: true, video: {width: 480, height: 500}}
        let that = this
        navigator.mediaDevices.getUserMedia(constraints).then(function (mediaStream) {
          let video = that.$refs.videoScreen
          video.srcObject = mediaStream
          video.onloadedmetadata = function (e) {
            video.play()
          }
        }).catch(function (err) {
          console.log(err.name + ': ' + err.message)
        })
        // 开始计时器
        this.time = setInterval(this.timer, 50)
        // this.h = 0
        this.m = 0
        this.ms = 0
        this.s = 0
        // this.mytime = '00:00:00'
        this.mytime = '00:00'
        // 预览视频关闭
        this.ifPreviewVideo = false
        // 禁用开始按钮
        this.videoStart = true
        this.captureCamera((camera) => {
          this.video.muted = true
          this.video.volume = 0
          this.video.srcObject = camera
          this.recorder = RecordRTC(camera, {
            type: 'video'
          })
          // 开始录
          this.recorder.startRecording()
          this.recorder.camera = camera
        })
      },
      stopRecording () {
        // 录视频关闭
        let constraints = {audio: true, video: {width: 480, height: 500}}
        let that = this
        navigator.mediaDevices.getUserMedia(constraints).then(function (mediaStream) {
          let video = that.$refs.videoScreen
          video.srcObject = mediaStream
          video.onloadedmetadata = function (e) {
            mediaStream.stop()
          }
        }).catch(function (err) {
          console.log(err.name + ': ' + err.message)
        })
        // 停止计时
        clearInterval(this.time)
        // 停止录
        this.recorder.stopRecording(this.stopRecordingCallback)
        // 预览视频开启
        this.ifPreviewVideo = true
        // 禁用结束录制按钮
        this.videoStart = false
      },
      uploadVideo () {
        this.hide()
        this.$emit('on-uploadFromVideo')
      }
    },
    mounted () {
      // 右侧视频
      this.video = document.getElementById('previewVideo')
    }
  }
</script>
<style scoped lang="scss">
  @import '../../styles/index';
  .buttonBox{
    /*width:510px;*/
    width:480px;
    margin: 10px auto;
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
  .mytime{
    margin-left:10px;
    display:flex;
    .time{
      font-size:18px;
      font-weight:bold;
      color:#333;
      padding-left:10px;
    }
  }
  .filming{
    .icon{
      border: 6px solid $error;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      display:inline-block;
      animation: scaleout 1s infinite ease-in-out;
      margin-top:3px;
    }
    .stopIcon{
      border: 6px solid $error;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      margin-top:6px;
      display:inline-block;
    }
    @keyframes scaleout {
      0% {
        transform: scale(1.0);
      } 100% {
          transform: scale(1.1);
          opacity: 0;
        }
    }
  }
</style>
