/**
 * Created by Heiliuer on 2018/3/21 0021.
 */
const Koa = require('koa')
const app = new Koa()
const main = ctx => {
    if (ctx.request.accepts('xml')) {
        ctx.response.type = 'xml'
        ctx.response.body = '<data>hello</data>'
    } else if (ctx.request.accepts('json')) {
        ctx.response.type = 'xml'
        ctx.response.body = {name: 'wh'}
    } else if (ctx.request.accepts('html')) {
        ctx.response.type = 'html'
        ctx.response.body = '<html><body><h2>hello</h2></body></html>'
    } else {
        ctx.response.type = 'text'
        ctx.response.body = 'name'
    }
}
app.use(main)
app.listen(3000)


