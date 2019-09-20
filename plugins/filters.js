// plugins  nuxt中的插件
// 所有的插件，都会在 创建vue实例之前执行

import Vue from 'vue'
import dayjs from 'dayjs'
// 导入dayjs中包含的计算相对时间的插件
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

// 过滤器
Vue.filter('fmtDate', (value) => {
  return dayjs().to(dayjs(value))
})
