import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'
import Foot from '../components/foot'

const utils = require('../utils')

const { dayFormat, fetchAPI } = utils

const listMargin = {
  marginBottom: `4px`,
  marginTop: `4px`
}

const App = ({ lists, flag }) => (
  <div className="zi-main zi-layout">
    <style jsx>{`
      .more {
        border: none;
        padding-bottom: 1px;
        cursor: pointer;
      }
      .more:hover {
        background-color: #eee;
        text-decoration: none;
      }
    `}</style>
    <Head>
      <title> /index </title>
      <link rel="icon" href="https://github.com/favicon.ico" />
    </Head>
    <Nav></Nav>
    <ul style={{ marginTop: '2rem' }}>
      {lists.map(item => {
        return (
          <li key={item.number}>
            <h3 style={listMargin}>
              <Link href={"/post/" + item.number}>
                <a>{item.title}</a>
              </Link>
            </h3>
            <p style={listMargin} className="zi-subheading">
              {dayFormat()}
            </p>
          </li>
        )
      })}
    </ul>
    {flag ? (
      <button className="more" onClick={() => ajaxMore(lists, flag)}>
        <code>加载更多</code>
      </button>
    ) : (
        <p>
          <code>没有更多了</code>
        </p>
      )}
    <Foot></Foot>
  </div>
)

App.getInitialProps = async () => {
  const { res, flag } = await fetchAPI()
  return { lists: res, flag }
}

async function ajaxMore(...wrap) {
  wrap[1] = false
  console.log(wrap)
  // const { res } = await fetchAPI({page: ++page, count})
  // lists = lists.concat(res)
}

export default App