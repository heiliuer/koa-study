/**
 * Created by Heiliuer on 2018/3/21 0021.
 */
const fs = require('fs');
const Koa = require('koa')
const app = new Koa()
const main = ctx => {
    if (ctx.request.path !== '/') {
        ctx.response.type = 'html'
        ctx.response.body = '<a href="/">Index page</a>'
    } else {
        ctx.response.body = 'hello'
    }
}
app.use(main)
app.listen(3000)


