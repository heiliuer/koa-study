var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

const index = ctx => {
    ctx.response.type = 'html'
    ctx.response.body = '<html><body><h2>hello</h2></body></html>'
}

router.get('/', index)

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000)