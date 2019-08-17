/*
 ** create by @d1y
 ** date 20190816
 */
let listWrap = $('#list'), middle = `${window.config.github}/${window.config.repo}`
/*
 ** @tips { Ajax获取数据 }
 ** @param {number} - page {页数}
 ** @param - call {回调函数}
 */
function fetchAjax({
  page = 1,
  total = 5,
  call
}) {
  $.ajax({
    url: `https://api.github.com/repos/${middle}/issues`,
    data: {
      filter: 'created',
      page,
      per_page: total
    },
    success(data, textStatus, XHR) {
      let link = XHR.getResponseHeader("Link") || "";
      let next = false,prev = false
      if (link.indexOf('rel="next"') > 0) {
        next = true;
      }
      // if (link.indexOf('rel="prev"') > 0) {
      //   prev = true;
      // }
      call(data, next)
    }
  })
}

function nextPage( ele) {
  let page = $(ele).attr('data-page') || 2
  fetchAjax({
    page,
    call(data, flag) {
      let result = { list: data, flag, page: ++page }
      let html = tmpl('tmpl-list', result)
      $('#renderList').append(html)
      $(ele).parent('li').remove()
    }
  })
}

/*
 ** 静态路由相关
 */

if (!getHash()) window.location = '#/'

function renderView(id) {
  $.ajax({
    url: `https://api.github.com/repos/${middle}/issues/${id}`,
    success(data) {
      let html = marked(data.body)
      let mp = tmpl('tmpl-body', {
        html,
        title: data.title
      })
      listWrap.html(mp)
    }
  })
}

function renderIndex() {
  fetchAjax({
    page: 1,
    call(data, flag) {
      let result = {}
      result.list = data
      result.flag = flag
      result.page = 2
      listWrap.html(
        `<ul class="list-group" id="renderList">
          ${tmpl('tmpl-list', result)}
        </ul>`
      )
    }
  })
}

function renderAbout() {
  let html = tmpl('tmpl-about',{
    html: marked(window.config.about)
  })
  listWrap.html(html)
}
let routes = {
  '/view/:id': renderView,
  '/': renderIndex,
  '/about': renderAbout
};

const router = Router(routes);
router.init()

function getHash() {
  return window.location.hash
}