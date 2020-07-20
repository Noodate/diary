Page({
  data: {
    userId: '',
    nowTime: '',
    videoSrc: '',
    imageType: '图片',
    videoType: '视频',
    previewImageIndex: -1,
    previewImageIndey: '',
    mediaLists: [],
  },
  onPullDownRefresh() {
    this.onLoad();
    dd.stopPullDownRefresh();
  },
  onLoad(cloud) {
    this.getNowTime();
    if (cloud != undefined) {
      this.setData({
        userId: cloud.userId
      })
    }
    dd.httpRequest({
      url: getApp().data.ip + '/appFile/getFileInfo',
      method: 'GET',
      headers: { 'content-type': 'application/json;charset=utf-8' },
      success: (res) => {
        console.log(res);
        let y = -1;
        res.data.data.mediaLists.forEach((res1) => {
          if (res1.batchFile.length == 0) {
            res1.createTime=''
          }
          y++;
          let x = -1;
          console.log(res1.createTime + '   ' + this.data.nowTime);
          if (res1.createTime == this.data.nowTime) {
            res1.createTime = '今天'
          }
          if (parseInt(res1.createTime) == parseInt(this.data.nowTime) - 1) {
            res1.createTime = '昨天'
          }
          res1.batchFile.forEach((res2) => {
            if (res2.fileType == this.data.imageType) {
              x++;
              //筛选图片数量，确定新图片的index位置，便于后续预览
              res2.imageIndex = x;
              res2.imageIndey = y;
            }
          })
        })
        console.log(res);
        this.setData({
          mediaLists: res.data.data.mediaLists
        })
      }
    })
  },
  actionSheetTap() {
    var that = this;
    const items = ['上传图片', '上传视频'];
    dd.showActionSheet({
      title: '选择',
      cancelButtonText: '取消',
      items,
      success({ index }) {
        //图片
        if (index == 0) {
          that.uploadOtherImageList();
        }
        //视频
        if (index == 1) {
          that.uploadVideo();
        }
      },
    });
  },
  uploadOtherImageList() {
    dd.chooseImage({
      sourceType: ['camera', 'album'],
      count: 10,
      success: res => {
        var that = this;
        for (let i = 0; i < res.filePaths.length; i++) {
          that.uploadImageList('image' + i + '.png', res.filePaths[i]);
        }
      },
    });
  },
  uploadVideo() {
    dd.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 600,
      success: res => {
        var that = this;
        console.log('视频路径' + res.filePath);
        console.log('视频时间' + res.duration);
        console.log('视频大小' + res.size);
        that.uploadVideoList('video.mp4', that.data.number, res.filePath);
      }
    });
  },
  uploadVideoList(videoName, idNumber, filePath) {
    dd.showLoading({
      content: '上传视频中...',
    });
    dd.uploadFile({
      url: getApp().data.ip + '/appFile/cloudUploadVideo',
      fileType: 'video',
      fileName: 'file',
      filePath: filePath,
      formData: {
        idNumber: idNumber,
        fileName: videoName
      },
      success: res => {
        dd.hideLoading();
        let obj = JSON.parse(res.data);
        console.log(obj);
        // let xx = this.data.mediaList;
        // let x = new Object();
        // x.type = obj.data.type;
        // x.src = obj.data.src;
        // xx.push(x);
        // // xx=JSON.stringify(xx);
        // console.log(xx);
        // this.setData({
        //   mediaList: xx,
        // });
        this.onLoad();
      },
      fail: function(res) {
        dd.hideLoading();
        console.log('视频上传失败', res);
      }
    });
  },
  uploadImageList(imageName, filePath) {
    dd.showLoading({
      content: '上传图片中...',
    });
    console.log(this.data.userId);
    dd.uploadFile({
      url: getApp().data.ip + '/appFile/cloudUploadImage',
      fileType: 'image',
      fileName: 'file',
      filePath: filePath,
      formData: {
        userId: this.data.userId,
        fileName: imageName,
        imageIndex: ''
      },
      success: res => {
        dd.hideLoading();
        let obj = JSON.parse(res.data);
        console.log(obj);
        this.onLoad();
      },
      fail: function(res) {
        dd.hideLoading();
      }
    });
  },
  previewImage(e) {
    console.log(e);
    let xx = new Array();
    this.data.mediaLists[e.currentTarget.dataset.indey].batchFile.forEach((res) => {
      if (res.fileType == this.data.imageType) {
        xx.push(res.fileUrl);
      }
    })
    dd.previewImage({
      current: e.currentTarget.dataset.index,
      urls: xx
    });
  },
  playVideo(e) {
    this.setData({
      videoSrc: e.target.dataset.index
    })
  },
  hideVideo() {
    this.setData({
      videoSrc: ''
    })
  },
  downloadOrDelete(e) {
    var that = this;
    const items = ['下载', '删除'];
    dd.showActionSheet({
      title: '选择',
      cancelButtonText: '取消',
      items,
      success({ index }) {
        //正面
        if (index == 0) {
          that.saveToDingTalk(e.currentTarget.dataset.src, e.currentTarget.dataset.name);
        }
        //反面
        if (index == 1) {
          that.delete(e.currentTarget.dataset.id);
        }
      },
    });
  },
  saveToDingTalk(url, name) {
    console.log('url: ' + url + '   name: ' + name);
    dd.saveFileToDingTalk({
      url: url,  // 文件在第三方服务器地址
      name: name,
      success: (res) => {
        dd.alert({
          content: "存入钉盘成功"
        });
      },
      fail: (err) => {
        // dd.alert({
        //   content: "下载失败"
        // });
      }
    })
  },
  delete(id) {
    dd.httpRequest({
      url: getApp().data.ip + '/appFile/deleteFile?fileId=' + id,
      method: 'GET',
      headers: { 'content-type': 'application/json;charset=utf-8' },
      success: (res) => {
        dd.alert({
          content: '删除成功',
        });
        this.onLoad();
      }
    })
  },
  getNowTime() {
    dd.httpRequest({
      url: getApp().data.ip + '/appFile/localTime',
      method: 'GET',
      headers: { 'content-type': 'application/json;charset=utf-8' },
      success: (res) => {
        this.setData({
          nowTime: res.data.data
        })
      }
    })
  },
});
