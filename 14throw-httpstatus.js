/**
 * 状态码
 * Created by Heiliuer on 2018/3/21 0021.
 */
const Koa = require('koa')
const app = new Koa()
const route = require('koa-route')

const _404_1 = ctx => {
    ctx.throw(404, 'haha')// 或者 404能带body
}

const _500 = ctx => {
    ctx.throw(500, 'haha')// 500不能带消息
}

const _404_2 = ctx => {
    ctx.response.status = 404
    ctx.response.body = 'page not found' // 响应 body
    ctx.response.message = '_404' // 响应头 message
}

app.use(route.get('/5', _500))
app.use(route.get('/41', _404_1))
app.use(route.get('/42', _404_2))
app.listen(3000)


