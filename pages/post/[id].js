import Link from 'next/link'
import Head from 'next/head'
import Error from 'next/error'

const Mark = require('react-markdown')

const utils = require('../../utils')

const Post = ({ res }) => {
  if (!res.body) {
    return (
      <div>
        <Error statusCode="404" />
      </div>
    )
  }
  return (
    <div className="zi-main zi-layout">
      <style jsx>{`
        .post-title {
          text-align: center;
          text-transform: capitalize;
          padding-bottom: 1rem;
          padding-top: 2vh;
          border-bottom: 1px solid rgba(0,0,0,.14)
        }
        .post-title h1 {
          margin: 0
        }
        .post-title span {
          color: #757575;
        }
        .post-title p {
          margin: 0;
        }
        p img {
          display: block
        }
      `}</style>
      <Head>
        <title> /Post </title>
        <link rel="icon" href="https://github.com/favicon.ico" />
      </Head>
      <div className="post-title">
        <h1>
          {res.title}
        </h1>
        <span>{utils.dayFormat(res.create_at)}</span>
        <p>
          <Link href={`https://github.com/${res.user.login}`}>
            <a>
              @{res.user.login}
            </a>
          </Link>
        </p>
      </div>
      <div className="post-body">
        <Mark escapeHtml={false} source={res.body} />
        {/* { Marked(res.body) } */}
      </div>
    </div>
  )
}

Post.getInitialProps = async ({ query, error }) => {
  const { id } = query
  const { res } = await utils.fetchAPI(true, id)
  return { res }
}

export default Post
