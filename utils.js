/*
* create by @d1y
* date: 2019-08-23
*/

import day from 'dayjs'
import 'dayjs/locale/zh-cn'

day.locale('zh-cn')

const dayFormat = time=> {
  const days = [`星期天`, `星期二`, `星期三`, `星期四`, `星期五`, `星期六`]
  const func = day(time)
  const mat = func.format(`YYYY年MM月DD日`)
  const now = days[func.day()]
  return `${mat} ${now}`
}

module.exports = {
  dayFormat
}