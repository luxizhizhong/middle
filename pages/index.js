import '@zeit-ui/style'
import Head from 'next/head'
import Nav from '../components/nav'

const App = () => (
  <div className="zi-main zi-layout">
    <Head>
      <title> /index </title>
      <link rel="icon" href="https://github.com/favicon.ico" />
    </Head>
    <Nav></Nav>
  </div>
)
export default App