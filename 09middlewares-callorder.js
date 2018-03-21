/**
 * Created by Heiliuer on 2018/3/21 0021.
 */
const Koa = require('koa')
const app = new Koa()

const one = (ctx, next) => {
    console.log('>> one')
    next()
    console.log('<< one')
}

const two = (ctx, next) => {
    console.log('>> two')
    next()
    console.log('<< two')
}


const three = (ctx, next) => {
    console.log('>> three')
    next()
    console.log('<< three')
}


app.use(one)
app.use(two)
app.use(three)
app.listen(3000)


