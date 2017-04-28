const Mock = require('mockjs');
const store = global.store;

function login(ctx) {
    const list = store.list.filter(function(item) {
        if (item.prdNum > 0) {
            return item;
        }
    });
    var data = Mock.mock({
        "code": "666"
        , "resMsg": "success"
        , "list": list
    })
    ctx.body = data;
}
module.exports = login;
