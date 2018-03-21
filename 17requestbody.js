/**
 * 请求体
 * Created by Heiliuer on 2018/3/21 0021.
 */
const Koa = require('koa')
const app = new Koa()
const koaBody = require('koa-body')


const main = ctx => {
    const body = ctx.request.body
    console.log(body)
    if (!body.name) {
        ctx.throw(400, '.name required')
    }
    ctx.response.body = {
        name: body.name
    }
}


app.use(koaBody())
app.use(main)
app.listen(3000)