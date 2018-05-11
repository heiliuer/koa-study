/**
 * 请求体
 * Created by Heiliuer on 2018/3/21 0021.
 */
const Koa = require('koa')
const app = new Koa()
const koaBody = require('koa-body')
const os = require('os');
const path = require('path');
const fs = require('fs')


const main = ctx => {
    const tmpdir = os.tmpdir();
    const filePaths = [];
    const files = ctx.request.body.files || {};
    console.log('files', files)
    for (let key in files) {
        const file = files[key];
        const filePath = path.join(tmpdir, file.name);
        const reader = fs.createReadStream(file.path);
        const writer = fs.createWriteStream(filePath);
        reader.pipe(writer);
        filePaths.push(filePath)
    }
    ctx.body = filePaths;
}


app.use(koaBody({multipart: true}))
app.use(main)
app.listen(3000)