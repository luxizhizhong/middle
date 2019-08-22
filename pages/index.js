import '@zeit-ui/style'
import Link from 'next/link'
import Head from 'next/head'
import fetch from 'node-fetch'
import qs from 'querystring'
import Nav from '../components/nav'
import Foot from '../components/foot'
import conf from '../config'

const { dayFormat }  = require('../utils')

const listMargin = {
  marginBottom: `4px`,
  marginTop: `4px`
}

const fetchAPI = ( page=1, count=10) => {
  let { github, repo } = conf
  let api = `https://api.github.com/repos/${github}/${repo}/issues?`
  let query = qs.encode({
    filter: 'created',
    page,
    per_page: count
  })
  return `${api}${query}`
}

const App = ({ lists }) => (
  <div className="zi-main zi-layout">
    <Head>
      <title> /index </title>
      <link rel="icon" href="https://github.com/favicon.ico" />
    </Head>
    <Nav></Nav>
    <ul style={{ marginTop: '2rem' }}>
      { lists.map(item=> {
        return (
          <li key={ item.id }>
            <h3 style={ listMargin }>
              <Link href={ "/post/"+ item.id }>
                <a>{ item.title }</a>
              </Link>
            </h3>
            <p style={ listMargin } className="zi-subheading">
              { dayFormat() }
            </p>
          </li>
        )
      }) }
      {/* {lists.forEach(list=> {
        
      })} */}
    </ul>
    <div class="zi-more">
      <button class="zi-btn circular small auto">
        加载更多
        <i class="suffix zi-icon-up"></i>
      </button>
    </div>
    <Foot></Foot>
  </div>
)

App.getInitialProps = async({}) => {
  const { res } = await new Promise((rcv, rjt)=> {
    fetch(fetchAPI())
    .then(r=> r.json())
    .then(data=> {
      rcv({ res: data })
    })
    .catch(e=> {
      rjt(e)
    })
  })
  // console.log('to touch: ', fetchAPI())
  return { lists: res }
}

export default App