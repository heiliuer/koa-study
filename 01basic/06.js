/**
 * Created by Heiliuer on 2018/3/21 0021.
 */
const Koa = require('koa')
const route = require('koa-route')
const app = new Koa()
const about = ctx => {
    ctx.response.type = 'html'
    ctx.response.body = '<a href="/">about</a>'
}
const main = ctx => {
    ctx.response.body = 'hello'
}

app.use(route.get('/', main))
app.use(route.get('/about', about))

app.listen(3000)


