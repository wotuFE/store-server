const Mock = require('mockjs');
const store = global.store;
function login(ctx) {
    const idArr = ctx.request.body.idArr;
    if (!idArr.length) {
        ctx.body = {
            "code": "000"
            , "resMsg": "商品id数组不能为空"
        }
    } else {
        let count = 0;
        store.list.forEach((item,i) => {
            if (idArr.indexOf(item.id) >= 0) {
                store.list[i].prdNum = 0;
            }
            if (item.prdNum > 0) {
                count++;
            }
            store.shopNum = count;
        });
        ctx.body = {
            "code": "666"
            , "resMsg": "删除成功"
        };
    }

}
module.exports = login;
