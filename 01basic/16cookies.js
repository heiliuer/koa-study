/**
 * cookies
 * Created by Heiliuer on 2018/3/21 0021.
 */
const Koa = require('koa')
const app = new Koa()


const main = ctx => {
    const n = parseInt(ctx.cookies.get('view') || '0') + 1
    ctx.cookies.set('view', n)
    ctx.response.body = `${n} views`
}


app.use(main)
app.listen(3000)