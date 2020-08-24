
var dateTimePicker = require('../demo/dateTimePicker');

Page({
  data: {
    dateTimeArray: null,
    dateTime: null,
    dateTimeArray1: null,
    dateTime1: null,
    startYear: 2000,
    endYear: 2050,
    nowDate: '',
  },
  onReady(e) {   
      this.cc();
  },
  cc() {
    dd.saveFileToDingTalk({
      url: "https://106.39.30.137:9999/group1/M00/00/2B/wKg5FV2fCrKAVDGlAABSAPIAxEo933.xls",  // 文件在第三方服务器地址
      name: "2.xls",
      success: (res) => {
        console.log(res);
      },
      fail: (err) => {
        console.log(err);
      }
    })
  }
})


