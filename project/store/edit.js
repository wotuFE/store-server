var Mock = require('mockjs');
function login(ctx) {
    const editPrds = ctx.request.body;
    const list = global.store.list;
    list.forEach((item,i) => {
        editPrds.forEach((sub) => {
            if (sub.id == item.id) {
                list[i].prdNum = sub.prdNum;
            }
        })
    })

    var data = Mock.mock({
        "code": "666"
        , "resMsg": "success"
        , "sessionId": "asdfasdfasdfas-46546464"
    })
    ctx.body = data;
}
module.exports = login;
