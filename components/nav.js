import Link from 'next/link'

const github = `luxizhizhong`
const Nav = () => (
  <div>
    <h2>
      <Link href="/">
        <a>代码日志</a>
      </Link>
      <a className="links" href="/join">
        <code>
          /Join
        </code>        
      </a>
      <a className="links" href="/about">
        <code>/About</code>
      </a>
      <a className="links" href={`https://github.com/${github}`}>
        <code>
          /Github
        </code>        
      </a>
    </h2>
    <style jsx>{`
      .links {
        color: red;
        margin-left: 2rem;
      }
    `}</style>
  </div>
)

export default Nav