const Koa = require('koa')
const auth = require('koa-basic-auth')
const app = module.exports = new Koa()

app.use(async (ctx, next) => {
    try {
        await next()
    } catch (err) {
        if (err.status === 401) {
            ctx.status = 401;
            ctx.set('WWW-Authenticate', 'Basic');
            ctx.body = '未授权';
        } else {
            throw err;
        }
    }
})

app.use(auth({name: 'test', pass: 'test'}))

// 需要加头  Authorization:Basic dGVzdDp0ZXN0  （即 Basic test:test 的base64编码）
app.use(async ctx => {
    ctx.body = 'secret';
})

app.listen('3000')