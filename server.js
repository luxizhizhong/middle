const Koa = require('koa');
const Router = require('koa-router');
const Next = require('next')

const dev = process.env.NODE_ENV !== 'production'

const App = Next({ dev })

const handle = App.getRequestHandler()
const PROT = parseInt(process.env.NODE_PROT) || 3000

App.prepare()
  .then(() => {
    const Server = new Koa()
    const router = new Router()

    // router.get('/post/:id', async ctx => {
    //   const { id } = ctx.params
    //   await handle(ctx.req, ctx.res, {
    //     pathname: '/post',
    //     query: { id }
    //   })
    //   ctx.respond = false
    // })
    // Server.use(router.routes())
    Server.use(async (ctx, next) => {
      await handle(ctx.req, ctx.res)
      ctx.respond = false
    })

    Server.listen(PROT, () => {
      const cowsay = require('cowsay-browser')
      const text = 'Koa server listen in 3000'
      console.log(cowsay.say({ text }))
    })
  })