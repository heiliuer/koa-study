/**
 * 重定向
 * Created by Heiliuer on 2018/3/21 0021.
 */
const Koa = require('koa')
const app = new Koa()
const route = require('koa-route')

const redirect = ctx => {
    ctx.response.redirect('/')
}
const main = ctx => {
    ctx.response.body = 'hello'
}

app.use(route.get('/', main))
app.use(route.get('/r', redirect))
app.listen(3000)


