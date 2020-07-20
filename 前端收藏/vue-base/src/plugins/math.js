import * as math from 'mathjs'

/**
 * 数字处理
 * 基于mathjs
 *
 * link:
 * https://github.com/josdejong/mathjs
 *
 * api:
 * http://mathjs.org/docs/datatypes/numbers.html
 * http://mathjs.org/docs/reference/functions.html
 */

export default {
  install: function (Vue, options) {
    Vue.$math = math
    Vue.prototype.$math = math
  }
}
