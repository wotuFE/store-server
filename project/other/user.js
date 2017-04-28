const Mock = require('mockjs');
const data = Mock.mock({
    name: 'zhangsan'
});
module.exports = (ctx,next)=>{
    ctx.body = ctx.request.body;
}
