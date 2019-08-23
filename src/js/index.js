// import '../css/style.less'

const { join } = require('path')

const fs = require('fs')
// 读取目录下的index.html
const path = join(__dirname + './../../pages')

let files = fs.readdirSync(path) 