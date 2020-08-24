App({
  data: {
    // ip: 'http://106.39.30.137:8080',
     ip:'http://115.236.191.170:8181',
    appkey: 'dingymo97oggemebnptd',
    appsecret: '9ahn-Uky9_iIIa_I_M0A8OWf3rNzs8zLcmWqLKk8b0T7WfSCnP86un0zVd_2PY3P',
    domainName: 'www.litemall.club',
    modelFour:'https://www.litemall.club:9999/group1/M00/00/00/CggjEV3n_n-AR1RaAAA6tLYTGO806_big.xlsx',
    modelFive:'https://www.litemall.club:9999/group1/M00/00/00/CggjEV3n_p2AQkauAAEAAIm3ooo549_big.doc'
  },
  onLaunch(options) {
    // 第一次打开 
    // options.query == {number:1}
    console.info('App onLaunch');
   
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
});
