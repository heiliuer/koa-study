/**
 * Created by Heiliuer on 2018/3/21 0021.
 */
const fs = require('fs');
const Koa = require('koa')
const app = new Koa()
const main = ctx => {
    ctx.response.type = 'xml'
    ctx.response.body = fs.createReadStream('./html/03tmpl.html')
}
app.use(main)
app.listen(3000)


