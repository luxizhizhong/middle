/*
 ** create by @d1y
 ** date 20190816
 */

/*
** @tips { Ajax获取数据 }
** @param {number} - page {页数}
** @param - call {回调函数}
*/
function fetchAjax( page=1, call ) {
  $.ajax({
    url: 'https://api.github.com/repos/d1y/moepiku/issues',
    data: {
      filter: 'created',
      page,
      per_page: 5
    },
    success( data, textStatus, XHR ) {
      let link = jqXHR.getResponseHeader("Link") || "";
      let next = false,prev = false
      if (link.indexOf('rel="next"') > 0) {
        next = true;
      }
      if (link.indexOf('rel="prev"') > 0) {
        prev = true;
      }
    }
  })
}

/*
** 静态路由相关
*/

let author = function () {
  console.log("author");
};
let books = function () {
  console.log("books");
};
let viewBook = function (bookId) {
  console.log("viewBook: bookId is populated: " + bookId);
};
let routes = {
  '/author': author,
  '/books': [books, function () {
    console.log("An inline route handler.");
  }],
  '/books/view/:bookId': viewBook
};

const router = Router(routes);
router.init()