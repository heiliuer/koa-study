/**
 * Created by Heiliuer on 2018/3/21 0021.
 */
const fs = require('fs.promised')
const Koa = require('koa')
const app = new Koa()

const main = async (ctx, next) => {
    ctx.response.type = 'html'
    ctx.response.body = await  fs.readFile('./html/03tmpl.html', 'utf-8')
}

app.use(main)
app.listen(3000)


