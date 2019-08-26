/*
* create by @d1y
* date: 2019-08-23
*/

import day from 'dayjs'
import fetch from 'node-fetch'
import conf from './config'
import qs from 'querystring'

const dayFormat = time=> {
  /*
  ** @tips { 格式化日期 }
  ** @params {string} - time
  */
  const days = [`星期天`, `星期二`, `星期三`, `星期四`, `星期五`, `星期六`]
  const func = day(time)
  const mat = func.format(`YYYY年MM月DD日`)
  const now = days[func.day()]
  return `${mat} ${now}`
}

const fetchAPI = async ( flag= false, page=1, count=10 ) => {
  /*
  ** @tips { 获取数据 }
  ** @params {int} - page
  ** @params {int} - count
  ** @return {Promise}
  */
  const withAPI = (id, po) => `https://api.github.com/repos/${id}/${po}/issues`
  let { Github, Repo } = conf, request
  let api = withAPI( Github, Repo )
  if (!flag) {
    api += '?'
    let query = qs.encode({
      filter: 'created',
      page,
      per_page: count
    })
    request = `${api}${query}`
  } else {
    api += '/'+page
    request = api
  }
  let status = false
  const { res } = await new Promise((rcv, rjt) => {
    fetch(request)
      .then(r => r.json())
      .then(data => {
        if (!flag) {
          if (data.length == count) status = true
        }
        rcv({ res: data, status })
      })
      .catch(e => {
        rjt(e)
      })
  })
  return { res, status }
}

module.exports = {
  dayFormat,
  fetchAPI,
  conf
}