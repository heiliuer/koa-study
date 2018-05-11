/**
 * Created by Heiliuer on 2018/3/21 0021.
 */
const Koa = require('koa')
const app = new Koa()
const main = ctx => {
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`)
    ctx.response.body = 'hello'
}

app.use(main)
app.listen(3000)


