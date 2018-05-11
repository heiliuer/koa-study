/**
 * 异常处理
 * Created by Heiliuer on 2018/3/21 0021.
 */
const Koa = require('koa')
const app = new Koa()


// 自定义异常处理器
const handler = async (ctx, next) => {
    try {
        await next()
    } catch (e) {
        ctx.response.status = e.statusCode || e.status || 500
        ctx.response.body = {
            message: e.message
        }
        // 捕获异常，推送error事件
        // ctx.app.emit('error', e, ctx)
    }
}

// app.use(handler)

// 异常事件 （上面的handler中间件没有生效 (try catch) 才会触发error事件 或者 主动 catch 中 emit一下）
app.on('error', (err, ctx) => {
    console.error('server err', err)
})

const main = ctx => {
    ctx.throw(500)
}


app.use(main)
app.listen(3000)


