
const DEFAULT_FORMAT = 'yyyy-MM-dd hh:mm:ss'

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// format(new Date(), "yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// format(new Date(), "yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
// 调用： var time2 = util.date.format(new Date(), "yyyy-MM-dd hh:mm:ss");
const date = {}
date.format = function (date, fmt = DEFAULT_FORMAT) {
  if (date === undefined || date === null) {
    return ''
  }
  if (typeof date === 'string') {
    return date
  }
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    for (let k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}
// 把utc格式转成gmt
date.gmt = function (date) {
  if (date === undefined || date === null || date === '') {
    return ''
  } else {
    var dt = new Date(date)
    var resultDate = [
      [dt.getFullYear(), dt.getMonth() + 1, dt.getDate()].join('-')
      // [dt.getHours(), dt.getMinutes(), dt.getSeconds()].join(':')
    ].join(' ').replace(/(?=\b\d\b)/g, '0') // 正则补零
    return resultDate
  }
}
export default date
