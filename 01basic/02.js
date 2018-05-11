/**
 * Created by Heiliuer on 2018/3/21 0021.
 */
const Koa = require('koa')
const app = new Koa()
const main = ctx => {
    ctx.response.body = 'hello world'
}
app.use(main)
app.listen(3000)