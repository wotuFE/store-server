const Mock = require('mockjs');
function test(ctx, next) {
    // 获取请求参数
    let name = ctx.query.name;
    const data = Mock.mock({
        name,
        code: 666,
        msg: 'success'
    });
    ctx.body = data;
}
module.exports = test;
