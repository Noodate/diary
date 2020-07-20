// 系统config配置项

let config = {
  title: '摄像头监控系统',
  env: 'development', // 开发模式或生产模式development production
  namespace: 'JSESSIONID', // 暂时没有使用
  api: {
    // url: 'http://192.168.101.141:9001',
    // url: 'https://www.litemall.club:443',
    // url: 'https://106.39.30.137:443',
    // url: 'http://localhost:9001',
    // url: 'http://106.39.30.137:8080',
    // url: 'http://192.168.57.21:9001',
    url: '',
    timeout: 1000 * 60 * 10
  }
}

export default config
