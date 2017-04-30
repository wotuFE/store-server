var Mock = require('mockjs');
function login(ctx) {
    var data = Mock.mock({
        "code": "666"
        , "resMsg": "success"
        , "sessionId": "asdfasdfasdfas-46546464"
    })
    ctx.body = data;
}
module.exports = login;
