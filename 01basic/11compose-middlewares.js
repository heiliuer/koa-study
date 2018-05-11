/**
 * Created by Heiliuer on 2018/3/21 0021.
 */
const Koa = require('koa')
const app = new Koa()
const compose = require('koa-compose')

const logger = async (ctx, next) => {
    console.log(`${+new Date()}`)
    next()
}

const main = ctx => {
    ctx.response.body = 'hello'
}
let middlewares = compose([logger, main])

app.use(middlewares)
app.listen(3000)


