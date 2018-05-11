const Koa = require('koa')
const CSRF = require('koa-csrf')
const session = require('koa-session')
const koaBody = require('koa-body')
const router = require('koa-router')()
const app = new Koa()

app.keys = ['session key', 'csrf example']
app.use(session(app))
app.use(koaBody())
// csrf need session
app.use(new CSRF({
    invalidSessionSecretMessage: 'Invalid session secret',
    invalidSessionSecretStatusCode: 403,
    invalidTokenMessage: 'Invalid CSRF token',
    invalidTokenStatusCode: 403,
    excludedMethods: ['GET', 'HEAD', 'OPTIONS'],
    disableQuery: false
}))


router.get('/', ctx => {
    ctx.response.type = 'html'
    ctx.response.body = `<html><body><h2>${ctx.csrf}</h2></body></html>`
})

// 请求时需要加入 _csrf 参数 _csrf（的值存放在session中，可重用，和session一同过期）
router.post('/', ctx => {
    ctx.body = {ok: true}
})

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000)