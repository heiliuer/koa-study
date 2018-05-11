/**
 * 静态服务器
 * Created by Heiliuer on 2018/3/21 0021.
 */
const Koa = require('koa')
const app = new Koa()
const path = require('path');
const server = require('koa-static')

const main = server(path.join(__dirname, 'html'))

app.use(main)
app.listen(3000)


