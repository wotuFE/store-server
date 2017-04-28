// 设置全局对象
require('./data/data.js');
const router = require('koa-simple-router');
const fs = require('fs');
const path = require('path');
function controller(app) {
    // 获取文件
    fs.readdir(__dirname, function(err, files) {
        files.forEach(function(file) {
            // 如果文件名有model,则不生成接口
            const ignore = file.match('data') || !file.match('.js');
            if (ignore)
                return false;
            if (!file.match('controller')) {
                // console.log(__dirname);    // proect\store
                //console.log(path.basename(file,'.js')); // 文件名
                // 当前目录名
//                let currFileName = __dirname.substr(__dirname.lastIndexOf('/') + 1);
//                // 文件名,不包含.js
//                let filename = path.basename(file,'.js');
//                console.log(file);
//                // 接口地址
//                let insname = `/${currFileName}/${filename}`;
                // console.log('接口名: ', 'http://127.0.0.1:9999' + insname);
                // 请求模块
                const module = require('./'+file);
                // 获取文件名
                const filename = path.basename(file,'.js');
                app.use(router(_ => {
                    _.all('/store/'+filename, module);
                }));
            }
        });
    });
}
module.exports = controller;
