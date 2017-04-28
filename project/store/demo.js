const Mock = require('mockjs');
function makeIns(ctx) {
    const { Random } = Mock;
    var data = Mock.mock({
        "code": "666",
        "resMsg": "success",
    })
    ctx.body = data;
}
module.exports = makeIns;
