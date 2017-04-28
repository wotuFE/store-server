const Mock = require('mockjs');

function register(ctx) {
    const data = Mock.mock({
        msg: 'success',
        code: 666
    });
    ctx.body = data;
}
module.exports = register;
