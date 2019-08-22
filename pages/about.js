import '@zeit-ui/style'
import React from 'react'
import cowsay from 'cowsay-browser'
import Link from 'next/link'
import Head from 'next/head'

const avatar = `https://avatars2.githubusercontent.com/u/45585937?s=460&v=4`

export default class extends React.Component {
  static async getInitialProps() {
    return {}
  }

  render() {
    return (
      <div className="zi-main zi-layout">
        <Head>
          <title> /about </title>
          <link rel="icon" href="https://github.com/favicon.ico" />
        </Head>
        <h2 className="fw7 text-center" style={{
          textAlign: 'center',
          letterSpacing: '-1px',
          lineHeight: '1.3'
        }}>ABOUT</h2>
        <div className="zi-card zi-dark" style={{ marginBottom: '1rem' }}>
          <h4>@zeit/ui designed</h4>
        </div>
        <pre>{ cowsay.say({
          text: 'Middle Demo awesome!!'
        }) }</pre>
        <h4>
          create by <a href="https://github.com/d1y">@d1y</a>
        </h4>
        <img className="square zi-avatar huge" src={ avatar } />
        <div style={{ marginTop: '1rem' }}>
          <a href="/">/index</a>
        </div>
      </div>
    )
  }
}